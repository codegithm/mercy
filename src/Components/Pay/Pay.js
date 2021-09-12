import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import promoCodes from "../../promoCode";
import "./Pay.css";
const Pay = () => {
  const { priceItem, cartItem, view, selectedSize, itemType, itemInPay } =
    useContext(AppContext);
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
  const handleChange = (e) => {
    promoCodes.map((value) => {
      if (value.id == parseInt(e.target.value)) {
        let deduction =
          (parseFloat(price) + parseFloat(inPay[0].price)) * (50 / 100);
        setDeduction(deduction);

        setTotal(parseFloat(price) + parseFloat(inPay[0].price) - deduction);
        console.log(value);
        setPromo(value);
        console.log(promo);
      } else if (value.id != parseInt(e.target.value)) {
        setPromo();
      }
    });
  };
  const checkPromo = (e) => {
    e.preventDefault();
    if (redeemed == false) {
      setPrice(total);
    }
    console.log(total);
    console.log(price);
    console.log(promo);
    console.log(inPay[0].price);
  };
  return (
    <div className="main-cont">
      <div className="col-md-5 col-lg-4 order-md-last pay-cont">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart{promo}</span>
          <span className="badge bg-primary rounded-pill">
            {cart.length + 1}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {cart.lenght != 0
            ? cart.map((item) => (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">R{item.priceOfItem}</span>
                </li>
              ))
            : ""}
          {inPay.lenght != 0
            ? inPay.map((item) => (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">R{item.price}</span>
                </li>
              ))
            : ""}
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>{promo != undefined ? promo[0].id : "No code"}</small>
            </div>
            <span className="text-success">−R{deduction}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (ZAR)</span>
            <strong>{total !== 0 ? total : price + inPay[0].price}</strong>
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
