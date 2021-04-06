import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useForm } from "react-hook-form";

const ImportTask = () => {
  const [items, setItems] = useState([]);
  const [nameFile, setNameFile] = useState("Выберите файл");
  const [validateForm, setValidateForm] = useState(0);
  // const [editForm, setEditForm] = useState(0);
  const readExel = (file) => {
    const reader = new global.FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = ({ target: { result } }) => {
      const wb = XLSX.read(result, { type: rABS ? "binary" : "array" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setItems(data);
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
    // fileReader.onload = (e) => {
    //   const bufferArray = e.target.result;
    //   const wb = XLSX.read(bufferArray, { type: "buffer" });
    //   const wsname = wb.SheetNames[0];
    //   const ws = wb.Sheets[wsname];
    //   const data = XLSX.utils.sheet_to_json(ws);
    //   res(data);
    // };
  };

  const { handleSubmit } = useForm();

  const onChange = (e) => {
    const file = e.target.files[0];
    readExel(file);
    setNameFile(file.name);
  };

  const result = items.filter((it) => Object.keys(it)[0][0] !== "_").reduce((acc, rec) => {
    acc.push({
      name: rec["Название задачи"] || "",
      typeId: rec["Id типа работ"] || "",
      attributes: [],
      desc: rec["Описание"] || "",
      worker: {
        email: rec["Email Исполнителя"] || "",
        id: "Id исполнителя в системе леопон",
      },
      payment: {
        chargeAccountId: rec["Id счета списания"] || "",
        methodId: rec["Id способа оплаты"] || "",
        accountNumber: rec["Номер счета"] || "",
        amount: rec["Стоимость задачи"] || "",
        currency: rec["Валюта зачисления"] || "",
        extra: {
          key1: "Значение",
          key2: "Значение2",
        },
      },
    })
    return acc
  }, [])

  const validation = (data) => {
    data.reduce((acc, rec) => {
      const moon = rec.payment.accountNumber.split("").map((it, id) => (id % 2 === 0 ? it * 2 : it))
        .map((it, id) => (id % 2 === 0 && it >= 10 ? +it.toString()[0] + +it.toString()[1] : it))
        .reduce((a, r) => +a + +r, 0)
      acc.push({
        name: rec.name.length > 0,
        typeId: rec.typeId > 0,
        attributes: [],
        desc: rec.desc.length > 0,
        worker: {
          email: (rec.worker.email).match(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/) !== null,
          id: "Id исполнителя в системе леопон",
        },
        payment: {
          chargeAccountId: rec.payment.chargeAccountId.length > 0,
          methodId: rec.payment.methodId.length > 0,
          accountNumber: rec.payment.accountNumber.length > 9 ? moon % 10 === 0 : false,
          amount: rec.payment.amount.length > 0,
          currency: rec.payment.currency.length > 0,
          extra: {
            key1: "Значение",
            key2: "Значение2",
          },
        },
      })
      setValidateForm(acc)
      return acc
    }, [])
  }

  useEffect(() => validation(result), [items])

  console.log(validateForm)

  return (
    <form onSubmit={handleSubmit((info) => console.log((info)))}>
      <div className="import">
        <span className="input-title">
          Вы можете импортировать список задач из XLS или CSV файла
        </span>
        <div className="input-field">
          <label htmlFor="upload" className="label">
            {nameFile === "Выберите файл" ? nameFile : `Файл : ${nameFile}`}
            <input
              type="file"
              className="file__input"
              accept=".xls, .xlsx, .csv"
              id="upload"
              onChange={onChange}
            />
          </label>
          <button type="submit" className="main-button">
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};

export default ImportTask;
