// LIBRARIES
import React from "react";

// FC
const Footer: React.FC = () => {
  const currentYear = new Date();
  return (
    <div className="sm:flex-cols-1 lg:flex-cols-3 mx-auto flex w-full items-center justify-around border-t-4 border-solid border-neutral-content bg-secondary py-5 text-secondary-content">
      <h3 className="text-md text-center font-semibold">
        Made With Love by Neffrey - Copyright © {currentYear.getFullYear()}
      </h3>
    </div>
  );
};
export default Footer;
