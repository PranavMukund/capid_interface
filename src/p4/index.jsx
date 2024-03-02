import React from 'react';
import './style.css';
import { useState } from 'react';

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (event) => {
      const newImage = event.target.files[0];
      setSelectedImage(newImage);
    };
  
    return (
      <div className="p4-container">
        <div className="center-container">
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" className="center-image" />
          )}
          {!selectedImage && <p>No image selected</p>}
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button className="upload-button">Upload</button>
        </div>
        <button className="generate-button">Generate</button>
        <div className="icons-container">
            <img src="public\assets\google.svg" alt="Google" className="icon" />
            <img src="public\assets\facebook.svg" alt="Facebook" className="icon" />
            <img src="public\assets\twitter.svg" alt="Twitter" className="icon" />
            <img src="public\assets\instagram.svg" alt="Instagram " className='icon'/>
        </div>
      </div>
    );
  };
  
  export default UploadImage;