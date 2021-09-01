import "./Items.css";
import products from "../../dummyDatabase";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { PriceContext } from "../../PriceContext";

const Items = () => {
  const { priceItem, cartItem } = useContext(PriceContext);

  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;

  const addTotalSum = (item) => {
    setPrice(price + item);
  };
  const addToCart = (item) => {
    cart.push(item);
    // setCart(itemsInCart);
    console.log(cart);
  };
  return (
    <div>
      <Banner />
      <div className="row products">
        {products.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-12 card">
            <img className="img-fluid card-img-top" alt="..." src={item.img} />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">{item.description}</p>
              <h3 className="card-title">R{item.price}</h3>
              <Link
                to="/checkout"
                className="btn btn-primary"
                onClick={() => {
                  addTotalSum(item.price);
                  addToCart(item);
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
