import React, { useContext, useState } from 'react';
import { Menu } from './Menu';
import iconMenu from '../assets/icons/icon_menu.svg';
import logo from "../assets/logos/logo_yard_sale.svg";
import arrow from "../assets/icons/flechita.svg";
import shopppingCart from "../assets/icons/icon_shopping_cart.svg";
import { AppContext } from '../utils/context/AppContext';
function Header() {
   const [toggleMenu, setToggleMenu] = useState(false);
   const { state } = useContext(AppContext);
   const handleToogleMenu = () => {
      setToggleMenu(!toggleMenu);
   }
   return (
      <nav>
         <img src={iconMenu} alt="menu" className="icon-menu" />
         <div className="navbar-left">
            <img src={logo} alt="logo" className="nav__logo" />
            <ul>
               <li>
                  <a href="/">All</a>
               </li>
               <li>
                  <a href="/">Clothes</a>
               </li>
               <li>
                  <a href="/">Electronics</a>
               </li>
               <li>
                  <a href="/">Furnitures</a>
               </li>
               <li>
                  <a href="/">Toys</a>
               </li>
               <li>
                  <a href="/">Others</a>
               </li>
            </ul>
         </div>
         <div className="navbar-right">
            <ul>
               <li className="navbar-email" onClick={handleToogleMenu}>
                  <p>camilayokoo@example.com</p>
               </li>
               <img src={arrow} alt="arrow" className="arrow" onClick={handleToogleMenu} />
               <li className="navbar-shoppingcart">
                  <img src={shopppingCart} alt="icon_shopping_cart" />
                  {
                     state.cart.length > 0 &&
                        state.cart.length >= 9
                        ?
                        <div>9+</div>
                        :
                        <div>{state.cart.length}</div>
                  }
               </li>
            </ul>
         </div>
         {toggleMenu && <Menu />}
         <div className="mobile-menu inactive">
            <ul>
               <li>
                  <a href="/">CATEGORIES</a>
               </li>
               <li>
                  <a href="/">All</a>
               </li>
               <li>
                  <a href="/">Clothes</a>
               </li>
               <li>
                  <a href="/">Electronics</a>
               </li>
               <li>
                  <a href="/">Furnitures</a>
               </li>
               <li>
                  <a href="/">Toys</a>
               </li>
               <li>
                  <a href="/">Others</a>
               </li>
            </ul>
            <ul>
               <li>
                  <a href="/">My orders</a>
               </li>
               <li>
                  <a href="/">My account</a>
               </li>
            </ul>
            <ul>
               <li>
                  <a href="/" className="email">camilayokoo@example.com</a>
               </li>
               <li>
                  <a href="/" className="sign-out">Sign out</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export { Header }