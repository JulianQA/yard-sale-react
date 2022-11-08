import React from 'react'
import { Button } from '../components/Button';
import { OrderItem } from '../components/OrderItem';

function MyOrder() {
   return (
      <div className="MyOrder">
         <div className='my-order-container'>
            <div className="title-header">
               <img src="./icons/flechita.svg" alt="arrow" className="arrow" />
               <p>My Order</p>
            </div>
            <div className="my-order-content">
               <OrderItem />
               <div className="my-order-total">
                  <p>
                     <span>Total</span>
                  </p>
                  <p>$90.00</p>
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