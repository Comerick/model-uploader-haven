
import React, { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [uploadProgress, setUploadProgress] = useState(82);
  
  const handleFileSelect = (file: File) => {
    console.log("File selected:", file);
    // Process file or save to state
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8">
        <Header />

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border p-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-[#1A2133] font-medium mr-4">Domain</span>
              <div className="flex items-center border rounded-md px-3 py-2 mr-4">
                <span className="text-gray-600">www.holostep.io</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <div className="flex-1">
                <Progress value={uploadProgress} className="h-2 bg-gray-200" />
                <div className="text-right mt-1 text-xs">{uploadProgress}%</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-16">
            <FileUploader onFileSelect={handleFileSelect} />
            <div className="mt-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="text-gray-400">234532_2</div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00FFA3]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <div className="text-gray-400">No models in queue...</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
