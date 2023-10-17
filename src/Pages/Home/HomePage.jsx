import React, { useState } from "react";
import Super from "./image/partneryimage/super.png";
import Sigma from "./image/partneryimage/sigmasowft.jpg";
import Bai from "./image/partneryimage/bai.png";
import Almurut from "./image/partneryimage/almurutstore.png";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import Inputform from "../Ui/Inputform/Inpurform";
import Time from "../Ui/Time/Time";

import ModalHome from "../modalHome/ModalHome";
import { Link } from "react-router-dom";
import "./HomePage.css";
// i18next connect
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();
  console.log(i18n, "--------------useTranslation-----------------");

  return (
    <div>
      {/* /////////////////////////////   home pages   /////////////////////////////*/}

      <div className="home">
        <div className="block_home">
          <div className="home_title">
            <h1 className="h1-logogo">
              {t("Азыркы замандын айтишниктери, келечектин аскерлери")}
            </h1>
          </div>

          <div className="button_home">
            <h3>{t("Тесттен өтүп, биринчи сабакты акысыз көр")}</h3>
            <a href="https://forms.gle/DRqzRo7d2FCo5afF9" target="_blank">
              <button
                className="btn-tesst"
                onClick={() => {
                  //  setModal(true)
                }}
              >
                {t("Тесттен өтүү")}
              </button>
            </a>
            {modal && (
              <ModalHome
                index={index}
                setIndex={setIndex}
                setModal={setModal}
              />
            )}
          </div>
        </div>
      </div>

      {/* /////////////////////////////   section cards   /////////////////////////////*/}

      <section className="cards">
        <div className="subtitle">
          <h2>{t("Биздин академияда программалоо багыттары:")}</h2>
        </div>
        <div class="post-wrap">
          <div class="post-item">
            <Link to="/course">
              <div class="post-item-wrap">
                <a href="" class="post-link">
                  <h3 class="post-title">Front-End</h3>
                  <p class="post-content">
                    {t(
                      "Frontend англис тилинен тышкы интерфейс, backend - сервербөлүгү деп которулат. Frontend - системанын жүзү;Колдонуучуга сайт менен иштешүүгө мүмкүндүк берүүчү куралдаржана компоненттер."
                    )}
                  </p>
                </a>
              </div>
            </Link>
          </div>

          <div class="post-item">
            <Link to="/course">
              <div class="post-item-wrap">
                <a href="" class="post-link">
                  <h3 class="post-title">Back-End</h3>
                  <p class="post-content">
                    {t(
                      "Backend (англ. back-end) - колдонуучудан жашырылган сайттынже тиркеменин толтурулушу. Backend - бул кызматтынпрограммалык жана аппараттык бөлүгү, ал браузерде жекомпьютерде эмес, серверде иштейт."
                    )}
                  </p>
                </a>
              </div>
            </Link>
          </div>

          <div class="post-item block-uxui">
            <Link to="/course">
              <div class="post-item-wrap">
                <a href="" class="post-link">
                  <h3 class="post-title">UX-UI</h3>
                  <p class="post-content">
                    {t(
                      "UX / UI веб-дизайн индустриясын үйрөнүү үчүн орто эсеп менен 5-8 ай талап кылынат. Жакшы адис болуу үчүн биринчи кезекте күчтүү каалоо, чыгармачылык, чыгармачылык, күчтүү фантазия болушу керек."
                    )}
                  </p>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* /////////////////////////////   section animation okurmen   /////////////////////////////*/}

      <section className="section">
        <div className="big-image">
          <div className="image-big">
            <svg viewBox="0 0 1350 600">
              <text className="text-okurmen" x="50%" y="50%" fill="transparent" text-anchor="middle">
                Окурмэн окуу борбору
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* /////////////////////////////   section patnery   /////////////////////////////*/}

      <div className="partnery">
        <div className="container">
          <div className="block_partnery">
            <div>
              <h2 className="port-h2">{t("Биздин партнёрлор:")}</h2>
            </div>
            <div className="wrapper_partnery">
              <div className="partner-images">
                <img className="bai" src={Bai} alt="" />
              </div>
              <div className="partner-images">
                <img className="super" src={Super} alt="" />
              </div>
              <div className="partner-images">
                <img className="sigma" src={Sigma} alt="" />
              </div>
              <div className="partner-images">
                <img className="almurut" src={Almurut} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////   section accardion   /////////////////////////////*/}

      <section className="accardion-section">
        <div className="container">
          <div className="accardion-wrapper">
            <h2 className="accardion-text">
              {t("Бизге эң көп берилүүчү суроолор")}
            </h2>

            <div className="flex accardion-boxes">
              <div className="accordion">
                <div className="block-acardion-1">
                  <Accordion
                    className="ak"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                    
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        {t("IT-ни окуу үчүн математика тили маанилүүбү?")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {t("Жок, кошуу кемитүүнү билүү жетиштүү")}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    className="ak"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                    className="aka"
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                      
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        {t(
                          "Англис тилин билбей туруп программоолону үйрөнсөк болобу?"
                        )}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {t("Ооба, болот. Англис тилин бизден бекер үйрөнөсүз.")}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    className="ak"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        {t("Жаш чектөө барбы?")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {t("9-жаштан 50 жашка чейин окууга болот")}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  {/* 1-вый  блок The End */}
                </div>

                <div className="line"></div>

                <div className="block-acardion-1">
                  {/* 2-вый  блок Начало */}
                  <Accordion
                    className="ak"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        {t("Окуу борбор качан негизделген?")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {t("Окуу борбор 2022-жылдын Май айында негизделген.")}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    className="ak"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                      marginBottom: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        {t("Окууну бүткөндөн кийин жумуш таап бересиздерби?")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {t(
                          "Эгерде сиз окууну жакшы өздөштүрүп, биз койгон талаптарга жооп берсеңиз, анда жумуш жагынан караштырып беребиз!"
                        )}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    className="ak"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "500" }}
                      >
                        {t("Сертификат берилеби?")}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {t(
                          "Окууну ийгиликтүү бүткөндөн кийин окуу борбордон мамлекеттик деңгээлде диплом берилет."
                        )}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              {/* 2-вул блок The End */}
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////////   section master class     /////////////////////////////*/}

      <section className="master-section">
        <div className="container">
          <div className="master-wrapper">
            <h2 className="master-text">{t("Акысыз сабакка жазылыңыз")}</h2>
            <div className="time-and-inputForm">
              <div className="master-phka">
                <p>{t("Шашыл! Акысыз мастер класска катталуу аяктайт")}</p>
                <Time />
              </div>
              <div className="inputForm">
                <Inputform />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
