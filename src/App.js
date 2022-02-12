import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Items from "./Components/Items/Items";
import Checkout from "./Components/Checkout/Checkout";
import Nav from "./Components/Nav/Nav";
import AddToCart from "./Components/AddToCart/AddToCart";
import Footer from "./Components/Footer/Footer";
import Pay from "./Components/Pay/Pay";
import ScrollToTop from "./Components/ScrolToTop";
import SignUp from "./Components/SignUp/SignUp";
import ProtectedRoute from './firebase/ProtectedRoute'
import { useAuth } from "./firebase/firebase";
import { AppContext } from './AppContext'
function App() {
  const { loggedIn } =
    useContext(AppContext);
  const [isSignedIn, setIsSignedIn] = loggedIn;
  const currentUser = useAuth();
  return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Nav className="main-nav" />
            <Switch>
              <Route path="/signup" component={SignUp} />
              <ProtectedRoute isAuthed={isSignedIn} isLoading={isSignedIn} exact path="/">
                <Items />
              </ProtectedRoute>
              <Route path="/checkout" component={Checkout} />
              <ProtectedRoute isAuthed={isSignedIn} isLoading={isSignedIn} path="/add">
                <AddToCart />
              </ProtectedRoute>
              <Route path="/pay" component={Pay} />
            </Switch>
            <Footer className="footer" />
        </Router>
      </div>
  );
}

export default App;
