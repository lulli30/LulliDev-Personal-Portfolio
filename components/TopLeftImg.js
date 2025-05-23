// next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-60">
      <Image
        src="/top-left-img1.png"
        alt="Top Left Image"
        width={400}
        height={400}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default TopLeftImg;
