import React from "react";
import { GrFormClose } from "react-icons/gr";
import "./ModalTest.css";



const ModalTest = ({ setModalTest, userData }) => {
  console.log("userData: ", userData);
  return (
    <>
      <div className="wrapper-modalTest">
        <div className="single-modalTest">
          <GrFormClose
            style={{
              cursor: "pointer",
              marginLeft: "420px",
              marginTop: "10px",
              fontSize: "30px",
            }}
            onClick={() => {
              setModalTest(false);
            }}
          />
          
          <div className="box-zayv">
            <h3 className="test-logo">{t("Спасибо за заявку")}</h3>
            <div className="prob"></div>
            <p className="p-modalTest">{t("Я вам перезвоню и уточну удобное время для пробного урока")}</p>
            <button className="btn-ok"  onClick={() => {
              setModalTest(false);
            }}>ОК!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTest;
