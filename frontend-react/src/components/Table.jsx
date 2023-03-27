import axios from "axios";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Table = ({ showModal }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/todo/list`).then((res) => {
      setTodos(res.data);
      console.log(res.data);
    });
  }, [todos]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Başlık
            </th>
            <th scope="col" className="px-6 py-3">
              Yapılacak
            </th>
            <th scope="col" className="px-6 py-3">
              Tarih
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
