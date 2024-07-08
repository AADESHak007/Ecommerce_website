import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  
  return (
    <UserContext.Provider value={{products, setProducts}}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
