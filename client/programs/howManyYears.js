import React, { useState } from 'react'
import Confetti from 'react-confetti'
import Navigation from '../components/navigation'

const HowManyYears = () => {
  const [date, setDate] = useState("")
  const [result, setResult] = useState(false)
  const now = new Date().getUTCFullYear()
  const year = date.split("").filter((_, id) => id < 4).join("")

  return (
    <section className="how-many-old">
      <Navigation />
      <form className="how-many-old__form">
        <h1 className="how-many-old__title">Узнайте сколько вам лет!</h1>
        <label htmlFor="old" className="how-many-old__label">
          <span className="how-many-old__text">
            Введите дату рождения !
          </span>
          <input id="old" type="date" onChange={(e) => setDate(e.target.value)} className="how-many-old__input" />
          <button type="button" onClick={() => setResult(+now - +year)} className="how-many-old__btn">
            Расчитать
          </button>
        </label>
      </form>
      {result && result < 100 ? (
        <div className="modal-window">
          <span className="modal-window__text">{`Вам ${result} лет!`}</span>
          <Confetti />
        </div>
      ) : ""}
    </section>
  )
}

export default HowManyYears
