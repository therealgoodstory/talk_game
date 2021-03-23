import React, { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Account from "./account";
import SideBarItems from "./sidebaritems";
import SidebarTasks from "./sidebarTasks";

const Sidebar = () => {
  const state = useSelector((s) => s.sidebar.id);

  const [style, setStyle] = useState("sidebar__open");
  const [menuStyle, setMenuStyle] = useState("sidebar__menu--open");

  useLayoutEffect(() => (
    state === 1
      ? setMenuStyle("sidebar__menu--close")
      : setMenuStyle("sidebar__menu--open")
  ), [state]);

  useLayoutEffect(() => (
    state === 1
      ? setStyle("sidebar__close")
      : setStyle("sidebar__open")
  ), [state]);

  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar__menu">
        <h5 className={menuStyle}>МЕНЮ</h5>
      </div>
      <nav className="onlyMobile">
        <div className={location.pathname === "/1" ? "select-menu" : "not-selected"}>
          <SideBarItems name="Каталог услуг" style={style} />
        </div>
        <div className={location.pathname === "/create" || location.pathname === "/task" ? "select-menu" : "not-selected"}>
          <SidebarTasks name="Задачи" style={style} />
        </div>
        <div className={location.pathname === "/2" ? "select-menu" : "not-selected"}>
          <SideBarItems name="Инвойсы" style={style} />
        </div>
        <div className={location.pathname === "/3" ? "select-menu" : "not-selected"}>
          <SideBarItems name="История операций" style={style} />
        </div>
        <div className={location.pathname === "/4" ? "select-menu" : "not-selected"}>
          <SideBarItems name="Отчёты" style={style} />
        </div>
        <div className={location.pathname === "/5" ? "select-menu" : "not-selected"}>
          <SideBarItems name="API" style={style} />
        </div>
      </nav>
      <Account />
    </aside>
  );
};

export default Sidebar;
