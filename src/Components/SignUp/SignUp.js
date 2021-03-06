import React, { useContext, useState } from "react";
import { SiGmail } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { auth, signIn, useAuth } from "../../firebase/firebase";
import "./SignUp.css";
import { AppContext } from "../../AppContext";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import Error from "../Error/Error";

const SignUp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const { loggedIn } = useContext(AppContext);
  const user = useAuth();
  const [isSignedIn, setIsSignedIn] = loggedIn;
  const history = useHistory();
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const google_provider = new GoogleAuthProvider();
  async function useSingInWithGoogle(e) {
    e.preventDefault();
    await signInWithPopup(auth, google_provider)
      .then((res) => {
        setIsSignedIn(true);
        console.log(res);
        history.push("/profile");
        seterrorMessage("");
      })
      .catch((e) => {
        setIsSignedIn(false);
        console.log(e);
      });
  }
  async function singInWithGoogleRedirect(e) {
    e.preventDefault();
    await signInWithRedirect(auth, google_provider)
      .then((res) => {
        setIsSignedIn(true);
        console.log(res);
        history.push("/profile");
        seterrorMessage("");
      })
      .catch((e) => {
        setIsSignedIn(false);
        console.log(e);
      });
  }
  const onSignInCLicked = async (e) => {
    e.preventDefault();
    setIsSignedIn(false);
    try {
      await signIn(email, password);
      setIsSignedIn(true);
      history.push("/profile");
      seterrorMessage("");
    } catch (e) {
      setIsSignedIn(false);
      seterrorMessage("Incorrect email/password");
      console.log(isSignedIn);
    }
  };
  // const googleSignInFire = useSingInWithGoogle();
  // const onSignInWithGoogleCLicked = async (e) => {
  //   e.preventDefault();
  //   setIsSignedIn(false);
  //   try {
  //     googleSignInFire;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
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
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
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
          onClick={onSignInCLicked}
        >
          Sign in
        </button>
        {width > 1200 ? (
          <button
            onClick={useSingInWithGoogle}
            className='w-100 btn btn-lg gmail'
            type='submit'
          >
            Sign in with <SiGmail className='social-icon' />
          </button>
        ) : (
          <button
            onClick={useSingInWithGoogle}
            className='w-100 btn btn-lg gmail'
            type='submit'
          >
            Sign in with <SiGmail className='social-icon' />
          </button>
        )}
        <button
          type='button'
          class='btn btn-link'
          onClick={() => {
            history.push("/newuser");
          }}
        >
          Creatte account
        </button>
        <p className='mt-5 mb-3 text-muted'>&copy; 2017???2021</p>
      </form>
    </main>
  );
};

export default SignUp;
