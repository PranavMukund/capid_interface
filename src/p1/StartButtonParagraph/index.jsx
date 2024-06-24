//import { Button } from "@mui/base";
/*
import Button from '@mui/material/Button';

import "./style.css";
import messages from "./messages.json";

function StartButtonParagraph() {
  return (
    <div className="membership-section">

      <Button className="primary-button">{messages["get_started"]}</Button>
      <p className="member-text-bold">{messages["im_already_member"]}</p>
    </div>
  );
}

export default StartButtonParagraph;
*/

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./style.css";
import messages from "./messages.json";
import UserInteractionLayout from '../../p2/UserInteractionLayout';

function StartButtonParagraph() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to another page
    navigate('/UserInteractionLayout'); // Replace '/other-page' with your desired path
  };

  return (
    <div >

      <Button
        className='btn-sm'
        onClick={handleButtonClick}
        style={{ width: "200px", margin: "-60px 10px 90px 140px", borderRadius: "15px", fontSize: "15px", fontWeight: "bold", backgroundColor: "#FDE49E" }}
      >
        {messages["get_started"]}

      </Button>
      <p className="member-text-bold">{messages["im_already_member"]}</p>
    </div>
  );
}

export default StartButtonParagraph;
