import React from "react";

const DataTableComponent = () => {
  const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    { id: 3, name: "Mark Johnson", email: "markjohnson@example.com" },
  ];

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-4">Data Table</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
