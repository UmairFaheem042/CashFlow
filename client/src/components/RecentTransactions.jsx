import React, { useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";

const RecentTransactions = () => {
  const [card, setCard] = useState("card-1");
  return (
    <div className="border rounded-md p-2 h-full md:w-[300px] flex flex-col justify-between ">
      <h1 className="text-lg font-bold">Recent Transactions</h1>
      {/* <Select  value={card} onValueChange={(value) => setCard(value)}>
        <SelectTrigger  id="category" className="py-[0.6rem] outline-none">
          <SelectValue placeholder="Choose Card" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="card-1">Card 1</SelectItem>
          <SelectItem value="card-2">Card 2</SelectItem>
          <SelectItem value="card-3">Card 3</SelectItem>
        </SelectContent>
      </Select> */}
      <ul className="mt-4 flex flex-col gap-3 overflow-y-scroll">
        <li className="flex justify-between items-center">
          🚌 Transport{" "}
          <span className="font-semibold text-red-500"> - $45</span>
        </li>
        <li className="flex justify-between items-center">
          💵 Salary{" "}
          <span className="font-semibold text-green-500"> + $100</span>
        </li>
        <li className="flex justify-between items-center">
          🍉 Fruits <span className="font-semibold text-red-500"> - $10</span>
        </li>
        <li className="flex justify-between items-center">
          🚌 Transport{" "}
          <span className="font-semibold text-red-500"> - $28</span>
        </li>
        <li className="flex justify-between items-center">
          🚌 Transport{" "}
          <span className="font-semibold text-red-500"> - $28</span>
        </li>
        <li className="flex justify-between items-center">
          🍿 Movie <span className="font-semibold text-red-500"> - $18</span>
        </li>
        <li className="flex justify-between items-center">
          🍴 Meal <span className="font-semibold text-red-500"> - $5</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentTransactions;
