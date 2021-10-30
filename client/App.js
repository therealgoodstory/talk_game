import React from "react";
import Header from "./components/Header";
import MainButton from "./components/MainButton";

const App = () => (
  <section className="main">
    <Header />
    <h1 className="main_title">
      BULSHIT GAME
    </h1>
    <div className="main_container">
      <MainButton link="/game" title="START GAME" />
      <MainButton link="/settings" title="SETTINGS" />
    </div>
  </section>
)

export default App;
