import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const Todo = ({ todo }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const closeModal = () => {
    setIsModalActive(false);
  };

  const handleClickTodo = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/api/todo/delete`, { data: todo })
      .then((res) => {
        console.log("silindi");
      });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {todo.title}
      </th>
      <td className="px-6 py-4">{todo.content}</td>
      <td className="px-6 py-4">{todo.createdDate}</td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={() => setIsModalActive(true)}
          className="font-medium text-lime-600 dark:text-lime-600 hover:underline"
        >
          Edit
        </button>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={handleClickTodo}
          className="font-medium text-red-400 dark:text-red-400 hover:underline"
        >
          Delete
        </button>
      </td>
      {isModalActive && <Modal closeModal={closeModal} selectedTodo={todo} />}
    </tr>
  );
};

export default Todo;
