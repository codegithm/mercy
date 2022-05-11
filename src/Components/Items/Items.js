import "./Items.css";
import products from "../../dummyDatabase";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AppContext } from "../../AppContext";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const Items = () => {
  const { priceItem, cartItem, view, itemType, itemInPay, ItemInStore } =
    useContext(AppContext);
  const history = useHistory();
  const [price, setPrice] = priceItem;
  const [cart, setCart] = cartItem;
  const [viewItem, setViewItem] = view;
  const [type, setType] = itemType;
  const [inPay, setInPay] = itemInPay;
  const [itemsDb, setItemsDb] = ItemInStore;
  const addToView = (item) => {
    setViewItem(item);
  };

  const addItem = () => {
    history.push("/add");
  };
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
  return (
    <div>
      {itemsDb == "" ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <div className='items-cont'>
            <Banner />
            <div className='row products'>
              {type !== "type" ? (
                <div className='prod-title'>
                  <h5>{type}</h5>
                  <hr />
                </div>
              ) : (
                ""
              )}
              {itemsDb.map((item) => {
                if (type === "type") {
                  return (
                    <div
                      key={item.id}
                      className='col-lg-3 col-md-4 col-sm-12 card card-items'
                    >
                      <img
                        className='img-fluid card-img-top'
                        alt='./no-image.jpeg'
                        onClick={() => {
                          addItem();
                          addToView(item);
                        }}
                        src={item.Img}
                      />
                      <div className='card-body'>
                        <h3 className='card-title'>{item.Brand}</h3>

                        <h3 className='card-title'>
                          R{getNewPrice(item.Price)}
                        </h3>
                      </div>
                    </div>
                  );
                }
                if (type === "Pants" && item.Type === "Pants") {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        addItem();
                        addToView(item);
                      }}
                      className='col-lg-3 col-md-4 col-sm-6 card card-items'
                    >
                      <img
                        className='img-fluid card-img-top'
                        alt='...'
                        src={item.Img}
                      />
                      <div className='card-body'>
                        <h3 className='card-title'>{item.Brand}</h3>

                        <h3 className='card-title'>
                          R{getNewPrice(item.Price)}
                        </h3>
                      </div>
                    </div>
                  );
                }

                if (type === "T-shirt" && item.Type === "T-shirt") {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        addItem();
                        addToView(item);
                      }}
                      className='col-lg-3 col-md-4 col-sm-6 card card-items'
                    >
                      <img
                        className='img-fluid card-img-top'
                        alt='...'
                        src={item.Img}
                      />
                      <div className='card-body'>
                        <h3 className='card-title'>{item.Brand}</h3>

                        <h3 className='card-title'>
                          R{getNewPrice(item.Price)}
                        </h3>
                      </div>
                    </div>
                  );
                }

                if (type === "Hoodies" && item.Type === "Hoodies") {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        addItem();
                        addToView(item);
                      }}
                      className='col-lg-3 col-md-4 col-sm-6 card card-items'
                    >
                      <img
                        className='img-fluid card-img-top'
                        alt='...'
                        src={item.Img}
                      />
                      <div className='card-body'>
                        <h3 className='card-title'>{item.Brand}</h3>

                        <h3 className='card-title'>
                          R{getNewPrice(item.Price)}
                        </h3>
                      </div>
                    </div>
                  );
                }

                if (type === "Shoes" && item.Type === "Shoes") {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        addItem();
                        addToView(item);
                      }}
                      className='col-lg-3 col-md-4 col-sm-6 card card-items'
                    >
                      <img
                        className='img-fluid card-img-top'
                        alt='...'
                        src={item.Img}
                      />
                      <div className='card-body'>
                        <h3 className='card-title'>{item.Brand}</h3>

                        <h3 className='card-title'>
                          R{getNewPrice(item.Price)}
                        </h3>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <Footer className='footer' />
        </div>
      )}
    </div>
  );
};

export default Items;
