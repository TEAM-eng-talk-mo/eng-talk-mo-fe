import Link from "next/link";
import HeaderUsr from "./HeaderUsr";
import Image from "next/image";

const Header = () => {
  const routes = {
    nearbyStudy: {
      href: "study-nearby",
      name: "근처 스터디",
    },
    onlineStudy: {
      href: "online-nearby",
      name: "온라인 스터디",
    },
  };
  const routesKeys = Object.keys(routes) as Array<keyof typeof routes>;

  return (
    <header className="flex justify-between items-center my-4 mx-2 sm:my-6 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 font-semibold">
      <div className="flex gap-3 sm:gap-5 md:gap-7 lg:gap-9 items-center md:text-lg">
        <Link href={"/"} className="w-36 h-16 -mr-2">
          <Image
            alt="home-logo"
            src="/logo.svg"
            height={200}
            width={200}
            className="-translate-y-9 scale-95 sm:scale-110 lg:scale-125 "></Image>
        </Link>
        {routesKeys.map((key) => (
          <Link key={key} href={routes[key].href}>
            <div className="text-neutral-400 hover:text-neutral-950 transition">
              {routes[key].name}
            </div>
          </Link>
        ))}
      </div>
      <HeaderUsr />
    </header>
  );
};

export default Header;
