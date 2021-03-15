import React from "react";
import PropTypes from "prop-types";

const RunningTitle = ({ style }) => {
  const table = ["ID", "НАЗВАНИЕ", "СУММА", "МЕТОД", "ДЕДЛАЙН", "СТАТУС"];
  return (
    <div className="page">
      <div className={style}>
        <div className="task-description title-alltask">
          {table.map((title) => (
            <div key={title}>{title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

RunningTitle.propTypes = {
  style: PropTypes.string.isRequired,
};

export default RunningTitle;
