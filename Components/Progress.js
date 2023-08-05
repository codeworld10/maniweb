import React, { useState } from "react";

const Progress = () => {
  const [progressValue, setProgressValue] = useState(90);
  const [css, setCss] = useState(80);
  const [javascript, setJavascript] = useState(70);
  const [react, setReact] = useState(75);
  const [next, setNext] = useState(72);
  const [node, setNode] = useState(65);
  const [express, setExpress] = useState(60);
  const [mongo, setMongo] = useState(62);
  const [word, setWord] = useState(85);
  return (
    <>
      <div className="Progress_center">
        HTML 90%
        <div className="progress-bar-container">
          <div
            className="HTML"
            style={{ width: `${progressValue}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        CSS3 80%
        <div className="progress-bar-container">
          <div
            className="CSS"
            style={{ width: `${css}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        JAVASCRIPT 70%
        <div className="progress-bar-container">
          <div
            className="JAVASCRIPT"
            style={{ width: `${javascript}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        REACT JS 75%
        <div className="progress-bar-container">
          <div
            className="REACT"
            style={{ width: `${react}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        NEXT JS 72%
        <div className="progress-bar-container">
          <div
            className="NEXT"
            style={{ width: `${next}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        NODE JS 65%
        <div className="progress-bar-container">
          <div
            className="NODE"
            style={{ width: `${node}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        EXPRESS JS 60%
        <div className="progress-bar-container">
          <div
            className="EXPRESS"
            style={{ width: `${express}%`, transition: "width 0.3s" }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        MONGODB 62%
        <div className="progress-bar-container">
          <div
            className="MONGO"
            style={{
              width: `${mongo}%`,
              transition: "width 10.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>

      <div className="Progress_center">
        WordPress 85%
        <div className="progress-bar-container">
          <div
            className="Word"
            style={{
              width: `${word}%`,
              transition: "width 10.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
