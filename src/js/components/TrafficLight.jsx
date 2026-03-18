import React, { useState } from "react";
const TrafficLight = () => {
  //setting up useState
  const [currentLight, setCurrentLight] = useState("red");

  return (
    <>
      <div id="container">
        <div
          className={`red light ${currentLight === "red" ? "active" : ""}`}
          onClick={() => setCurrentLight("red")}
        ></div>
        <div
          className={`yellow light ${
            currentLight === "yellow" ? "active" : ""
          }`}
          onClick={() => setCurrentLight("yellow")}
        ></div>
        <div
          className={`green light ${currentLight === "green" ? "active" : ""}`}
          onClick={() => setCurrentLight("green")}
        ></div>
        <div
          className={`purple light ${
            currentLight === "purple" ? "active" : ""
          }`}
          onClick={() => setCurrentLight("purple")}
        ></div>
      </div>
    </>
  );
};

export default TrafficLight;
