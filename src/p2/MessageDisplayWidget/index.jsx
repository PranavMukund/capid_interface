import "./style.css";
import messages from "./messages.json";

function MessageDisplayWidget() {
  return (
    <div className="contact-info-container1">
      <div className="contact-info-container">
        <p className="contact-info">{messages["91_999999999"]}</p>
      </div>
    </div>
  );
}

export default MessageDisplayWidget;
