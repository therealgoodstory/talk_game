import React from 'react'
import MainButton from './MainButton'

const Slider = ({ closeClick, state }) => {

  const sliderListButton = ['Presets', 'Players']

  return (
    <div className={"slider" + (state ? "--open" : '')}>
      <div
        role="switch"
        className={"slider_container" + (state ? "--open" : '')}
      >
        <ul className={"slider_button-list" + (state ? "--open" : '')}>
          {state ? sliderListButton.map(nameButton => <MainButton link={"/" + nameButton.toLowerCase()} title={nameButton.toUpperCase()} />) : null}
        </ul>
        <div
          className="slider_background"
          onClick={() => closeClick()}
        />
      </div>
    </div>
  )
}

export default Slider
