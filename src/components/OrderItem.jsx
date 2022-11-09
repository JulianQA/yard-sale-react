import React from 'react'
import close from "../assets/icons/icon_close.png";

function OrderItem() {
   return (
      <div className="order-item">
         <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         </figure>
         <p>Bike</p>
         <p>$30.00</p>
         <img src={close} alt="close" />
      </div>
   )
}

export { OrderItem }