import React, { useContext } from "react";
import "./AddToCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";
import NewNav from "../NewNav/NewNav";

const AddToCart = () => {
  const { priceItem, cartItem, view, selectedSize, itemInPay } =
    useContext(AppContext);

  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [viewItem, setViewItem] = view;
  const [size, setSize] = selectedSize;
  const [inPay, setInPay] = itemInPay;

  const history = useHistory();
  const getNewPrice = (n) => {
    const basePrice = 10;
    const baseAddedAmount = n <= 1000 ? 2 : 1;
    const clientPrice = n;

    const priceDifference = clientPrice - basePrice;
    const priceGrowthPercentageFromBase = (priceDifference / basePrice) * 100;
    const priceToBeAdded =
      (priceGrowthPercentageFromBase / 100) * baseAddedAmount;
    const totalAmount = n + priceToBeAdded;

    return totalAmount;
  };
  const addToInPay = (item) => {
    const itemObj = {
      id: item.id,
      Brand: item.Brand,
      Description: item.Description,
      sizeOfItem: size,
      Price: getNewPrice(item.Price),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      img: item.Img,
    };
    setInPay([itemObj]);
    console.log(itemObj);
  };

  const pay = () => {
    history.push("/pay");
  };

  const goToHome = () => {
    history.push("/");
  };
  const addTotalSum = (item) => {
    setPrice(price + item);
  };
  const addItemToCart = (item) => {
    const itemObj = {
      id: item.id,
      Brand: item.Brand,
      Description: item.Description,
      sizeOfItem: size,
      Price: getNewPrice(item.Price),
      img: item.Img,
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
    cart.push(itemObj);
  };

  const changeSelectedSize = (size) => {
    setSize(size);
  };

  const sizeArr = viewItem.size.sort((a, b) => {
    return a - b;
  });

  return (
    <div>
      <div>
        <NewNav />
      </div>
      <div className='row'>
        <h3 className='product-name'>{viewItem.Brand}</h3>
        <div
          id='carouselExampleCaptions'
          className='carousel carousel-dark slide col-lg-4 col-md-4 col-sm-4'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src={viewItem.slide[0]}
                className='img-fluid prod-img'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src={viewItem.slide[1]}
                className='img-fluid prod-img'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src={viewItem.slide[2]}
                className='img-fluid prod-img'
                alt='...'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span className='slide'>
              <GrPrevious />
            </span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span className='slide'>
              <GrNext />
            </span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
        <div className='add-to-cart-btn'>
          <p>Price: R{getNewPrice(viewItem.Price)}</p>
          <div className='err-label'>
            <label>Please select a size</label>
          </div>
          {viewItem.Type == "Pants" || viewItem.Type == "Shoes" ? (
            <div className='size'>
              {sizeArr.map((size) => {
                return (
                  <div className='form-check form-check-inline'>
                    <input
                      onClick={() => {
                        changeSelectedSize(size);
                      }}
                      className={`form-check-input ${size}`}
                      type='radio'
                      value=''
                      name='inlineRadioOptions'
                      id={`${size}`}
                    />
                    <label className='form-check-label' for='flexCheckDefault'>
                      {size}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='size'>
              {viewItem.size.map((size) => {
                return (
                  <div className='form-check form-check-inline'>
                    <input
                      onClick={() => {
                        changeSelectedSize(size);
                      }}
                      className={`form-check-input ${size}`}
                      type='radio'
                      value=''
                      name='inlineRadioOptions'
                      id={`${size}`}
                    />
                    <label className='form-check-label' for='flexCheckDefault'>
                      {size}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          <p>**Note this product can only be returned before 30 days</p>
          <div className='accordion' id='accordionExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingThree'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                >
                  Description
                </button>
              </h2>
              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>{viewItem.Description}</div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              const isCheck = [];
              for (let i = 0; i < viewItem.size.length; i++) {
                isCheck.push(document.getElementById(viewItem.size[i]).checked);
              }
              console.log(isCheck);
              if (isCheck.indexOf(true) >= 0) {
                addToInPay(viewItem);
                pay();
              }
              if (isCheck.indexOf(true) < 0) {
                const err = document.querySelector(".err-label");
                err.style.display = "block";
              }
            }}
            type='button'
            className='cart-btn btn btn-outline-dark'
          >
            Buy Now
          </button>
          <button
            onClick={() => {
              const isCheck = [];
              for (let i = 0; i < viewItem.size.length; i++) {
                isCheck.push(document.getElementById(viewItem.size[i]).checked);
              }
              console.log(isCheck);

              if (isCheck.indexOf(true) >= 0) {
                addItemToCart(viewItem);
                addTotalSum(getNewPrice(viewItem.Price));
                goToHome();
              }
              if (isCheck.indexOf(true) < 0) {
                const err = document.querySelector(".err-label");
                err.style.display = "block";
              }
            }}
            type='button'
            className='cart-btn btn btn-dark'
          >
            <span className='bag-btn-icons'>
              <FontAwesomeIcon className='bag-btn-icons' icon={faPlus} />
              <FontAwesomeIcon className='bag-btn-icons' icon={faShoppingBag} />
            </span>
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
