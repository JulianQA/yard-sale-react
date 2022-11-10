import React, { useContext, useState } from 'react';
import { AppContext } from '../utils/context/AppContext';
import addToCartIcon from "../assets/icons/bt_add_to_cart.svg";
import { ProductDetail } from './ProductDetail';

function ProductItem({ product }) {
   const { addToCart } = useContext(AppContext);
   const [toggleInfo, setToggleInfo] = useState(false);
   return (
      <>
         <div className="product-item">
            <img
               src={product.images[0]}
               alt={product.title}
               onClick={() => setToggleInfo(!toggleInfo)} />
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
         {toggleInfo && <ProductDetail product={product}
            setToggleInfo={setToggleInfo} />}
      </>

   )
}

export { ProductItem }