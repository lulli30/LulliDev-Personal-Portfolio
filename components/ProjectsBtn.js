import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <Link href="/work" passHref>
      <button className="group cursor-pointer relative shadow-xl rounded-full p-2 text-lg font-semibold leading-6 text-white inline-block transition-all duration-300 ease-in-out">
        {/* Background gradient animation */}
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(20,184,166,0.5)_0%,rgba(20,184,166,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>

        {/* Button content */}
        <div className="relative flex space-x-3 items-center z-10 rounded-full bg-transparent py-3 px-8 ring-2 ring-white/20 transition-all duration-300 ease-in-out hover:ring-teal-400">
          <span className="text-xl">My Projects</span>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
          >
            <path
              d="M10 8l4 4-4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Underline effect */}
        <span className="absolute -bottom-1 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-teal-400/0 via-teal-400/80 to-teal-400/0 transition-opacity duration-500 group-hover:opacity-60" />
      </button>
    </Link>
  );
};

export default ProjectsBtn;
