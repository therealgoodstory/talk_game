import React, { useState, useEffect, useRef } from "react";
import ReactSelect, { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from 'react-redux'
import * as yup from "yup";
import {
  customStyles,
  workerStyles,
  writeOffAccountStyle,
  writeOffAccount,
  writeOffAccountValue,
  typePalStyle,
  currencyStyles,
  typePalStyleValue,
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
    label: yup.string().required(),
    value: yup.string(),
  }),
  currency: yup.number().test((val) => val > 0),
  typePal: yup.object({
    label: yup.string().required(),
    value: yup.string(),
  }),
  howmany: yup.number(),
});

const AtrLabel = ({ label, select, errors }) => (
  <div className="page__size">
    <span className="font-page page__name">{label}</span>
    {select}
    {errors}
  </div>
);

const animationSpiner = (
  <svg className="spinner" viewBox="0 0 50 50">
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </svg>
)

const InputTask = () => {
  const [load, setLoad] = useState(0);
  const [data, setData] = useState(null);
  const [workerEmail, setWorkerEmail] = useState("null");
  const [submit, setSummit] = useState("button");
  const [method, setMethod] = useState({ currency: [""] })
  const [stateCurrence, setStateCurrence] = useState(true)
  const [currence, setCurrence] = useState(["USD"])
  const [amountCredited, setAmountCredited] = useState("")
  const [totalScore, setTotalScore] = useState("")
  const [score, setScore] = useState(0)

  useEffect(() => setLoad(1), []);

  useEffect(() => (method.currency[0] === "" ? setCurrence(["USD"]) : setCurrence(method.currency)), [method])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setStateCurrence(true)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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

  const Currency = () => (
    stateCurrence === false ? setStateCurrence(true) : setStateCurrence(false)
  )

  const selectCurrence = (e) => {
    setStateCurrence(true)
    setCurrence([e])
  }
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
    { label: ["Vitaliy Vyatkin", "test@gmail.com"], value: "1" },
    { label: ["Ivanov Ivan", "qqqqq@gmail.com"], value: "2" },
  ];

  const writeOfAccountScore = [
    { label: ["USD", "1500"], value: "1", currency: "USD" },
    { label: ["RUB", "1233.123"], value: "2", currency: "RUB" },
  ];

  const userCard = useSelector((s) => s.userCard.cards)
  // карта списания валюта списания деньги объект карты
  // console.log([score.currency, currence[0], amountCredited, method])

  const commission = (func, fix, result, act, money) => {
    if (fix[0].condition === 0 && (money * 1) === fix[0].amount) {
      func(act)
    } else if (fix[0].condition === 1 && (money * 1) < fix[0].amount) {
      func(act)
    } else if (fix[0].condition === 2 && (money * 1) <= fix[0].amount) {
      func(act)
    } else if (fix[0].condition === 3 && (money * 1) > fix[0].amount) {
      func(act)
    } else if (fix[0].condition === 4 && (money * 1) >= fix[0].amount) {
      func(act)
    } else if (fix[0].condition === 5) {
      func(act)
    } else {
      func(result.toFixed(2))
    }
  }

  useEffect(() => {
    if (method.currency[0] !== "") {
      const percent = method.fees.filter(({ type }) => type === 'percent')[0].value
      const fix = method.fees.filter(({ type }) => type === 'fix')
      const result = (amountCredited * 1) + (amountCredited * percent)
      if (fix.length !== 0 && amountCredited !== "") {
        const act = (result + (fix[0].value[currence[0]])).toFixed(2)
        commission(setTotalScore, fix, result, act, amountCredited)
      } else if (amountCredited !== "") {
        setTotalScore(result)
      }
    }
  }, [amountCredited, currence])

  useEffect(() => {
    if (method.currency[0] !== "") {
      // const percent = method.fees.filter(({ type }) => type === 'percent')[0].value
      // const result = (totalScore / (percent + 1))
      console.log([amountCredited, totalScore])
      // const percent = method.fees.filter(({ type }) => type === 'percent')[0].value
      // const fix = method.fees.filter(({ type }) => type === 'fix')
      // const result = (totalScore / (percent + 1))
      // if (fix.length !== 0) {
      //   const act = (result - (fix[0].value[currence[0]])).toFixed(2)
      //   commission(setAmountCredited, fix, result, act, result)
      // } else {
      //   setAmountCredited(result)
      // }
    }
  }, [totalScore])

  const WorkerStyle = ({ children, ...props }) => {
    const manyChildren = (
      <components.Option {...props}>
        <div className="col">
          <div className="bold">{children[0]}</div>
          <div className="italic">{children[1]}</div>
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
          <div className="bold">{children[0]}</div>
          <div className="italic">{children[1]}</div>
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
      control={control}
      placeholder={<span className="placeholder">Выберите тип работ</span>}
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
      placeholder={<span className="placeholder">Выберите атрибут</span>}
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
      placeholder={<span className="placeholder">Выберите атрибут</span>}
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
      placeholder={<span className="placeholder">Выберите атрибут</span>}
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

  const validateMethod = () => (method.currency[0] !== '' ? "" : "react-select")
  const errorMethod = () => (method.currency[0] === '' ? <p className="error-message">Заполните поле</p> : "")
  const validateMethodScore = () => (typeof (score) === "object" ? "" : "react-select")
  const errorMethodScore = () => (typeof (score) !== "object" ? <p className="error-message">Заполните поле</p> : "")

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
              placeholder="Введите название задачи"
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
              placeholder={<span className="placeholder">Выберите исполнителя</span>}
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
          errors={errors.writeOfAccount !== undefined ? errorMethodScore() : ""}
          select={(
            <ReactSelect
              name="writeOfAccount"
              placeholder={<span className="placeholder">Выберите счёт списания</span>}
              onChange={(value) => setScore(value)}
              options={writeOfAccountScore}
              components={{ Option: writeOffAccount, SingleValue: writeOffAccountValue }}
              styles={writeOffAccountStyle}
              defaultValue=""
              classNamePrefix={errors.writeOfAccount !== undefined ? validateMethodScore() : ""}
              rules={register}
            />
          )}
          label="Счёт списания"
        />
        <AtrLabel
          errors={errors.typePal !== undefined ? errorMethod() : ""}
          select={(
            <ReactSelect
              name="typePal"
              rules={register}
              placeholder={<span className="placeholder">Выберите способ оплаты</span>}
              onChange={(e) => setMethod(e)}
              options={userCard}
              components={{ Option: typePalStyle, SingleValue: typePalStyleValue }}
              styles={currencyStyles}
              defaultValue=""
              classNamePrefix={errors.typePal !== undefined ? validateMethod() : ""}
              onClick={() => stateCurrence(true)}
            />
          )}
          label="Способ оплаты"
        />
        <AtrLabel
          errors={errors.currency && errorMesage}
          select={(
            <div className={errors.currency !== undefined ? "border-error row" : "row"}>
              <input
                className="input-many input"
                type="number"
                name="currency"
                ref={register}
                onChange={(e) => setAmountCredited(e.target.value)}
                min="0"
                placeholder="Введите сумму зачисления"
                value={amountCredited}
              />
              <div ref={wrapperRef} className="col">
                <button className="currencyMain" onClick={Currency} type="button" onKeyDown={() => console.log("open")}>
                  {currence[0]}
                </button>
                {stateCurrence ? "" : (
                  <div className="col currencyMenu">
                    {method.currency[0] !== "" ? method.currency.map((currency) => (
                      <button
                        key={currency}
                        onClick={() => selectCurrence(currency)}
                        onKeyDown={() => console.log("open")}
                        type="button"
                        className="currency"
                      >
                        {currency}
                      </button>
                    )) : ""}
                  </div>
                )}
              </div>
            </div>
          )}
          label="Сумма зачисления"
        />
        <AtrLabel
          errors=""
          select={(
            <div className="row">
              <input
                placeholder="Введите сумму"
                name="howmany"
                className="input-result"
                ref={register}
                onChange={(e) => setTotalScore(e.target.value)}
                value={totalScore}
              />
              <div className="currencyResult">
                {currence[0]}
              </div>
            </div>
          )}
          label="Сумма списания"
        />
      </div>
      <div className="margin" />
      <section className="col result">
        <span>{`Комиссия сервиса ${123}`}</span>
        <br />
        <span>{`Сумма списания расчитана по курсу${2 + 2}`}</span>
        <span>В момент оплаты задачи курс может измениться</span>
      </section>
      <div className="animation-container">
        <input
          type={submit}
          className="main-button"
          onClick={onClick}
          value=""
        />
        {animationSpiner}
      </div>
    </form>
  );
};

export default InputTask;
