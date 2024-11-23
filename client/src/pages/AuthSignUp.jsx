import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const AuthSignUp = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div className="max-w-screen-xl mx-auto p-2 min-h-[calc(100dvh-4rem)] flex-1 flex flex-col gap-2 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full flex flex-col gap-2 border rounded-xl p-4"
      >
        <h1 className="text-2xl font-bold text-center">Welcome to CashFlow</h1>
        <p className="text-center text-sm font-thin opacity-50">
          Create account on CashFlow and manage your Expenses
        </p>
        <div className="mt-4 flex flex-col gap-1">
          <label
            className="cursor-pointer text-[0.9rem] md:text-[1rem]"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Umair"
            id="fullname"
            className="outline-none p-2 border rounded-md  placeholder:font-thin placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="cursor-pointer text-[0.9rem] md:text-[1rem]"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="umair@example.com"
            id="email"
            className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="cursor-pointer text-[0.9rem] md:text-[1rem]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="123321"
            id="password"
            className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="cursor-pointer text-[0.9rem] md:text-[1rem]"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="123321"
            id="confirmpassword"
            className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
          />
        </div>
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="mt-2 flex items-center w-max"
        >
          <Button label={"Get Started"} className=" bg-black text-white" />
        </motion.div>
        <p className="text-sm">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="font-semibold underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthSignUp;
