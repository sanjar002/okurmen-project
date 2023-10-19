import React from "react";
import San from "../About/images/sanjar.png";
import Mans from "../About/images/mansur.jfif";
import Uluk from "../About/images/ulukbek.png";
import Mun from "../About/images/munarbek.png";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="header-about">
        <div className="container">
          <div className="about-wrapper">
            <h2>{t(`ОКУРМЭН IT программалоо тилдерин үйрөтөт`)}</h2>
            <p>
              {t(
                "Тажрыйбалуу мугалимдер жана  3 айлык практиканын жардамында сени жумушка  толук даярдайбыз!"
              )}
            </p>
          </div>
        </div>
      </header>

      <section className="section-text">
        <div className="container">
          <div className="wrapper-text">
            <h2 className="text-about-text">
              {t("ОКУРМЭН - бул өнүктүрүүчү чөйрө!")}
            </h2>
            <p>
              {t(
                "ОКУРМЭН окуу борбору - бул дүйнө жүзүндө актуалдуу болуп жактан IT тармагында билиим берүүчү академия. Биз Front-End, Back-End жана Flutter курстарын онлайн жана офлайн форматта окутабыз. Биздин максат - 2030 жылга чейин 100000 мыкты IT адистерин даярдоо жана КРны санариптештешкен мамлекеттердин катарына кошуу. Студенттерге сапатуу билим берүү менен мыкты кадр кылып даярдап, аларды максатына жеткирүү. Окурмэн окуу борбору 2022 - жылы май айында негизделген. Азыркы учурда командабызда 30дан ашуун киши эмгектенет. Кеңсебиз Бишкек шаарында жана дүйнө жүзү боюнча кыргыз тилинде билим алгысы келген студентер онлайн форматында окушат. Бүгүнкү күндө студенттерибиз окууну ийгиликтүү аяктап, IT адистери болуп иштей баштады."
              )}
            </p>
          </div>
        </div>
      </section>
        <div className="container">
          <div className="boxes">
            <div className="box">
              <img className="images-der" src={Mans} alt="" />
              <p className="p-name">Мансур-Бек Канназар</p>
              <div className="div-kul">{t("Башкы негиздөөчү")}</div>
            </div>

            <div className="box">
              <img className="images-der" src={San} alt="" />
              <p className="p-name">Мадумаров Санжар</p>
              <div className="div-kul">Директор</div>
            </div>

            <div className="box">
              <img className="images-der" src={Uluk} alt="" />
              <p className="p-name">Улукбек Бакыбек уулу</p>
              <div className="div-kul">{t("Директор орун басары")}</div>
            </div>

            <div className="box">
              <img className="images-der" src={Mun} alt="" />
              <p className="p-name">Мунарбек Мавлянов</p>
              <div className="div-kul">{t("okurmen_kids Директору")}</div>
            </div>
          </div>
          </div>
          
   
      <div className="container">
        <div className="video-div1">
          <iframe
            width="1200"
            height="670"
            src="https://www.youtube.com/embed/nR7XkTWi9tM?si=aLcMaSyGq6yKxvJb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
