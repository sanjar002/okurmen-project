import React from "react";
// import { BsWhatsapp } from "react-icons/bs";
import WhatsApp from "./images-whatsApp/whatsApp.png"
import "./Whatsapp.css";

const WhatsApp1 = () => {
  return (
    <div className="whatsappIcon">
      <a className="whatsApp-links" href="https://api.whatsapp.com/send?phone=996702038656">
        <img className="whatsApp-img" src={WhatsApp} alt="whatsApp" />
        {/* <BsWhatsapp className="bsIcon" /> */}
      </a>
    </div>
  );
};

export default WhatsApp1;
