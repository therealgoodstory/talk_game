import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const App = () => (
  <div>
    <div>
      <Header />
      <Sidebar />
    </div>
    <nav className="initialnav">
      <ul>
        <Link to="/create">create</Link>
      </ul>
    </nav>
  </div>
);

export default App;
