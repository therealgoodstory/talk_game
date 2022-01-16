import React from 'react'
import { Link } from 'react-router-dom'

const MainButton = ({ link, title }) => (
  <Link type="button" className="main_button" to={link}>
    <span className="main_button--title">{title}</span>
  </Link>
)

export default MainButton
