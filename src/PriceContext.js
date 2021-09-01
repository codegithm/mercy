import React, { useState, createContext } from "react";

export const PriceContext = createContext();

export const PriceProvider = (props) => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <PriceContext.Provider
      value={{ priceItem: [price, setPrice], cartItem: [cart, setCart] }}
    >
      {props.children}
    </PriceContext.Provider>
  );
};
