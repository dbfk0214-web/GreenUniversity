import Header from "./Header";
import Footer from "./Footer";
import Logo from "../images/university.jpg";
import Logo2 from "../images/2.svg";
import ddi from "../images/ddi_one.svg";
import ddi2 from "../images/ddi_two.svg";
import ddi3 from "../images/ddi_three.svg";
import "../style/tailwind.css";
import { ReactComponent as Stripe } from "../images/ddi_three.svg";
import { hover } from "@testing-library/user-event/dist/hover";
const BasicLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-20 shrink-0 bg-sky-300">
        <Header />
        {children}
      </div>
      <div className="w-full h-screen grid place-items-center bg-white">
        <div className="relative-z w-[50%] aspect-square">
          <div className="absolute shadow-inner" />
          <img
            src={Logo2}
            alt="그린로고"
            className="relative reveal-ccw w-full h-full rounded-full object-cover block z-100"
          />
          <div className="pointer-events-none absolute inset-0 z-[50] overflow-visible">
            <div className="absolute -left-[12vw] top-10 w-[140vw] h-[160px] rotate-[24deg] origin-left">
              <img
                src={Stripe}
                alt=""
                className="block w-full h-full select-none"
              />
            </div>
            <div className="absolute -left-[12vw] bottom-10 w-[140vw] h-[160px] -rotate-[-30deg] origin-right">
              <img
                src={Stripe}
                alt=""
                className="block w-full h-full select-none"
              />
            </div>
            <div className="absolute -left-[12vw] bottom-10 w-[140vw] h-[160px] -rotate-[50deg] origin-left">
              <img
                src={Stripe}
                alt=""
                className="block w-full h-full select-none"
              />
            </div>
          </div>
          <div className="w-full h-screen">Content</div>
          <div className="w-full h-screen">Content</div>
          <div className="w-full h-screen">Content</div>
          <div className="w-full h-screen">Content</div>
          <div>
            <img src={Logo} alt="캠퍼스 사진" className="object-contain" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
