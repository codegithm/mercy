import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Items from "./Components/Items/Items";
import Checkout from "./Components/Checkout/Checkout";
import Nav from "./Components/Nav/Nav";
import { PriceProvider } from "./PriceContext";

function App() {
  return (
    <PriceProvider>
      <div className="App">
        <Router>
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Items} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </PriceProvider>
  );
}

export default App;
