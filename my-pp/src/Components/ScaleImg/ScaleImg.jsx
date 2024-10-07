import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ScaleImg.css";
import SimpleButton from "../CopenBtn/SimpleButton";

const ScaleImg = () => {
  const images = [
    {
      image:
        "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categoryName: "Accessories",
    },
    {
      image:
        "https://images.pexels.com/photos/1652116/pexels-photo-1652116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categoryName: "Electronics",
    },
    {
      image:
        "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categoryName: "Babies",
    },
    {
      image:
        "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categoryName: "Electronics",
    },
    {
      image:
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categoryName: "Bikes",
    },
    {
      image:
        "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categoryName: "Electronics",
    },
  ];

  return (
    <>
      <div className="container scaleImg mt-5 mb-5">
        <h2>Durchsuchen Sie die Kategorien</h2>
        <Row>
          {images.map((image, index) => (
            <Col key={index} className="text-center mt-5 position-relative img-container">
              <img src={image.image} alt={image.categoryName} />
              <div className="img-bg-color">
                <p>{image.categoryName}</p>
              </div>
            </Col>
          ))}
        </Row>
       <div className="btn-container" >
       <SimpleButton buttonText= "Alle Kategorien"/>
       </div>
      </div>
    </>
  );
};

export default ScaleImg;
