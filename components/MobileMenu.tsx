"use client";

import { useState } from "react";

import { AlignLeft } from "lucide-react";

import Sidebar from "./Sidebar";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(true)}>
        <AlignLeft className="hoverEffect hover:text-darkColor cursor-pointer md:hidden" />
      </button>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};
export default MobileMenu;
