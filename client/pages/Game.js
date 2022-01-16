import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Ceil from '../components/Ceil'

const Game = () => {

  // SETINGS
  const players = useSelector((s) => s.players.players)
  const data = useSelector((s) => s.presets)
  const selectPreset = useSelector((s) => s.gameState.selectPresets)
  const listPreset = Object.keys(data)

  const columnList = [0,1,2,3,4] // hack __ amoun columns [fix it]

  const selectCeil = (idx) => {
    console.log(idx)
  }

  return (
    <div className="main">
      <Header link="/" />
      <section className="container">
        <ul className="game_players-container">
          {players.map(player => <button className="game_players_button">{player}</button>)}
        </ul>
        <ul className="presets">
          {columnList.map(number => (
            <div className="presets_row">
              {data[listPreset[selectPreset]]
                .filter((_, id) => (
                  id >= (number * columnList.length) && id < ((number + 1) * columnList.length)))
                  .map((category, idx) =>  (
                    <Ceil title={category} key={category} selectCeil={() => selectCeil(idx)} />
                  )
                )
              }
            </div>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default Game
