// src/pages/OrderPage.jsx
import React, { useState } from "react";
import orders from "../json/orders.json"; // Pastikan jalur ini sesuai dengan struktur folder kamu

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter orders berdasarkan kata kunci pencarian
  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Orders</h1>

      {/* Input Pencarian */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by customer name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full max-w-lg"
        />
      </div>

      {/* Tabel Order */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Customer Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.customerName}</td>
                  <td className={`px-6 py-4 text-sm ${getStatusClass(order.status)}`}>{order.status}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">${order.totalPrice}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.orderDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-sm text-gray-500">No orders available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Fungsi untuk menambahkan warna berdasarkan status order
const getStatusClass = (status) => {
  switch (status) {
    case "Pending":
      return "text-yellow-500";
    case "Completed":
      return "text-green-500";
    case "Cancelled":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export default OrderPage;
