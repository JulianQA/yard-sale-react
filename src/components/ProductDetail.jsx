import React from 'react'
import { ProductInfo } from './ProductInfo'
import close from "../assets/icons/icon_close.png";

function ProductDetail({ product, setToggleInfo }) {
   return (
      <aside className="ProductDetail">
         <div className="close-background">
            <img
               src={close}
               alt="icon-close"
               onClick={() => setToggleInfo(false)}
            />
         </div>
         <ProductInfo product={product} />
      </aside>
   )
}

export { ProductDetail }