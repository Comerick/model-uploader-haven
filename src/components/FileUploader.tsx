
import React, { useState, useRef } from 'react';
import { toast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

interface FileUploaderProps {
  onFileSelect?: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Supported file types for 3D models and ZIP files
  const supportedFormats = ['.zip', '.glb', '.gltf', '.obj', '.fbx'];
  const acceptString = supportedFormats.join(',');

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndProcessFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndProcessFile(file);
    }
  };

  const validateAndProcessFile = (file: File) => {
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    
    if (!supportedFormats.includes(fileExtension)) {
      toast({
        title: "Invalid file type",
        description: `Please upload one of these formats: ${supportedFormats.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

    setSelectedFile(file);
    if (onFileSelect) onFileSelect(file);
    toast({
      title: "File selected",
      description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-xl">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-[#00FFA3] bg-[#00FFA3]/5' : 'border-gray-200'
        } transition-all duration-200 cursor-pointer`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          accept={acceptString}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full">
            <Plus className="h-12 w-12 text-[#1A2133]" strokeWidth={1.5} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-medium text-[#1A2133]">Drag & Drop to upload</h3>
            <p className="text-sm text-gray-500">
              Supported ZIP archives gltf, glb files inside
            </p>
          </div>
        </div>
      </div>
      
      {selectedFile && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium">Selected file:</p>
          <p className="text-sm">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
