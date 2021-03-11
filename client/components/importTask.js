import React, { useState } from "react";
import * as XLSX from "xlsx";
import MainButton from "./mainButton";

const ImportTask = () => {
  const [items, setItems] = useState([]);
  const [nameFile, setNameFile] = useState("Выберите файл");
  const readExel = (file) => {
    const promise = new Promise((res, rej) => {
      const fileReader = new global.FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        res(data);
      };

      fileReader.onerror = (error) => {
        rej(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  const onChange = (e) => {
    const file = e.target.files[0]
    readExel(file)
    setNameFile(file.name)
  }

  const onClick = () => {
    console.log('click import')
  }
  console.log(items)

  return (
    <div className="import">
      <span className="input-title">
        Вы можете импортировать список задач из XLS или CSV файла
      </span>
      <div className="input-field">
        <label htmlFor="upload" className="label">
          {nameFile === "Выберите файл" ? nameFile : `Файл : ${nameFile}` }
          <input
            type="file"
            className="file__input"
            accept=".xls, .xlsx, .csv"
            id="upload"
            onChange={onChange}
          />
        </label>
        <MainButton onClick={onClick} />
      </div>
    </div>
  );
};

export default ImportTask;
