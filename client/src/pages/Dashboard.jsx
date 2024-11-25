import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import RecentTransactions from "../components/RecentTransactions";
import BarChart from "../components/BarChart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dashboard = () => {
  const [type, setType] = useState("all");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transType, setTransType] = useState("expense");

  const categories = [
    { id: 1, name: "Entertainment", icon: "🍿" },
    { id: 2, name: "Food & Groceries", icon: "🍴" },
    { id: 3, name: "Health & Medical", icon: "🩺" },
    { id: 4, name: "Housing", icon: "🏠" },
    { id: 5, name: "Salary", icon: "💵" },
    { id: 6, name: "Shopping", icon: "🛒" },
    { id: 7, name: "Transportation", icon: "🚌" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      category,
      amount,
      description,
      transType,
      time,
      date,
    });
  }

  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-5.1rem)] flex-1 flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-6 pb-10">
      <Sidebar tab={"dashboard"} />
      <main className="w-full flex-1">
        <header className="flex gap-2 sm:flex-row flex-col justify-between md:items-center w-full">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <div className="flex justify-end w-full">
            <Dialog className="">
              <motion.div whileTap={{ scale: 0.95 }} className="w-max">
                <DialogTrigger>
                  <p className="min-w-[120px] text-sm md:text-md md:px-4 py-2 rounded-md bg-black font-semibold !px-6 text-white hover:bg-black-2">
                    New Transaction
                  </p>
                </DialogTrigger>
              </motion.div>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Expense</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-2"
                >
                  {/* category and amount */}
                  <div className="mt-4 flex sm:flex-row flex-col gap-2 sm:items-center">
                    <div className="flex-1 flex flex-col gap-1">
                      <label
                        htmlFor="category"
                        className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                      >
                        Select Category
                      </label>
                      <Select
                        value={category}
                        onValueChange={(value) => setCategory(value)}
                      >
                        <SelectTrigger id="category" className="py-[0.6rem]">
                          <SelectValue placeholder="Choose One" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.map((item) => (
                            <SelectItem
                              key={item.id}
                              value={item.icon + " " + item.name}
                            >
                              {item.icon} {item.name}
                            </SelectItem>
                          ))}
                          {/* <Button
                            label={"+ Category"}
                            className=" w-full text-gray-300"
                          /> */}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex-1 flex flex-col gap-1">
                      <label
                        htmlFor="amount"
                        className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        placeholder="₹ 0"
                        id="amount"
                        min={0}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* description */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="description"
                      className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                    >
                      Description
                    </label>
                    <Textarea
                      placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, aut?"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm focus:none"
                      required
                    />
                  </div>

                  {/* type */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="type"
                      className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                    >
                      Type
                    </label>
                    <RadioGroup
                      value={transType}
                      onValueChange={(value) => setTransType(value)}
                      className="flex gap-10"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expense" id="expense" />
                        <label htmlFor="expense" className="cursor-pointer">
                          Expense
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <RadioGroupItem value="income" id="income" />
                        <label htmlFor="income" className="cursor-pointer">
                          Income
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* date and time */}
                  <div className="mt-2 flex sm:flex-row flex-col sm:items-center gap-2 ">
                    <div className="flex flex-col gap-1 flex-1">
                      <label
                        htmlFor="date"
                        className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        id="date"
                        className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <label
                        htmlFor="time"
                        className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
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
                      className="bg-black w-full text-white"
                    />
                  </motion.div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <div className="mt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="bg-purple-200 border-purple-400 flex-1 border rounded-md p-2">
              <span>Balance</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-1 md:mt-2">
                $0
              </h1>
            </div>
            <div className="bg-green-200 border-green-400 flex-1 border rounded-md p-2">
              <span>Income</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-1 md:mt-2">
                $0
              </h1>
            </div>
            <div className="bg-red-200 border-red-400 flex-1 border rounded-md p-2">
              <span>Expense</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-1 md:mt-2">
                $0
              </h1>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="mt-6 flex items-center justify-between">
          <ul className="text-lg flex items-center transition-all gap-2">
            <li
              className={`cursor-pointer min-w-[100px] px-2 py-1 text-center ${
                type === "all" && "bg-gray-200"
              } rounded-lg hover:bg-gray-100 transition-all`}
              onClick={() => setType("all")}
            >
              All
            </li>
            <li
              className={`cursor-pointer min-w-[100px] px-2 py-1 text-center ${
                type === "income" && "bg-gray-200"
              } rounded-lg hover:bg-gray-100 transition-all`}
              onClick={() => setType("income")}
            >
              Income
            </li>
            <li
              className={`cursor-pointer min-w-[100px] px-2 py-1 text-center  ${
                type === "expense" && "bg-gray-200"
              } rounded-lg hover:bg-gray-100 transition-all`}
              onClick={() => setType("expense")}
            >
              Expense
            </li>
          </ul>
        </div>

        <div className="mt-3 flex md:flex-row flex-col gap-4 md:items-center h-[350px] ">
          {/* bar chart */}
          <BarChart />

          {/* recent transactions */}
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
