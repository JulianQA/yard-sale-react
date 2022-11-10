import React from 'react'
import { ProductInfo } from './ProductInfo'
import close from "../assets/icons/icon_close.png";

function ProductDetail() {
   return (
      <aside className="ProductDetail">
         <div className="close-background">
            <img src={close} alt="icon-close" />
         </div>
         <ProductInfo />
      </aside>
   )
}

export { ProductDetail }