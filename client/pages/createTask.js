import React from "react";
import CreateTaskPage from "../components/createTaskPage";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const CreateTask = () => (
  <div>
    <div>
      <Header />
      <Sidebar />
    </div>
    <div>
      <CreateTaskPage />
    </div>
  </div>
);

export default CreateTask;
