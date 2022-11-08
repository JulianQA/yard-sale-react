import React from 'react'

function ProductItem() {
   return (
      <div className="product-item">
         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         <div className="product-detail">
            <div>
               <p>$ 120,00</p>
               <p>Bike</p>
            </div>
            <figure>
               <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
         </div>
      </div>
   )
}

export { ProductItem }