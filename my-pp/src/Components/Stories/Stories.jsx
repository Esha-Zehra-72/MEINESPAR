import React from "react";
import img5 from "../../Assets/img4.png";
import { Card } from "react-bootstrap";
import "./Stories.css"
import SimpleButton from "../CopenBtn/SimpleButton";
const Stories = () => {
  const Images = [

    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
    {
      img: img5,
      text: "5 Gutscheine",
    },
  ];
  return (
    <>
    <div className="bg-color">
      <div className="container pt-5">
        <h2 className="heading">Wo möchten Sie speichern?</h2>
        <div className="card-container mt-5">
          {Images.map((img) => {
            return (
              <Card className="cards">
                <Card.Img variant="top" src={img.img} />
                <Card.Body>
                  <h6>{img.text}</h6>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <div className="stores-btn">
          <SimpleButton buttonText="Alle Stores"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Stories;
