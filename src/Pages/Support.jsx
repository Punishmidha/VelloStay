import React from "react";
import "../styles/Support.css";
import supportImage from "../assets/support.jpg"; 

export default function SupportCenter() {
  return (
    <div className="support-wrapper">
      <div className="support-left">
        <img src={supportImage} alt="Support" className="support-image" />{" "}
      </div>
      <div className="support-right">
        <h1 className="support-title">Support Center</h1>
        <p className="support-text">
          For any issues, please check our FAQs or contact our support team.
        </p>

        <a
          href={`https://wa.me/${9996850506}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="support-button">Chat with Support</button>
        </a>
        <br />

        <div className="support-contact">
          <p>
            📞 Call us: <a href="tel:+9996850506">+91 9996850506</a>
          </p>
          <p>
            📧 Email us:{" "}
            <a href="mailto:vellostay@gmail.com">vellostay@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
