import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Icon from "../Icon";
const Navbar = ()=>{
    const [path, setPath] = useState()

    const pathname = window.location.pathname
    useEffect(()=>{
        setPath(pathname)
    },[pathname])
    
    const usePathname = () => {
    const location = useLocation();
    return location.pathname;
    }
    usePathname();
   
    return(
        
        <div className="navbar">
            <div className="navbar-wrapper container">
            <img src="/Assets/Images/logo.png" alt="logo"/>
               <ul className="navlink">
                 <li className={path === "/" ? "active" : "" }><Link to={"/"}>Footwear</Link></li>
                 <li className={path === "/about" ? "active" : "" }><Link to={"/about"}>About us</Link></li>
                 <li className={path === "/product" ? "active" : "" }><Link to={"/product"}>Products</Link></li>
                 <li className={path === "/sale" ? "active" : "" }><Link to={"/sale"}>Sale </Link></li>
               </ul>
              <div className="icons">
                <ul>
                    <li><Icon icon="search" /></li>
                    <li><Icon icon="user"/></li>
                    <li><Icon icon="shopping"/></li>
                </ul>
              </div> 
        </div>
        </div>
            
        
    )
}

export default Navbar