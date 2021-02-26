import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss'
import Home from './pages/home'

const Main = () => <div className="main"><Home /></div>

const target = document.getElementById('root')

ReactDOM.render(<Main />, target)
