import React from "react";
import "./TeachePage.css";
///images Teachers
import Aisedep from "./image/msg1149855044-61573.jpg";
import Kutman from "./image/kutman.png";
import Aruuke from "./image/html-front (3).png";
import Bayastan from "./image/Rectangle35.png";
import English from "./image/msg1850196205-30109.jpg";
import Python from "./image/python2.png";
///images Mentors
import Mentor1 from "./image/sanjar-mentor.png";
import Mentor2 from "./image/syimyk-mentor.png";
import Mentor3 from "./image/guliza.jpg";
import Mentor4 from "./image/alisher.jpg";


import { useTranslation } from "react-i18next";
const TeachePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="header__teacher"> </div>
      <div className="container">
        <div className="wrapper__teacher">
          <h2>{t("Мугалимдер")}</h2>
          <p>
            {t(
              "Тажрыйбалуу окутуучулар IT компанияларда иштеп чыгуучулар болуп иштешет"
            )}
          </p>
        </div>

        {/* ///////////////////////////////////// TEACHER INFO-photo ///////////////////////////////////////// */}

        <div className="teachers-photo">
          <div className="teacher-img">
          <div className="face front">
              <img className="belek-img" src={Bayastan} alt="" />
              <div className="intro">
                <h3 className="teachers-name">Акматалиев Баястан</h3>
                {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
              </div>
            </div>

            <div className="face back">
              <h3 className="teachers-name">Front-End developer</h3>
              <p>29 {t("жашта")}</p>
              <p className="teachers-info">
                {t("Иштеген компаниялары:")}{" "}
                <p>Sigma software Solution, Novay - Norma, Mancho Devs.</p>
              </p>
              <div className="link">
                <a className="beka-a" href="#">
                  3 {t("жыл тыжрыйбасы")}
                </a>
              </div>
            </div>
          </div>

          <div className="teacher-img">
            <div className="face front">
              <img className="belek-img" src={Kutman} alt="" />
              <div className="intro">
                <h3 className="teachers-name">Акунов Кутман</h3>
                {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
              </div>
            </div>

            <div className="face back">
              <h3 className="teachers-name">Front-End developer</h3>
              <p>29 {t("жашта")}</p>
              <p className="teachers-info">
                {t("Иштеген компаниялары:")}
                <p>Mancho Devs, lvt Lab, Госфиннадзор, Минобразование.</p>
              </p>

              <div className="link">
                <a className="beka-a" href="#">
                  5 {t("жыл тыжрыйбасы")}
                </a>
              </div>
            </div>
          </div>

          <div className="teacher-img">
          <div className="face front">
              <img className="belek-img " src={Python} alt="" />
              <div className="intro">
                <h3 className="teachers-name">Абдрашитов Белек</h3>
                {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
              </div>
            </div>

            <div className="face back">
              <h3 className="teachers-name">Python Developer</h3>
              <p>28 {t("жашта")}</p>
              <p className="teachers-info">
                {t("Иштеген жерлери:")} Adilet sot, Azor (startup), Sigma
                software soluctions
              </p>
              <div className="link">
                <a className="beka-a" href="#">
                  3 {t("жыл тыжрыйбасы")}
                </a>
              </div>
            </div>
          </div>

          <div className="teacher-img">
          <div className="face front">
              <img className="belek-img" src={Aisedep} alt="" />
              <div className="intro">
                <h3 className="teachers-name">Айседеп Жусупбек кызы</h3>
              </div>
            </div>

            <div className="face back">
              <h3 className="teachers-name">Front-End developer</h3>
              <p>20 {t("жашта")}</p>
              <p className="teachers-info">{t("Фрилансер болуп иштейт")}</p>
              <div className="link">
                <a className="beka-a" href="#">
                  2.5 {t("жыл тыжрыйбасы")}{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="teacher-img">
          <div className="face front">
              <img className="belek-img" src={Aruuke} alt="" />
              <div className="intro">
                <h3 className="teachers-name">Тазабекова Арууке</h3>
                {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
              </div>
            </div>

            <div className="face back">
              <h3 className="teachers-name">Front-End developer</h3>
              <p>22 {t("жашта")}</p>
              <p className="teachers-info">
              {t("Фрилансер болуп иштейт Президенттик стипендиянын ээси 2021")}
              </p>
              <div className="link">
                <a className="beka-a" href="#">
                  3 {t("жыл тыжрыйбасы")}
                </a>
              </div>
            </div>
          </div>

          <div className="teacher-img">
            <div className="face front">
              <img className="belek-img" src={English} alt="" />
              <div className="intro">
                <h3 className="teachers-name">Айматова Айдана</h3>
                {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
              </div>
            </div>

            <div className="face back">
              <h3 className="teachers-name">{t("Англис тил мугалими")}</h3>
              <p>21 {t("жашта")}</p>
              <p className="teachers-info">
                {t("СНГ 2022-жылдын эң мыкты студенти")}
                </p>

              <div className="link">
                <a className="beka-a" href="#">
                  1.5 {t("жыл тыжрыйбасы")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        {/* ///////////////////////////////////// MENTORnpm ru-photo ///////////////////////////////////////// */}

      <section className="section__mentor">
        <div className="container">
          <div className="mentor__block">
            <h2>{t("Менторлор")}</h2>
          </div>

          <div className="mentor__photo">
            <span className="span-mentor">
              <img className="sancho images-mentory" src={Mentor1} alt="" />
              <p className="name-mentorv">Кайраткелдиев Санжар</p>
            </span>

            <span className="span-mentor">
              <img className="syky images-mentory" src={Mentor2} alt="" />
              <p className="name-mentorv">Токтобек уулу Сыймык</p>
            </span>

            <span className="span-mentor">
              <img className="gul images-mentory" src={Mentor3} alt="" />
              <p className="name-mentorv">Турусбекова Гулиза</p>
            </span>

            <span className="span-mentor">
              <img className="ali images-mentory" src={Mentor4} alt="" />
              <p className="name-mentorv">Төлгөев Алишер</p>
            </span>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachePage;
