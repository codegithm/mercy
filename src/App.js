import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Items from "./Components/Items/Items";
import Checkout from "./Components/Checkout/Checkout";
import Nav from "./Components/Nav/Nav";
import AddToCart from "./Components/AddToCart/AddToCart";
import Footer from "./Components/Footer/Footer";
import Pay from "./Components/Pay/Pay";
import { AppProvider } from "./AppContext";
import ScrollToTop from "./Components/ScrolToTop";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Items} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/add" component={AddToCart} />
              <Route path="/pay" component={Pay} />
            </Switch>
            <Footer className="footer" />
          </Suspense>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
