import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <Header
            userName="Nguyen Van A"
            userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=vietnamese"
            notificationCount={5}
          />

          {/* Main Dashboard Content */}
          <main className="p-6 space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
