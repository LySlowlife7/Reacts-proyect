import React from "react";
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";

const NavBar = () => {
    return (
      <nav>
        <div className="ButtonsContainer">
          <button>Remeras</button>
          <button>Pantalones</button>
          <button>Hoddies</button>
        </div>
        <h1>Trippy Ind</h1>
        <CartWidget />
      </nav>
    );
  };
      
 export default NavBar