import { Switch } from "@headlessui/react";
import { useDarkMode } from "./DarkContext";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkButton = () => {
  const { isDarkmode, toggleDarkmode } = useDarkMode();

  return (
    <Switch
      checked={isDarkmode}
      onChange={toggleDarkmode}
      className={`${
        isDarkmode ? "bg-slate-900" : "bg-slate-200"
      } relative inline-flex h-[28px] w-[56px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        aria-hidden="true"
        className={`${
          isDarkmode ? "translate-x-7" : "translate-x-0"
        } pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
      {isDarkmode ? (
        <FaSun
          size={27}
          className="pl-2 pr-1 text-yellow-500 absolute inset-y-0 right-0 flex justify-center items-center m-auto pointer-events-none"
        />
      ) : (
        <FaMoon
          size={27}
          className="pl-1 pr-2 text-slate-800 absolute inset-y-0 left-0 flex justify-center items-center m-auto pointer-events-none"
        />
      )}
    </Switch>
  );
};

export default DarkButton;
