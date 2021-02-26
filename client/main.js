import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss'
import Test from './components/test'

const Home = () => {
  const q = 123
  return (
    <div>
      {q}
      <Test />
    </div>
  )
}

const target = document.getElementById('root')

ReactDOM.render(<Home />, target)
