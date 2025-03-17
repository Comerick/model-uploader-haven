
import React from "react";
import { User, Settings } from "lucide-react";

const Header = () => {
  return (
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
  );
};

export default Header;
