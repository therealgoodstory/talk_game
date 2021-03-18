import React, { useState, useEffect } from "react";
import ReactSelect, { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { useForm, Controller } from "react-hook-form";

const InputTask = () => {
  const [load, setLoad] = useState(0);
  const [data, setData] = useState(null);
  // const [workerEmail, setWorkerEmail] = useState("");
  useEffect(() => setLoad(1), []);

  const {
    register,
    handleSubmit,
    control,
    errors,
  } = useForm();

  const onClick = () => {
    console.log(data);
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
  /* eslint-disable react/jsx-props-no-spreading */
  const WorkerStyle = ({ children, ...props }) => (
    <components.Option {...props}>
      <div className="col">
        <div>{children[0]}</div>
        <div>{children[1]}</div>
      </div>
    </components.Option>
  );

  const writeOffAccount = ({ children, ...props }) => (
    <components.Option {...props}>
      <div className="row">
        <div className="write-ff-logo">$</div>
        <div className="col">
          <div>{children[0]}</div>
          <div>{children[1]}</div>
        </div>
      </div>
    </components.Option>
  );

  const workerStyles = {
    ...customStyles,
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "gray" : "black",
      height: 45,
      width: 500,
      paddinfLeft: 15,
      background: state.isFocused ? "#FBFDFF" : "white",
      fontFamily: "Semibold",
      fontSize: 12,
    }),
  };

  const writeOffAccountStyle = {
    ...customStyles,
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "gray" : "black",
      height: 45,
      paddinfLeft: 15,
      background: state.isFocused ? "#FBFDFF" : "white",
      fontFamily: "Semibold",
      fontSize: 12,
      whiteSpace: "pre-wrap",
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

  const optionsWorker = [
    { label: ["vasya\n", "test@gmail.com"], value: "1" },
    { label: ["victor\n", "qqqqq@gmail.com"], value: "2" },
  ];

  const verificationRules = {
    length: { required: true, minLength: 2 },
    email: { required: true, pattern: /\d/g },
  };

  const select = (
    <Controller
      name="type"
      options={options}
      placeholder="Выберите тип работ"
      control={control}
      as={ReactSelect}
      rules={verificationRules.length}
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
      rules={verificationRules.length}
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
      rules={verificationRules.length}
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
      rules={verificationRules.length}
      defaultValue=""
      classNamePrefix={errors.atr3 === undefined ? "" : "react-select"}
    />
  );
  const errorMesage = <p className="error-message">Заполните поле</p>;
  // const handleInputChange = (inputValue = "") => {
  //   setWorkerEmail(inputValue);
  // };
  // console.log(`${workerEmail} adsadas`);

  console.log(data)
  return (
    <form onSubmit={handleSubmit((info) => setData(info))}>
      <div className="page__size page__input">
        <span className="font-page page__name">Название задачи*</span>
        <input
          name="taskName"
          className={errors.taskName === undefined ? "input" : "input-err"}
          ref={register(verificationRules.length)}
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
            ref={register(verificationRules.length)}
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
              isClearable
              styles={workerStyles}
              control={control}
              options={optionsWorker}
              components={{ Option: WorkerStyle }}
              as={CreatableSelect}
              // onInputChange={handleInputChange}
              rules={verificationRules.email}
              defaultValue=""
              classNamePrefix={errors.workerEmail === undefined ? "" : "react-select"}
            />
            {errors.workerEmail && <p className="error-message">Неверный Email</p>}
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
              rules={verificationRules.email}
              components={{ Option: writeOffAccount }}
              styles={writeOffAccountStyle}
              defaultValue=""
              classNamePrefix={errors.writeOfAccount === undefined ? "" : "react-select"}
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
              rules={verificationRules.length}
              defaultValue=""
              classNamePrefix={errors.typePal === undefined ? "" : "react-select"}
            />
            {errors.typePal && errorMesage}
          </div>
        </div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Сумма зачисления</span>
            <Controller
              name="many"
              options={options}
              rules={verificationRules.length}
              styles={customStyles}
              control={control}
              as={ReactSelect}
              defaultValue=""
              classNamePrefix={errors.many === undefined ? "" : "react-select"}
            />
            {errors.many && errorMesage}
          </div>
        </div>
        <div className="page__input-small">
          <div className="page__size">
            <span className="font-page page__name">Сумма списания</span>
            <Controller
              name="howmany"
              options={options}
              rules={verificationRules.length}
              styles={customStyles}
              control={control}
              as={ReactSelect}
              defaultValue=""
              classNamePrefix={errors.howmany === undefined ? "" : "react-select"}
            />
            {errors.howmany && errorMesage}
          </div>
        </div>
      </div>
      <div className="margin" />
      <input type="submit" className="main-button" onClick={onClick} />
    </form>
  );
};

export default InputTask;
