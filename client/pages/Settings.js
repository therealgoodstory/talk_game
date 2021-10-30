import React from 'react'
import Header from '../components/Header'
import MainButton from '../components/MainButton'

const Settings = () => {
  const setttigsData = [
    'presets',
    'players',
  ]

  return (
    <div className="main">
      <Header link="/" />
      <div className="settings">
        {setttigsData.map((item) => <MainButton link={`/${item}`} title={item.toUpperCase()} key={item} />)}
      </div>
    </div>
  )
}

export default Settings
