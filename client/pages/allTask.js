import React from 'react'
import AllTaskPage from '../components/allTaskPage';
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const AllTask = () => (
  <div>
    <div>
      <Header />
      <Sidebar />
    </div>
    <div>
      <AllTaskPage />
    </div>
  </div>
);

export default AllTask;
