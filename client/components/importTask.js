import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useForm } from "react-hook-form";

const ImportTask = () => {
  const [items, setItems] = useState([]);
  const [nameFile, setNameFile] = useState("Выберите файл");
  // const [validateForm, setValidateForm] = useState(0);
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

  console.log(items)

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
