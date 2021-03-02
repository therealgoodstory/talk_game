import React, { useState, useLayoutEffect } from "react";
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector((s) => s.sidebar.id);

  const [style, setStyle] = useState("page__open");

  useLayoutEffect(() => (
    state === 1
      ? setStyle("page__close")
      : setStyle("page__open")
  ), [state]);

  return <div className={style}>123</div>;
};

export default Home;
