import React, { useState } from "react";
const TrafficLight = () => {
  //setting up useState
  const [currentLight, setCurrentLight] = useState("red");
  return (
    <>
      <div id="container">
        <div className="red light"></div>
        <div className="yellow light"></div>
        <div className="green light"></div>
      </div>
    </>
  );
};

export default TrafficLight;
