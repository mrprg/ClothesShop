import React, { useCallback, useEffect, useState } from "react";
import Main from "./Main";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import css from "../../styles/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";

const headerMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/Shop",
  },
  {
    name: "Sale",
    href: "/Sale",
  },
  {
    name: "Features",
    href: "/Features",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Contact",
    href: "/Contact",
  },
];
const Header = () => {
  const path = usePathname();

  const isActive = useCallback((href) => path === href, [path]);

  const [isTopSectionSticky, setIsTopSectionSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if the user has scrolled beyond a certain threshold
      if (scrollTop > 70) {
        setIsTopSectionSticky(true);
      } else {
        setIsTopSectionSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={`   relative z-50 border border-b-slate-400 ${
        isTopSectionSticky &&
        "sticky transition-all duration-200 top-0 left-0 right-0"
      }`}
    >
      <topbar
        className={`bg-gray-100 py-4 hidden md:flex px-6   items-center justify-between ${
          isTopSectionSticky && "md:hidden"
        }`}
      >
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-400">
            <FaInstagram
              size={21}
              style={{ marginRight: "5px" }}
              className={css.icons}
            />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaFacebook
              size={21}
              style={{ marginRight: "5px" }}
              className={css.icons}
            />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaPinterest
              size={21}
              style={{ marginRight: "5px" }}
              className={css.icons}
            />
          </a>
        </div>
        <div className="text-black">
          <p className="text-sm">info@fashe.com</p>
        </div>
      </topbar>
      <header
        className={classNames(
          "bg-white sticky top-0  text-black py-4 px-8 z-10 flex items-center justify-between ",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <div>
          <a>
            <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png"></img>
          </a>
        </div>
        <div className="container mx-auto flex items-center justify-center">
          <nav className="">
            <ul className="flex justify-center ">
              {headerMenu.map((MenuItem, index) => {
                return (
                  <li>
                    <Link
                      href={MenuItem.href}
                      className={`text-black p-5 py-4  font-light  hover:text-red-600 ${
                        isActive(MenuItem.href) && "active"
                      }
                      [&.active]:text-red-500
                      `}
                    >
                      {MenuItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="  flex items-center mr-10">
          <VscAccount className=" text-3xl font-light text-gray-700" />

          <div className=" border-x h-8  mx-4" />
          <div
          className=" relative"
          >
            <AiOutlineShoppingCart className=" text-3xl font-extralight text-gray-700" />
            <div
            className=" text-white bg-black p-1 px-2 flex items-center justify-center absolute -top-3 -right-2 rounded-full text-[10px]"
            >
              0
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
