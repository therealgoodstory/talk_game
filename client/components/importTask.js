import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useForm } from "react-hook-form";

const ImportTask = () => {
  const [items, setItems] = useState([]);
  const [nameFile, setNameFile] = useState("Выберите файл");
  const [validateForm, setValidateForm] = useState(0);
  const [editForm, setEditForm] = useState(0);
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

  const { register, errors, handleSubmit } = useForm();

  const onChange = (e) => {
    const file = e.target.files[0];
    readExel(file);
    setNameFile(file.name);
  };

  const onClick = () => {
    if (Object.keys(editForm) > 2) {
      setValidateForm(0);
    }
    if (Object.keys(editForm) < 2) {
      setValidateForm(1);
    }
  };

  const validations = () => items.map((task) => {
    const email = task["Email Исполнителя"].length > 0
    const deadline = task["Дедлайн"].length > 0
    const name = task["Имя Фамилия"].length > 0
    const nameTask = task["Название задачи"].length > 0
    const accountNumber = task["Номер счета"].length > 0
    const telephone = task["Номер телефона в межд. Формате"].length > 0
    const description = task["Описание"].length > 0
    const method = task["Способ"].length > 0
    const price = task["Стоимость задачи"].length > 0
    const result = [email, deadline, name, nameTask,
      accountNumber, telephone, description, method, price]
      .filter((error) => error === false)
    return {
      ...task,
      "Email Исполнителя": email,
      Дедлайн: deadline,
      "Имя Фамилия": name,
      "Название задачи": nameTask,
      "Номер счета": accountNumber,
      "Номер телефона в межд. Формате": telephone,
      Описание: description,
      Способ: method,
      "Стоимость задачи": price,
      Errors: result.length,
    }
  })

  console.log(validations())
  const data = items.map((it, idx) => Object.keys(it).map((_, id) => `1${idx}${id}`));

  const editFormComponent = (
    <table className="table">
      <thead>head</thead>
      <tbody className="table-body">
        {items.map((task, idx) => (
          <tr key={task.id} className="column-table">
            {Object.keys(task).map((title, k) => {
              const keyName = data[idx][k];
              return (
                <td key={title} className="table-cell">
                  <input
                    className={
                      errors[keyName] === undefined ? "cell" : "error-cell"
                    }
                    name={keyName}
                    key={keyName}
                    defaultValue={title}
                    placeholder={title}
                    ref={register({ required: true, minLength: 3 })}
                  />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <form onSubmit={handleSubmit((info) => setEditForm(info))}>
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
          <button type="submit" className="main-button" onClick={onClick}>
            Отправить
          </button>
        </div>
      </div>
      <div className="border-table">
        {validateForm === 1 ? editFormComponent : null}
      </div>
    </form>
  );
};

export default ImportTask;
