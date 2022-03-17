import React from "react";
import { useAuth } from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./NavProfile.css";
import { useHistory } from "react-router-dom";
const NavProile = () => {
  const history = useHistory();
  const currenUser = useAuth();
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark nav-profile'>
        <div className='container-fluid profile-nav'>
          <a
            className='navbar-brand'
            onClick={() => {
              history.goBack();
            }}
          >
            <div className='d-inline-block align-text-top'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </a>
          <div className='email-profile'>{currenUser.email}</div>
        </div>
      </nav>
    </div>
  );
};

export default NavProile;
