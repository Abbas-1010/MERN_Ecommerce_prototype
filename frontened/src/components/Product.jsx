import { StrictMode,useState } from "react";
function Product(props){
    const [bgcl,setbgcl]=useState("#555")
    function handleOver(){
        setbgcl("#0f0808f");
    }
    function handleOut(){
        setbgcl("#555")
    }
    return(<StrictMode>
        <div  style={{backgroundColor:bgcl}} className="productCards" onMouseOver={handleOver} onMouseOut={handleOut}>
            <img src={props.im} height="100px" width="auto"/>
            <h1>{props.name}</h1>
            <h3>Price : ${props.price}</h3>
        </div>
    </StrictMode>)
}
export default Product;