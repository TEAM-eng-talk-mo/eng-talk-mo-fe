"use client";

import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen((state) => !state);
  };

  const logOutRoutes = {
    signIn: {
      href: "/sign-in",
      name: "로그인",
    },
    signUp: {
      href: "/sign-up",
      name: "회원 가입",
    },
  };

  const logInRoutes = {
    studyRegist: {
      href: "/study-regist",
      name: "스터디 등록",
    },
    signOut: {
      href: "/sign-out",
      name: "로그아웃",
    },
  };
  const logOutRoutesKeys = Object.keys(logOutRoutes) as Array<
    keyof typeof logOutRoutes
  >;
  return (
    <header className="flex justify-between items-center my-4 mx-2 sm:my-6 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 font-semibold">
      <div className="fontbold text-2xl bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
        INGTOK
      </div>
      <div>
        <div
          className="rounded-full sm:hidden hover:bg-neutral-100 transition flex justify-center items-center p-2"
          onClick={handleMenuClick}>
          {isOpen ? (
            <IoMdClose size={28} className="animate-fadein" />
          ) : (
            <RxHamburgerMenu size={28} className="animate-fadein" />
          )}
          {isOpen ? (
            <div className="absolute z-10 border-2 bg-neutral-50 rounded-lg p-2 w-18 top-16 right-4 flex flex-col gap-2">
              {logOutRoutesKeys.map((key) => (
                <Link key={key} href={logOutRoutes[key].href}>
                  <div className="hover:text-red-700 transition">
                    {logOutRoutes[key].name}
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <ul className="h-[28px] items-center gap-2 hidden sm:flex sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {logOutRoutesKeys.map((key) => (
            <li key={key}>
              <button className="hover:text-red-700 transition">
                {logOutRoutes[key].name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
