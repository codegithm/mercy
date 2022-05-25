import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Items from "./Components/Items/Items";
import Checkout from "./Components/Checkout/Checkout";
import AddToCart from "./Components/AddToCart/AddToCart";
import NewUser from "./Components/SignUp/NewUser";
import Pay from "./Components/Pay/Pay";
import ScrollToTop from "./Components/ScrolToTop";
import SignUp from "./Components/SignUp/SignUp";
import ProtectedRoute from "./firebase/ProtectedRoute";
import { getItems, getPersonal, useAuth } from "./firebase/firebase";
import { AppContext } from "./AppContext";
import Profile from "./Components/Profile/Profile";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import Seller from "./Components/Seller/Seller";
function App() {
  const {
    loggedIn,
    ItemInStore,
    personalInfo,
    loggedInUser,
    checkProfileMatch,
    itemUpdated,
    personalUpdate,
  } = useContext(AppContext);
  const [isSignedIn, setIsSignedIn] = loggedIn;
  const [itemsDb, setItemsDb] = ItemInStore;
  const [personal, setPersonal] = personalInfo;
  const [inUser, setInUser] = loggedInUser;
  const [profileMatch, setProfileMatch] = checkProfileMatch;
  const [updateitem, setUpdateitem] = itemUpdated;
  const [updatePersonal, setUpdatePersonal] = personalUpdate;
  async function getTheData() {
    let data = await getItems();
    setItemsDb(data);
  }

  async function personalData() {
    let personal = await getPersonal();
    setPersonal(personal);
  }
  useEffect(() => {
    getTheData();
  }, [updateitem]);

  useEffect(() => {
    personalData();
  }, []);

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/signup' component={SignUp} />
          <ProtectedRoute
            isAuthed={isSignedIn}
            isLoading={isSignedIn}
            path='/profile'
          >
            <Profile />
          </ProtectedRoute>
          <Route exact path='/'>
            <Items />
          </Route>
          <Route path='/newuser'>
            <NewUser />
          </Route>
          <ProtectedRoute
            isAuthed={isSignedIn}
            isLoading={isSignedIn}
            path='/personalDetails'
          >
            <PersonalDetails />
          </ProtectedRoute>
          <Route path='/checkout' component={Checkout} />
          <Route path='/add'>
            <AddToCart />
          </Route>
          <Route path='/pay' component={Pay} />
          <ProtectedRoute
            isAuthed={isSignedIn}
            isLoading={isSignedIn}
            path='/seller'
          >
            <Seller />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
