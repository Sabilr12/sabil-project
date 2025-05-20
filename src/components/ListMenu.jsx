// src/components/ListMenu.jsx
import { NavLink } from "react-router-dom"; // Gunakan NavLink

const ListMenu = ({ to, icon: Icon, text, menuClass }) => {
  return (
    <li>
      <NavLink to={to} className={menuClass}> {/* Gunakan NavLink */}
        <Icon className="mr-4 text-xl" />
        {text}
      </NavLink>
    </li>
  );
};

export default ListMenu;
