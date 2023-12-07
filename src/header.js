import "./index.css"
import Layout from "./buttons/Home1"
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pricing from "./pages/pricing";
import About from "./pages/About";
import Login from "./pages/login";
const Header = () =>{
    return(
        <div className="Header">
            
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                
                <Route path="Pricing" element={<Pricing />} />
                <Route path="About" element={<About />} />
                <Route path="Login" element={<Login />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Header;