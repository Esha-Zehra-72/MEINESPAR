import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Counter.css";
import { FaTags } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

const Counter = () => {
  const [counterOn, SetCounterOn] = useState(false);
  return (
    <>
      <div className="counter-bg">
        <ScrollTrigger
          onEnter={() => SetCounterOn(true)}
          onExit={() => SetCounterOn(false)}
        >
          <div className="container-count m-auto d-flex justify-content-between container py-5 row mt-5">
            <div className="count1 col-md-4">
              <h2>
                <FaTags  className="counter-icone"/>
              </h2>
              <h4>
                {counterOn && (
                  <CountUp end={85} duration={5} className="fs-2 fw-bold" />
                )}
                <span style={{ fontWeight: "bold" }}> million</span>
              </h4>
              <p>
                Our streaming app is experiencing a surge in users, leading to
                leading to frigs.
              </p>
            </div>
            <div className="count1 col-md-4">
              <h2>
                <FaUsers className="counter-icone" />
              </h2>
              <h4>
                {counterOn && (
                  <CountUp end={75} duration={5} className="fs-2 fw-bold" />
                )}
                <span style={{ fontWeight: "bold" }}> million</span>
              </h4>
              <p>
                Our streaming app is experiencing a surge in users, leading to
                leading to frigs.
              </p>
            </div>
            <div className="count1 col-md-4">
              <h2 style={{ fontWeight: "bold" }}>
                <FaBarsProgress className="counter-icone" style={{ fontWeight: "800" }} />
              </h2>
              <h4>
                {counterOn && (
                  <CountUp end={100} duration={5} className="fs-2 fw-bold" />
                )}
                <span style={{ fontWeight: "bold"}}> Touchers</span>
              </h4>
              <p>
                Our streaming app is experiencing a surge in users, leading to
                leading to frigs.
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default Counter;
