import React from "react";
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

const AllTransactions = () => {
  const transactions = [
    {
      id: 1,
      category: "🚌 Transport",
      description: "Bus fare to the office",
      type: "expense",
      time: "08:00 AM",
      date: "10-11-2024",
      amount: "50",
    },
    {
      id: 2,
      category: "🍽️ Food",
      description: "Lunch at the cafe",
      type: "expense",
      time: "12:45 PM",
      date: "11-11-2024",
      amount: "15",
    },
    {
      id: 3,
      category: "🏠 Rent",
      description: "Monthly rent payment for apartment",
      type: "expense",
      time: "03:00 PM",
      date: "01-12-2024",
      amount: "800",
    },
    {
      id: 4,
      category: "💻 Entertainment",
      description: "Online streaming subscription",
      type: "expense",
      time: "06:00 PM",
      date: "15-12-2024",
      amount: "10",
    },
    {
      id: 5,
      category: "🛒 Shopping",
      description: "Purchase of new clothes",
      type: "expense",
      time: "04:30 PM",
      date: "20-11-2024",
      amount: "120",
    },
    {
      id: 6,
      category: "🍴 Food & Groceries",
      description: "Bought Tinde",
      type: "expense",
      time: "07:32 PM",
      date: "24-12-2024",
      amount: "120",
    },
    {
      id: 7,
      category: "🛒 Shopping",
      description: "Purchase of new clothes",
      type: "expense",
      time: "04:30 PM",
      date: "20-11-2024",
      amount: "120",
    },
    {
      id: 6,
      category: "🍴 Food & Groceries",
      description: "Bought Tinde",
      type: "expense",
      time: "07:32 PM",
      date: "24-12-2024",
      amount: "120",
    },
    {
      id: 7,
      category: "🛒 Shopping",
      description: "Purchase of new clothes",
      type: "expense",
      time: "04:30 PM",
      date: "20-11-2024",
      amount: "120",
    },
    {
      id: 6,
      category: "🍴 Food & Groceries",
      description: "Bought Tinde",
      type: "income",
      time: "07:32 PM",
      date: "24-12-2024",
      amount: "120",
    },
    {
      id: 7,
      category: "🛒 Shopping",
      description: "Purchase of new clothes",
      type: "expense",
      time: "04:30 PM",
      date: "20-11-2024",
      amount: "120",
    },
  ];
  return (
    <div className='mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-5.1rem)] flex-1 flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-6 pb-10"'>
      <Sidebar tab={"transactions"} />
      <main className="flex min-h-[calc(100dvh-6rem)] flex-col w-full flex-1">
        <header className="flex gap-2 sm:flex-row flex-col justify-between md:items-center w-full">
          <h1 className="text-4xl font-semibold">All Transactions</h1>
        </header>

        <div className="flex-1 border-2 rounded-lg mt-6 overflow-y-scroll max-h-[70vh]">
          <Table className="">
            {/* <TableCaption>A list of your recent transactions</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="">Category</TableHead>
                <TableHead className="">Description</TableHead>
                {/* <TableHead className="text-center">Type</TableHead> */}
                {/* <TableHead className="text-center">Time</TableHead> */}
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                {/* <TableHead className="text-right">Action</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-left">
                    {item.category}
                  </TableCell>
                  <TableCell className="max-w-[300px]">
                    {item.description}
                  </TableCell>
                  {/* <TableCell className="text-center">{item.type}</TableCell> */}
                  {/* <TableCell className="text-center">{item.time}</TableCell> */}
                  <TableCell className="text-center">{item.date}</TableCell>
                  <TableCell className={`text-center font-semibold ${item.type === "expense" ? "text-red-600" : "text-green-600"}`}>{item.type === "expense" ? "-" : "+"} ₹{item.amount}</TableCell>
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
