import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import Logo from "./img/okurmen-logo 1.png";
import "./Header.css";
import { useState } from "react";
import WhatsApp from "../whatsApp/WhatsApp";
// import { GiHamburgerMenu } from "react-icons/gi";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openBurger, setOpenBurger] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const languages = ["RU", "KG"];
  const changelang = (lang) => {
    // alert(lang.toLowerCase());
    i18n.changeLanguage(lang.toLowerCase());
  };

  // console.log(open);
  // const activeBurger = () => {
  //   setOpen(!open);
  // };

  return (
    <header className="header">
      <div className="container">
        <div className="block_header">
          <div className="logo">
            <Link to="/">
              <img className="img-logo-header" src={Logo} alt="" />
            </Link>
          </div>
          <nav>
             <div className="blockList">
             <Link to="/">{t("Башкы бет")}</Link>
              <Link to="/Course">{t("Курс")}</Link>
              <Link to="/Teache">{t("Мугалимдер")}</Link>
              <Link to="/about">{t("Окурмен")}</Link>
              <Link to="/Comments">{t("Отзыв")}</Link>
              <Link to="/Contact">Контакт</Link>
              {/* <WhatsApp /> */}

              {languages.map((btn) => {
                return (
                  <div className="btn-locales">
                    <Button className="btn-rus" onClick={() => changelang(btn)}>
                      {btn}
                    </Button>
                  </div>
                );
              })}
             </div>
            
            {/* <div className={open && "burger"}>
              <GiHamburgerMenu onClick={() => activeBurger()} />
              heloo
            </div> */}


       
            <div className="burger">
              <AiOutlineMenu onClick={() => setOpenBurger(true)} />
            </div>
            {openBurger && (
              <div className="overlay-burger">
                <div className="nav-link burger flex-column">
                  <Link className="white" to="/">{t("Башкы бет")}</Link>
                  <Link className="white" to="/Course">{t("Курс")}</Link>
                  <Link className="white" to="/Teache">{t("Мугалимдер")}</Link>
                  <Link className="white" to="/about">{t("Окурмен")}</Link>
                  <Link className="white" to="/Comments">{t("Отзыв")}</Link>
                  <Link className="white" to="/Contact">Контакт</Link>

                  {languages.map((btn) => {
                return (
                  <div className="btn-locales burger">
                    <Button className="btn-rus btn-media" onClick={() => changelang(btn)}>
                      {btn}
                    </Button>
                  </div>
                );
              })}
                </div>
                <div className="closeMenu burger">
                  <AiOutlineClose onClick={() => setOpenBurger(false)} />
                </div>
              </div>
            )}

           
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
