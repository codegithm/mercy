import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faBars,
  faTimes,
  faUser,
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

  const hideDropDown = () => {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  };

  const handleIconChange = () => {
    if (show === "show") {
      setShow("hide");
    }
    if (show === "hide") {
      setShow("show");
    }
    if (hide === "hide") {
      setHide("show");
    }
    if (hide === "show") {
      setHide("hide");
    }
  };

  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
      <div className='container-fluid'>
        <div
          onClick={() => {
            changePath("/");
          }}
          className='navbar-brand btn nav-mercy'
        >
          <img className='mercy-logo' alt='logoImg' src='./Untitled-1-02.png' />
        </div>
        <div className='btn-cont'>
          <div className='cart mobile'>
            <div
              onClick={() => {
                changePath("/profile");
              }}
            >
              <FontAwesomeIcon
                icon={faUser}
                className='cart-icon cart-icon-nav'
              />
            </div>
            <div
              onClick={() => {
                changePath("/checkout");
              }}
              className='btn position-relative'
            >
              <FontAwesomeIcon
                className='cart-icon cart-icon-nav'
                icon={faShoppingBag}
              ></FontAwesomeIcon>
              {cart.length === 0 ? (
                ""
              ) : (
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  {cart.length}
                  <span className='visually-hidden'>unread messages</span>
                </span>
              )}
            </div>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
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
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                href='/'
                className='nav-link dropdown-toggle'
                href='facebook.com'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Collection
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => {
                      changeType("type");
                      hideDropDown();
                      handleIconChange();
                      changePath("/");
                    }}
                  >
                    All
                  </div>
                </li>
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => {
                      changeType("T-shirt");
                      hideDropDown();
                      handleIconChange();
                      changePath("/");
                    }}
                  >
                    T-shirts
                  </div>
                </li>
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => {
                      changeType("Pants");
                      hideDropDown();
                      handleIconChange();
                      changePath("/");
                    }}
                  >
                    Pants
                  </div>
                </li>
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => {
                      changeType("Hoodies");
                      hideDropDown();
                      handleIconChange();
                      changePath("/");
                    }}
                  >
                    Hoodies
                  </div>
                </li>
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => {
                      changeType("Shoes");
                      hideDropDown();
                      handleIconChange();
                      changePath("/");
                    }}
                  >
                    Shoes
                  </div>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton2'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Brands
                </button>
                <ul
                  className='dropdown-menu dropdown-menu-dark'
                  aria-labelledby='dropdownMenuButton2'
                >
                  <li>
                    <a className='dropdown-item' href='#'>
                      Mercy
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Nike
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                onClick={() => {
                  hideDropDown();
                  handleIconChange();
                }}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                onClick={() => {
                  hideDropDown();
                  handleIconChange();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='cart desktop'>
          <div
            onClick={() => {
              changePath("/profile");
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              className='cart-icon cart-icon-nav'
            />
          </div>
          <a
            onClick={() => {
              changePath("/checkout");
            }}
            className='btn position-relative'
          >
            <FontAwesomeIcon
              className='cart-icon cart-icon-nav'
              icon={faShoppingBag}
            ></FontAwesomeIcon>
            {cart.length === 0 ? (
              ""
            ) : (
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                {cart.length}
                <span className='visually-hidden'>unread messages</span>
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
