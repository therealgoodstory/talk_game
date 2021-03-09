import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

const Account = () => {
  const [style, setStyle] = useState("sidebar__account-open");
  const state = useSelector((s) => s.sidebar.id)

  useEffect(() => (
    state === 1
      ? setStyle("sidebar__account-close")
      : setStyle("sidebar__account-open")
  ), [state]);

  return (
    <div className={style}>
      <h4 className="sidebar__account-many">
        <span className="sidebar__account-many--item">111</span>
        <span className="sidebar__account-many--item">222</span>
        <span className="sidebar__account-many--item">333</span>
      </h4>
      <h5 className="sidebar__account-data">123</h5>
    </div>
  );
};

export default Account;
