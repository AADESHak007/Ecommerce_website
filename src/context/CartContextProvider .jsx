import React,{useState} from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const removeItemFromCart = (id) => {
    setItems(prev => prev.filter(item => item.id!=id))
  };
  return (
    <CartContext.Provider value={{items, setItems,removeItemFromCart}}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};

export default CartContextProvider;
