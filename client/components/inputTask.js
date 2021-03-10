import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select";

const InputTask = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(1);
  }, []);
  const options = [
    {
      label: "Group 1",
      options: [
        { label: "11231323123", value: "value_1" },
        { label: "2123123123", value: "value_2" },
      ],
    },
    {
      label: "Group 2",
      options: [
        { label: "31231233", value: "value_3" },
        { label: "4123123", value: "value_4" },
      ],
    },
    {
      label: "Group 3",
      options: [
        { label: "51231233", value: "value_5" },
        { label: "6sdffs", value: "value_6" },
      ],
    },
  ];
  // setTimeout(() => setState(1), 100);

  const select = (
    <div className="page__input">
      <div className="page__size">
        <span className="font-page page__name">Тип работ</span>
        <AsyncSelect
          classNamePrefix="react-select"
          className="select"
          options={options}
          placeholder="Выберите тип работ"
          onChange={(e) => setSelectedOption(e)}
        />
      </div>
    </div>
  );
  const atribute1 = (
    <AsyncSelect
      classNamePrefix="react-select"
      className="select"
      options={options}
      onChange={(e) => setSelectedOption(e)}
    />
  );
  const atribute2 = (
    <AsyncSelect
      classNamePrefix="react-select"
      className="select"
      options={options}
      onChange={(e) => setSelectedOption(e)}
    />
  );

  const atribute3 = (
    <AsyncSelect
      classNamePrefix="react-select"
      className="select"
      options={options}
      onChange={(e) => setSelectedOption(e)}
    />
  );
  return (
    <form>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <input className="input" />
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
      {JSON.stringify(selectedOption)}
    </form>
  );
};
export default InputTask;
