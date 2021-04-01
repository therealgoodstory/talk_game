import React, { useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addData } from "../redux/reducers/exchangeRates";

const Account = () => {
  const [style, setStyle] = useState('sidebar__account-open');
  const state = useSelector((s) => s.sidebar.id)
  const currencies = useSelector((s) => s.exchangeRates.rates)
  const data = useSelector((s) => s.exchangeRates.data)
  const dispatch = useDispatch()
  useLayoutEffect(() => (
    state === 1
      ? setStyle("sidebar__account-close")
      : setStyle("sidebar__account-open")
  ), [state]);
  useLayoutEffect(() => {
    dispatch(addData())
  }, [])
  return (
    <div className={style}>
      <h4 className="sidebar__account-many row">
        {Object.keys(currencies.RUB).map((currency) => (
          <span key={currency} className="sidebar__account-many--item row">
            {currency}
            <p className="currencies-key">{`: ${currencies.RUB[currency]}`}</p>
          </span>
        ))}
      </h4>
      <h5 className="sidebar__account-data">{JSON.stringify(data)}</h5>
    </div>
  );
};

export default Account;
