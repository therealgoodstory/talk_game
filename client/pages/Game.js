import React from 'react'
// import { useSelector } from 'react-redux'
import Header from '../components/Header'

const Game = () => {
  // const data = useSelector((s) => s.presets.presets)
  const test = "asdasdasdasd"
  return (
    <div className="main">
      <Header link="/" />
      <section className="game">
        {test}
      </section>
      {/* {data} */}
    </div>
  )
}

export default Game
