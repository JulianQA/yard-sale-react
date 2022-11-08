import React from 'react'
import { OrderItem } from '../components/OrderItem'
function Orders() {
   return (
      <div className="my-order">
         <div className="my-order-container">
            <h1>My orders</h1>
            <div className="my-order-content">
               <OrderItem />
            </div>
         </div>
      </div>
   )
}

export { Orders }