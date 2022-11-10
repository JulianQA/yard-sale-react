import { useState } from "react"

const useInitialState = () => {
   const [state, setState] = useState({
      cart: [],
   });

   const addToCart = (item) => {
      setState({
         ...state,
         cart: [...state.cart, item],
      });
   }
   return {
      state,
      addToCart,
   }
}

export { useInitialState }