'use client'
import React, { useState } from "react";

const TabMenu = ({ activeTab, handleTabClick }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: 0, label: "Home" },
    { id: 1, label: "Prizes" },
    { id: 2, label: "Scout" },
    { id: 3, label: "Podcast" },
    { id: 4, label: "Help" },
    { id: 5, label: "Statistics", disabled: false },
    { id: 6, label: "FPL Challenge", disabled: false },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <ul className="flex flex-wrap text-sm font-medium text-center ml-4 text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li key={tab.id} className={`me-2 ${index > 3 ? 'hidden lg:inline-block' : 'inline-block'}`}>
            <a
              href="#"
              onClick={() => handleTabClick(tab.id)}
              className={`inline-block mx-1 text-sm font-bold hover:bg-[#963CFF] text-black px-6 py-4 rounded-t-lg ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed dark:text-gray-500"
                  : activeTab === tab.id
                  ? "text-white bg-[#963CFF]"
                  : "hover:text-gray-900 bg-[#00FF87] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </a>
          </li>
        ))}
        <div className="lg:hidden">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center text-black w-full mx-1 text-sm font-bold hover:bg-[#963CFF] hover:text-gray-900 bg-[#00FF87]  dark:hover:bg-gray-800 dark:hover:text-white px-6 py-4 rounded-t-lg "
        >
          Menu
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="py-1">
              {tabs.map((tab, index) => (
                <li key={tab.id} className={`${index > 3 ? 'inline-block' : 'hidden'}`}>
                  <a
                    href="#"
                    onClick={() => {
                      handleTabClick(tab.id);
                      setIsDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </ul>

      
    </div>
  );
};

export default TabMenu;
