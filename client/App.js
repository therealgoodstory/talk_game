import React, { useState } from "react";
import { Link } from 'react-router-dom'

const App = () => {
  const [style, setStyle] = useState("main__animation")
  setTimeout(() => (style === "main__animation" ? setStyle("main__animation-active") : setStyle("main__animation")), 3000)

  const programs = ["Расчёт возраста"]
  const links = ["howMany"]

  return (
    <section className="main">
      <div className="main__header">
        <div className={style} />
        <img src="https://cq-esports.com/storage/uploads/images/1079876/1613738343502.png" alt="logo" className="main__logo" />
      </div>
      <div className="main__field">
        <h1 className="main__title">ЭТО ЧЕСТНАЯ РАБОТА</h1>
        <div className="main__btn-field">
          {programs.map((name, id) => <Link className="main__link" key={name} to={`/${links[id]}`}>{name}</Link>)}
        </div>
      </div>
    </section>
  )
}

export default App;
