import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Settings = () => {
  const navigate = useNavigate();

  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cardColor, setCardColor] = useState("bg-teal-500");
  const [cardBorder, setCardBorder] = useState("bg-teal-200");
  const [cardName, setCardName] = useState("");
  const [cardBalance, setCardBalance] = useState(0);

  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const { userId } = useParams();

  async function handleSubmitCategory(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/category/${userId}/createCategory`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            icon,
          }),
          credentials: "include",
        }
      );

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        fetchCategories();
        setName("");
        setIcon("");
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error creating category:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/category/${userId}/getAllCategories`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error(
          "Error:",
          errorData || "Error while fetching recent transactions"
        );
        setLoading(false);
        return;
      }
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitCard(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/card/${userId}/createCard`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: cardName,
            balance: cardBalance,
            color: cardColor,
          }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData || "Error while creating card");
        setLoading(false);
        return;
      }

      const data = await response.json();
      fetchCards();
      // setCards(prev=>[...prev], )
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCards() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/card/${userId}/getAllCards`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData || "Error while fetching cards");
        setLoading(false);
        return;
      }
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchCards();
  }, []);

  console.log(cards);

  if (loading) return <LoadingPage />;

  return (
    <div className='mt-3 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-5.1rem)] flex-1 flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-6 pb-10"'>
      <Sidebar tab={"settings"} />
      <main className="w-full flex-1">
        <header className="flex gap-2 sm:flex-row flex-col justify-between md:items-center w-full">
          <h1 className="text-4xl font-semibold">Settings</h1>
        </header>
        <div className="text-center mt-8 rounded-lg flex bg-red flex-col gap-2 border p-4">
          <div className="flex justify-between">
            <h1>Categories</h1>
            <Dialog>
              <motion.div whileTap={{ scale: 0.95 }} className="w-max">
                <DialogTrigger className="min-w-[100px] border rounded-md flex items-center justify-center h-full px-4 py-1">
                  + Category
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
          <div className="flex overflow-x-scroll hide-scrollbar h-[100px] bg-red flex-1  gap-2">
            {categories &&
              categories?.map((item) => (
                <div
                  key={item._id}
                  className="min-w-[150px] bg-gray-100 cursor-pointer rounded-md py-4 px-2  flex flex-col gap-1 items-center"
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="text-3xl">{item.icon}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8 border p-4 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between">
            <h1>Cards & Wallets</h1>

            <Dialog>
              <motion.div whileTap={{ scale: 0.95 }} className="w-max">
                <DialogTrigger className="min-w-[100px] border rounded-md flex items-center justify-center h-full px-4 py-1">
                  + Add Wallet
                </DialogTrigger>
              </motion.div>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Payment Option</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={handleSubmitCard}
                  className="w-full flex flex-col gap-2"
                >
                  <div className="flex flex-col gap-2">
                    <div
                      className={`w-full h-[150px] flex flex-col gap-2 p-4 rounded-md ${cardColor}`}
                    >
                      <div className="flex gap-2">
                        <i className="ri-bank-card-line text-white p-2 bg-[rgba(255,255,255,0.2)] w-10  h-10 flex items-center justify-center rounded-md" />
                        <div className="w-full flex flex-col gap-2 ">
                          <div className="w-full h-5 bg-[rgba(255,255,255,0.2)] rounded"></div>
                          <div className="w-full h-3 bg-[rgba(255,255,255,0.2)] rounded"></div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-md bg-[rgba(255,255,255,0.2)]"></div>
                    </div>

                    <div className="flex gap-2">
                      <div
                        className="cursor-pointer w-7 h-7 border-4 border-teal-200 bg-teal-500 rounded-full"
                        onClick={() => {
                          setCardColor("bg-teal-500");
                          setCardBorder("bg-teal-200");
                        }}
                      ></div>

                      <div
                        className="cursor-pointer w-7 h-7 border-4 border-red-200 bg-red-500 rounded-full"
                        onClick={() => {
                          setCardColor("bg-red-500");
                          setCardBorder("bg-red-200");
                        }}
                      ></div>

                      <div
                        className="cursor-pointer w-7 h-7 border-4 border-purple-200 bg-purple-500 rounded-full"
                        onClick={() => {
                          setCardColor("bg-purple-500");
                          setCardBorder("bg-purple-200");
                        }}
                      ></div>

                      <div
                        className="cursor-pointer w-7 h-7 border-4 border-green-200 bg-green-500 rounded-full"
                        onClick={() => {
                          setCardColor("bg-green-500");
                          setCardBorder("bg-green-200");
                        }}
                      ></div>

                      <div
                        className="cursor-pointer w-7 h-7 border-4 border-yellow-200 bg-yellow-500 rounded-full"
                        onClick={() => {
                          setCardColor("bg-yellow-500");
                          setCardBorder("bg-yellow-200");
                        }}
                      ></div>

                      <div
                        className="cursor-pointer w-7 h-7 border-4 border-gray-200 bg-gray-800 rounded-full"
                        onClick={() => {
                          setCardColor("bg-gray-800");
                          setCardBorder("bg-gray-200");
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-4 flex sm:flex-row flex-col gap-2 sm:items-center">
                    <div className="flex-1 flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="My Wallet"
                        id="name"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="outline-none p-2 border rounded-md placeholder:font-thin placeholder:text-sm"
                        required
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <label
                        htmlFor="balance"
                        className="cursor-pointer text-[0.9rem] md:text-[1rem]"
                      >
                        Balance
                      </label>
                      <input
                        type="number"
                        placeholder="0.00"
                        id="balance"
                        value={cardBalance}
                        onChange={(e) => setCardBalance(e.target.value)}
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
          <div className="flex justify-between">
            <div className="flex gap-2">
              {cards?.map((item) => (
                <div
                  key={item._id}
                  className={`${item.color} text-white rounded-lg px-4 py-2 min-w-[140px]`}
                  style={{ backgroundColor: item.color }}
                >
                  <span className="text-sm font-thin">{item.name}</span>
                  <h3 className="text-2xl font-semibold">₹{item.balance}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
