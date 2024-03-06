import React from 'react';
import './style.css';

const ageGroups = ['0-10', '10-20', '20-30', '30-40', '40-50', '50+'];

const ImageCard = ({ imageSrc, ageGroup }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt="Face" className="image" />
      <p className="age-label">{ageGroup}</p>
    </div>
  );
};

const P4 = () => {
  return (
    <div className="p4-container">
      <div className="image-grid">
        {ageGroups.map((ageGroup, index) => (
          <ImageCard key={index} imageSrc="images/face.jpg" ageGroup={ageGroup} />
        ))}
      </div>
      <button className="regenerate-button">Regenerate</button>
      <div className="icons-container">
        <img src="images/google.svg" alt="Google" className="icon" />
        <img src="images/facebook.svg" alt="Facebook" className="icon" />
        <img src="images/twitter.svg" alt="Twitter" className="icon" />
      </div>
    </div>
  );
};

export default P4;
