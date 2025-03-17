
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
