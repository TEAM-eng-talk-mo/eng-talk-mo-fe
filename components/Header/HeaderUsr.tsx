"use client";

import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const HeaderUsr = () => {
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
    <div>
      <div
        className="rounded-full sm:hidden hover:bg-neutral-100 transition flex justify-center items-center p-2"
        onClick={handleMenuClick}>
        {isOpen ? (
          <IoMdClose
            size={28}
            className="animate-fadein hover:cursor-pointer"
          />
        ) : (
          <RxHamburgerMenu
            size={28}
            className="animate-fadein hover:cursor-pointer"
          />
        )}
        {isOpen ? (
          <div className="absolute z-10 border-2 bg-neutral-50 rounded-lg p-2 w-18 top-16 right-4 flex flex-col gap-2 text-neutral-400">
            {logOutRoutesKeys.map((key) => (
              <Link key={key} href={logOutRoutes[key].href}>
                <div className="hover:text-neutral-950 transition">
                  {logOutRoutes[key].name}
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      <ul className="h-[28px] items-center hidden sm:flex sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 ">
        {logOutRoutesKeys.map((key) => (
          <li
            key={key}
            className="rounded-lg hover:bg-neutral-200 py-1 px-2 transition">
            <button className="hover:text-neutral-950 transition">
              {logOutRoutes[key].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderUsr;
