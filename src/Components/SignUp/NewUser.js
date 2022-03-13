import React, { useContext, useState } from "react";
import { SiGmail } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { signUp } from "../../firebase/firebase";
import "./SignUp.css";
import { AppContext } from "../../AppContext";
import Error from "../Error/Error";

const NewUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const { loggedIn } = useContext(AppContext);

  const [isSignedIn, setIsSignedIn] = loggedIn;
  const history = useHistory();
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSignUpCLicked = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setIsSignedIn(true);
      history.push("/");
      seterrorMessage("");
    } catch (e) {
      setIsSignedIn(false);
      seterrorMessage("Email already exists");
    }
  };
  return (
    <main className='form-signin signup-main'>
      <form className='signup-form'>
        <img
          className='mb-4 sign-up-logo'
          src='./Untitled-1-01.png'
          alt=''
          width='72'
          height='57'
        />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        {errorMessage === "" ? "" : <Error error={errorMessage} />}
        <div className='form-floating'>
          <input
            type='email'
            onChange={changeEmail}
            className='form-control email-input'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label for='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            onChange={changePassword}
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
          />
          <label for='floatingPassword'>Password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button
          className='w-100 btn btn-lg btn-outline-secondary'
          onClick={onSignUpCLicked}
        >
          Sign up
        </button>
        <button className='w-100 btn btn-lg gmail' type='submit'>
          Sign up with <SiGmail className='social-icon' />
        </button>
        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2021</p>
      </form>
    </main>
  );
};

export default NewUser;
