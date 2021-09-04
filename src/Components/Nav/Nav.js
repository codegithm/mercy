import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../AppContext";

const Nav = () => {
  const history = useHistory();
  const { priceItem, cartItem, itemType } = useContext(AppContext);
  const changePath = (item) => {
    history.push(item);
  };
  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [type, setType] = itemType;
  const [show, setShow] = useState("show");
  const [hide, setHide] = useState("hide");

  const changeType = (currentType) => {
    setType(currentType);
  };

  const handleIconChange = () => {
    if (show == "show") {
      setShow("hide");
    }
    if (show == "hide") {
      setShow("show");
    }
    if (hide == "hide") {
      setHide("show");
    }
    if (hide == "show") {
      setHide("hide");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a
          onClick={() => {
            changePath("/");
          }}
          className="navbar-brand btn"
        >
          <img
            className="mercy-logo"
            alt="logoImg"
            src="./mercy color-02.png"
          />
        </a>
        <div className="btn-cont">
          <div className="cart mobile">
            <a
              onClick={() => {
                changePath("/checkout");
              }}
              className="btn position-relative"
            >
              <FontAwesomeIcon
                className="cart-icon"
                icon={faShoppingBag}
              ></FontAwesomeIcon>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleIconChange}
          >
            <div className={show}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={hide}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="facebook.com"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collection
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      changeType("T-shirt");
                    }}
                  >
                    T-shirts
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      changeType("Pants");
                    }}
                  >
                    Pants
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      changeType("Hoodies");
                    }}
                  >
                    Hoodies
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      changeType("Shoes");
                    }}
                  >
                    Shoes
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="facebook.com"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="facebook.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="cart desktop">
          <a
            onClick={() => {
              changePath("/checkout");
            }}
            className="btn position-relative"
          >
            <FontAwesomeIcon
              className="cart-icon"
              icon={faShoppingBag}
            ></FontAwesomeIcon>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
