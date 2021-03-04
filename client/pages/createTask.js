import React, { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import ImportTask from "../components/importTask";
import InputTask from "../components/inputTask";
import Sidebar from "../components/sidebar";

const CreateTask = () => {
  const state = useSelector((s) => s.sidebar.id);

  const [style, setStyle] = useState("page__open");
  const [statePage, setStatePage] = useState(1);

  useLayoutEffect(() => (
    state === 1
      ? setStyle("page__close")
      : setStyle("page__open")
  ), [state]);

  const clickCreate = () => (statePage === -1 ? setStatePage(statePage * -1) : null);
  const clickInput = () => (statePage === 1 ? setStatePage(statePage * -1) : null);
  const handleClick = (e) => (e.key === "n" ? console.log("click") : null);

  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="page">
        <div className={style}>
          <nav className="button-task">
            <div type="button" onClick={clickCreate} onKeyDown={handleClick} tabIndex={0} role="button" className="button-border">
              <span className="font-page title">Создание задачи</span>
            </div>
            <div type="button" onClick={clickInput} onKeyDown={handleClick} tabIndex={0} role="button" className="button-border">
              <span className="font-page title">Импорт</span>
            </div>
          </nav>
          <div>{statePage === 1 ? <InputTask /> : <ImportTask />}</div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
