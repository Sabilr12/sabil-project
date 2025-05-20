// src/layouts/Sidebar.jsx
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import ListMenu from "../components/ListMenu";  // Impor komponen ListMenu

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold" : 
        "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-4 shadow-lg z-10"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <ListMenu
            to="/"
            icon={MdDashboardCustomize}
            text="Dashboard"
            menuClass={menuClass}
          />
          <ListMenu
            to="/orders"
            icon={AiOutlineShoppingCart}
            text="Orders"
            menuClass={menuClass}
          />
          <ListMenu
            to="/customers"
            icon={BsFillPeopleFill}
            text="Customers"
            menuClass={menuClass}
          />
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">
                <BiAddToQueue />
                Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
            alt="Avatar"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
