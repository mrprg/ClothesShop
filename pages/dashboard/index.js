import React, { useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../pages/components/AdminLayout";
// import { useSession } from "next-auth/react";

const AdminDashboard = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("http://localhost:3000/");
  };

  return (
    <AdminLayout>
      <div>
        <h1>Welcome to the Admin Dashboard</h1>
        {/* Add more admin-related components and functionalities here */}
        <button
          onClick={handleRedirect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Home Page
        </button>
      </div>
    </AdminLayout>
  );
};
export default AdminDashboard;
