import React, { useState, useLayoutEffect } from "react";
import { useSelector } from 'react-redux'
import SideBarItems from "./sidebaritems";

const Sidebar = () => {
  const state = useSelector((s) => s.sidebar.id)

  const [menuStyle, setMenuStyle] = useState("sidebar__menu--open")

  useLayoutEffect(() => (
    state === 1
      ? setMenuStyle("sidebar__menu--close")
      : setMenuStyle("sidebar__menu--open")
  ), [state]);

  const menu = [
    "Каталог услуг",
    "Задачи",
    "Инвойсы",
    "История операций",
    "Отчёты",
    "API",
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <h5 className={menuStyle}>МЕНЮ</h5>
      </div>
      <div>
        {menu.map((it) => (
          <SideBarItems name={it} key={it} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
