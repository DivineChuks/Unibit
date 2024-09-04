import { ArrowUpRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 bg-[#0D1316]">
      <div className="flex justify-between w-full max-w-[1400px] mx-auto">
        <div
          className="w-full px-3 flex items-center gap-8"
          style={{ flex: 2 }}
        >
          <img src="/logo.webp" alt="" />
          <div className="flex items-center flex-row gap-8 text-[gray] font-semibold">
            <p className="hover:text-white cursor-pointer">Features</p>
            <p className="hover:text-white cursor-pointer">Backers</p>
            <p className="hover:text-white cursor-pointer">About</p>
            <p className="hover:text-white cursor-pointer">Tokenomics</p>
            <p className="hover:text-white cursor-pointer">Coin Flip Game</p>
          </div>
        </div>
        <div className="flex items-center gap-8 flex-1">
          <button>
            <img src="/linkedin.svg" />
          </button>
          <button>
            <img src="/twitter.svg" />
          </button>
          <button>
            <img src="/telegram.svg" />
          </button>
          <button className="flex items-center font-bold text-white gap-2">
            Whitepaper
            <ArrowUpRight size={17} />
          </button>
          <button className="bg-main text-gray-900 font-bold px-4 py-2.5 w-fit rounded-md">
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
