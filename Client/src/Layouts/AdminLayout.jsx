import React from "react";
import { Navbar } from "../admin/components/Navbar";
import { Sidebar } from "../admin/components/Sidebar";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="sm:flex flex-col min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
