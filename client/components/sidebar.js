import React, { useState, useLayoutEffect } from "react";
import { useSelector } from 'react-redux'
import Account from "./account";
import SideBarItems from "./sidebaritems";
import Tasks from "./tasks";

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
    <aside className="sidebar">
      <div className="sidebar__menu">
        <h5 className={menuStyle}>МЕНЮ</h5>
      </div>
      <nav>
        {menu.map((it, id) => (
          id !== 1 ? <SideBarItems name={it} key={it} /> : <Tasks name={it} key={it} />
        ))}
      </nav>
      <Account />
    </aside>
  );
};

export default Sidebar;
