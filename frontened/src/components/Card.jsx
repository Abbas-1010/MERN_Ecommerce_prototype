import { StrictMode, useState , useEffect} from "react";
import axios from "axios";
import Product from "./Product.jsx";

function Card() {
  const [products,setProducts]=useState([]);
  const [fname, setfname] = useState(1000000);
  const [lname, setlname] = useState(0);
  useEffect(()=>{
    axios.get("http://localhost:9102/api/products")
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  function chan(e) {
    setfname(e.target.value);
  }
  function chan2(e) {
    setlname(e.target.value);
  }
  return (
    <StrictMode>
      <div>
        <div className="Filter">
          <h2>Not More than</h2>
          <input value={fname} onChange={chan} />
          <h2>Not less than</h2>
          <input value={lname} onChange={chan2} />
        </div>

        {/* Products go inside their own container */}
        <div className="productsContainer">
          {products.map((x) =>
            x.price < fname && x.price > lname ? (
              <Product key={x.id} im={x.image} name={x.name} price={x.price} />
            ) : null
          )}
        </div>
      </div>
    </StrictMode>
  );
}

export default Card;
