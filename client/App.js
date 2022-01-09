import React from "react";
import Header from "./components/Header";
import MainButton from "./components/MainButton";

const App = () => (
  <section className="main">
    <Header />
    <div className="main_text-container">
      <h1 className="main_title">
        BULSHIT
      </h1>
      <h1 className="main_title">
        GAME
      </h1>
    </div>
    <div className="main_butttons-container">
      <MainButton link="/game" title="START GAME" />
      {/* <MainButton link="/settings" title="SETTINGS" /> */}
    </div>
  </section>
)

export default App;
