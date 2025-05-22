import BannerImage from "@/image/banner.png";

const Banner = () => {
  return (
    <div className="w-full mx-auto mt-8 max-sm:mt-2">
      <img src={BannerImage} alt="banner" className="w-full block align-top" />
    </div>
  );
};

export default Banner;
