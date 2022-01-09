import React from 'react'

const Slider = ({ closeClick, state }) => {
  return (
    <div className="slider">
      <div
        role="switch"
        className={"slider_container" + (state ? "--open" : '')}
      >
        <div
          className="slider_background"
          onClick={() => closeClick()}
        />

      </div>  
    </div>
  )

}
export default Slider
