
import React from "react";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleFileSelect = (file: File) => {
    console.log("File selected:", file);
    // Process file or save to state
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">3D Model Upload</h1>
        <p className="text-gray-600 mb-8 text-center">
          Upload your 3D models to preview and manage them in your admin dashboard.
        </p>
        
        <FileUploader onFileSelect={handleFileSelect} />
        
        <div className="mt-8 flex justify-center">
          <Button className="w-full max-w-xs">
            Upload to Gallery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
