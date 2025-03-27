import Image from "next/image";

const Avatar = () => {
  console.log("Avatar component rendered");
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar1.png"}
        alt=""
        width={737}
        height={737}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
