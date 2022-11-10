import React from 'react'
import { useGetProducts } from '../hooks/useGetProducts';
import { ProductItem } from './ProductItem'

const URL_API = 'https://api.escuelajs.co/api/v1/products';
function ProductList() {
   const products = useGetProducts(URL_API);
   return (
      <section className="main-container">
         <div className="ProductList">
            {products.map(product => (
               <ProductItem product={product} key={product.id} />
            ))}
         </div>
      </section>
   )
}

export { ProductList }