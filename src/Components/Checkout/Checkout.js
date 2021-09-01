import "./Checkout.css";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PriceContext } from "../../PriceContext";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const { priceItem, cartItem } = useContext(PriceContext);

  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;

  const deleteItem = (item) => {
    const itemIndex = cart.indexOf(item);
    cart.splice(itemIndex, 1);
    setCart(cart);
    setPrice(price - item.price);
    console.log(cart);
  };

  return (
    <div className="checkout">
      {price == 0 ? (
        <div className="cart-empty">
          <p> Yor cart is empty </p>
          <button type="button" className="btn btn-primary">
            Continue shoppig
          </button>
        </div>
      ) : (
        <div className="checkout-cont .container-fluid ">
          <h3 className="checkoutTitle">Checkout</h3>
          <div className="row products-checkout">
            {cart.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-12 card-checkout card">
                <img
                  className="img-fluid card-img-top-checkout "
                  alt="..."
                  src={item.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <h3 className="card-title">R{item.price}</h3>
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
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
