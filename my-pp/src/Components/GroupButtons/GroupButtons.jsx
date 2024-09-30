import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PiAngularLogoFill } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import { MdOutlinePedalBike, MdAnchor } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import "./GroupButtons.css";

const GroupButtons = ({ activeCategory, onShowCategory }) => {
  return (
    <div className="container mt-5 text-center mb-5 pb-5">
      <h2 className="mb-4 buttons-heading">Aktionscodes und Rabatte der Woche!</h2>
      <ButtonGroup aria-label="Basic example group-button" className="btn-group">
        <Button
          onClick={() => onShowCategory('accessories')}
          className={`btn ${activeCategory === 'accessories' ? 'button-active' : 'button-inactive'} ${activeCategory === 'accessories' ? 'button-clicked' : ''}`}
        >
          <PiAngularLogoFill className="me-2 svg-icon" />
          Accessories
        </Button>
        <Button
          onClick={() => onShowCategory('babies')}
          className={`btn ${activeCategory === 'babies' ? 'button-active' : 'button-inactive'} ${activeCategory === 'babies' ? 'button-clicked' : ''}`}
        >
          <FaChild className="me-2 svg-icon" />
          Babies
        </Button>
        <Button
          onClick={() => onShowCategory('bike')}
          className={`btn ${activeCategory === 'bike' ? 'button-active' : 'button-inactive'} ${activeCategory === 'bike' ? 'button-clicked' : ''}`}
        >
          <MdOutlinePedalBike className="me-2 svg-icon" />
          Bike
        </Button>
        <Button
          onClick={() => onShowCategory('electronics')}
          className={`btn ${activeCategory === 'electronics' ? 'button-active' : 'button-inactive'} ${activeCategory === 'electronics' ? 'button-clicked' : ''}`}
        >
          <MdAnchor className="me-2 svg-icon" />
          Electronics
        </Button>
        <Button
          onClick={() => onShowCategory('healthCare')}
          className={`btn ${activeCategory === 'healthCare' ? 'button-active' : 'button-inactive'} ${activeCategory === 'healthCare' ? 'button-clicked' : ''}`}
        >
          <FaHeartbeat className="me-2 svg-icon" />
          Health Care
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GroupButtons;
