import React from "react";
import PropTypes from "prop-types";

const Task = ({ style, data }) => {
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
    <div className="page">
      <div className={style}>
        <div className="task-title">
          {data}
        </div>
        {tasks[data].map(({
          id,
          nameTask,
          workerName,
          workerEmail,
          money,
          method,
          deadLine,
          status,
        }) => (
          <div key={id} className="task-description">
            <span>{id}</span>
            <span>{nameTask}</span>
            <div className="worker">
              <span>{workerName}</span>
              <span className="worker-email">{workerEmail}</span>
            </div>
            <span>{money}</span>
            <span>{method}</span>
            <span>{deadLine}</span>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Task.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Task;
