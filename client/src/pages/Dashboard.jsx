import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <div className="mt-2 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-4.5rem)] flex-1 flex gap-6 ">
      <Sidebar />
      <main className="flex-1 ">
        <header className="flex justify-between w-full">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              label={"New Transaction"}
              className="bg-black font-semibold !px-6 text-white hover:bg-black-2"
            />
          </motion.div>
        </header>
      </main>
    </div>
  );
};

export default Dashboard;
