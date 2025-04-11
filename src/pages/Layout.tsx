import { Outlet } from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/headerSection/Header";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-full w-full bg-gray-100 ">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className="h-full w-full max-sm:pl-20 bg-gray-500 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
