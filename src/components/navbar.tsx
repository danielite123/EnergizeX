import {
  AlignJustify,
  ChevronDown,
  CircleUser,
  Search,
  ShoppingBag,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-5 min-lg:px-18 min-h-[50px] border border-gray-100 shadow-sm">
      <div className="flex flex-row items-center gap-2">
        <AlignJustify size={25} className="-mt-1 min-sm:hidden" />
        <p className="font-colombo text-[30px]">EnergizeX</p>
      </div>

      <div className="flex flex-row items-center gap-6 lg:gap-7">
        <div className="flex flex-row items-center gap-1 max-sm:hidden">
          <p>Products</p>
          <ChevronDown />
        </div>

        <p className="max-sm:hidden">Contact Us</p>

        <div className="relative max-md:hidden">
          <input
            name="search"
            type="text"
            className="border border-gray-100 p-1 rounded-sm pl-8 outline-none placeholder:text-sm max-w-[180px]"
            placeholder="Search"
          />
          <Search
            size={18}
            strokeWidth={1.5}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        <Search size={28} className="min-md:hidden" />
        <div className="flex flex-row items-center gap-2">
          <p className="max-md:hidden">Login</p>
          <CircleUser size={28} />
        </div>
        <ShoppingBag size={28} />
      </div>
    </div>
  );
};

export default Navbar;
