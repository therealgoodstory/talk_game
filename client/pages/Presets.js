import React from 'react'
import Header from '../components/Header'

const Presets = () => {
  const q = 1
  return (
    <div className="main">
      <Header link="/settings" />
      {q}
    </div>
  )
}

export default Presets