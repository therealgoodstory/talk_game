import React, { useState, useLayoutEffect } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";

const App = () => {
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
  ), [state]);

  return (
    <div>
      <div>
        <Header />
        <div className={sidebar}>
          <Sidebar />
        </div>
      </div>
      <div className="page">
        <div className={page}>
          <Home />
          <button type="button" onClick={onClick}>
            open
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
