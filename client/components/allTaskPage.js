import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FilterTask from "./filterTask";
import RunningTitle from "./runningTitle";
import Task from "./task";

const AllTaskPage = () => {
  const state = useSelector((s) => s.sidebar.id);

  const [style, setStyle] = useState("");

  useEffect(() => (state === 1 ? setStyle("page__close") : setStyle("page__open")), [state]);

  const tasks = {
    "01.2020": [
      {
        data: "01.2021",
        id: 1,
        nameTask: "task",
        workerName: "Vasya",
        workerEmail: "test@gmail.com",
        money: 123,
        method: "asd",
        deadLine: "12:23:123",
        status: "activ",
      },
      {
        data: "01.2021",
        id: 1,
        nameTask: "task",
        workerName: "Vasya",
        workerEmail: "test@gmail.com",
        money: 123,
        method: "asd",
        deadLine: "12:23:123",
        status: "activ",
      },
    ],
    "02.2020": [
      {
        data: "02.2021",
        id: 1,
        nameTask: "task",
        workerName: "Vasya",
        workerEmail: "test@gmail.com",
        money: 123,
        method: "asd",
        deadLine: "12:23:123",
        status: "activ",
      },
    ],
  };

  return (
    <div>
      <div className="page">
        <div className={`main-title ${style}`}>
          <span className="main-title__size">Задачи</span>
          <span>Список всех созданных задач</span>
        </div>
      </div>
      <FilterTask style={style} />
      <RunningTitle style={style} />
      {Object.keys(tasks).map((data) => (
        <Task data={data} key={data} style={style} />
      ))}
    </div>
  );
};

export default AllTaskPage;
