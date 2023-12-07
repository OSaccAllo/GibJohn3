import { Outlet, Link } from "react-router-dom";
import "./header.css"
import Logo from "./logo.png"
const Layout = () => {
  return (
    <>
    <div class = "links">
        <img onClick={refreshPage} alt="" src= {Logo}/>
        <Link class = "Gib" to="/">GibJohn</Link>
        
        <Link class = "home" to="/">Home</Link>
        <Link class = "Pricing" to="Pricing">Pricing</Link>
        <Link class = "About" to="About">About</Link>
        <Link class = "Login" to="Login">Login</Link>
        
        
    </div>
    <Outlet/>
    </>
  )
};
function refreshPage() {
  window.location.reload(false);
}
export default Layout;