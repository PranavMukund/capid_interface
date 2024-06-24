import "./style.css";
import messages from "./messages.json";

function OtpVerificationSection() {
  return (
    <div className="verification-message">
      <p className="title-text-bold"
        style={{ fontStyle: "italic" }}>
        {messages["otp_verification"]}
      </p>
      <p className="otp-verification-message">
        {messages["enter_email_phone_number_send_one_time_password"]}
      </p>
    </div>
  );
}

export default OtpVerificationSection;
