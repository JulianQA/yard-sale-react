import React from 'react'

function Header() {
   return (
      <nav>
         <img src="./icons/icon_menu.svg" alt="menu" className="icon-menu" />
         <div className="navbar-left">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
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
               <li className="navbar-email">
                  <p>camilayokoo@example.com</p>
               </li>
               <img src="./icons/flechita.svg" alt="arrow" className="arrow" />
               <li className="navbar-shoppingcart">
                  <img src="./icons/icon_shopping_cart.svg" alt="icon_shopping_cart" />
                  <div>2</div>
               </li>
            </ul>
         </div>
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