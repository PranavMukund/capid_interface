import ImageContainer from "../ImageContainer";
import StartButtonParagraph from "../StartButtonParagraph";
import "./style.css";
import messages from "./messages.json";

function SecretAgentProfileView() {
  return (
    <div className="central-content-container">
      <div className="squad-card">
        <img
          src="/assets/p1_img/img_29_218_fbcc9a.jpeg"
          className="squad-logo"
        />
        <p className="retro-text-heading">{messages["cipher_squad"]}</p>
      </div>
      <ImageContainer />
      <StartButtonParagraph />
    </div>
  );
}

export default SecretAgentProfileView;
