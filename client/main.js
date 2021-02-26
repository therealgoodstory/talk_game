import React from "react";
import ReactDOM from "react-dom";
import './main.scss'
import Test from './components/test'

const Home = () => {
  return <div>
    <Test/>
  </div>;
};
const target = document.getElementById("root");

ReactDOM.render(<Home/>, target);
