import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PiAngularLogoFill } from "react-icons/pi";
import img1 from "../../Assets/img1.png";
import { Link } from "react-router-dom";
import "./AssessoriesCopen.css"; // Import your CSS file
import CopenBtn from "../CopenBtn/CopenBtn";

const AssessoriesCopen = () => {
  const [showMore, setShowMore] = useState({}); // State to handle showMore for each card

  const toggleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific card
    }));
  };

  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      discount: "15%",
      content: "Some quick example text to build on the card title.",
      moreContent: "Here’s some more content for Card 1!",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "Card Title 2",
      discount: "20%",
      content: "Some quick example text to build on the card title.",
      moreContent: "Here’s some more content for Card 2!",
      imgSrc: img1,
    },
    {
      id: 3,
      title: "Card Title 3",
      discount: "25%",
      content: "Some quick example text to build on the card title.",
      moreContent: "Here’s some more content for Card 3!",
      imgSrc: img1,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cardData.map((card) => (
          <div className="col-lg-3 col-md-6 mb-4 card-parent" key={card.id}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center d-flex justify-content-center align-items-center">
                  <PiAngularLogoFill className="me-2" />
                  {card.title}
                </Card.Title>
                <div className="text-center">
                  <Card.Img src={card.imgSrc} className="img-fluid" />
                </div>
                <h4 className="text-center my-2 discount">{card.discount}</h4>

                <Card.Text className="text-center px-3">
                  {card.content}
                  <div
                    className={`more-content ${
                      showMore[card.id] ? "show" : ""
                    }`}
                  >
                    {card.moreContent}
                  </div>
                </Card.Text>

                <Link
                  to="#"
                  className="d-block text-center mb-3"
                  onClick={() => toggleShowMore(card.id)}
                >
                  {showMore[card.id] ? "Show Less" : "Read More"}
                </Link>

               <CopenBtn/>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessoriesCopen;
