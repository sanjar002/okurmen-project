import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import ModalTest from "../modalTest/ModalTest";

import { useTranslation } from "react-i18next";
import "./ModalHome.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ModalHome = ({ setModal, index, setIndex }) => {
  const { t } = useTranslation();
  const [modalTest, setModalTest] = useState(false);
  const [undisable, setUndisable] = useState(true);
  const [answer, setAnswer] = useState({
    role: "",
    userAge: "",
    aboutIt: "",
    userAddress: "",
    userName: "",
    userPhone: "",
  });

  const question = [
    {
      title: t("Сиздин ишмердүүлүгүңүздүн чөйрөсү"),
      answerOptions: [
        { answerText: t("Окуучу") },
        { answerText: t("Студент") },
        { answerText: t("Ишкер") },
        { answerText: t("Мамлекеттик кызматкер") },
      ],
      name: "role",
    },

    {
      title: t("Сиздин жашыңыз"),
      name: "userAge",
      answerOptions: [
        { answerText: t("15-20 жаш") },
        { answerText: t("21-30 жаш") },
        { answerText: t("31-36 жаш") },
        { answerText: t("36 жаштан жогору") },
      ],
    },

    {
      title: t("Сиз буга чейин программалоону окудуңуз беле?"),
      name: "aboutIt",
      answerOptions: [{ answerText: t("Ооба") }, { answerText: t("Жок") }],
    },

    {
      title: t("Азыр каяктасыз?"),
      name: "userAddress",
      answerOptions: [
        { answerText: "Бишкек" },
        { answerText: "Ош" },
        { answerText: "Чүй" },
        { answerText: "Ысык-Кол" },
      ],
    },
    {
      name1: "userName",
      name2: "userPhone",
      answerOptions: [
        {
          name: "Атынызды калтырыныз",
          phone: "Номеринизди калтырыныз",
        },
      ],
    },
  ];

  if (index === 5) {
    return (
      modalTest && <ModalTest setModalTest={setModalTest} userData={answer} />
    );
  }

  const onChange = ({ target: { name, value } }) => {
    console.log("name: ", name);
    console.log("value: ", value);
    console.log(answer, "-----");
    setAnswer({ ...answer, [name]: value });
    setUndisable(false);
  };

  const setMyOtvet = ({ target: { innerText } }) => {};

  return (
    <div>
      <div className="modal__test">
        <div className="single__test">
          <GrFormClose
            style={{
              cursor: "pointer",
              marginLeft: "420px",
              marginTop: "10px",
              fontSize: "30px",
            }}
            onClick={() => setModal(false)}
          />

          <div className="main-wrapper">
            <h3 className="question-h3">{question[index].title} ? </h3>
            <div className="question-answer">
              {question[index]?.answerOptions.map((el) => {
                console.log("index: ", index);
                return (
                  <>
                    {index === 4 ? (
                      <div>
                        <h4
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          {el.name}
                        </h4>
                        <input
                          style={{
                            marginBottom: "20px",
                          }}
                          className="input-name test-modal"
                          type="text"
                          placeholder="Name"
                          name={question[index].name["1"]}
                          onChange={onChange}
                        />

                        <h4
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          {el.phone}
                        </h4>

                        <input
                          className="input-name"
                          type="text"
                          placeholder="Number"
                          name={question[index].name["2"]}
                          onChange={onChange}
                        />
                      </div>
                    ) : (
                      <div className="input-radio">
                        <div className="rwi">
                          {/* <input
                            className="accaent"
                            type="radio"
                            name={question[index].name}
                            onChange={onChange}
                            value={el.answerText}
                          />

                          <span className="span-radio" onClick={setMyOtvet}>
                            {el.answerText}
                          </span> */}

                          <FormControl>
                            {/* <FormLabel id="demo-radio-buttons-group-label">
                              Gender
                            </FormLabel> */}
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                              name={question[index].name}
                              onChange={onChange}
                              value={el.answerText}
                            >
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label=   {el.answerText}
                                onClick={setMyOtvet}
                              />
                            
                            </RadioGroup>
                          </FormControl>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>

          <button
            className="btn-fut"
            disabled={undisable}
            onClick={() => {
              setModalTest(true);
              // if (true) {
              setUndisable(true);
              setIndex((prevIndex) => prevIndex + 1);
              // }
            }}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalHome;
