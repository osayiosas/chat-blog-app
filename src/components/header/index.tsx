"use client";

import { menuItems } from "../../utils";
import { MenuItem } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button";
import ThemeToggle from "../theme";

export default function Header() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  function handleStickyNavbar() {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center !bg-transparent
        ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:bg-primary dark:!bg-opacity-20"
            : "absolute"
        }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href={"/"}
                className={`text-[30px] font-extrabold cursor-pointer block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                CHATTER
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbar-toggle"
                  aria-label="Monile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
                        `}
                  />
                </button>

                <nav
                  id="narbarCollapes"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-black lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:py-0 lg:px-0 lg:opacity-100 
                ${
                  navbarOpen
                    ? "opacity-100 visible top-full"
                    : "invisible top-[120%] opacity-0"
                }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:group-hover:opacity-100`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex gap-4 items-center justify-end   pr-4 lg:pr-0">
                <Button onClick={() => {}} text="create" />
                <Button onClick={() => {}} text="Login" />

                <div className="flex gap-3 items-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
