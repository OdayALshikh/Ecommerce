import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { addCart, delCart } from "./redux/action";

const Cart = () => {
  var subtotal = 0;
  var total = 0;
  // const CartfromLocalstorage = JSON.parse(localStorage.getItem("cart"));

  const dispatch = useDispatch();
  const product = useSelector((state) => state.handleCart);
  // const [card, setcard] = useState(CartfromLocalstorage);
  console.log("card", product);
  const handlclickb = (product) => {
    dispatch(addCart(product));
  };
  const handlclickm = (product) => {
    dispatch(delCart(product));
  };

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(product));
  // }, [card]);

  return (
    <div className="mt-5">
      {product.map((product) => {
        subtotal = product.qty * product.price;
        total += subtotal;
        return (
          <div className="row   justify-content-center  mb-5">
            <div className="col-md-4 text-center">
              <img src={product.image} width="180px" height="200px"></img>
            </div>
            <div className="col-md-4 text-start">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} * $ {product.price} = ${" "}
                {product.qty * product.price}
              </p>

              <button
                type="button"
                onClick={() => handlclickb(product)}
                className="btn btn-outline-dark me-3"
                value="plus"
              >
                <FaPlus />
              </button>
              <button
                onClick={() => handlclickm(product)}
                type="button"
                value="minus"
                className="btn btn-outline-dark"
              >
                <FaMinus />
              </button>
            </div>
          </div>
        );
      })}
      <div className="row justify-content-end" width="200px">
        <table className="table my-5 " width="30%">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">total price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>"total"</td>

              <td>{parseInt(total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
