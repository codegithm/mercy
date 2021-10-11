import "./Items.css";
import products from "../../dummyDatabase";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AppContext } from "../../AppContext";

const Items = () => {
  const { priceItem, cartItem, view, itemType, itemInPay } =
    useContext(AppContext);
  const history = useHistory();
  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [viewItem, setViewItem] = view;
  const [type, setType] = itemType;
  const [inPay, setInPay] = itemInPay;

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
        {type !== "type" ? (
          <div className="prod-title">
            <h5>{type}</h5>
            <hr />
          </div>
        ) : (
          ""
        )}
        {products.map((item) => {
          if (type === "type") {
            return (
              <div
                key={item.id}
                className="col-lg-3 col-md-4 col-sm-12 card card-items"
              >
                <img
                  className="img-fluid card-img-top"
                  alt="..."
                  onClick={() => {
                    addItem();
                    addToView(item);
                  }}
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>

                  <h3 className="card-title">R{item.price}</h3>
                </div>
                <div className="buy-now-item-cont">
                  <button
                    type="button"
                    className="buy-now-item btn btn-outline-secondary"
                    onClick={() => {
                      addItem();
                      addToView(item);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          }
          if (type === "Pants" && item.type === "Pants") {
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
                <div className="buy-now-item-cont">
                  <button
                    type="button"
                    className="buy-now-item btn btn-outline-secondary"
                    onClick={() => {
                      addItem();
                      addToView(item);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          }

          if (type === "T-shirt" && item.type === "T-shirt") {
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
                <div className="buy-now-item-cont">
                  <button
                    type="button"
                    className="buy-now-item btn btn-outline-secondary"
                    onClick={() => {
                      addItem();
                      addToView(item);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          }

          if (type === "Hoodies" && item.type === "Hoodies") {
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
                <div className="buy-now-item-cont">
                  <button
                    type="button"
                    className="buy-now-item btn btn-outline-secondary"
                    onClick={() => {
                      addItem();
                      addToView(item);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          }

          if (type === "Shoes" && item.type === "Shoes") {
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
                <div className="buy-now-item-cont">
                  <button
                    type="button"
                    className="buy-now-item btn btn-outline-secondary"
                    onClick={() => {
                      addItem();
                      addToView(item);
                    }}
                  >
                    Buy Now
                  </button>
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
