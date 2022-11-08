import React from 'react'
import { ProductInfo } from './ProductInfo'

function ProductDetail() {
   return (
      <aside class="ProductDetail">
         <div class="close-background">
            <img src="./icons/icon_close.png" alt="icon-close" />
         </div>
         <ProductInfo />
      </aside>
   )
}

export { ProductDetail }