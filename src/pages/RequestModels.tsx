
import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModelRequestForm from "@/components/ModelRequestForm";

const RequestModels = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <Header />
        <ModelRequestForm />
        <Footer />
      </div>
    </div>
  );
};

export default RequestModels;
