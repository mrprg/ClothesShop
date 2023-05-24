import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
