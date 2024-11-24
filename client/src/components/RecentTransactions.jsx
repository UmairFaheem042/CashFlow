import React from "react";

const RecentTransactions = () => {
  return (
    <div className="border rounded-md p-2 h-full md:w-[300px] flex flex-col justify-between ">
      <h1 className="text-lg font-bold">Recent Transactions</h1>
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
          🍉 Fruits{" "}
          <span className="font-semibold text-red-500"> - $10</span>
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
          🍿 Movie{" "}
          <span className="font-semibold text-red-500"> - $18</span>
        </li>
        <li className="flex justify-between items-center">
          🍴 Meal{" "}
          <span className="font-semibold text-red-500"> - $5</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentTransactions;
