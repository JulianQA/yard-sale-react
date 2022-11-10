import { useState } from "react"

const useInitialState = () => {
   const [state, setState] = useState({
      cart: [],
   });

   const addToCart = (item) => {
      if (!state.cart.find(e => e.id === item.id)) {
         setState({
            ...state,
            cart: [...state.cart, item],
         });
      }

   }
   const removeFromCart = (product) => {
      const index = state.cart.findIndex(item => item.id === product.id);
      const newCart = [...state.cart];
      newCart.splice(index, 1);
      setState({
         ...state,
         cart: newCart
      })
   }
   return {
      state,
      addToCart,
      removeFromCart,
   }
}

export { useInitialState }