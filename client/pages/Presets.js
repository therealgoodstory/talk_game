import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Ceil from '../components/Ceil'
import Header from '../components/Header'

const Presets = () => {
  const [select, setSelect] = useState(0)

  const data = useSelector((s) => s.presets.presets)
  const listPreset = Object.keys(data)

  const columnList = [0,1,2,3,4]

  const changePreset = (action) => {
    const forwardPreset = action === 'next'

    if (forwardPreset && select === (listPreset.length - 1)) { // if select last preset && forward
      setSelect(0)
    } else if (!forwardPreset && select === 0) { // if select one presets && down
      setSelect(listPreset.length -1)
    } else {
      setSelect(forwardPreset ? select + 1 : select - 1) // default function
    }
  }


  return (
    <div className="main">
      <Header link="/" />
      <section className="container">
        <ul className="presets">
          {columnList.map(number => (
            <div className="presets_row">
              {data[listPreset[select]].filter((_, id) => id >= (number * columnList.length) && id < ((number + 1) * columnList.length)).map(category =>  <Ceil title={category} key={category} />)}
            </div>
            ))
          }
        </ul>
        <div>
          <h3>
            Change preset
          </h3>
          <div className="presets_cahnge-container">
            <button className="presets_button" onClick={() => changePreset('down')}>
              {"<"}
            </button>
            <span className="presets_desc">
              {(listPreset[select]).toUpperCase()}
            </span>
            <button className="presets_button" onClick={() => changePreset('next')}>
              {">"}
            </button>
          </div>
          <div className="presets_add-container">
            <h3>
              Add presets
            </h3>
            <span className="presets_desc">
              Enter 25 words separated by commas 
            </span>
            <textarea className="presets_textarea">

            </textarea>
            <button className="presets_main-button">
              Add presets
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Presets
