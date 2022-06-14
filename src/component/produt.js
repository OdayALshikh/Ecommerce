import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "./redux/action";

const Pro1 = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  console.log(addProduct);
  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await response.json());
      setloading(false);
    };
    getproduct();
  }, []);
  const MLoading = () => {
    return (
      <>
        <div className="col-4"></div>
        <div className=" col-4 align-items-center d-flex justify-content-center align-items-center ">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="col-4"></div>
      </>
    );
  };
  const Show = () => {
    return (
      <>
        <div className="col-md-6 text-center my-4">
          <img
            src={product.image}
            height="500px"
            width="400"
            alt={product.title}
          ></img>
        </div>
        <div className="col-md-6  my-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h2 className="display-5">{product.title}</h2>
          <p className="lead fw-bold ">
            Rating{product.rating && product.rating.rate}
            <i className="m-2">
              {" "}
              <FaStar color="golden" />
            </i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead text-left ">{product.description}</p>
          <button
            className="btn btn-outline-dark mx-2 py-2"
            value=""
            onClick={() => addProduct(product)}
          >
            AddToCard
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark my-2 py-2">
            Go to card
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-4">
        <div className="row  py-4">{loading ? <MLoading /> : <Show />}</div>
      </div>
    </div>
  );
};

export default Pro1;
