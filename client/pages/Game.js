import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

const Game = () => {
  const players = useSelector((s) => s.players.players)

  return (
    <div className="main">
      <Header link="/" />
      <section className="container">
        <ul className="game_players-container">
          {players.map(player => <button className="game_players_button">{player}</button>)}
        </ul>
      </section>
    </div>
  )
}

export default Game
