// src/layouts/GoalsLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import FinancialSidebar from "../Components/Sidebar/FinancialSidebar";

const GoalsLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 container mx-auto px-4 py-8">
      <div className="md:w-2/3 lg:w-3/4">
        <Outlet /> {/* This will render the matched child route */}
      </div>
      <div className="md:w-1/3 lg:w-1/4">
        <FinancialSidebar />
      </div>
    </div>
  );
};

export default GoalsLayout;
