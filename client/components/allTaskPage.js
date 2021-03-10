import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AllTaskPage = () => {
  const state = useSelector((s) => s.sidebar.id);

  const [style, setStyle] = useState("");

  useEffect(() => (
    state === 1
      ? setStyle("page__close")
      : setStyle("page__open")
  ), [state]);

  return (
    <div className="page">
      <div className={style}>all task</div>
    </div>
  );
};

export default AllTaskPage;
