import axios from "axios";
import React, { useEffect, useState } from "react";

const Modal = ({ closeModal, selectedTodo }) => {
  const [todo, setTodo] = useState({ title: "", content: "", createdDate: "" });
  const clickSaveButton = (e) => {
    e.preventDefault();
    if (selectedTodo) {
      axios.post(`http://localhost:8080/api/todo/update`, todo).then(() => {
        closeModal();
      });
    } else {
      axios.post(`http://localhost:8080/api/todo/add`, todo).then(() => {
        closeModal();
      });
    }
  };

  useEffect(() => {
    if (selectedTodo) {
      setTodo(selectedTodo);
    }
  }, []);

  const handleTitleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const handleContentsChange = (e) => {
    setTodo({ ...todo, content: e.target.value });
  };
  const handleDateChange = (e) => {
    setTodo({ ...todo, createdDate: e.target.value });
  };

  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full text-left"
    >
      <div class="relative w-full h-full max-w-md md:h-auto m-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Todo List
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="title"
                >
                  Başlık
                </label>

                <input
                  type="text"
                  name="title"
                  value={todo.title}
                  id="title"
                  onChange={handleTitleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="..."
                />
              </div>
              <div>
                <label
                  for="contents"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Yapılacak
                </label>
                <input
                  type="text"
                  name="text"
                  value={todo.content}
                  id="contents"
                  onChange={handleContentsChange}
                  placeholder="..."
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  for="date"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tarih
                </label>
                <input
                  type="text"
                  name="text"
                  id="date"
                  onChange={handleDateChange}
                  value={todo.date}
                  placeholder="12.21.2023"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={clickSaveButton}
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
