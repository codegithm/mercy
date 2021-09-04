import "./Items.css";
import products from "../../dummyDatabase";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AppContext } from "../../AppContext";

const Items = () => {
  const { priceItem, cartItem, view, selectedSize, itemType } =
    useContext(AppContext);
  const history = useHistory();
  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [viewItem, setViewItem] = view;
  const [type, setType] = itemType;

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
        {type != "type" ? (
          <div className="prod-title">
            <h5>{type}</h5>
            <hr />
          </div>
        ) : (
          ""
        )}
        {products.map((item) => {
          if (type == "type") {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItem();
                  addToView(item);
                }}
                className="col-lg-3 col-md-4 col-sm-6 card card-items"
              >
                <img
                  className="img-fluid card-img-top"
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>

                  <h3 className="card-title">R{item.price}</h3>
                </div>
              </div>
            );
          }
          if (type == "Pants" && item.type == "Pants") {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItem();
                  addToView(item);
                }}
                className="col-lg-3 col-md-4 col-sm-6 card card-items"
              >
                <img
                  className="img-fluid card-img-top"
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>

                  <h3 className="card-title">R{item.price}</h3>
                </div>
              </div>
            );
          }

          if (type == "T-shirt" && item.type == "T-shirt") {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItem();
                  addToView(item);
                }}
                className="col-lg-3 col-md-4 col-sm-6 card card-items"
              >
                <img
                  className="img-fluid card-img-top"
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>

                  <h3 className="card-title">R{item.price}</h3>
                </div>
              </div>
            );
          }

          if (type == "Hoodies" && item.type == "Hoodies") {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItem();
                  addToView(item);
                }}
                className="col-lg-3 col-md-4 col-sm-6 card card-items"
              >
                <img
                  className="img-fluid card-img-top"
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>

                  <h3 className="card-title">R{item.price}</h3>
                </div>
              </div>
            );
          }

          if (type == "Shoes" && item.type == "Shoes") {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItem();
                  addToView(item);
                }}
                className="col-lg-3 col-md-4 col-sm-6 card card-items"
              >
                <img
                  className="img-fluid card-img-top"
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>

                  <h3 className="card-title">R{item.price}</h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Items;
