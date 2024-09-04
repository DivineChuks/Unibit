import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] mx-auto py-6 pr-8">
      <div className="flex gap-3 items-center">
        <img src="/logo.webp" />
        <h2 className="text-[gray] font-semibold">
          Unibit Labs <br></br> Copyright 2024. All rights reserved.
        </h2>
      </div>
      <div className="flex items-center gap-8">
        <button>
          <img src="/linkedin.svg" />
        </button>
        <button>
          <img src="/twitter.svg" />
        </button>
        <button>
          <img src="/telegram.svg" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
