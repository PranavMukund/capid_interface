import React, { useState } from 'react';
import './style.css';
import {  Navigate, useNavigate} from 'react-router-dom';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const Navigate=useNavigate();

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
        {!selectedImage && <p>No image selected</p>}
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button className="upload-button">Upload</button>
      </div>
      {showWarning && <p className="warning">Please select an image before generating.</p>}
      <button className="generate-button" onClick={handleGenerate}>
        Generate
      </button>
      <div className="icons-container">
      <img src="./assets/google.svg" alt="Google" className="icon" />
            <img src="./assets/facebook.svg" alt="Facebook" className="icon" />
            <img src="./assets/twitter.svg" alt="Twitter" className="icon" />
            <img src="./assets/instagram.svg" alt="Instagram " className='icon'/>
      </div>
    </div>
  )
};

export default UploadImage;
