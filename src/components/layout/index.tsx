import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const LayoutComponent = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="h-screen">
      <Header setIsExpanded={setIsExpanded} />
      <div className="flex h-[calc(100vh_-_64px)] items-stretch">
        <Sidebar isExpanded={isExpanded} />
        <div className="pl-3 flex-1 h-[1000px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
