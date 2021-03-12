import React, { useState, useEffect } from "react";
import Select from "react-select";
import MainButton from "./mainButton";

const InputTask = () => {
  const [type, setType] = useState("");
  const [load, setLoad] = useState(0);
  const [typeStyle, setTypeStyle] = useState("");

  const [atr1, setAtr1] = useState("");
  const [atr2, setAtr2] = useState("");
  const [atr3, setAtr3] = useState("");

  const [atr1Style, setAtr1Style] = useState("");
  const [atr2Style, setAtr2Style] = useState("");
  const [atr3Style, setAtr3Style] = useState("");

  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  const [inputStyle, setInputStyle] = useState("input");
  const [textAreaStyle, setTextAreaStyle] = useState("textarea");

  const [error1, setError1] = useState(0);
  const [error2, setError2] = useState(0);
  const [error3, setError3] = useState(0);
  const [error4, setError4] = useState(0);
  const [error5, setError5] = useState(0);
  const [error6, setError6] = useState(0);

  useEffect(() => setLoad(1), []);
  useEffect(() => {
    setInputStyle("input");
    setError1(0);
  }, [input.length]);
  useEffect(() => {
    setTypeStyle("");
    setError2(0);
  }, [type.length]);
  useEffect(() => {
    setAtr1Style("");
    setError3(0);
  }, [atr1.length]);
  useEffect(() => {
    setAtr2Style("");
    setError4(0);
  }, [atr2.length]);
  useEffect(() => {
    setAtr3Style("");
    setError5(0);
  }, [atr3.length]);
  useEffect(() => {
    setTextAreaStyle("textarea");
    setError6(0);
  }, [textArea.length]);

  const validation = () => {
    if (input.length === 0) {
      setInputStyle("input-err");
      setError1(1);
    }
    if (type.length === 0) {
      setTypeStyle("react-select");
      setError2(1);
    }
    if (atr1.length === 0) {
      setAtr1Style("react-select");
      setError3(1);
    }
    if (atr2.length === 0) {
      setAtr2Style("react-select");
      setError4(1);
    }
    if (atr3.length === 0) {
      setAtr3Style("react-select");
      setError5(1);
    }
    if (textArea.length === 0) {
      setTextAreaStyle("textarea-err");
      setError6(1);
    }
  }

  const onClick = () => {
    validation()
    return error1 + error2 + error3 + error4 + error5 + error6 === 0 ? console.log('ok') : null
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "gray" : "black",
      height: 40,
      background: state.isFocused ? "#FBFDFF" : "white",
      paddingLeft: 60,
      fontFamily: "Semibold",
      fontSize: 12,
    }),
    groupHeading: (provided) => ({
      ...provided,
      color: "black",
      height: 40,
      background: "#F3F5F8",
      paddingLeft: 30,
      display: "flex",
      alignItems: "center",
      marginBottom: 0,
      fontFamily: "Semibold",
      fontSize: 12,
    }),
    group: (provided) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 7,
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 7,
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "blue" : "#D6DEE6",
      boxShadow: state.isFocused ? "blue" : "white",
      fontFamily: "Semibold",
      fontSize: 12,
      height: 45,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "white" : "gray",
      fontFamily: "Semibold",
      fontSize: 13,
    }),
  };

  const options = [
    {
      label: "Group 1",
      options: [
        { label: "11231323123", value: "value_1" },
        { label: "2123123123", value: "value_2" },
      ],
    },
  ];

  const select = (
    <Select
      classNamePrefix={typeStyle}
      options={options}
      placeholder="Выберите тип работ"
      onChange={(e) => setType(e)}
      styles={customStyles}
    />
  );
  const atribute1 = (
    <Select
      options={options}
      styles={customStyles}
      classNamePrefix={atr1Style}
      onChange={(e) => setAtr1(e)}
    />
  );
  const atribute2 = (
    <Select
      options={options}
      styles={customStyles}
      classNamePrefix={atr2Style}
      onChange={(e) => setAtr2(e)}
    />
  );
  const atribute3 = (
    <Select
      options={options}
      styles={customStyles}
      classNamePrefix={atr3Style}
      onChange={(e) => setAtr3(e)}
    />
  );

  return (
    <form>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <span className={error1 === 1 ? "error-message" : "error-message-on"}>
          Заполните это поле
        </span>
        <input
          onChange={(e) => setInput(e.target.value)}
          className={inputStyle}
        />
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="font-page page__name">Тип работ</span>
          <span className={error2 === 1 ? "error-message" : "error-message-on"}>
            Заполните это поле
          </span>
          {load === 1 ? select : null}
        </div>
      </div>
      <div className="page__atribute">
        <div className="page__size">
          <span className="font-page page__name">Атрибут1</span>
          <span className={error3 === 1 ? "error-message" : "error-message-on"}>
            Заполните это поле
          </span>
          {load === 1 ? atribute1 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут2</span>
          <span className={error4 === 1 ? "error-message" : "error-message-on"}>
            Заполните это поле
          </span>
          {load === 1 ? atribute2 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут3</span>
          <span className={error5 === 1 ? "error-message" : "error-message-on"}>
            Заполните это поле
          </span>
          {load === 1 ? atribute3 : null}
        </div>
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="page__name">Описание</span>
          <span className={error6 === 1 ? "error-message" : "error-message-on"}>
            Заполните это поле
          </span>
          <textarea
            className={textAreaStyle}
            onChange={(e) => setTextArea(e.target.value)}
          />
        </div>
      </div>
      <MainButton onClick={onClick} />
    </form>
  );
};
export default InputTask;
