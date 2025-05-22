import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import Visa from "@/image/visa.png";
import AmericaExpress from "@/image/american-express.png";
import MasterCard from "@/image/master-card.png";
import Stripe from "@/image/stripe.png";
import Paypal from "@/image/paypal.png";
import ApplePay from "@/image/apple-pay.png";

const Footer = () => {
  const menu = [
    {
      title: "Page",
      items: [
        { name: "Home" },
        { name: "Shop" },
        { name: "Product" },
        { name: "Articles" },
        { name: "Contact Us" },
      ],
    },
    {
      title: "Info",
      items: [
        { name: "Shipping Policy" },
        { name: "Return & Refund" },
        { name: "Support" },
        { name: "FAQs" },
      ],
    },
    {
      title: "Office",
      items: [
        { name: "43111 Hai Trieu street," },
        { name: "District 1, HCMC" },
        { name: "Vietnam" },
        { name: "84-756-3237" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-[300px] mt-6 flex flex-col gap-4 font-poppins p-8 lg:px-26 lg:pt-12">
      <div className="flex flex-col md:flex-row md:justify-between text-white w-full gap-6 md:gap-0">
        <div className="flex flex-col gap-4 md:max-w-[40%]">
          <h2 className="text-2xl font-medium">EnergizeX</h2>
          <p className="text-base font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="hidden md:flex items-start justify-between gap-16 w-[40%]">
          <div className="flex flex-col items-start">
            <h1 className="font-medium text-lg">Page</h1>

            <div className="text-sm font-light flex flex-col gap-2 mt-3">
              <p>Home</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Articles</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-base">Info</h1>

            <div className="text-sm font-light flex flex-col gap-2 mt-4">
              <p>Shipping</p>
              <p>Return & Refund</p>
              <p>Support</p>
              <p>FAQs</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-lg">Office</h1>

            <div className="text-sm font-light flex flex-col gap-2 mt-2">
              <p>Home</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Articles</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 md:hidden"></div>

        <div className="flex flex-col gap-5 md:hidden">
          {menu.map((section, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() => toggleSection(idx)}
                >
                  <h1 className="text-lg font-medium">{section.title}</h1>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col mt-2">
                    {section.items.map((item, i) => (
                      <p
                        key={i}
                        className="mb-3 text-base hover:text-gray-300 transition-colors"
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-600"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:border-t border-grey md:pt-6  mt-6 flex flex-col md:flex-row-reverse mx-auto md:m-0 md:justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-white w-10 h-6 flex justify-center items-center p-1">
            <img src={Visa} className="object-contain" alt="Visa" />
          </div>

          <div className="bg-white w-10 h-6 flex justify-center items-center p-1">
            <img
              src={AmericaExpress}
              className="object-contain"
              alt="American Express"
            />
          </div>

          <div className="bg-white w-10 h-6 flex justify-center items-center p-1">
            <img src={MasterCard} className="object-contain" alt="MasterCard" />
          </div>

          <div className="bg-white w-10 h-6 flex justify-center items-center p-1">
            <img src={Stripe} className="object-contain" alt="Stripe" />
          </div>

          <div className="bg-white w-10 h-6 flex justify-center items-center p-1">
            <img src={Paypal} className="object-contain" alt="PayPal" />
          </div>

          <div className="bg-white w-10 h-6 flex justify-center items-center p-1">
            <img src={ApplePay} className="object-contain" alt="Apple Pay" />
          </div>
        </div>

        <div className="text-white mt-5 md:mt-0 text-xs">
          <p>Copyright © 2023 EnergizeX. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
