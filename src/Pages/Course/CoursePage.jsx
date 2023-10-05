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

          <div className="block-syky">
            <div className="yellow-block">
              <div className="course-block"></div>
              <div className="content-front">
                <h2 className="yellow-content">Front-End</h2>

                {/* /////////// css ///////// */}

                <div className="html-css">
                  <img className="html" src={HTML} alt="" />
                  <img className="css" src={CSS} alt="" />
                  <p className="html-css-content">
                    HTML CSS Frontend <br /> разработка
                  </p>
                </div>

                <div className="html-css-eto">
                  <p className="text-html-css">
                    {t(
                      "CSS - бул каскаддык стилдер барагы. Бул тил форматы HTML элементи веб-сайтта кантип көрсөтүлүшү керектигин аныктайт интерфейс бетинде. HTML гипсокартон болсо, CSS болот бул боёк. HTML негизги структура болуп саналат да сиздин сайт, CSS сиздин сайтка баарын берет стили."
                    )}
                  </p>
                </div>

                {/* /////////// js ///////// */}

                <div className="js">
                  <img className="js-images" src={JS} alt="" />
                  <p className="js-content">JS Frontend разработка</p>
                </div>

                <div className="js-eto">
                  <p className="text-js">
                    {t(
                      "JavaScript программалоо тили интерактивдүү веб-сайттарды түзүү үчүн атайын ойлоп табылган."
                    )}
                  </p>
                </div>

                {/* /////////// REACT ///////// */}

                <div className="react">
                  <img className="images-react" src={REACT} alt="" />
                  <p className="react-centent">REACT Frontend разработка</p>
                </div>

                <div className="react-eto">
                  <p className="text-react">
                    {t(
                      "React – бул Javascript программалоо тилинин популярдуу китепканасы, ал веб-колдонуучу интерфейстерин түзүү үчүн колдонулат."
                    )}
                  </p>

                  <div className="calendar">
                    <img className="calen-images" src={Calendar} alt="" />
                    <p className="srok">{t("мөөнөтү 9 ай")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////// BACKEND ///////////////////// */}

            <div className="purple-block">
              <div className="course--block"> </div>
              <div className="content-back">
                <h2 className="content-purple">Back-End</h2>

                <div className="python">
                  <img className="images-python" src={PYTHON} alt="" />
                  <p className="puthon-content">PYTHON Backend разработка</p>
                </div>

                <div className="python-eto">
                  <p className="text-python">
                    {t(
                      "Python динамикалык терүү жана таштанды чогултуу бар. Ал бир нече программалоо парадигмаларын колдойт, анын ичинде (өзгөчө процедуралык), объектиге багытталган жана функционалдык программалоо"
                    )}
                  </p>
                </div>

                {/* /////////// DJANGo ///////// */}

                <div className="django">
                  <img className="django-images" src={DJANGO} alt="" />
                  <p className="dgango-content">DJANGO Backend разработка</p>
                </div>

                <div className="django-eto">
                  <p className="text-django">
                    {t(
                      "Django - бул тез өнүгүүгө жана таза, прагматикалык дизайнга өбөлгө түзгөн жогорку деңгээлдеги Python веб алкагы. Тажрыйбалуу иштеп чыгуучулар тарабынан түзүлгөн, ал веб-иштеп чыгуунун көп түйшүгүн талап кылат, андыктан сиз дөңгөлөктү кайра ойлоп таппай туруп, колдонмоңузду жазууга басым жасай аласыз. Бул бекер жана ачык булак."
                    )}
                  </p>
                </div>
                <div className="calendar celendar-back">
                  <img className="calen-images" src={Calendar} alt="" />
                  <p className="srok">{t("мөөнөтү 9 ай")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block-flutter">
              <img className="flutter" src={Flutter} alt="" />{" "}
              <p className="flutter-text">
                {t(
                  "OKURMEN-KIDS бул 9-14 жаштагыларды IT тармагында билим берүүчү бөлүм. Сайттарды жана оюндары жасоо, дизайндар менен иштөөчү 3 айлык курстар!"
                )}
              </p>
            </div>

            <div className="uxui-block">
              <img className="uxui" src={Uxui} alt="" />
              <p className="ux-ui_text">
                {t(
                  "Отурум UX-дизайн чечимдери көбүнчө эстетикалык артыкчылык жана пикир эмес, изилдөө, маалыматтарды талдоо жана тесттин жыйынтыгы менен аныкталат."
                )}
              </p>
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
