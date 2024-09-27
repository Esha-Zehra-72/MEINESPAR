import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom"; // Import Link for routing
import "./GroupButtons.css";
import { PiAngularLogoFill } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import { MdOutlinePedalBike, MdAnchor } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const GroupButtons = () => {
  return (
    <>
      <div className="container mt-5 text-center mb-5 pb-5">
        <h2 className="mb-4 buttons-heading">Aktionscodes und Rabatte der Woche!</h2>
        <ButtonGroup aria-label="Basic example group-button">
          <Button variant="secondary" as={Link} to="/assessories">
            <PiAngularLogoFill className="me-2" />
            Accessories
          </Button>
          <Button variant="secondary">
            <FaChild className="me-2" />
            Babies
          </Button>
          <Button variant="secondary">
            <MdOutlinePedalBike className="me-2" />
            Bike
          </Button>
          <Button variant="secondary">
            <MdAnchor className="me-2" />
            Electronics
          </Button>
          <Button variant="secondary">
            <FaHeartbeat className="me-2" />
            Health Care
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default GroupButtons;
