import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
