import logo from "./logo.svg";

import { Button, Row, Col, Container, Nav, Form } from "react-bootstrap";
import N2 from "./component/Nav";
import Home from "./component/Home";
import Products from "./component/products";
import { Switch, Route } from "react-router-dom";
import pro1 from "./component/produt";
import Cart from "./component/Cart";
function App() {
  return (
    <div className="App">
      <N2 />

      <Switch>
        About
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={pro1} />
        {/* <Route exact path="/About" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
