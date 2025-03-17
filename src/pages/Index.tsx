
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Upload, User, Settings, ClipboardList } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [uploadProgress, setUploadProgress] = useState(82);
  
  const handleFileSelect = (file: File) => {
    console.log("File selected:", file);
    // Process file or save to state
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-16 bg-[#1A2133] flex flex-col items-center py-8 space-y-12">
        <div className="text-white">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 16.5V7" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 16.5V11.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 16.5V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col space-y-8">
          <button className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10">
            <LayoutGrid size={20} />
          </button>
          <button className="p-2 bg-[#00FFA3] text-[#1A2133] rounded-md">
            <Plus size={20} />
          </button>
          <Link to="/request" className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10 flex items-center justify-center">
            <ClipboardList size={20} />
          </Link>
          <button className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10">
            <Upload size={20} />
          </button>
        </div>
        <div className="mt-auto flex flex-col space-y-4">
          <button className="p-2 text-white bg-opacity-20 rounded-md hover:bg-white/10">
            <Settings size={20} />
          </button>
          <div className="flex justify-center">
            <span className="text-white text-xs font-semibold bg-gray-600 px-2 py-1 rounded">FAQ</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#1A2133]">holostep.io</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-[#00FFA3] rounded-full">
              <User size={20} className="text-[#1A2133]" />
            </button>
            <button className="p-2 bg-[#00FFA3] rounded-full">
              <Settings size={20} className="text-[#1A2133]" />
            </button>
          </div>
        </div>

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

        <div className="mt-8 text-right text-sm text-gray-500">
          Powered by 
          <span className="inline-flex items-center ml-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M7 16.5V7" stroke="#1A2133" strokeWidth="2" strokeLinecap="round" />
              <path d="M17 16.5V11.5" stroke="#1A2133" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 16.5V13" stroke="#1A2133" strokeWidth="2" strokeLinecap="round" />
            </svg>
            holostep.io
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
