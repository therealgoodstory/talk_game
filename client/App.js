import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const App = () => {
  const state = useSelector((s) => s.sidebar.id);
  console.log(state);
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
