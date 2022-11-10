import React, { useContext } from 'react'
import { Button } from './Button';
import { OrderItem } from './OrderItem';
import arrow from "../assets/icons/flechita.svg";
import { AppContext } from '../utils/context/AppContext';

function MyOrder() {
   const { state } = useContext(AppContext);
   const sumTotal = state.cart.reduce((a, i) => a + i.price, 0);
   return (
      <div className="MyOrder">
         <div className='my-order-container'>
            <div className="title-header">
               <img
                  src={arrow}
                  alt="arrow"
                  className="my-order__arrow"
               />
               <p>My Order</p>
            </div>
            <div className="my-order-content">
               {state.cart.map(
                  product =>
                     <OrderItem
                        product={product}
                        key={`order-product#${product.id}`}
                     />)}
               <div className="my-order__total">
                  <p>
                     <span>Total</span>
                  </p>
                  <p>${sumTotal}</p>
               </div>
            </div>
            <Button
               name={'Chekout'}
               classAtributes={'primary-button addtocart-button'}
            />
         </div>

      </div >
   )
}

export { MyOrder }