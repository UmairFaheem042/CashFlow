import React, { useState } from "react";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [currTab, setCurrTab] = useState("home");
  return (
    <aside className="border flex flex-col items-center justify-center gap-4 p-4 rounded-lg h-min">
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${
          currTab === "home" &&
          "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
        }`}
        onClick={() => setCurrTab("home")}
      >
        <i className="ri-home-line text-2xl cursor-pointer" />
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${
          currTab === "transactions" &&
          "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
        }`}
        onClick={() => setCurrTab("transactions")}
      >
        <i className="ri-exchange-dollar-line text-2xl cursor-pointer" />
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${
          currTab === "settings" &&
          "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
        }`}
        onClick={() => setCurrTab("settings")}
      >
        <i className="ri-settings-line text-2xl cursor-pointer" />
      </motion.div>
    </aside>
  );
};

export default Sidebar;
