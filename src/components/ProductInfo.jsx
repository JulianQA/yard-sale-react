import React, { useContext } from 'react'
import addToCartIcon from "../assets/icons/bt_add_to_cart.svg";
import { AppContext } from '../utils/context/AppContext';
function ProductInfo({ product }) {
   const { addToCart } = useContext(AppContext);
   return (
      <>
         <img src={product.images[0]} alt={product.title} className="bike-picture" />
         <div className="product-info">
            <p>${product.price}</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
         </div>
         <button
            className="primary-button add-to-cart-button"
            onClick={() => addToCart(product)}
         >
            <img src={addToCartIcon} alt="addtocart-button" />
            Add to cart
         </button>
      </>

   )
}

export { ProductInfo }