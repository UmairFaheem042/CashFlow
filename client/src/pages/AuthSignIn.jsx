import React, { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthSignIn = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userId", data.id);
        console.log(data);
        toast.success(data.message);
        setTimeout(() => {
          navigate(`/dashboard/${data.id}`);
        }, 1000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
        return;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error(error.message);
    }
  }
  return (
    <div className="max-w-screen-xl mx-auto p-2 min-h-[calc(100dvh-4rem)] flex-1 flex flex-col gap-2 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full flex flex-col gap-2 border rounded-xl p-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Welcome Back to CashFlow
        </h1>
        <p className="text-center text-sm font-thin opacity-50">
          Login to CashFlow and manage your Expenses
        </p>
        <div className="mt-4 flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer text-[0.9rem] md:text-[1rem]"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="umair@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="cursor-pointer text-[0.9rem] md:text-[1rem]"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="123321"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
            required
          />
        </div>
        <motion.div whileTap={{ scale: 0.95 }} className="mt-2 flex w-max ">
          <Button label={"Login"} className="bg-black text-white" />
        </motion.div>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="font-semibold underline cursor-pointer"
          >
            Create One
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AuthSignIn;
