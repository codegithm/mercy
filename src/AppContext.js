import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [viewItem, setViewItem] = useState();
  const [size, setSize] = useState();
  const [type, setType] = useState("type");
  const [inPay, setInPay] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState("");
  const [itemsDb, setItemsDb] = useState("");
  const [personal, setPersonal] = useState(false);
  const [inUser, setInUser] = useState(false);
  const [profileMatch, setProfileMatch] = useState(false);
  const [home, setHome] = useState("");
  const [dash, setDash] = useState("active");
  const [orders, setOrders] = useState("");
  const [products, setProducts] = useState("");
  const [upload, setUpload] = useState(false);
  return (
    <AppContext.Provider
      value={{
        priceItem: [price, setPrice],
        cartItem: [cart, setCart],
        view: [viewItem, setViewItem],
        selectedSize: [size, setSize],
        itemType: [type, setType],
        itemInPay: [inPay, setInPay],
        loggedIn: [isSignedIn, setIsSignedIn],
        ItemInStore: [itemsDb, setItemsDb],
        personalInfo: [personal, setPersonal],
        loggedInUser: [inUser, setInUser],
        checkProfileMatch: [profileMatch, setProfileMatch],
        isHome: [home, setHome],
        isDash: [dash, setDash],
        isOrders: [orders, setOrders],
        isProducts: [products, setProducts],
        isUpload: [upload, setUpload],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
