import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let compnentMounted = true;
  useEffect(() => {
    const getproduct = async () => {
      setloading(true);

      const resp = await fetch("https://fakestoreapi.com/products");
      if (compnentMounted) {
        setdata(await resp.clone().json()); // جلب كل المنتجات دفعة واحدة
        setfilter(await resp.json()); // جلب كل البيانات ك ملف جيسون
        setloading(false);
        console.log("data clone", filter);
      }
      return () => {
        compnentMounted = false;
      };
    };
    getproduct();
  }, []);
  const Loading = () => {
    <>
      <div className="col-md-3">
        33
        <Skeleton height="350px" />
      </div>
    </>;
  };
  const filterproduct = (cat) => {
    const updatelist = data.filter((x) => x.category === cat);
    setfilter(updatelist);
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <Button variant="outline-dark me-2" onClick={() => setfilter(data)}>
            All
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterproduct("men's clothing")}
          >
            {" "}
            Man's Clothing
          </Button>
          <Button
            onClick={() => filterproduct("women's clothing")}
            variant="outline-dark me-2"
          >
            wMen's Clothing
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterproduct("jewelery")}
          >
            JeLewary
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterproduct("electronics")}
          >
            Elctronic
          </Button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <Card className="h-100 text-center  mb-3 p-4" key={product.id}>
                  <Card.Img variant="top" src={product.image} height="250px" />
                  <Card.Body>
                    <Card.Title className="mb-0">
                      {product.title.substring(0, 12)}...
                    </Card.Title>
                    <Card.Text className="lead fw-bold">
                      $ {product.price}
                    </Card.Text>
                    <NavLink
                      to={`/Products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Card Link
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <Container className="my-5 py-5">
      <Row>
        <Col sm={12}>
          <h1 className="display-6 text-center fw-bolder">letest product</h1>
          <hr style={{ width: "25%" }} className="m-auto mb-5"></hr>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {loading ? <Loading /> : <ShowProduct />}
      </Row>
    </Container>
  );
};

export default Products;
