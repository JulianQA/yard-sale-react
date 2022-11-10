import React from 'react'

function Menu() {
   return (
      <div className="menu">
         <ul>
            <li>
               <a href="/">My orders</a>
            </li>
            <li>
               <a href="/">My account</a>
            </li>
            <li>
               <a href="/">Sign out</a>
            </li>
         </ul>
      </div>
   )
}

export { Menu }