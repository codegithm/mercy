import "./Checkout.css";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../../AppContext";
import { faShoppingBag, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { priceItem, cartItem } = useContext(AppContext);

  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;

  const deleteItem = (item) => {
    const itemIndex = cart.indexOf(item);
    cart.splice(itemIndex, 1);
    setCart(cart);
    setPrice(price - item.priceOfItem);
  };

  return (
    <div className="checkout">
      {price == 0 ? (
        <div className="cart-empty">
          <p> Your cart is empty </p>
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Continue shoppig
            </button>
          </Link>
        </div>
      ) : (
        <div className="checkout-cont .container-fluid ">
          <h3 className="checkoutTitle">
            Your bag
            <span>
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
          </h3>
          <div className="row products-checkout">
            {cart.map((item) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-4 col-sm-12 card-checkout card"
              >
                <img
                  className="img-fluid card-img-top-checkout "
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <h3 className="card-title">R{item.priceOfItem}</h3>
                  <p className="sizeOfItem">{item.sizeOfItem}</p>
                </div>
                <div className="delete">
                  <FontAwesomeIcon
                    onClick={() => {
                      deleteItem(item);
                    }}
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            ))}
            <div className="proceed">
              <h4 className="checkoutTitle">R{price}</h4>
              <button className="btn btn-success">Continue to payout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
