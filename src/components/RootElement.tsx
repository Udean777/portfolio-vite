import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDarkMode } from "./DarkMode/DarkContext";

const RootElement = () => {
  const { isDarkmode } = useDarkMode();
  return (
    <div
      className={`min-h-screen ${
        isDarkmode
          ? "text-slate-50 bg-gradient-to-b from-slate-600 to-slate-500"
          : "text-slate-700 bg-gradient-to-b from-slate-300 to-slate-200"
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootElement;
