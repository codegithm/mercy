import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import promoCodes from "../../promoCode";
import "./Pay.css";
const Pay = () => {
  const { priceItem, cartItem, itemInPay } = useContext(AppContext);
  const [inPay, setInPay] = itemInPay;
  const [cart, setCart] = cartItem;
  const [price, setPrice] = priceItem;
  const [promo, setPromo] = useState("No promo");
  const [total, setTotal] = useState(0);
  const [deduction, setDeduction] = useState();
  const [redeemed, setRedeemed] = useState(false);
  const history = useHistory();
  const pay = () => {
    history.push("/pay");
  };
  const amountInPrice = () => {
    return inPay == false ? 0 : inPay[0].Price
  };
  const handleChange = (e) => {
    promoCodes.map((value) => {
      if (value.id == parseInt(e.target.value)) {
        let deduction =
          (parseFloat(price) + parseFloat(amountInPrice())) *
          (value.deduct / 100);
        setDeduction(deduction);

        setTotal(parseFloat(price) + parseFloat(amountInPrice()) - deduction);
        setPromo(value);
      }
    });
  };
  const checkPromo = (e) => {
    e.preventDefault();
    if (redeemed == false) {
      setPrice(total);
    }
  };
  return (
    <div className="main-cont">
      <div className="col-md-5 col-lg-4 order-md-last pay-cont">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">
            {cart.length + amountInPrice() == 0 ? 0 : 1}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {cart.lenght !== 0
            ? cart.map((item) => (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">{item.description}</small>
                  </div>
                  <span className="text-muted">R{item.priceOfItem}</span>
                </li>
              ))
            : ""}
          {inPay !== false
            ? inPay.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0">{item.Brand}</h6>
                      <small className="text-muted">{item.description}</small>
                    </div>
                    <span className="text-muted">R{item.Price}</span>
                  </li>
                );
              })
            : ""}
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>{promo != "No promo" ? promo.id : "No code"}</small>
            </div>
            <span className="text-success">−R{deduction}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (ZAR)</span>
            <strong>{total !== 0 ? total : price + amountInPrice()}</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
              onChange={handleChange}
            />
            <button
              onClick={checkPromo}
              type="submit"
              className="redeem btn btn-secondary"
            >
              Redeem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pay;
