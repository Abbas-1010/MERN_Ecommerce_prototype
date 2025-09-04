import {StrictMode} from "react";
import {createRoot} from "react-dom/client"
import Card from "./components/Card"
const root=createRoot(document.getElementById("root"));
root.render(<StrictMode><Card/></StrictMode>);