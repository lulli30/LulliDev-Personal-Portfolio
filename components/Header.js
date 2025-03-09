// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="fixed top-[25px] left-0 z-30 w-full flex items-center px-6 sm:px-16 xl:px-0 h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={130}
              height={40}
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
