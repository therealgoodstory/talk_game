import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from 'react-select'
import * as yup from "yup";
import MainButton from "../components/mainButton";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

const Appp = () => {
  const [load, setLoad] = useState(0)
  useEffect(() => setLoad(1), [])
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
      styles={customStyles}
      options={options}
      placeholder="Выберите тип работ"
    />
  );
  const atribute1 = <Select options={options} styles={customStyles} />;
  const atribute2 = <Select options={options} styles={customStyles} />;
  const atribute3 = <Select options={options} styles={customStyles} />;

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <input />
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="font-page page__name">Тип работ</span>

          {load === 1 ? select : null}
        </div>
      </div>
      <div className="page__atribute">
        <div className="page__size">
          <span className="font-page page__name">Атрибут1</span>

          {load === 1 ? atribute1 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут2</span>

          {load === 1 ? atribute2 : null}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут3</span>

          {load === 1 ? atribute3 : null}
        </div>
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="page__name">Описание</span>

          <textarea />
        </div>
      </div>
      <MainButton />

      <input type="text" name="firstName" ref={register} />
      <p>{errors.firstName?.message}</p>

      <input type="text" name="age" ref={register} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Appp;
