import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Header from '../components/Header'
import { addPlayers } from '../redux/reducers/players'

const Players = () => {
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()
  const players = useSelector((s) => s.players.players)

  const addNewPlayers = (name) => dispatch(addPlayers(name))
// console.log(typeof(userName))
  return (
    <div className="main">
      <Header link="/" />
      <section className="container">
        <div>
          <h3>
            Add players
          </h3>
          <form className="players_add-container">
            <input type="text" className="players_input" placeholder="name" onChange={(e) => setUserName(e.target.value)}/>
            <button type="reset" className="players_add-button" onClick={() => addNewPlayers(userName)}>
              +
            </button>
          </form>
        </div>
        <div className="players_container">
          <h3>
            Players
          </h3>
          <ul className="players_list">
            {players.map(player => (
              <div className="players_block" id={player}>
                <h4 className="players_name">{player}</h4>
                <button className="players_delete">
                  -
                </button>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Players
