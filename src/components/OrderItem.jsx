import React, { useContext } from 'react'
import close from "../assets/icons/icon_close.png";
import { AppContext } from '../utils/context/AppContext';

function OrderItem({ product }) {
   const { removeFromCart } = useContext(AppContext);
   return (
      <div className="order-item">
         <figure>
            <img src={product.images[0]} alt={product.title} />
         </figure>
         <p>{product.title}</p>
         <p>${product.price}</p>
         <img
            src={close}
            alt="close"
            className='order-item__delete'
            onClick={() => removeFromCart(product)}
         />
      </div>
   )
}

export { OrderItem }