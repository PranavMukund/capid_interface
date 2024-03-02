import "./style.css";
import messages from "./messages.json";

function ContentBlock() {
  return (
    <div className="gradient-box">
      <p className="bold-white-text">{messages["continue"]}</p>
    </div>
  );
}

export default ContentBlock;
