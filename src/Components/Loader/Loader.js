import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className='loader-cont'>
      <div className='loader-logo'>
        <img src='./Untitled-1-01.png' />
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
