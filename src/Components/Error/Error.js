import React from "react";
import "./Error.css";
import { MdErrorOutline } from "react-icons/md";

function Error(props) {
  return (
    <div className='error-cont'>
      <MdErrorOutline />
      <p>{props.error}</p>
    </div>
  );
}

export default Error;
