import "animate.css";
import tabs from "../Tabs";
import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("tech");

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const handleTabChange = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <main className="h-full overflow-hidden">
      <div className="flex justify-center py-10">
        <div className="animate__animated animate__fadeInDown max-w-sm lg:max-w-screen-lg md:max-w-screen-md">
          <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
            SKILLS
          </h1>
          <nav className="w-100">
            <ul className="flex space-x-4 transition-all ease-in-out">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`cursor-pointer ${
                    activeTab === tab.id
                      ? " text-slate-50 font-bold bg-slate-800 p-1 px-2 rounded-lg transition-all ease-in-out"
                      : "p-1"
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex">{activeTabData?.content}</div>
        </div>
      </div>
    </main>
  );
}
