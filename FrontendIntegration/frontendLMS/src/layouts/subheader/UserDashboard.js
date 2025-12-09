import React from "react";
import college from "./../../images/2.jpg";
import Footer from "../Footer";

const UserDashboard = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-start">
        <img src={college} alt="college" className="mx-auto" />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
