import React from 'react';
import '../css/Card.css';

const Card = ({ imageUrl, topic, description }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <h2>{topic}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
