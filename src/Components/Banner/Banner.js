import "./Banner.css";
import React from "react";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  return (
    <div className='banner'>
      <h3 className='banner-title'>Become a seller on Mercy</h3>
      <button
        className='btn btn-dark'
        onClick={() => {
          history.push("/seller");
        }}
      >
        create account
      </button>
      {/* <img className="mercy" alt=".." src="./Untitled-1-01.png" /> */}
    </div>
  );
};

export default Banner;
