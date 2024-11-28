import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

const AppDrawer = () => {
  const navigate = useNavigate();
  return (
    <Drawer className="md:hidden absolute">
      <DrawerTrigger className="md:hidden bg-gray-100 px-6 py-2 rounded-lg border absolute translate-x-[-50%]  left-[50%] bottom-2">
        {/* <i className="ri-guide-line" /> */}
        Open Tabs
      </DrawerTrigger>
      <DrawerContent className=" ">
        <DrawerHeader className="flex justify-center gap-5 border">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`${
              tab === "dashboard" &&
              "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
            }`}
            onClick={() => {
              // setCurrTab("home");
              navigate(`/dashboard/${userId}`);
            }}
          >
            <i className="ri-home-line text-2xl cursor-pointer" />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`${
              tab === "transactions" &&
              "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
            }`}
            onClick={() => {
              // setCurrTab("transactions");
              navigate(`/transactions/${userId}`);
            }}
          >
            <i className="ri-exchange-dollar-line text-2xl cursor-pointer" />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`${
              tab === "settings" &&
              "relative after:bg-gray-200 after:h-1 after:w-full after:absolute after:left-0 after:-bottom-1"
            }`}
            onClick={() => {
              // setCurrTab("settings");
              navigate(`/settings/${userId}`);
            }}
          >
            <i className="ri-settings-line text-2xl cursor-pointer" />
          </motion.div>
        </DrawerHeader>
        <DrawerFooter className="flex">
          <DrawerClose>
            <Button label="Cancel" />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
