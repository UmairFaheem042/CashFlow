import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { useParams } from "react-router-dom";

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    async function fetchAllTransaction() {
      try {
        // Fetch Transactions
        const transactionsResponse = await fetch(
          `http://localhost:3000/api/transaction/${userId}/getAllTransactions`
        );
        if (!transactionsResponse.ok) {
          const errorData = await transactionsResponse.json();
          console.error(
            "Error fetching transactions:",
            errorData || "Unknown error"
          );
          return;
        }
        const transactionsData = await transactionsResponse.json();
        setTransactions(transactionsData.transactions);

        // Fetch Categories
        const categoriesResponse = await fetch(
          `http://localhost:3000/api/category/${userId}/getAllCategories`
        );
        if (!categoriesResponse.ok) {
          const errorData = await categoriesResponse.json();
          console.error(
            "Error fetching categories:",
            errorData || "Unknown error"
          );
          return;
        }
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData.categories);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchAllTransaction();
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? `${category.icon} ${category.name}` : "Others";
  };

  return (
    <div className='mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-5.1rem)] flex-1 flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-6 pb-10"'>
      <Sidebar tab={"transactions"} />
      <main className="flex min-h-[calc(100dvh-6rem)] flex-col w-full flex-1">
        <header className="flex gap-2 sm:flex-row flex-col justify-between md:items-center w-full">
          <h1 className="text-4xl font-semibold">All Transactions</h1>
        </header>

        <div className="flex-1 border-2 rounded-lg mt-6 overflow-y-scroll max-h-[70vh]">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="">Category</TableHead>
                <TableHead className="">Description</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions?.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium text-left">
                    {getCategoryName(item.category)}
                  </TableCell>
                  <TableCell className="max-w-[300px]">
                    {item.description}
                  </TableCell>
                  <TableCell className="text-center">{item.date}</TableCell>
                  <TableCell
                    className={`text-center font-semibold ${
                      item.type === "Expense"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {item.type === "Expense" ? "-" : "+"} ₹{item.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination className="mt-2">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default AllTransactions;
