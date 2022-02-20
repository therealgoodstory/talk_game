import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Ceil from '../components/Ceil'

const Game = () => {

  const [selectRow, SetSelectRow] = useState(0)
  const [selectCeilIndex, SetSelectCeilIndex] = useState(0)
  const [selectCeil, SetSelectCeil] = useState(0) // 0-24

  const [activePlayer, SetActivePlayer] = useState(0)

  // GET SELECT SETINGS
  const players = useSelector((s) => s.players.players)
  const data = useSelector((s) => s.presets)
  const selectPreset = useSelector((s) => s.gameState.selectPresets)
  const listPreset = Object.keys(data)

  const columnList = [0,1,2,3,4] // hack __ amoun columns [fix it]

  const selectRowId = (idx) => {
    SetSelectRow(idx)
  }

  const selectCeilId = (idx) => {
    SetSelectCeilIndex(idx)
  }

  useEffect(() => {
    SetSelectCeil(selectRow * 5 + selectCeilIndex)
  }, [selectRow, selectCeilIndex])

  const selectPlayer = (idxPlayer) => {
    SetActivePlayer(idxPlayer)
  }

  console.log(activePlayer)

  return (
    <div className="main">
      <Header link="/" />
      <section className="container">

        <ul className="game_players-container">
          {players.map((player, idx) => (
            <div className={"game_players-row" + (activePlayer !== idx ? "-hide" : "")} onClick={() => selectPlayer(idx)}>
              <button className="game_players_button">{player}</button>
              <span className="game_players-counter">123</span>
            </div>
          ))}
        </ul>

        <ul className="presets">
          {columnList.map((number, rowId) => (
            <div className="presets_row" onClick={() => selectRowId(rowId)}>
              {data[listPreset[selectPreset]]
                .filter((_, id) => (
                  id >= (number * columnList.length) && id < ((number + 1) * columnList.length)))
                  .map((category, idx) =>  (
                    <Ceil title={category} key={category} selectCeilId={() => selectCeilId(idx)} />
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
