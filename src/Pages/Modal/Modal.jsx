import React from "react";
import Comm from "../../components/Header/img/okurmen-logo 1.png";
// import { IoClose } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import "./Modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div>
      <div className="modal__wrapper" onClick={() => setShowModal(false)}>
        <div className="single__modal">
          <img className="modal__logo" src={Comm} alt="" />
          {/* <IoClose /> */}
          <form className="form__modal">

            <input className="cen" type="text" placeholder="Имя" />
            <p>
              
              <input
                className="input__surname cen"
                type="text"
                placeholder="Фамилия"
              />
            </p>
            <input
              className="input__comment cen"
              type="text"
              placeholder="напиши что-нибудь"
            />
          </form>

          <div className="btn__modal">
            <div>
              <button className="comment__modal">
            <AiOutlineMail style={{fontSize: "25px", paddingtop: "10px",  paddingLeft: "-10px", textAlign: "center"}}/>
                Оставить комментарий
              </button>
            </div>
            <button className="back__modal">
              <IoIosArrowBack style={{fontSize: "20px",}}/>
              Назад</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
