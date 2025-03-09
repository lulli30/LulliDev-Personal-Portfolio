// links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"https://www.youtube.com/@lullipap7082"}
        className="hover:text-teal-900 transition-all duration-300"
        target="_blank"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/lulli.30/"}
        className="hover:text-teal-900 transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/johnandrewborabo44"}
        className="hover:text-teal-900 transition-all duration-300"
        target="_blank"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/lulli30"}
        className="hover:text-teal-900 transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/john-andrew-borabo-3533b3255/"}
        className="hover:text-teal-900 transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
