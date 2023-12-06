// components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, image, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3 className="service-title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default ServiceCard;
