import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select";
import MainButton from "./mainButton";

const InputTask = () => {
  const [nameTask, setNameTask] = useState("");
  const [nameTaskStyle, setNameTaskStyle] = useState("input");
  const [type, setType] = useState("");
  const [selectStyle, setSelectStyle] = useState("react-select");
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(1);
  }, []);

  const validation = () => {
    if (nameTask.length === 0) {
      setNameTaskStyle("red");
    } else {
      setNameTaskStyle("input");
    }
    if (type === "") {
      setSelectStyle("react-select--red");
    } else {
      setSelectStyle("react-select");
    }
  };

  const onClick = () => validation();

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
    <div className="page__input">
      <div className="page__size">
        <span className="font-page page__name">Тип работ</span>
        <AsyncSelect
          classNamePrefix={selectStyle}
          className="select"
          options={options}
          placeholder="Выберите тип работ"
          onChange={(e) => setType(e)}
        />
      </div>
    </div>
  );
  const atribute1 = (
    <AsyncSelect
      classNamePrefix="react-select"
      className="select"
      options={options}
    />
  );
  const atribute2 = (
    <AsyncSelect
      classNamePrefix="react-select"
      className="select"
      options={options}
    />
  );

  const atribute3 = (
    <AsyncSelect
      classNamePrefix="react-select"
      className="select"
      options={options}
    />
  );
  return (
    <form>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <input
          className={nameTaskStyle}
          onChange={(e) => setNameTask(e.target.value)}
        />
      </div>
      {state === 1 ? select : null}
      <div className="page__atribute">
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          {state === 1 ? atribute1 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          {state === 1 ? atribute2 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          {state === 1 ? atribute3 : null}
        </div>
      </div>
      <div className="page__input">
        <span className="page__name">Описание</span>
        <textarea className="textarea" />
      </div>
      <MainButton onClick={onClick} />
      {JSON.stringify(type)}
    </form>
  );
};
export default InputTask;
