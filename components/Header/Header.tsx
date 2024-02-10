import Link from "next/link";
import HeaderUsr from "./HeaderUsr";

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
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center md:text-lg">
        <Link
          href={"/"}
          className="fontbold text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text mr-2 -translate-y-0.5">
          INGTOK
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
