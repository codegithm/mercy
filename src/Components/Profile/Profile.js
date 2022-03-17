import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import NavProile from "../NavProfile/NavProfile";
import { getPersonal, logOff } from "../../firebase/firebase";
import { AppContext } from "../../AppContext";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/firebase";
import Swal from "sweetalert2";
import DashboardCard from "../DashboardCard/DashboardCard";

const Profile = () => {
  const { loggedIn, personalInfo, loggedInUser, checkProfileMatch } =
    useContext(AppContext);
  const [isSignedIn, setIsSignedIn] = loggedIn;
  const [personal, setPersonal] = personalInfo;
  const [inUser, setInUser] = loggedInUser;
  const history = useHistory();
  const user = useAuth();
  const [userId, setUserId] = useState("");
  const [profileMatch, setProfileMatch] = checkProfileMatch;
  const [name, setName] = useState("");

  const isProfileMatched = () => {
    for (var data in personal) {
      if (personal[data].id == inUser.uid) {
        setName(personal[data].name);
        setProfileMatch(true);
      }
    }
  };
  useEffect(() => {
    async function getUserId() {
      const getId = await user;
      setUserId(getId);
    }
    getUserId();
    isProfileMatched();
    console.log(inUser);
  }, []);

  const showAddress = () => {
    let addressObj = "";
    personal.map((data) => {
      if (data.id == inUser.uid) {
        addressObj = {
          address: data.address,
          city: data.city,
          province: data.province,
          zip: data.zip,
        };
      }
    });

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: "Physical address",
      text: `Street name: ${addressObj.address} | City: ${addressObj.city} | Province: ${addressObj.province} | Postal address: ${addressObj.zip}`,
      imageUrl: "./flat_location_logo.svg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Edit",
      reverseButtons: true,
    });
  };
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

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Personal details",
        text: `Name: ${personlObj.name} | Surname: ${personlObj.surname} | Cellnumber: ${personlObj.cellnumber}`,
        imageUrl: "./avatar-svgrepo-com.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "Edit",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons
            .fire({
              input: "text",
              inputLabel: "Your name",
              inputPlaceholder: "Enter your name",
              showCancelButton: true,
              confirmButtonText: "Save",
              cancelButtonText: "Next",
              inputValidator: (value) => {
                if (!value) {
                  return "You need to write something!";
                }
              },
            })
            .then((result) => {
              if (result.isDismissed) {
                swalWithBootstrapButtons
                  .fire({
                    input: "text",
                    inputLabel: "Your surname",
                    inputPlaceholder: "Enter your surname",
                    confirmButtonText: "Save",
                    inputValidator: (value) => {
                      if (!value) {
                        return "You need to write something!";
                      }
                    },
                  })
                  .then((result) => {
                    if (result.isConfirmed) {
                      swalWithBootstrapButtons
                        .fire({
                          input: "text",
                          inputLabel: "Your cellnumber",
                          inputPlaceholder: "Enter your cellnumber",
                          confirmButtonText: "Save",
                          inputValidator: (value) => {
                            if (!value) {
                              return "You need to write something!";
                            }
                          },
                        })
                        .then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              icon: "success",
                              title: "Your work has been saved",
                              showConfirmButton: false,
                              timer: 1500,
                            });
                          }
                        });
                    }
                  });
              }
            });
        }
      });
  };

  const goToPersonal = () => {
    history.push("/personalDetails");
  };
  return (
    <div className='profile-cont'>
      <NavProile />
      <div className='info-cont'>
        <div className='avatar-cont'>
          <img className='avatar' src='./avatar-svgrepo-com.svg' />
          <h3>{profileMatch === true ? name : ""}</h3>
        </div>

        {profileMatch === true ? (
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-s-3' onClick={showPersonal}>
              <DashboardCard title='Personal details' name='income' />
            </div>
            <div className='col-lg-3 col-md-3 col-s-3' onClick={showAddress}>
              <DashboardCard title='Physical Address' name='sales' />
            </div>
            <div className='col-lg-3 col-md-3 col-s-3'>
              <DashboardCard
                title='Orders'
                onClick={showPersonal}
                name='monthly'
              />
            </div>
          </div>
        ) : (
          // <button type='button' className='btn btn-dark' onClick={showPersonal}>
          //   Personal details
          // </button>
          <button type='button' className='btn btn-dark' onClick={goToPersonal}>
            Fill in details
          </button>
        )}
      </div>
      <div
        className='logout'
        onClick={() => {
          logOff();
          setIsSignedIn("");
          history.push("/");
          setProfileMatch(false);
        }}
      >
        <FontAwesomeIcon icon={faDoorOpen} />
        Logout
      </div>
    </div>
  );
};

export default Profile;
