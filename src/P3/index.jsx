import React, { useState, useEffect,useRef } from 'react';
import './style.css';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom'


const P3 = () => {
  const [otp, setOtp] = useState('');
  const [remainingTime, setRemainingTime] = useState(120); // Change this to desired time in seconds (2 minutes)
  const inputRefs = useRef([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timerId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timerId); // Clear timer on unmount
  }, []);
 

  const handleVerification = () => {
    // Implement your verification logic here
    alert('Verifying OTP:', otp);
    navigate('/UploadImage');
  };

  return (
    <div className="verification-container">
      <h1 className="heading">Verification code</h1>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      {remainingTime > 0 ? (
        <p className="timer">Resend OTP in {remainingTime} seconds</p>
      ) : (
        <button className="resend-button">Resend OTP</button>
      )}
      <button className="confirm-button" onClick={handleVerification}>
        Confirm
      </button>
    </div>
  );
};

export default P3;
