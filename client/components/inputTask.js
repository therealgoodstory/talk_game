import React, { useState, useEffect } from "react";
import ReactSelect, { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  customStyles,
  workerStyles,
  writeOffAccountStyle,
  writeOffAccount,
} from "./module.js/select";
/* eslint-disable react/jsx-props-no-spreading */
/* eslint react/forbid-prop-types: 0 */
const schema = yup.object().shape({
  taskName: yup.string().required(),
  atr1: yup.object({
    label: yup.string().test('len', 'Must be exactly 5 characters', (val) => val.length > 0),
    value: yup.string(),
  }),
  atr2: yup.object({
    label: yup.string().test('len', 'Must be exactly 5 characters', (val) => val.length > 0),
    value: yup.string(),
  }),
  atr3: yup.object({
    label: yup.string().test('len', 'Must be exactly 5 characters', (val) => val.length > 0),
    value: yup.string(),
  }),
  type: yup.object({
    label: yup.string().test('len', 'Must be exactly 5 characters', (val) => val.length > 0),
    value: yup.string(),
  }),
  description: yup.string().required(),
  workerEmail: yup.object({
    label: yup.string().email().required(),
    value: yup.string(),
  }),
});

const InputTask = () => {
  const [load, setLoad] = useState(0);
  const [data, setData] = useState(null);
  const [workerEmail, setWorkerEmail] = useState("null");
  const [submit, setSummit] = useState("button")
  const [many, setMany] = useState(-1)

  useEffect(() => setLoad(1), []);

  const {
    register,
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onClick = () => {
    setSummit("submit")
    console.log(data);
  };

  const options = [
    {
      label: "Group 1",
      options: [
        { label: "dasdasd", value: "value_1" },
        { label: "asdasdasd", value: "value_2" },
      ],
    },
  ];

  const optionsWorker = [
    { label: "test@gmail.com", value: "test@gmail.com", name: "dasds" },
    { label: "qqqqq@gmail.com", value: "qqqqq@gmail.com", name: "asdas" },
  ];

  const WorkerStyle = ({ children, ...props }) => {
    const manyChildren = (
      <components.Option {...props}>
        <div className="col">
          <div>{props.data.name}</div>
          <div className="bold">{children}</div>
        </div>
      </components.Option>
    );
    const oneChildren = (
      <components.Option {...props}>
        <div className="center row">
          <span>{workerEmail}</span>
          <span className="left">Получит приглашение</span>
        </div>
      </components.Option>
    );
    return children.length === 1 ? oneChildren : manyChildren;
  };

  const select = (
    <Controller
      name="type"
      options={options}
      placeholder="Выберите тип работ"
      control={control}
      as={ReactSelect}
      rules={register}
      styles={customStyles}
      defaultValue=""
      classNamePrefix={errors.type === undefined ? "" : "react-select"}
    />
  );

  const atribute1 = (
    <Controller
      name="atr1"
      options={options}
      styles={customStyles}
      control={control}
      rules={register}
      as={ReactSelect}
      defaultValue=""
      classNamePrefix={errors.atr1 === undefined ? "" : "react-select"}
    />
  );
  const atribute2 = (
    <Controller
      name="atr2"
      options={options}
      styles={customStyles}
      control={control}
      as={ReactSelect}
      rules={register}
      defaultValue=""
      classNamePrefix={errors.atr2 === undefined ? "" : "react-select"}
    />
  );
  const atribute3 = (
    <Controller
      name="atr3"
      options={options}
      styles={customStyles}
      control={control}
      as={ReactSelect}
      rules={register}
      defaultValue=""
      classNamePrefix={errors.atr3 === undefined ? "" : "react-select"}
    />
  );
  const errorMesage = <p className="error-message">Заполните поле</p>;
  const handleInputChange = (inputValue = "") => {
    setWorkerEmail(inputValue);
  };

  const changemany = () => setMany(many * -1)

  console.log(data);

  return (
    <form onSubmit={handleSubmit((info) => setData(info))}>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <input
          name="taskName"
          className={errors.taskName === undefined ? "input" : "input-err"}
          ref={register}
        />
        {errors.taskName && errorMesage}
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="font-page page__name">Тип работ</span>
          {load === 1 ? select : null}
          {errors.type && errorMesage}
        </div>
      </div>
      <div className="page__atribute">
        <div className="page__size">
          <span className="font-page page__name">Атрибут1</span>
          {load === 1 ? atribute1 : null}
          {errors.atr1 && errorMesage}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут2</span>
          {load === 1 ? atribute2 : null}
          {errors.atr2 && errorMesage}
        </div>
        <div className="page__size">
          <span className="font-page page__name">Атрибут3</span>
          {load === 1 ? atribute3 : null}
          {errors.atr3 && errorMesage}
        </div>
      </div>
      <div className="page__input">
        <div className="page__size">
          <span className="page__name">Описание</span>
          <textarea
            ref={register}
            name="description"
            className={
              errors.description === undefined ? "textarea" : "textarea-err"
            }
          />
          {errors.description && errorMesage}
        </div>
      </div>
      <div className="hr" />
      <div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Исполнитель</span>
            <Controller
              name="workerEmail"
              styles={workerStyles}
              control={control}
              options={optionsWorker}
              components={{ Option: WorkerStyle }}
              as={CreatableSelect}
              backspaceRemovesValue="true"
              formatCreateLabel={() => ":"}
              onInputChange={handleInputChange}
              rules={register}
              defaultValue=""
              classNamePrefix={
                errors.workerEmail === undefined ? "" : "react-select"
              }
            />
            {errors.workerEmail && errorMesage}
          </div>
        </div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Счёт списания</span>
            <Controller
              control={control}
              name="writeOfAccount"
              as={ReactSelect}
              options={optionsWorker}
              rules={register}
              components={{ Option: writeOffAccount }}
              styles={writeOffAccountStyle}
              defaultValue=""
              classNamePrefix={
                errors.writeOfAccount === undefined ? "" : "react-select"
              }
            />
            {errors.writeOfAccount && errorMesage}
          </div>
        </div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Способ оплаты</span>
            <Controller
              name="typePal"
              styles={customStyles}
              control={control}
              options={options}
              as={ReactSelect}
              rules={register}
              defaultValue=""
              classNamePrefix={
                errors.typePal === undefined ? "" : "react-select"
              }
            />
            {errors.typePal && errorMesage}
          </div>
        </div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Сумма зачисления</span>
            <div className="custom-input row">
              <input className="input-many" type="number" />
              <button className="input-button col" onClick={changemany} type="button">
                {many}
              </button>
            </div>
            {errors.many && errorMesage}
          </div>
        </div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Сумма списания</span>
            <Controller
              name="howmany"
              options={options}
              rules={register}
              styles={customStyles}
              control={control}
              as={ReactSelect}
              defaultValue=""
              classNamePrefix={
                errors.howmany === undefined ? "" : "react-select"
              }
            />
            {errors.howmany && errorMesage}
          </div>
        </div>
      </div>
      <div className="margin" />
      <input type={submit} className="main-button" onClick={onClick} value="Отправить" />
    </form>
  );
};

export default InputTask;
