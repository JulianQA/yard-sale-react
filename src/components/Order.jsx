import React from 'react'

function Order() {
   return (
      <div className="order">
         <p>
            <span>29.06.22</span>
            <span>3 articles</span>
         </p>
         <p>$90.00</p>
         <img src="./icons/flechita.svg" alt="arrow" />
      </div>
   )
}

export { Order }