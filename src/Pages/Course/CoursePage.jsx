import React from "react";
import Flutter from "./images/kids.png";
import Uxui from "./images/ux-ui 1.png";
{
  /* Front-End */
}
import HTML from "./course-image/html.png";
import CSS from "./course-image/css.png";
import JS from "./course-image/js.png";
import REACT from "./course-image/react.png";
import Calendar from "./course-image/calendar.png";
{
  /* Back-End */
}
import PYTHON from "./course-image/python.png";
import DJANGO from "./course-image/django.png";
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
            <p className="wrapper-course-p">
              {t(
                "Кесипке ээ болууну каалагандар үчүн программалоо курстары, нөлдөн үйрөнүп, карьераңызда жаңы деңгээлге жетиңиз!"
              )}
            </p>
          </div>
        </div>
      </header>

      <section className="section-coursepages">
        <div className="container">
          <div className="section-course">
            <h2 className="logo-section">{t("Биздин баардык курстар")}</h2>
            <p className="course-content">
              {t(
                "Сиз иштеп чыгуу менен алектенген жок болсо, негиздери менен баштоо керек: обьектиге-багытталган программалоо негиздери, Синтаксис, код дизайны жана маалымат базалары менен иштоо."
              )}
            </p>
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
                    <img src="./images/html.png" alt="" />
                  </div>
                  <div className="box-launge"></div>
                  <div className="box-launge"></div>
                  <div className="box-launge"></div>
                  <div className="box-launge"></div>
                  <div className="box-launge"></div>
                  <div className="box-launge"></div>
                </div>
              </div>

              <div className="box-cards">
                <div>
                  <h3 className="logo-launge">
                    Back-End — Python
                    <span className="span-launge">- 9 АЙ</span>
                  </h3>
                </div>
              </div>

              <div className="box-cards">
                <div>
                  <h3 className="logo-launge">
                    Жаш балдар курсу <span className="span-launge">- 3 АЙ</span>
                  </h3>
                </div>
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
