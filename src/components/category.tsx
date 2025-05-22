import Cat1 from "@/image/cat1.png";
import Cat2 from "@/image/cat2.png";
import Cat3 from "@/image/cat3.png";
import Cat4 from "@/image/cat4.png";
import Cat5 from "@/image/cat5.png";
import Cat6 from "@/image/cat6.png";

const Category = () => {
  return (
    <div className="min-h-[300px] w-full bg-white p-20 max-md:p-8">
      <div className="flex flex-row items-center gap-3">
        <div className="border-l-4 border-green-500 h-10 rounded-3xl"></div>
        <p className="text-2xl font-medium font-poppins">Shop by Categories</p>
      </div>

      <div className="flex flex-row flex-wrap justify-center md:justify-evenly items-center gap-10 mt-8">
        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Cat1})` }}
          ></div>
          <p className="font-poppins text-sm font-medium">Health Food</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Cat2})` }}
          ></div>
          <p className="font-poppins text-sm font-medium">Proteins</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Cat3})` }}
          ></div>
          <p className="font-poppins text-sm font-medium">Gainers</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Cat4})` }}
          ></div>
          <p className="font-poppins text-sm font-medium">Pre-Workout</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Cat5})` }}
          ></div>
          <p className="font-poppins text-sm font-medium">Accessories</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Cat6})` }}
          ></div>
          <p className="font-poppins text-sm font-medium">Ayurveda</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
