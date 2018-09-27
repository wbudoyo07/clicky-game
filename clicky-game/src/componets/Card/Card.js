import React from "react";
import "./Card.css";

const Card = () => (
    <div className="card">
    <div className="img-container">
      <img alt="" src="" />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> test
        </li>
        <li>
          <strong>Occupation:</strong> test
        </li>
        <li>
          <strong>Location:</strong> test
        </li>
      </ul>
    </div>
  </div>
);

export default Card;