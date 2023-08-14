import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col fixed z-10 top-0 left-0 right-0  bg-white">
        <Head />
      </div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
