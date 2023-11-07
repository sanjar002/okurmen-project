import React from "react";

{
  /* Front-End */
}
import HtmlIcon from "./images/html.ico";
import CssIcon from "./images/5351-css3_102605.png";
import JsonIcon from "./images/jsIcon.webp";
import ReactIcon from "./images/reactNew.png";
import reduxIcon from "./images/reduxIcon.png";
import sassIcon from "./images/sassIcon.png";
import MaterialUI from "./images/materialUI.png";
import Tailwind from "./images/tailwind.svg";

/* Back-End */
import Python from "./images/bacend1.png";
import Django from "./images/django2.png";
import HtmlKids from './images/html.ico'
import CssKids from './images/5351-css3_102605.png'
import JsKids from './images/jsIcon.webp'
import ScractchIcon from './images/scrachtIcon.png'
import BootStrap from './images/bootstrap.png'

import "./CoursePage.css";
import { useTranslation } from "react-i18next";

const CoursePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="header__course">
        <div className="container">
          <div className="wrapper-course">
            <h1>{t("Биз менен бат жана сапаттуу билим ал!")}</h1>
          </div>
        </div>
      </header>

      <section className="section-coursepages">
        <div className="container">
          <div className="section-course">
            <h2 className="logo-section">{t("Биздин баардык курстар")}</h2>
          </div>
        </div>
      </section>

      <section className="card-launge">
        <div className="container">
          <div className="wrapper-launge">
            <div className="boxes-cards">
              <div className="box-cards">
                <div>
                  <h3 className="logo-launge">
                    Front-End — JavaScript
                    <span className="span-launge">- 9 АЙ</span>
                  </h3>
                </div>
                <div className="boxes-launge">
                  <div className="box-launge">
                    <img className="html-images" src={HtmlIcon} alt="" />
                    <h5>HTML</h5>
                  </div>

                  <div className="box-launge">
                    <img src={CssIcon} alt="" />
                    <h5>CSS</h5>
                  </div>
                  <div className="box-launge">
                    <img src={JsonIcon} alt="" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="box-launge">
                    <img
                      style={{
                        width: "60px",
                        height: "55px",
                        marginTop: "9px",
                      }}
                      src={ReactIcon}
                      alt=""
                    />
                    <h5 style={{ marginTop: "5px" }}>React</h5>
                  </div>
                  <div className="box-launge">
                    <img
                      style={{
                        width: "60px",
                        height: "55px",
                        marginTop: "9px",
                      }}
                      src={reduxIcon}
                      alt=""
                    />
                    <h5 style={{ marginTop: "5px" }}>Redux</h5>
                  </div>
                  <div className="box-launge">
                    <img style={{ marginTop: "13px" }} src={sassIcon} alt="" />
                    <h5 style={{ marginTop: "5px" }}>Sass</h5>
                  </div>
                  <div className="box-launge">
                    <img src={MaterialUI} alt="" />
                    <h5>Material UI</h5>
                  </div>
                  <div className="box-launge">
                    <img
                      style={{ width: "80px", height: "65px" }}
                      src={Tailwind}
                      alt=""
                    />
                    <h5>Tailwind</h5>
                  </div>
                </div>
                <a href="https://wa.me/702036856">
                  <button>Тоолук Маалымат</button>
                </a>
              </div>

              <div className="box-cards">
                <div>
                  <h3 className="logo-launge">
                    Back-End — Python
                    <span className="span-launge">- 9 АЙ</span>
                  </h3>
                </div>
                <div className="blockBacend">
                  <div className="bacendBlock">
                    <img style={{ width: "200px" }} src={Python} alt="" />
                    <h5>Python</h5>
                  </div>
                  <div className="bacendBlock">
                    <img style={{ width: "200px" }} src={Django} alt="" />
                    <h5>Django</h5>
                  </div>
                </div>
                <a href="https://wa.me/702036856">
                  <button>Тоолук Маалымат</button>
                </a>
              </div>

              <div className="box-cards1">
                <div>
                  <h3 className="logo-launge">
                    Жаш балдар курсу <span className="span-launge">- 3 АЙ</span>
                  </h3>
                </div>
                <div className="kidsFlexBLock">
                  <div className="kidsBlock">
                    <img style={{width:'70px'}} src={HtmlKids} alt="" />
                    <h5>HTML</h5>
                  </div>
                  <div className="kidsBlock">
                    <img style={{width:'70px'}} src={CssKids} alt="" />
                    <h5>CSS</h5>
                  </div>
                  <div className="kidsBlock">
                    <img style={{width:'70px'}} src={JsKids} alt="" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="kidsBlock">
                    <img style={{width:'70px'}} src={ScractchIcon} alt="" />
                    <h5>Scratch</h5>
                  </div>
                  <div className="kidsBlock">
                    <img style={{width:'81px'}} src={BootStrap} alt="" />
                    <h5>BootStrap</h5>
                  </div>
                </div>
                <a href="https://wa.me/702036856">
                  <button>Тоолук Маалымат</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-format">
        <div className="container">
          <div className="wrapper-format">
            <div className="video-div">
              {/* <Video
          className="video"
          style={{ width: "1200px", height: "500px", borderRadius: "10px" }}
          // autoPlay loop
          // poster={Okur}
          onCanPlayThrough={() => {
            console.log("video play");
          }}
        >
          <source src={Atmosfermoishe} type="video/webm" />
        </Video> */}
              <iframe
                width="1200"
                height="600"
                src="https://www.youtube.com/embed/uKgh10jr_yI?si=SDhxRBx6z2aq7mqH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
