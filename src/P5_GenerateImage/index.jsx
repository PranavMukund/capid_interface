import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

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
          <ImageCard key={index} imageSrc="/assets/p1_img/img_29_216_5c8c7b.png" ageGroup={ageGroup} />
        ))}
      </div>
      <button className="regenerate-button">Regenerate</button>
      <div className="icons-container">
        <Link to={"https://www.google.co.in/"}><img src="./assets/google.svg" alt="Google" className="icon" /></Link>
        <Link to={"https://www.facebook.com/"}><img src="./assets/facebook.svg" alt="Facebook" className="icon" /></Link>
        <Link to={"https://www.twitter.com/"}><img src="./assets/twitter.svg" alt="Twitter" className="icon" /></Link>
        <Link to={"https://www.instagram.com/"}><img src="./assets/instagram.svg" alt="Instagram " className='icon' /></Link>
      </div>
    </div>
  );
};

export default P4;
