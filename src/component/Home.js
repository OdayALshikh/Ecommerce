import React from "react";
import { Card, Container } from "react-bootstrap";
import image1 from "../assest/1.jpg";
import Products from "./products";
const Home = () => {
  return (
    <div>
      <Card className="bg-dark  border-0">
        <Card.Img
          src={image1}
          alt="Card image"
          className="border-0 "
          height="450px"
        />
        <Container>
          <Card.ImgOverlay className="d-flex  flex-column mx-5 justify-content-center">
            <Card.Title className="fs-1 fw-bold display-3 mb-3">
              NEW SEASION ARRIVALS{" "}
            </Card.Title>

            <Card.Text className="text-uppercase">
              Chekout out ALL THE TRINE
            </Card.Text>
          </Card.ImgOverlay>
        </Container>
      </Card>
    </div>
  );
};

export default Home;
