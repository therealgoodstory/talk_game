import React from 'react'
import { Link } from 'react-router-dom'

const MainButton = ({ link, title }) => (
  <button type="button" className="main_button">
    <Link className="main_button--title" to={link}>{title}</Link>
  </button>
)

export default MainButton
