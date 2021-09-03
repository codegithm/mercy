import React, { useContext } from "react";
import "./AddToCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";

const AddToCart = () => {
  const { priceItem, cartItem, view, selectedSize } = useContext(AppContext);

  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [viewItem, setViewItem] = view;
  const [size, setSize] = selectedSize;

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  const addTotalSum = (item) => {
    setPrice(price + item);
  };
  const addItemToCart = (item) => {
    const itemObj = {
      id: item.id,
      name: item.name,
      description: item.description,
      sizeOfItem: size,
      priceOfItem: item.price,
      img: item.img,
    };
    cart.push(itemObj);
  };

  const changeSelectedSize = (size) => {
    setSize(size);
  };
  return (
    <div className="row">
      <h3 className="product-name">{viewItem.name}</h3>
      <div
        id="carouselExampleCaptions"
        className="carousel slide col-lg-4 col-md-4 col-sm-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={viewItem.slide[0]}
              className="img-fluid prod-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={viewItem.slide[1]}
              className="img-fluid prod-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={viewItem.slide[2]}
              className="img-fluid prod-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="add-to-cart-btn">
        <p>Price: R{viewItem.price}</p>
        <div className="err-label">
          <label>Please select a size</label>
        </div>
        <div className="size">
          <div class="form-check">
            <input
              onClick={() => {
                changeSelectedSize("S");
              }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="small"
            />
            <label class="form-check-label" for="flexCheckDefault">
              S
            </label>
          </div>
          <div class="form-check">
            <input
              onClick={() => {
                changeSelectedSize("M");
              }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="medium"
            />
            <label class="form-check-label" for="flexCheckDefault">
              M
            </label>
          </div>
          <div class="form-check">
            <input
              onClick={() => {
                changeSelectedSize("L");
              }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="large"
            />
            <label class="form-check-label" for="flexCheckDefault">
              L
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            if (
              document.getElementById("small").checked ||
              document.getElementById("medium").checked ||
              document.getElementById("large").checked
            ) {
              addItemToCart(viewItem);
              addTotalSum(viewItem.price);
              goToHome();
            } else {
              const err = document.querySelector(".err-label");
              err.style.display = "block";
            }
          }}
          type="button"
          className="cart-btn btn btn-success"
        >
          <span>
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faShoppingBag} />
          </span>
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
