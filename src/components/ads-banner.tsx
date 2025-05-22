import HomeBanner from "@/image/homebanner sub 0 1.png";

const AdBanner = () => {
  return (
    <div className="mt-6 w-full flex flex-col md:flex-row">
      <div className="w-full min-h-[200px] md:w-1/2 bg-white">
        <img src={HomeBanner} alt="banner" className="bg-cover bg-no-repeat" />
      </div>
      <div className="w-full min-h-[200px] md:w-1/2 bg-black font-poppins">
        <div className="flex flex-col items-start gap-2.5 mt-8 lg:mt-22 lg:ml-18 ml-10">
          <p className="text-green-500 text-base font-medium">
            LIMITED EDITION
          </p>
          <h2 className="text-3xl text-white font-medium">Hurry up! 30% OFF</h2>

          <p className="text-xs text-white font-light">
            The World’s #1 Sports Nutrition Brand
          </p>

          <p className="text-xs text-white font-light">Offer expires in:</p>

          <div className="flex flex-row items-center gap-4 mt-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-time flex items-center justify-center">
                <p className="text-center text-2xl font-medium">02</p>
              </div>
              <p className="text-xs text-white">Days</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-time flex items-center justify-center">
                <p className="text-center text-2xl font-medium">12</p>
              </div>
              <p className="text-xs text-white">Hours</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-time flex items-center justify-center">
                <p className="text-center text-2xl font-medium">45</p>
              </div>
              <p className="text-xs text-white">Minutes</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-time flex items-center justify-center">
                <p className="text-center text-2xl font-medium">05</p>
              </div>
              <p className="text-xs text-white">Seconds</p>
            </div>
          </div>

          <button className="py-3 px-8 bg-green-500 my-2 mb-5 rounded-md text-white font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
