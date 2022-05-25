import React, { useContext, useState } from "react";
import { addPersonlDetails, auth } from "../../firebase/firebase";
import { AppContext } from "../../AppContext";
import "./PersonalDetails.css";
import { useHistory } from "react-router-dom";
import NavProile from "../NavProfile/NavProfile";
import { MdErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function PersonalDetails() {
  // const [addres, setAddress] = useState("");
  // const handleSelect = async (value) => {};
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [province, setProvince] = useState("");
  const [cellNum, setCellNum] = useState("");
  const [addres, setAddress] = useState("");
  const [error, setError] = useState(false);
  const { loggedInUser, checkProfileMatch } = useContext(AppContext);
  const [profileMatch, setProfileMatch] = checkProfileMatch;
  const [inUser, setInUser] = loggedInUser;
  const uid = auth.currentUser.uid;
  const personalDetails = {
    id: uid,
    name: name,
    surname: surname,
    city: city,
    zip: zip,
    province: province,
    cellnumber: cellNum,
    address: addres,
    seller: false,
  };
  const MySwal = withReactContent(Swal);
  const loading = () => {
    MySwal.fire({
      title: "Saving",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  const success = () => {
    MySwal.fire({
      title: "Complete",
      icon: "success",
      timerProgressBar: true,
      allowOutsideClick: false,
    });
  };

  const fail = () => {
    MySwal.fire({
      title: "Opps...",
      icon: "error",
      timerProgressBar: true,
      allowOutsideClick: true,
    });
  };
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      surname !== "" &&
      city !== "" &&
      zip !== "" &&
      province !== "" &&
      cellNum !== "" &&
      addres !== ""
    ) {
      setError(false);
      loading();
      addPersonlDetails(auth.currentUser.uid, personalDetails)
        .then(() => {
          success();
          history.push("/profile");
          setProfileMatch(true);
        })
        .catch(() => {
          fail();
        });
    } else {
      setError(true);
    }
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeSurname = (e) => {
    setSurname(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };
  const changeZip = (e) => {
    setZip(e.target.value);
  };
  const changeCell = (e) => {
    setCellNum(e.target.value);
  };

  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const changeProvince = (e) => {
    setProvince(e.target.value);
  };
  return (
    <div>
      <NavProile />
      <div className='personal-form-cont'>
        <div>Please Fill out your personal details</div>
        <form className='row g-3 personal-form'>
          <div className='col-md-6 col-sm-6 col-xs-6'>
            <input
              type='text'
              className='form-control'
              placeholder='First name'
              aria-label='First name'
              onChange={changeName}
            />
          </div>
          <div className='col-md-6 col-sm-6 col-xs-6'>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
              aria-label='Last name'
              onChange={changeSurname}
            />
          </div>
          <div className='col-md-6'>
            <input
              type='number'
              placeholder='CellNumber'
              className='form-control'
              id='inputEmail4'
              onChange={changeCell}
            />
          </div>

          <div className='col-md-6'>
            {/* <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          > */}
            <input
              type='text'
              className='form-control'
              id='inputAddress'
              placeholder='1234 Main St'
              onChange={changeAddress}
            />
            {/* </PlacesAutocomplete> */}
          </div>
          <div className='col-12'>
            <input
              type='text'
              className='form-control'
              id='inputAddress2'
              placeholder='Apartment, studio, or floor'
            />
          </div>
          <div className='col-md-6'>
            <input
              placeholder='City'
              type='text'
              className='form-control'
              id='inputCity'
              onChange={changeCity}
            />
          </div>
          <div className='col-md-4'>
            <select
              onChange={changeProvince}
              id='inputState'
              className='form-select'
            >
              <option selected>Choose province...</option>
              <option value='KwaZulu-Natal'>KwaZulu-Natal</option>
              <option value='Eastern Cape'>Eastern Cape</option>
              <option value='Western Cape'>Western Cape</option>
              <option value='Free State'>Free State</option>
              <option value='Limpopo'>Limpopo</option>
              <option value='Gauteng'>Gauteng</option>
              <option value='Northen Cape'>Northern Cape</option>
              <option value='North West'>North West</option>
              <option value='Mpumalanga'>Mpumalanga</option>
            </select>
          </div>
          <div className='col-md-2'>
            <input
              type='text'
              placeholder='Zip'
              className='form-control'
              id='inputZip'
              onChange={changeZip}
            />
          </div>
          {error === true ? (
            <div>
              <br />
              <div className='error-cont error-cont-upload'>
                <div className='error-icon'>
                  <MdErrorOutline />
                </div>
                <p>Please make sure there is no empty field(s) </p>
              </div>
              <br />
            </div>
          ) : (
            ""
          )}
          <div className='col-12'>
            <button type='submit' onClick={submit} className='btn btn-dark'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
