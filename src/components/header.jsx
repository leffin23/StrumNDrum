import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "../utils/header.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusCart } from "../stores/cart";
import { DarkModeToggle } from "./DarkMode";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const openCart = () => {
    dispatch(toggleStatusCart());
  };

  return (
    <header>
      <Link to="/" className="logo">
        <div className="icon"></div>
        <span>Strum&Drum</span>
      </Link>

      <nav className={menuOpen ? "open" : ""}>
  

                  <NavLink
                    className={({ isActive, isPending }) =>
                      `nav-el ${isPending ? "pending" : isActive ? "active" : ""}`
                    }
                    to="/"
                  > 
                    {" "}
                    HOME
                  </NavLink> 
                
                  <NavLink
                    className={({ isActive, isPending }) =>
                      `nav-el ${isPending ? "pending" : isActive ? "active" : ""}`
                    }
                    to="/products"
                  >
                    {" "}
                    PRODUCTS
                  </NavLink> 
            
        <div className="nav-el">
           <DarkModeToggle />
        </div>
      </nav>



        
        <div className="cart-round" onClick={openCart}>
          <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
          <span className="cart-count">{totalQuantity}</span>
        </div> 
      <div className={`hamburger ${menuOpen ? "openH" : ""}`} onClick={() => setMenuOpen((prev) => !prev)}>
        <div className="hamb-line"></div>
        <div className="hamb-line"></div>
        <div className="hamb-line"></div>
      </div>
    </header>
  );
};

export default Header;
