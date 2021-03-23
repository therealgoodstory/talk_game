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
  writeOffAccountValue,
  currencyStyles,
} from "./module.js/select";

/* eslint-disable react/jsx-props-no-spreading */
/* eslint react/forbid-prop-types: 0 */
const schema = yup.object().shape({
  taskName: yup.string().required(),
  atr1: yup.object({
    label: yup.string().test((val) => val.length > 0),
    value: yup.string(),
  }),
  atr2: yup.object({
    label: yup.string().test((val) => val.length > 0),
    value: yup.string(),
  }),
  atr3: yup.object({
    label: yup.string().test((val) => val.length > 0),
    value: yup.string(),
  }),
  type: yup.object({
    label: yup.string().test((val) => val.length > 0),
    value: yup.string(),
  }),
  description: yup.string().required(),
  workerEmail: yup.object({
    label: yup.lazy((val) => (Array.isArray(val)
      ? yup.array().of(yup.string())
      : yup.string().email().required())),
    value: yup.string(),
  }),
  writeOfAccount: yup.object({
    label: yup.array().of(yup.string()),
    value: yup.string(),
  }),
});

const AtrLabel = ({ label, select, errors }) => (
  <div className="page__size">
    <span className="font-page page__name">{label}</span>
    {select}
    {errors}
  </div>
);

const InputTask = () => {
  const [load, setLoad] = useState(0);
  const [data, setData] = useState(null);
  const [workerEmail, setWorkerEmail] = useState("null");
  const [submit, setSummit] = useState("button");

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
    setSummit("submit");
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
    { label: ["Sasds", "test@gmail.com"], value: "test@gmail.com", nameWorker: "test@gmail.com" },
    { label: ["Sasdas", "qqqqq@gmail.com"], value: "qqqqq@gmail.com", nameWorker: "qqqqq@gmail.com" },
  ];

  const money = [
    { label: "USD", value: "1" },
    { label: "EUR", value: "2" },
    { label: "RUB", value: "3" },
  ];

  const WorkerStyle = ({ children, ...props }) => {
    const manyChildren = (
      <components.Option {...props}>
        <div className="col">
          <div className="bold">{props.data.nameWorker}</div>
          <div>{children[1]}</div>
        </div>
      </components.Option>
    );
    const oneChildren = (
      <components.Option {...props}>
        <div className="center row">
          <span>{workerEmail}</span>
          <span className="left italics">Получит приглашение</span>
        </div>
      </components.Option>
    );
    return children.length === 1 ? oneChildren : manyChildren;
  };

  const singleValue = ({ children, ...props }) => {
    const manyChildren = (
      <components.Option {...props} className="email-worker">
        <div>
          <div className="bold">{props.data.nameWorker}</div>
          <div>{children}</div>
        </div>
      </components.Option>
    )
    const oneChildren = (
      <components.Option {...props} className="email-worker">
        <div className="row center-option">
          <span>{children}</span>
          <span className="left italics">Получит приглашение</span>
        </div>
      </components.Option>
    )
    return typeof (children) === "string" ? oneChildren : manyChildren;
  }

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

  console.log(data);

  return (
    <form onSubmit={handleSubmit((info) => setData(info))}>
      <div className="page__input">
        <AtrLabel
          errors={errors.taskName && errorMesage}
          select={(
            <input
              name="taskName"
              className={errors.taskName === undefined ? "input" : "input-err"}
              ref={register}
            />
          )}
          label="Название задачи*"
        />
        <AtrLabel
          errors={errors.type && errorMesage}
          select={load === 1 ? select : null}
          label="Тип работ"
        />
      </div>
      <div className="page__atribute">
        <AtrLabel
          errors={errors.atr1 && errorMesage}
          select={load === 1 ? atribute1 : ""}
          label="Атрибут1"
        />
        <AtrLabel
          errors={errors.atr2 && errorMesage}
          select={load === 1 ? atribute2 : ""}
          label="Атрибут2"
        />
        <AtrLabel
          errors={errors.atr3 && errorMesage}
          select={load === 1 ? atribute3 : ""}
          label="Атрибут3"
        />
      </div>
      <div className="page__input">
        <AtrLabel
          errors={errors.description && errorMesage}
          select={(
            <textarea
              ref={register}
              name="description"
              className={errors.description === undefined ? "textarea" : "textarea-err"}
            />
          )}
          label="Описание"
        />
      </div>
      <div className="hr" />
      <div className="page__input-small">
        <AtrLabel
          errors={errors.workerEmail && errorMesage}
          select={(
            <Controller
              name="workerEmail"
              styles={workerStyles}
              control={control}
              options={optionsWorker}
              components={
                { Option: WorkerStyle, SingleValue: singleValue }
              }
              as={CreatableSelect}
              backspaceRemovesValue="true"
              formatCreateLabel={() => ":"}
              onInputChange={handleInputChange}
              rules={register}
              classNamePrefix={errors.workerEmail === undefined ? "" : "react-select"}
            />
          )}
          label="Исполнитель"
        />
        <AtrLabel
          errors={errors.writeOfAccount && errorMesage}
          select={(
            <Controller
              control={control}
              name="writeOfAccount"
              as={ReactSelect}
              options={optionsWorker}
              rules={register}
              components={{ Option: writeOffAccount, SingleValue: writeOffAccountValue }}
              styles={writeOffAccountStyle}
              defaultValue=""
              classNamePrefix={errors.writeOfAccount === undefined ? "" : "react-select"}
            />
          )}
          label="Счёт списания"
        />
        <AtrLabel
          errors={errors.typePal && errorMesage}
          select={(
            <Controller
              name="typePal"
              styles={customStyles}
              control={control}
              options={options}
              as={ReactSelect}
              rules={register}
              defaultValue=""
              classNamePrefix={errors.typePal === undefined ? "" : "react-select"}
            />
          )}
          label="Способ оплаты"
        />
        <AtrLabel
          errors={errors.currency && errorMesage}
          select={(
            <div className="custom-input row">
              <input className="input-many" type="number" name="currency" />
              <ReactSelect
                className="input-button"
                options={money}
                styles={currencyStyles}
                isSearchable={false}
                defaultValue={{ label: "RUB", value: "test@gmail.com" }}
              />
            </div>
          )}
          label="Сумма зачисления"
        />
        <AtrLabel
          errors={errors.howmany && errorMesage}
          select={(
            <Controller
              name="howmany"
              options={options}
              rules={register}
              styles={customStyles}
              control={control}
              as={ReactSelect}
              defaultValue=""
              classNamePrefix={errors.howmany === undefined ? "" : "react-select"}
            />
          )}
          label="Сумма списания"
        />
      </div>
      <div className="margin" />
      <input
        type={submit}
        className="main-button"
        onClick={onClick}
        value="Отправить"
      />
    </form>
  );
};

export default InputTask;
