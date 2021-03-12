import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select";
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

  useEffect(() => setLoad(1), []);
  useEffect(() => setTypeStyle(""), [type.length]);
  useEffect(() => setAtr1Style(""), [atr1.length]);
  useEffect(() => setAtr2Style(""), [atr2.length]);
  useEffect(() => setAtr3Style(""), [atr3.length]);
  useEffect(() => setInputStyle("input"), [input.length]);
  useEffect(() => setTextAreaStyle("textarea"), [textArea.length]);

  const onClick = () => {
    if (type.length === 0) {
      setTypeStyle("react-select");
    }
    if (atr1.length === 0) {
      setAtr1Style("react-select");
    }
    if (atr2.length === 0) {
      setAtr2Style("react-select");
    }
    if (atr3.length === 0) {
      setAtr3Style("react-select");
    }
    if (input.length === 0) {
      setInputStyle("input-err");
    }
    if (textArea.length === 0) {
      setTextAreaStyle("textarea-err");
    }
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
    <AsyncSelect
      classNamePrefix={typeStyle}
      options={options}
      placeholder="Выберите тип работ"
      onChange={(e) => setType(e)}
      styles={customStyles}
    />
  );
  const atribute1 = (
    <AsyncSelect
      options={options}
      styles={customStyles}
      classNamePrefix={atr1Style}
      onChange={(e) => setAtr1(e)}
    />
  );
  const atribute2 = (
    <AsyncSelect
      options={options}
      styles={customStyles}
      classNamePrefix={atr2Style}
      onChange={(e) => setAtr2(e)}
    />
  );
  const atribute3 = (
    <AsyncSelect
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
        <span className="error-message-on">Заполните это поле</span>
        <input
          onChange={(e) => setInput(e.target.value)}
          className={inputStyle}
        />
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="font-page page__name">Тип работ</span>
          <span className="error-message-on">Заполните это поле</span>
          {load === 1 ? select : null}
        </div>
      </div>
      <div className="page__atribute">
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          <span className="error-message-on">Заполните это поле</span>
          {load === 1 ? atribute1 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          <span className="error-message-on">Заполните это поле</span>
          {load === 1 ? atribute2 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          <span className="error-message-on">Заполните это поле</span>
          {load === 1 ? atribute3 : null}
        </div>
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="page__name">Описание</span>
          <span className="error-message-on">Заполните это поле</span>
          <textarea
            className={textAreaStyle}
            onChange={(e) => setTextArea(e.target.value)}
          />
        </div>
      </div>
      <MainButton onClick={onClick} />
      {JSON.stringify(type)}
    </form>
  );
};
export default InputTask;