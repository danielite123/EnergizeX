import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Category from "@/components/category";
import BestSeller from "@/components/bestseller";
import Supplement from "@/components/supplement";
import AdBanner from "@/components/ads-banner";
import ContactUs from "@/components/contact-us";
import Footer from "./components/footer";
import MotionDiv from "./common/motion";

function App() {
  return (
    <>
      <div className="flex flex-col bg-grey">
        <Navbar />
        <MotionDiv>
          <Banner />
        </MotionDiv>
        <div className="mx-5 max-md:mx-2 max-sm:mx-0">
          <MotionDiv>
            <Category />
          </MotionDiv>

          <MotionDiv>
            <BestSeller />
          </MotionDiv>

          <MotionDiv>
            <Supplement />
          </MotionDiv>

          <MotionDiv>
            <AdBanner />
          </MotionDiv>

          <MotionDiv>
            <ContactUs />
          </MotionDiv>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
