import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full flex items-center px-8 sm:px-20 xl:px-32 h-[150px] transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={140}
              height={60}
              priority={true}
            />
          </Link>

          {/* Social Icons */}
          <Socials isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;
