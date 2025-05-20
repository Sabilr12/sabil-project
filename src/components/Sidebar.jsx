import { AiOutlineUserAdd } from "react-icons/ai"; 
import { NavLink } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdDashboardCustomize, MdReportProblem, MdLockOutline, MdBlock } from "react-icons/md";
import ListMenu from "./ListMenu";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive
      ? "text-hijau bg-green-200 font-extrabold"
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div className="flex min-h-screen w-90 flex-col bg-white p-4 shadow-lg z-10">
      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] text-gray-900">
          Sedap<b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu */}
      <div className="mt-10">
        <ul className="space-y-3">
          <ListMenu to="/" icon={MdDashboardCustomize} text="Dashboard" menuClass={menuClass} />
          <ListMenu to="/orders" icon={AiOutlineShoppingCart} text="Orders" menuClass={menuClass} />
          <ListMenu to="/customers" icon={BsFillPeopleFill} text="Customers" menuClass={menuClass} />
          <ListMenu to="/users" icon={AiOutlineUserAdd } text="Users" menuClass={menuClass} />
          <ListMenu to="/error/400" icon={MdReportProblem} text="Error 400" menuClass={menuClass} />
          <ListMenu to="/error/401" icon={MdLockOutline} text="Error 401" menuClass={menuClass} />
          <ListMenu to="/error/403" icon={MdBlock} text="Error 403" menuClass={menuClass} />

        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <span className="text-gray-600 flex items-center">
                <BiAddToQueue />
                Add Menus
              </span>
            </div>
          </div>
          <img
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
            alt="Avatar"
          />
        </div>
        <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
