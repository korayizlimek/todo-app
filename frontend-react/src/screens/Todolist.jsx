import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";

const Todolist = () => {
  return (
    <div className="sm:max-w-7xl sm:mx-auto sm:py-4">
      <Header />
      <Table />
    </div>
  );
};

export default Todolist;
