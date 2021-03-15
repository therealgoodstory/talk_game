import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ImportTask from "./importTask";
import InputTask from "./inputTask";

const CreateTaskPage = () => {
  const state = useSelector((s) => s.sidebar.id);

  const [style, setStyle] = useState("");
  const [statePage, setStatePage] = useState(true);

  useEffect(() => (
    state === 1
      ? setStyle("page__close")
      : setStyle("page__open")
  ), [state]);

  const clickCreate = () => (statePage === false ? setStatePage(true) : null);
  const clickInput = () => (statePage === true ? setStatePage(false) : null);
  const handleClick = (e) => (e.key === "n" ? console.log("click") : null);

  return (
    <div className="page">
      <div className={style}>
        <nav className="button-task">
          <div
            type="button"
            onClick={clickCreate}
            onKeyDown={handleClick}
            tabIndex={0}
            role="button"
            className="button-border"
          >
            <span className={statePage === true ? "font-page title" : "font-page title-on"}>
              Создание задачи
            </span>
          </div>
          <div
            type="button"
            onClick={clickInput}
            onKeyDown={handleClick}
            tabIndex={0}
            role="button"
            className="button-border import"
          >
            <span className={statePage === true ? "font-page title-on" : "font-page title"}>
              Импорт
            </span>
          </div>
          <canvas className={statePage === true ? "canvas" : "canvas-on"} />
        </nav>
        <div>{statePage === true ? <InputTask /> : <ImportTask />}</div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
