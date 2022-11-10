import React from 'react'
import { useNavigate } from 'react-router-dom'

function Menu() {
   const navigate = useNavigate();
   return (
      <div className="menu">
         <ul>
            <li>
               My orders
               {/* <a href="/">My orders</a> */}
            </li>
            <li onClick={() => navigate('/account')}>
               My account
               {/* <a href="/">My account</a> */}
            </li>
            <li>
               <a href="/">Sign out</a>
            </li>
         </ul>
      </div>
   )
}

export { Menu }