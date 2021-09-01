import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./Components/Nav/Nav";
import Items from "./Components/Items/Items";
import Checkout from "./Components/Checkout/Checkout";
import { PriceProvider } from "./PriceContext";

function App() {
  const [priceSum, setPriceSum] = React.useState(0);
  return (
    <PriceProvider>
      <div className="App">
        <Nav />
        <Router>
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
