import React from "react";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
// import Maps from "./images/Rectangle.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="obshiiy-footer">
          <div className="footer-wrapper">
            <h2 className="footer-logo">
              <GoLocation /> {t("Биздин дарек")}
            </h2>

            {/* <div
              className="mapFooter"
              id="map"
              style={{ width: "500px", height: "400px" }}
            ></div> */}
              <img className="maps-foo" src="./images/maps.png" alt="" />
          </div>

          <div className="tire"></div>

          <div className="right">
            <div className="phone">
              <BsFillTelephoneFill
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
              <a href="tel:+996704300742">
                <span>+996 (704) 300 742</span>
              </a>
            </div>

            <div className="instagram">
              <BsInstagram style={{ fontSize: "30px", cursor: "pointer" }} />{" "}
              <a href="https://instagram.com/okurmen_it?igshid=NTc4MTIwNjQ2YQ==">
                <span>okurmen_it</span>
              </a>
            </div>

            <div className="email">
              <MdEmail style={{ fontSize: "30px", cursor: "pointer" }} />{" "}
              <a href="https://myaccount.google.com/u/1/?utm_source=OGB&utm_medium=app">
                <span>okumen2022@gmail.com</span>
              </a>
            </div>

            <div className="facebook">
              <FaTiktok style={{ fontSize: "30px", cursor: "pointer" }} />
              <a href="https://www.tiktok.com/@okurmen_it">
                <span>okurmen_it</span>
              </a>
            </div>

            <div className="adress">
              <ImportContactsIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
              <span>
                Турусбекова 109/1 Максимум <br /> 4 этаж 407 / 411 - кабинет
              </span>
            </div>

            <div className="clock">
            <AiOutlineClockCircle 
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            <span>
            ДШ - ЖМ 10:00 - 18:00
</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="footer">
        <div class="footer-text">
          <p className="syimyk-and-sanjar">
            &copy; Copyright 2023 All Rights Reserved
          </p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
