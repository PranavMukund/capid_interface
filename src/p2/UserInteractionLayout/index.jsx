// OtherPage.js
/*
import React from 'react';

const UserInteractionLayout = () => {
  return (
    <div>
      <h1>This is the Other Page</h1>
      
    </div>
  );
}

export default UserInteractionLayout;
*/

/*
import OtpVerificationSection from "../OtpVerificationSection";
import MessageDisplayWidget from "../MessageDisplayWidget";
import ContentBlock from "../ContentBlock";
import "./style.css";
import messages from "./messages.json";

import {useState} from 'react';

function UserInteractionLayout() {
  return (
    <div className="otp-verification-form">
      <OtpVerificationSection />
      <div className="email-section-container">
        <div className="email-section">
          <img
            src="assets/p2_img/img_9669a5a2_a2c552.svg"
            className="image-container"
          />
          <img src="assets/p2_img/div_34_230_34_229_1d107c.svg">

          </img>
        </div>
        <p className="email-label-style">{messages["email"]}</p>
      </div>
      <MessageDisplayWidget />
      <ContentBlock />
    </div>
  );
  
  }
  
*/
/* function UserInteractionLayout(){
   const [email,setEmail]=useState('');
   const [phone,setPhone]=useState('');

   const handleEmailChange=(e)=>{
     setEmail(e.target.value);
   };

   const handlePhoneChange=(e)=>{
     setPhone(e.target.value);
   };

   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("Email",email);
     console.log("Phone",phone);

     setEmail('');
     setPhone('');
     };

     return 
     (
       
       <form onSubmit={handleSubmit}>
       <div>
         <label>Email:</label>
         <input type="email" value={email} onChange={handleEmailChange} />
       </div>
       <div>
         <label>Phone:</label>
         <input type="tel" value={phone} onChange={handlePhoneChange} />
       </div>
       <button type="submit">Submit</button>
     </form>
 
     );

   
 }
 */


/*

const UserInteractionLayout = () => {
  return (
    <div
      style={{
        width: '450px',
        height: '740px',
        backgroundImage: `url('/p1_img/img_29_218_fbcc9a.jpeg')`, // Replace 'background-image.jpg' with your actual image path
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#ffffff' }}>OTP Verification</h1>
      <h3 style={{ color: '#ffffff' }}>Enter email and phone number to send one-time password.</h3>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ color: '#ffffff' }}>Email:</label>
        <input type="email" id="email" style={{ marginLeft: '10px', padding: '5px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="phone" style={{ color: '#ffffff' }}>Phone Number:</label>
        <input type="tel" id="phone" style={{ marginLeft: '10px', padding: '5px' }} />
      </div>
      <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '5px' }}>Continue</button>
    </div>
  );
};

*/


import React from 'react';
import './style.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'



const UserInteractionLayout = () => {

  const navigate = useNavigate(); // Utilize the useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement any validation or data processing logic here if needed
    navigate('/P3'); // Redirect to the 'next-page' route
  };


  return (
    <div className="user-interaction-layout">
      <p style={{ fontFamily: "monospace", fontSize: "50px", background: "#94FFD8" }} className="heading">OTP Verification</p>
      <p className="instruction">
        Enter email and phone number to send one-time password.
      </p>
      <form className="form">
        <label style={{ width: "50px", background: "#ffe100" }} htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required // Mark email field as required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Email validation pattern
          title="Please enter a valid email address" // Validation message
        />
        <label style={{ width: "120px", background: "#ffe100" }} htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required // Mark phone number field as required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Phone number validation pattern (example format)
          title="Please enter a valid phone number in the format XXX-XXX-XXXX" // Validation message
        />
        <button onClick={handleSubmit} >Continue</button>
      </form>
    </div>
  );
};





export default UserInteractionLayout;

