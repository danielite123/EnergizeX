import { CircleAlert, Facebook, Instagram, Twitter } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full bg-white mt-6 font-poppins flex flex-col md:flex-row">
      <div className="w-full min-h-[200px] md:w-1/2 flex justify-center items-center py-8 px-10">
        <div className="bg-green-400 w-full max-w-md rounded-lg p-6 flex flex-col gap-4">
          <p className="text-base text-white font-medium">Need Help?</p>

          <div className="flex items-center gap-2 text-sm text-white font-medium">
            <span>Mail Us</span>
            <span>&gt;&gt;</span>
            <p className="underline hover:text-white/80">xyz@gmail.com</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-white font-medium">
            <CircleAlert className="text-white" />
            <span>&gt;&gt;</span>
            <a href="/faqs" className="underline hover:text-white/80">
              FAQs
            </a>
          </div>

          <button className="mt-4 py-2 px-4 rounded-lg bg-white text-green-500 font-semibold hover:shadow-md transition mx-4 cursor-pointer">
            Help Center
          </button>
        </div>
      </div>

      <div className="w-full min-h-[200px] md:w-1/2 flex flex-col items-center justify-center gap-6 mb-6">
        <h2 className="text-xl font-medium">Connect with Us</h2>

        <div className=" flex flex-row items-center gap-5">
          <div className="w-14 h-14 bg-white shadow-md rounded-2xl relative flex justify-center items-center cursor-pointer border border-grey hover:shadow-none">
            <Instagram size={26} className="text-green-400" />
          </div>

          <div className="w-14 h-14 bg-white shadow-md rounded-2xl relative flex justify-center items-center cursor-pointer border border-grey hover:shadow-none">
            <Facebook size={26} className="text-green-400" />
          </div>

          <div className="w-14 h-14 bg-white shadow-md rounded-2xl relative flex justify-center items-center cursor-pointer border border-grey hover:shadow-none">
            <Twitter size={26} className="text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
