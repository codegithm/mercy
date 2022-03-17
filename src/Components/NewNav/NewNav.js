import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NewNav() {
  const history = useHistory();
  return (
    <nav className='navbar navbar-dark bg-dark nav-profile'>
      <div className='container-fluid profile-nav'>
        <a
          className='navbar-brand'
          onClick={() => {
            history.push("/");
          }}
          href='#'
        >
          <div className='d-inline-block align-text-top'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NewNav;
