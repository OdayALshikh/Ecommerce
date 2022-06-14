import React from "react";

import { FaShoppingCart, FaSignInAlt, FaRegistered } from "react-icons/fa";
import "./Nav.css";
import {
  Button,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Col,
  Container,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const N2 = () => {
  const product = useSelector((state) => state.handleCart);

  return (
    <div>
      <Navbar bg="light" expand="lg" className="bg-white shadow-sm py-2 ">
        <Container fluid>
          <Navbar.Brand to="#">shping us Moscow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto d-flex fw-bolder flex-row justify-content-between p-2 mx-auto  text-reset     my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className=" nav-link active m" to="/">
                Home
              </NavLink>
              <NavLink className=" nav-link active m" to="/Products">
                Product
              </NavLink>

              <NavLink className=" nav-link active m" to="/About">
                About
              </NavLink>
              <NavLink className=" nav-link active m" to="/contact">
                contact
              </NavLink>
            </Nav>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark mx-2 py-2">
                sing in
                <FaSignInAlt className="mx-2" />
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark  mx-2 py-2">
                {" "}
                CART{product.length}{" "}
                <FaShoppingCart className="mx-2" color="blue" />{" "}
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-dark  mx-2 py-2"
              >
                {" "}
                register <FaRegistered className="mx-2" />
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default N2;
