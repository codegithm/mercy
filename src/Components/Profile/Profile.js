import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import NavProile from "../NavProfile/NavProfile";
import { getPersonal, logOff } from "../../firebase/firebase";
import { AppContext } from "../../AppContext";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/firebase";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
const Profile = () => {
  const { loggedIn, personalInfo, loggedInUser } = useContext(AppContext);
  const [isSignedIn, setIsSignedIn] = loggedIn;
  const [personal, setPersonal] = personalInfo;
  const [inUser, setInUser] = loggedInUser;
  const history = useHistory();
  const user = useAuth();
  const [userId, setUserId] = useState("");
  const [profileMatch, setProileMatch] = useState(false);

  useEffect(() => {
    async function getUserId() {
      const getId = await user;
      setUserId(getId);
    }
    console.log(personal);
    getUserId();
    for (var data in personal) {
      if (personal[data].id == inUser.uid) {
        setProileMatch(true);
        console.log(profileMatch);
      }
      console.log(inUser.uid);
    }
  }, []);

  return (
    <div className='profile-cont'>
      <NavProile />
      <div className='personal'>
        {personal.map((data) => {
          if (data.id == inUser.uid) {
            console.log(data);
            return (
              // <div class='dropdown drop-cont'>
              //   <a
              //     class='btn btn-secondary dropdown-toggle drop-title'
              //     href='#'
              //     role='button'
              //     id='dropdownMenuLink'
              //     data-bs-toggle='dropdown'
              //     aria-expanded='false'
              //   >
              //     Personal details
              //   </a>

              //   <div
              //     class='dropdown-menu drop-det'
              //     aria-labelledby='dropdownMenuLink'
              //   >
              //     <div>
              //       <h5 class='dropdown-item drop-sub-title'>Name</h5>
              //       <p className='values'>{data.name}</p>
              //       <h5 class='dropdown-item drop-sub-title'>Surname</h5>
              //       <p className='values'>{data.surname}</p>
              //       <h5 class='dropdown-item drop-sub-title'>Cellnumber</h5>
              //       <p className='values'>{data.cellnumber}</p>
              //     </div>
              //   </div>
              // </div>

              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  <div>
                    <h5>Name</h5>
                    <h6>{data.name}</h6>
                  </div>
                  <div>
                    <h5>Surnamme</h5>
                    <h6>{data.surname}</h6>
                  </div>
                  <div>
                    <h5>Cellnumber</h5>
                    <h6>{data.cellnumber}</h6>
                  </div>
                </div>
              </div>
            );
          } else {
            let matched = false;
            for (var item in personal) {
              if (personal[item].id === inUser.uid) {
                matched = true;
              }
              if (matched === false && item === personal.length - 1) {
                return (
                  <button
                    onClick={() => {
                      history.push("/personalDetails");
                    }}
                    type='button'
                    className='btn btn-dark'
                  >
                    Fill Personal Details
                  </button>
                );
              }
            }
          }
        })}
      </div>
      <div
        className='logout'
        onClick={() => {
          logOff();
          setIsSignedIn("");
          history.push("/");
          console.log(logOff());
        }}
      >
        <FontAwesomeIcon icon={faDoorOpen} />
        Logout
      </div>
    </div>
  );
};

export default Profile;
