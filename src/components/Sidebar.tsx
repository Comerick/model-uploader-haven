
import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Plus, Upload, Settings, ClipboardList } from "lucide-react";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
