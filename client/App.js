import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";

const App = () => (
  <div>
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
    <div className="page">
      <Home />
    </div>
  </div>
);

export default App;
