import React from "react";
import { useParams } from "react-router-dom";

const RecentTransactions = ({ recentTransactions, categories, cards }) => {
  console.log(cards[0]?.transactions);

  const uniqueTransactions = recentTransactions
    ?.filter(
      (transaction, index, self) =>
        index === self.findIndex((t) => t._id === transaction._id)
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.icon + " " + category.name : "Others";
  };

  return (
    <div className="w-full border rounded-md p-2 !h-full lg:w-[300px] flex-1 flex flex-col justify-between">
      <h1 className="text-lg font-bold">Recent Transactions</h1>
      <ul className="mt-4 flex flex-col gap-3 overflow-y-scroll">
        {uniqueTransactions?.map((item) => (
          <li key={item._id} className="flex justify-between items-center">
            <div>
              <span className="font-semibold">{item.name}</span>
              <div className="text-sm text-gray-500">
                <span>{getCategoryName(item.category)}</span>
              </div>
            </div>
            <span
              className={`font-semibold ${
                item.transType === "Expense" ? "text-red-500" : "text-green-500"
              }`}
            >
              {item.transType === "Expense" ? "-" : "+"} ₹{item.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
