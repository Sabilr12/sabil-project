import React, { useState } from "react";
import customersData from "../JSON/customers.json";

const CustomerPage = () => {
  const [customers, setCustomers] = useState(customersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email) return;
    setCustomers([...customers, newCustomer]);
    setNewCustomer({
      id: "",
      name: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    });
    setShowModal(false);
  };

  return (
    <div className="relative container mx-auto p-6">
      {/* HEADER & SEARCH */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          + Add Customer
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by customer name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg mb-6 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150 ease-in-out"
      />

      {/* CUSTOMER LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white p-6 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">
                  {customer.name[0]}
                </span>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {customer.name}
                </h2>
                <p className="text-gray-600">{customer.email}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{customer.loyalty} Loyalty</span>
              <span>{customer.phone}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL OVERLAY */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 transition-transform transform scale-100 duration-500 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Add New Customer
            </h2>
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Customer ID"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                value={newCustomer.id}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, id: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                value={newCustomer.name}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                value={newCustomer.email}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                value={newCustomer.phone}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, phone: e.target.value })
                }
              />
              <select
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                value={newCustomer.loyalty}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, loyalty: e.target.value })
                }
              >
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
              </select>
            </div>

            <div className="flex justify-between space-x-4 mt-6">
              <button
                className="px-6 py-3 bg-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-400 transition duration-200 ease-in-out"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-200 ease-in-out"
                onClick={handleAddCustomer}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerPage;
