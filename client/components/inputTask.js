import React, { useState } from "react";
import Select from "react-select";

const InputTask = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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
  return (
    <form>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <input className="input" />
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="font-page page__name">Тип работ</span>
          <Select
            classNamePrefix="react-select"
            className="select"
            options={options}
            placeholder="Выберите тип работ"
            onChange={(e) => setSelectedOption(e)}
          />
        </div>
      </div>
      <div className="page__atribute">
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          <Select
            classNamePrefix="react-select"
            className="select"
            options={options}
            onChange={(e) => setSelectedOption(e)}
          />
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          <Select
            classNamePrefix="react-select"
            className="select"
            options={options}
            onChange={(e) => setSelectedOption(e)}
          />
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут</span>
          <Select
            classNamePrefix="react-select"
            className="select"
            options={options}
            onChange={(e) => setSelectedOption(e)}
          />
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
