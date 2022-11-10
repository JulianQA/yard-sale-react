import React, { useContext } from 'react';
import { AppContext } from '../utils/context/AppContext';
import addToCartIcon from "../assets/icons/bt_add_to_cart.svg";

function ProductItem({ product }) {
   const { addToCart } = useContext(AppContext);

   return (
      <div className="product-item">
         <img src={product.images[0]} alt={product.title} />
         <div className="product-detail">
            <div>
               <p>${product.price}</p>
               <p>{product.title}</p>
            </div>
            <figure onClick={() => addToCart(product)}>
               <img src={addToCartIcon} alt="" />
            </figure>
         </div>
      </div>
   )
}

export { ProductItem }