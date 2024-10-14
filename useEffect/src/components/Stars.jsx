import React from 'react';

const Stars = ({ rating }) => {
  const totalStars = 5;
  const activeStars = Math.round(rating);

  return (
    <div className="stars">
      {[...Array(totalStars)].map((star, index) => (
        <span key={index} className={`fa fa-star ${index < activeStars ? 'active' : ''}`}></span>
      ))}
    </div>
  );
};

export default Stars;
