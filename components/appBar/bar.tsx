"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {  Bars3Icon, ChevronDownIcon, MoonIcon,  SunIcon } from "@heroicons/react/24/outline";


const MenuItem = ({ href, children, isActive }: any) => (
  <li>
    <a
      href={href}
      className={`block py-1 px-3 rounded ${
        isActive
          ? " md:text-blue-700 md:dark:text-blue-500"
          : "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:text-blue-500"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  </li>
);

const DropdownMenu = ({ title, items }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  let timer: any;

  const showDropdown = () => {
    clearTimeout(timer);
    setIsOpen(true);
  };

  const hideDropdown = () => {
    timer = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  return (
    <li
      className="relative group list-none"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <a href="#" className="block px-3 rounded  ">
        <div className="flex flex-row ">

        {title} <ChevronDownIcon  className="h-5 w-5  ml-1 mt-1" />
        </div>
      </a>
      {isOpen && (
        <div className="absolute left-0 z-50 w-72 mt-4 bg-[#c61ed5] px-4 pb-3 pt-2 text-gray-800 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {items.map((item: any, index: any) => (
              <a
                key={index}
                className="block py-1 px-6  border-gray-100 font-sans text-sm hover:underline text-white "
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default function AppBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    "Home",
    "Fixtures",
    "Results",
    "Tables",
    "Transfers",
    "Stats",
    "News",
    "Video",
    "Watch Live",
    "Tickets",
    "Clubs",
    "Players",
    "Awards",
    "Pre-season friendlies",
  ];
  const fantasyItems = ["Fantasy", "Fantasy Challenge", "Fantasy Draft"];
  const footItems = [
    " Wider Football",
    "PL Charitable Fund",
    "Community",
    "Youth Development",
    "No Room for Racism",
    "Inside Matters",
    "Poppy",
    "Rainbow Laces",
    "More than a game",
  ];
  const abouItems = [
    "Overview",
    "Governance",
    "What we do",
    "Inclusion",
    "Statement of Principles",
    "Publications",
    "Partners",
    "Legal",
    "Careers",
    "Safeguarding",
    "Gender Pay Gap Report",
    "Media"
  ];
  const moreItems = [
    "History",
    "Fan Team of the Season",
    "Hall of Fame",
    "Referees",
    "PL30",
    "Man of the Match",
    "Managers",
    "ePremier League",
    "FAQs",
    "Nike Ball Hub",
    "Tickets",
    "Contact Us",
    "Mornings Live",
    "Summer Series",
  ];

  return (
    <div className="app">
      <nav
        className={`w-full fixed z-50 bg-[#37003C] transition-all duration-300 ${
          scrolled ? "top-0" : "top-14"
        }`}
      >
        <div className="">
          <a
            href="/"
            className={` font-bold fixed  left-0 z-50 text-gray-700 ${
              scrolled ? "top-0" : "top-14"
            }`}
          >
            <Image
              src={"/image.png"}
              alt="logo"
              width={150}
              height={150}
              className="text-primary"
            />
          </a>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            <div className="flex items-center gap-16 my-4">
              <div className="hidden font-bold text-white text-xl lg:flex gap-8 ml-12">
                <DropdownMenu title={"BotolaPro"} items={menuItems} />
                <DropdownMenu title={"Fantasy"} items={fantasyItems} />
                <DropdownMenu
                  title={"Football and community"}
                  items={footItems}
                />
                <DropdownMenu title={"About"} items={abouItems} />
                <DropdownMenu title={"More"} items={moreItems} />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6 bg-white" />
                  <SunIcon className="h-6 w-6 bg-white" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
