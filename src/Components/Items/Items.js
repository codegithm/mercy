import "./Items.css";
import products from "../../dummyDatabase";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AppContext } from "../../AppContext";

const Items = () => {
  const { priceItem, cartItem, view } = useContext(AppContext);
  const history = useHistory();
  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [viewItem, setViewItem] = view;

  const addToView = (item) => {
    setViewItem(item);
    // setCart(itemsInCart);
  };
  const addItem = () => {
    history.push("/add");
  };
  return (
    <div className="items-cont">
      <Banner />
      <div className="row products">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              addItem();
              addToView(item);
            }}
            className="col-lg-3 col-md-4 col-sm-6 card card-items"
          >
            <img className="img-fluid card-img-top" alt="..." src={item.img} />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>

              <h3 className="card-title">R{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
