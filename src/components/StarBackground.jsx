
import React from 'react';

const StarBackground = () => {
  return (
    <>
      <div className="nebula-layer"></div>
      <div className="star-layer stars-small"></div>
      <div className="star-layer stars-medium"></div>
      <div className="star-layer stars-large"></div>
      <div className="shooting-star-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
    </>
  );
};

export default StarBackground;
