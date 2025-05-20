import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UseForm";
import HitungGajiForm from "./HitungGajiForm";
createRoot(document.getElementById("root")).render(
  <div>
    <TailwindCSS/>
    <UserForm/>
    <HitungGajiForm/>
  </div>
);