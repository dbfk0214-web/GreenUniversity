import Header from "./Header";
import Footer from "./Footer";

const BasicLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-20 shrink-0 bg-gray-900">
        <Header />
      </div>
    <header className="print:hidden !print:hidden"></header>
      <div className="flex flex-1 overflow-y-auto">
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="w-3/5 rounded-xl border border-gray-200 my-4 h-[600px]">
            {children}
          </div>
        </div>
      </div>

      <div className="h-12 shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default BasicLayout;
