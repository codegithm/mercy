import React, { useState, useContext } from "react";
import "./Products.css";
import Upload from "./Upload";
import { AppContext } from "../../AppContext";

function Products() {
  const { isUpload } = useContext(AppContext);
  const [upload, setUpload] = isUpload;
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
    </div>
  );
}

export default Products;
