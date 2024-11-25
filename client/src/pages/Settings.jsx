import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Button from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Settings = () => {
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");

  const [categories, setCategories] = useState([
    { id: 1, name: "Entertainment", icon: "🍿" },
    { id: 2, name: "Food & Groceries", icon: "🍴" },
    { id: 3, name: "Health & Medical", icon: "🩺" },
    { id: 4, name: "Housing", icon: "🏠" },
    { id: 5, name: "Salary", icon: "💵" },
    { id: 6, name: "Shopping", icon: "🛒" },
    { id: 7, name: "Transportation", icon: "🚌" },
  ]);

  function handleSubmitCategory(e) {
    e.preventDefault();
    const newCategory = { id: categories.length + 1, name, icon };
    setCategories((prev) => [...prev, newCategory]);
  }

  return (
    <div className='mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-5.1rem)] flex-1 flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-6 pb-10"'>
      <Sidebar tab={"settings"} />
      <main className="w-full flex-1">
        <header className="flex gap-2 sm:flex-row flex-col justify-between md:items-center w-full">
          <h1 className="text-4xl font-semibold">Settings</h1>
        </header>
        <div className="text-center mt-8 rounded-lg flex md:flex-row flex-col gap-2 border p-4">
          <div className=" flex overflow-x-scroll flex-1  gap-2">
            {categories &&
              categories?.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[150px] bg-gray-100 cursor-pointer rounded-md py-4 px-2  flex flex-col gap-1 items-center"
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="text-3xl">{item.icon}</span>
                </div>
              ))}
          </div>

          <Dialog>
            <motion.div whileTap={{ scale: 0.95 }} className="w-max">
              <DialogTrigger className="min-w-[100px] h-full ">
                <p className="border rounded-md flex items-center justify-center h-full px-6 py-2 ">
                  + Category
                </p>
              </DialogTrigger>
            </motion.div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Category</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={handleSubmitCategory}
                className="w-full flex flex-col gap-2"
              >
                <div className="mt-4 flex sm:flex-row flex-col gap-2 sm:items-center">
                  <div className="flex-1 flex flex-col gap-1">
                    <label
                      htmlFor="icon"
                      className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                    >
                      Icon
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 😀"
                      id="icon"
                      value={icon}
                      onChange={(e) => setIcon(e.target.value)}
                      className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
                      required
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Transportation"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      min={0}
                      className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
                      required
                    />
                  </div>
                </div>

                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 flex items-center justify-center w-full "
                >
                  <Button
                    label={"Create"}
                    className="w-full bg-black-2 text-white rounded-md "
                  />
                </motion.div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
};

export default Settings;
