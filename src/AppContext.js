import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [viewItem, setViewItem] = useState();
  const [size, setSize] = useState();
  const [type, setType] = useState("type");
  const [inPay, setInPay] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState("");

  return (
    <AppContext.Provider
      value={{
        priceItem: [price, setPrice],
        cartItem: [cart, setCart],
        view: [viewItem, setViewItem],
        selectedSize: [size, setSize],
        itemType: [type, setType],
        itemInPay: [inPay, setInPay],
        loggedIn: [isSignedIn, setIsSignedIn]
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
