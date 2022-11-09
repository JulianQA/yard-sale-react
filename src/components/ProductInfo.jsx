import React from 'react'
import addToCart from "../assets/icons/bt_add_to_cart.svg"
function ProductInfo() {
   return (
      <>
         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" className="bike-picture" />
         <div className="product-info">
            <p>$30,00</p>
            <p>Bike</p>
            <p> With its functional and practical design, this bike also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your house.</p>
         </div>
         <button className="primary-button addtocart-button">
            <img src={addToCart} alt="addtocart-button" />
            Add to cart
         </button>
      </>

   )
}

export { ProductInfo }