import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
const Sidebar = ({ tab }) => {
  const navigate = useNavigate();
  // const [currTab, setCurrTab] = useState("home");
  const { userId } = useParams();
  return (
    <aside className="border flex flex-row md:flex-col items-center md:justify-center md:gap-6 gap-10 p-2 md:p-4 rounded-lg h-min w-max">
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${
          tab === "dashboard" &&
          "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
        }`}
        onClick={() => {
          // setCurrTab("home");
          navigate(`/dashboard/${userId}`);
        }}
      >
        <i className="ri-home-line text-2xl cursor-pointer" />
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${
          tab === "transactions" &&
          "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
        }`}
        onClick={() => {
          // setCurrTab("transactions");
          navigate(`/transactions/${userId}`);
        }}
      >
        <i className="ri-exchange-dollar-line text-2xl cursor-pointer" />
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${
          tab === "settings" &&
          "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
        }`}
        onClick={() => {
          // setCurrTab("settings");
          navigate(`/settings/${userId}`);
        }}
      >
        <i className="ri-settings-line text-2xl cursor-pointer" />
      </motion.div>
    </aside>
  );
};

export default Sidebar;
