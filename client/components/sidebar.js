import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import Account from "./account";
import SideBarItems from "./sidebaritems";
import Tasks from "./tasks";

const Sidebar = () => {
  const state = useSelector((s) => s.sidebar.id)

  const [style, setStyle] = useState("sidebar__open")
  const [menuStyle, setMenuStyle] = useState("sidebar__menu--open")

  useEffect(() => (
    state === 1
      ? setMenuStyle("sidebar__menu--close")
      : setMenuStyle("sidebar__menu--open")
  ), [state]);

  useEffect(() => (
    state === 1
      ? setStyle("sidebar__close")
      : setStyle("sidebar__open")
  ), [state]);

  return (
    <aside className="sidebar">
      <div className="sidebar__menu">
        <h5 className={menuStyle}>МЕНЮ</h5>
      </div>
      <nav className="onlyMobile">
        <SideBarItems name="Каталог услуг" style={style} />
        <Tasks name="Задачи" style={style} />
        <SideBarItems name="Инвойсы" style={style} />
        <SideBarItems name="История операций" style={style} />
        <SideBarItems name="Отчёты" style={style} />
        <SideBarItems name="API" style={style} />
      </nav>
      <Account />
    </aside>
  );
};

export default Sidebar;
