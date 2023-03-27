import React, { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const closeModal = () => {
    setIsModalActive(false);
  };
  return (
    <div className="text-right">
      <button
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => setIsModalActive(true)}
      >
        Yeni Ekle
      </button>
      {isModalActive && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Header;
