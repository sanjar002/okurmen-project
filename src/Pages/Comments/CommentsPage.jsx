import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import "./CommentsPage.css";


const CommentsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div>
      <div className="header-comments">
        <div className="container">
          <div className="wrapper-comments">
            <h2>
              {t("1 жылдан кийин азыркы чечимиңизге сөзсүз ыраазы болосуз!")}
            </h2>
            <p>
              {t(
                "Кесипке ээ болууну каалагандар үчүн программалоо курстары нөлдөн баштап карьераңызда жаңы деңгээлге жетиңиз"
              )}
            </p>
          </div>
        </div>
      </div>

      <section className="section-text">
        <div className="container">
          <div className="wrapper-text">
            <h2>
              {t(
                "Бишкектеги программалоо курсуна биздин сүйүктүү студенттерибиздин ой-пикирлери"
              )}
            </h2>
          </div>

          <div className="comments-vidio">
            <div className="video-div">
              <iframe
                width="350"
                height="500"
                src="https://www.youtube.com/embed/7-I-RAloUUM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
               <iframe
               width="350"
               height="500"
                src="https://www.youtube.com/embed/VHDv9L9aZdo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="350"
                height="500"
                src="https://www.youtube.com/embed/3El0r5EBl_I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
             
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section-comments">
        <div className="container">
          <div className="comments">
            <h2>Кардарлардын сын-пикирлери</h2>
            <p className="comments-p">
              Сиздин пикириңизди угуу биз үчүн маанилүү
            </p>
          </div>


          <div className="otzyv">
            <div className="boxes-comments">
              <div className="box-comments"></div>
              <div className="ellipse">
                <img src={Ellipse} alt="" />
              </div>
              <div className="user-icon">
                <img src={User} alt="" />
              </div>
            </div>

            <div className="boxes-comments">
              <div className="box-comments"></div>
              <div className="ellipse">
                <img src={Ellipse} alt="" />
              </div>
              <div className="user-icon">
                <img src={User} alt="" />
              </div>
            </div>

            <div className="boxes-comments">
              <div className="box-comments"></div>
              <div className="ellipse">
                <img src={Ellipse} alt="" />
              </div>
              <div className="user-icon">
                <img src={User} alt="" />
              </div>
            </div>
          </div>

          <div className="btn-comments">
                <button className="btn-oy" onClick={() => setShowModal(true)}> 
                 Ой-пикир калтыруу</button>{showModal && <Modal setShowModal={setShowModal}/>}

            </div>

         
        </div>
      </section> */}
    </div>
  );
};

export default CommentsPage;
