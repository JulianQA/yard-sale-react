import React from 'react'
import addToCart from "../assets/icons/bt_add_to_cart.svg";


function ProductItem({ product }) {
   return (
      <div className="product-item">
         <img src={product.images[0]} alt={product.title} />
         <div className="product-detail">
            <div>
               <p>${product.price}</p>
               <p>{product.title}</p>
            </div>
            <figure>
               <img src={addToCart} alt="" />
            </figure>
         </div>
      </div>
   )
}

export { ProductItem }