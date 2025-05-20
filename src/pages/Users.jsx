import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon
import { BsFillExclamationDiamondFill } from "react-icons/bs"; // Error icon

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState({ name: "", email: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((err) => {
        setError("Failed to load users.");
        setLoading(false); // Stop loading even on error
      });
  }, []);

  // Filter users based on search input
  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.name.toLowerCase()) &&
      user.email.toLowerCase().includes(search.email.toLowerCase())
  );

  // Get users for the current page
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Display error message if any
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  // Display loading spinner
  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="p-6 bg-white text-gray-900">
      <PageHeader title="Users" breadcrumb={["Home", "Users"]}>
        <div className="flex mb-4 space-x-4">
          <input
            type="text"
            placeholder="Search name..."
            value={search.name}
            onChange={(e) => setSearch({ ...search, name: e.target.value })}
            className="border border-gray-300 bg-white px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Search email..."
            value={search.email}
            onChange={(e) => setSearch({ ...search, email: e.target.value })}
            className="border border-gray-300 bg-white px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
      </PageHeader>

      {errorInfo}
      {loadingInfo}

      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-4 px-6 text-left">Logo</th> {/* Logo Column */}
              {["ID", "Name", "Email", "Phone", "Age"].map((head) => (
                <th key={head} className="py-4 px-6 text-left">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((u) => (
              <tr
                key={u.id}
                onClick={() => setSelectedUser(u.id)} // Set selected user on click
                className={`border-t hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedUser === u.id
                    ? "bg-green-500 text-white" // Highlight selected row
                    : "hover:bg-green-200"
                }`}
              >
                <td className="py-4 px-6">
                  <img
                    src={
                      u.image ||
                      `https://randomuser.me/api/portraits/men/${Math.floor(
                        Math.random() * 100
                      )}.jpg` // Gambar acak wajah laki-laki jika tidak ada gambar
                    }
                    alt={`${u.firstName} ${u.lastName}'s Profile`} // Teks alternatif untuk aksesibilitas
                    className="w-12 h-12 rounded-full border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300 object-cover"
                  />
                </td>
                <td className="py-4 px-6">{u.id}</td>
                <td className="py-4 px-6">{u.firstName} {u.lastName}</td>
                <td className="py-4 px-6">{u.email}</td>
                <td className="py-4 px-6">{u.phone}</td>
                <td className="py-4 px-6">{u.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-green-500 text-white shadow-xl"
                  : "bg-gray-300 hover:bg-green-500 text-gray-900"
              } transition-all duration-300`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
