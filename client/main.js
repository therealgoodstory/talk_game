import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./main.scss";
import Home from "./pages/home";

const Main = () => {
  const [state, setState] = useState(-1);
  const [sidebar, setSideBar] = useState("sidebar__close");
  const [page, openPage] = useState("page__open");

  const onClick = () => setState(state * -1);

  useLayoutEffect(() => (
    page === "page__close"
      ? setSideBar("sidebar__close")
      : setSideBar("sidebar")
  ), [state]);
  useLayoutEffect(() => (
    page === "page__close"
      ? openPage("page__open")
      : openPage("page__close")
  ), [state, 1]);

  return (
    <div>
      <button type="button" onClick={onClick}>
        open
      </button>
      <div className="main">
        <Header />
        <div className={sidebar}>
          <Sidebar />
        </div>
      </div>
      <div className="page">
        <div className={page}>
          <Home />
        </div>
      </div>
    </div>
  );
};

const target = document.getElementById("root");

ReactDOM.render(<Main />, target);
