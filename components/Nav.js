// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

// next link
import Link from "next/link";

// next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed z-50 w-full xl:w-16 h-max bottom-0 xl:right-6 xl:top-1/2 xl:-translate-y-1/2 xl:h-auto">
      {/* Inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8 px-4 md:px-40 xl:px-0 
        h-16 md:h-20 xl:h-auto py-6 xl:py-8 
        bg-white/10 backdrop-blur-md 
        border-t xl:border-t-0 xl:border-r border-white/20
        xl:rounded-full shadow-lg"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`relative flex items-center justify-center group transition-all duration-300 ease-in-out
                ${
                  link.path === pathname
                    ? "text-teal-500 scale-110"
                    : "text-gray-500 hover:text-teal-500 hover:scale-110"
                }`}
              href={link.path}
              key={index}
            >
              {/* Tooltip */}
              <div className="absolute right-0 hidden xl:group-hover:flex items-center">
                <div className="relative right-12 bg-teal-500 text-white px-3 py-1 rounded-md shadow-lg">
                  <div className="text-sm font-medium capitalize whitespace-nowrap">
                    {link.name}
                  </div>
                  {/* Triangle */}
                  <div
                    className="absolute top-1/2 -right-2 -mt-2 w-0 h-0 
                    border-t-4 border-b-4 border-l-4 border-r-0 
                    border-t-transparent border-b-transparent border-l-teal-500"
                  ></div>
                </div>
              </div>

              {/* Icon with indicator for active link */}
              <div className="relative text-2xl md:text-2xl">
                {link.icon}

                {/* Active indicator dot */}
                {link.path === pathname && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full xl:w-2 xl:h-2"></span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
