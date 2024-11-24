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

const AllTransactions = () => {
  const payments = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
  ];
  return (
    <div className='mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-5.1rem)] flex-1 flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-6 pb-10"'>
      <Sidebar tab={"transactions"} />
      <main className="w-full flex-1">
        <header className="flex gap-2 sm:flex-row flex-col justify-between md:items-center w-full">
          <h1 className="text-4xl font-semibold">All Transactions</h1>
        </header>

        <div className="mt-6">
          <Table>
            <TableCaption>A list of your recent transactions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Category</TableHead>
                <TableHead className="">Description</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Time</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                {/* <TableHead className="text-right">Action</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-left">
                  🚌 Transport
                </TableCell>
                <TableCell className="max-w-[300px]">
                  From Home to College From Home to College From Home to College
                  From Home to College From Home to College From Home to College
                </TableCell>
                <TableCell className="text-center">Expense</TableCell>
                <TableCell className="text-center">08:15 AM</TableCell>
                <TableCell className="text-center">20-09-2024</TableCell>
                <TableCell className="text-center">₹70</TableCell>
                {/* <TableCell className="text-right">...</TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-left">🍴 Meal</TableCell>
                <TableCell className="">Lunch in College</TableCell>
                <TableCell className="text-center">Expense</TableCell>
                <TableCell className="text-center">12:40 PM</TableCell>
                <TableCell className="text-center">20-09-2024</TableCell>
                <TableCell className="text-center">₹60</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default AllTransactions;
