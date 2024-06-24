import React, { useState } from 'react';
import './style.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const Navigate = useNavigate();

  const handleImageChange = (event) => {
    const newImage = event.target.files[0];
    setSelectedImage(newImage);
    setShowWarning(false); // Clear previous warning
  };

  const handleGenerate = () => {
    if (!selectedImage) {
      setShowWarning(true); // Show warning if no image is selected
      return;
    }
    // Implement your logic for generating content based on the uploaded image
    console.log('Generating content...');
    Navigate('/P5_GenerateImage');
  };

  return (
    <div className="p4-container">
      <div className="center-container">
        {selectedImage && (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" className="center-image" />
        )}
        {!selectedImage && <p>No image selected, please select a human face image</p>}
        <input type="file" accept="image/*" onChange={handleImageChange} required />

      </div>
      {showWarning && <p className="warning" style={{ background: "red" }}>Please select an image before generating.</p>}
      <button className="generate-button" onClick={handleGenerate}>
        Generate
      </button>
      <div className="icons-container">
        <Link to={"https://www.google.co.in/"}><img src="./assets/google.svg" alt="Google" className="icon" /></Link>
        <Link to={"https://www.facebook.com/"}><img src="./assets/facebook.svg" alt="Facebook" className="icon" /></Link>
        <Link to={"https://www.twitter.com/"}><img src="./assets/twitter.svg" alt="Twitter" className="icon" /></Link>
        <Link to={"https://www.instagram.com/"}><img src="./assets/instagram.svg" alt="Instagram " className='icon' /></Link>
      </div>
    </div>
  )
};

export default UploadImage;
