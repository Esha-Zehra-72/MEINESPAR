import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React from "react";
import "./GroupButtons.css";
import { PiAngularLogoFill } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import { MdOutlinePedalBike } from "react-icons/md";
import { MdAnchor } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const GroupButtons = () => {
  return (
    <>
      <div className="container mt-5 text-center mb-5 pb-5">
        <h2 className="mb-4 buttons-heading">Aktionscodes und Rabatte der Woche!</h2>
        <ButtonGroup aria-label="Basic example group-button">
          <Button variant="secondary" className="">
            <PiAngularLogoFill />

            Accessories
          </Button>
          <Button variant="secondary"><FaChild />

           Babies</Button>
          <Button variant="secondary"><MdOutlinePedalBike />
           Bike</Button>
          <Button variant="secondary">
          <MdAnchor />

            Electronics</Button>
          <Button variant="secondary">
          <FaHeartbeat />

            Health Care</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default GroupButtons;
