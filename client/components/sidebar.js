import React from "react";
import SideBarItems from "./sidebaritems";

const Sidebar = () => {
  const menu = [
    "Каталог услуг",
    "Задачи",
    "Инвойсы",
    "История операций",
    "Отчёты",
    "API",
  ];

  return (
    <div>
      <div className="sidebar__menu">
        {" "}
        <h5 className="sidebar__menu--name">МЕНЮ</h5>
      </div>

      {menu.map((it) => (
        <SideBarItems name={it} key={it} />
      ))}
    </div>
  );
};

export default Sidebar;
