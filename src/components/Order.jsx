import React from 'react'
import arrow from "../assets/icons/flechita.svg";
function Order() {
   return (
      <div className="order">
         <p>
            <span>29.06.22</span>
            <span>3 articles</span>
         </p>
         <p>$90.00</p>
         <img src={arrow} alt="arrow" />
      </div>
   )
}

export { Order }