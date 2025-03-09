import Image from "next/image";

const Avatar = () => {
  console.log("Avatar component rendered");
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar1.png"} // Ensure this path is correct
        alt=""
        width={737} // Adjust based on your design
        height={737}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
