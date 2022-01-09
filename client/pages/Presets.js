import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Ceil from '../components/Ceil'
import Header from '../components/Header'

const Presets = () => {
  const [select, setSelect] = useState(0)

  const data = useSelector((s) => s.presets.presets)
  const listPreset = Object.keys(data)

  return (
    <div className="main">
      <Header link="/settings" />
      <section className="game">
        <div className="game_update">
          <button className="game_update--button" type="button" onClick={() => setSelect(listPreset.length - 1 === select ? 0 : select + 1)}>
            <span className="game_update--title">
              &lt;
            </span>
          </button>
          <h3 className="game_update--title">
            {listPreset[select].toUpperCase()}
          </h3>
          <button className="game_update--button" type="button" onClick={() => setSelect(select === 0 ? listPreset.length - 1 : select - 1)}>
            <span className="game_update--title">
              &gt;
            </span>
          </button>
        </div>
        <div className="presets">
          {data[listPreset[select]].map((text) => <Ceil title={text} key={text} />)}
        </div>
      </section>
    </div>
  )
}

export default Presets
