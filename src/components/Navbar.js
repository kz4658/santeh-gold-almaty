import React from "react";
import './Navbar.css';
import img from '../assets/img/mock2.jpg';


function Navbar() {
    return (
        
            
            <div className="demo_wrap">
                 <h1 className="animate__animated animate__backInDown">Вас приветсвует компания<br/>SANTEH_GOLD</h1>
               
               <img src={img}/>
               
            </div>
   

        
    )
}

export default Navbar;