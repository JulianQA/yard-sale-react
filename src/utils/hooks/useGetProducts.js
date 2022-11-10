import { useEffect, useState } from "react";

const useGetProducts = (URL_API) => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      try {
         const getProducts = async () => {
            const response = await fetch(URL_API);
            const data = await response.json();
            setProducts(data);
         }
         getProducts();
      } catch (error) {
         console.log(error)
      }

   });
   return products;
}

export { useGetProducts }