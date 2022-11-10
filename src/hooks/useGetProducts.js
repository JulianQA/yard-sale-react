import { useEffect, useState } from "react";

const useGetProducts = (URL_API) => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      const getProducts = async () => {
         const response = await fetch(URL_API);
         const data = await response.json();
         setProducts(data);
      }
      getProducts();
   });
   return products;
}

export { useGetProducts }