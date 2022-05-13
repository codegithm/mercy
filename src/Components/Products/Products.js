import React, { useState, useContext, useEffect } from "react";
import "./Products.css";
import Upload from "./Upload";
import { AppContext } from "../../AppContext";
import { auth, deleteData, getItems } from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

function Products() {
  const { isUpload, ItemInStore, itemUpdated } = useContext(AppContext);
  const [upload, setUpload] = isUpload;
  const [itemsDb, setItemsDb] = ItemInStore;
  const [updateitem, setUpdateitem] = itemUpdated;

  return (
    <div className='load'>
      <div className='add-new'>
        <button
          type='button'
          className='btn btn-primary btn-lg'
          onClick={() => setUpload(true)}
        >
          Add new product
        </button>
        <hr />
      </div>
      {upload === true ? <Upload /> : ""}
      <br />
      <div className='row'>
        {itemsDb.map((item) => {
          if (item.Id === auth.currentUser.uid) {
            return (
              <div
                key={item.id}
                className='col-lg-3 col-md-4 col-sm-3 card-checkout card'
              >
                <img
                  className='img-fluid card-img-top-checkout '
                  alt='...'
                  src={item.Img}
                />
                <div className='card-body'>
                  <h3 className='card-title'>{item.Brand}</h3>
                  <h3 className='card-title'>R{item.Price}</h3>
                </div>
                <div className='delete'>
                  <FontAwesomeIcon
                    onClick={async () => {
                      deleteData(item.id);
                      getItems().then(() => {
                        setUpdateitem(!!updateitem);
                        console.log(updateitem);
                      });
                    }}
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Products;
