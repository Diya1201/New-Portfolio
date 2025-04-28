import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between relative">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/images/projects/logo.png"
            alt="Logo"
            width={100}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Footer Text */}
        <p className="text-slate-600 text-center md:text-right">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
