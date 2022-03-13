import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import NavProile from "../NavProfile/NavProfile";
import { getPersonal, logOff } from "../../firebase/firebase";
import { AppContext } from "../../AppContext";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/firebase";
import swal from "sweetalert";
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

  const showPersonal = () => {
    let personlObj = "";
    personal.map((data) => {
      if (data.id == inUser.uid) {
        personlObj = {
          name: data.name,
          surname: data.surname,
          cellnumber: data.cellnumber,
        };
      }
    });

    swal({
      title: "Personal Details",
      text: `Name: ${personlObj.name} \n Surname: ${personlObj.surname} \n Cellnumber: ${personlObj.cellnumber}`,
      icon: "success",
      button: "Ok",
    });
  };
  return (
    <div className='profile-cont'>
      <NavProile />
      <div className='info-cont'>
        <div className='avatar-cont'>
          <img className='avatar' src='./avatar-svgrepo-com.svg' />
        </div>
        <button type='button' className='btn btn-dark' onClick={showPersonal}>
          Personal details
        </button>
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
