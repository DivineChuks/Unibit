import { ArrowUpRight, Copy } from "lucide-react";
import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="bg-[#0D1316] flex justify-center py-14 items-center text-white">
      <div>
        <Container>
          <div className="flex flex-col items-center gap-6">
            <button className="bg-transparent border-main text-main font-semibold text-center border rounded-full py-1.5 px-4">
              Powering the Future of Blockcahin
            </button>
            <h2 className="text-6xl font-semibold text-center leading-[4rem]">
              Unlock the power of cross-chain DeFi innovation with our BRC20
              platform
            </h2>
            <h2 className="text-[gray] font-semibold text-lg">
              Bridge tokens, create new assets, add liquidity, and launch
              projects seamlessly across 10 EVM chains!
            </h2>
            <div className="flex items-center gap-6">
              <button className="bg-main text-gray-900 font-bold px-4 py-2.5 w-fit rounded-md">
                Launch App
              </button>
              <button>
                <img src="/twitter.svg" />
              </button>
              <button>
                <img src="/telegram.svg" />
              </button>
            </div>
            <div className="flex gap-3 items-center ">
              <button className="bg-[#F4FAFD] font-semibold rounded-md flex items-center gap-2 text-gray-800 py-3 px-3">
                <img src="/mexc.webp" />
                Buy at MEXC
              </button>
              <button className="bg-[#F4FAFD] rounded-md flex items-center gap-2 font-semibold text-gray-800 py-3 px-3">
                <img src="/mexc.webp" />
                Buy at BINGX
              </button>
              <button className="bg-transparent rounded-md flex border border-[gray] items-center text-white gap-2 py-3 px-3">
                Copy contract
                <Copy size={17} />
              </button>
              <button className="bg-transparent rounded-md text-white flex border border-gray-700 items-center gap-2  py-3 px-3">
                <img src="dex.webp" />
                Dextools
                <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="flex items-center gap-[6rem] mt-10">
              <div className="flex flex-col">
                <h2 className="mb-4 font-semibold text-xl">$1.6M</h2>
                <h2 className="text-[gray]">
                  Total Value <br></br>Transferred
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="mb-4 font-semibold text-xl">$1.1M</h2>
                <h2 className="text-[gray]">
                  Total Value <br></br>Locked
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl mb-8">∞</h2>
                <h2 className="text-[gray]">Assets</h2>
              </div>
              <div className="flex flex-col">
                <h2 className="mb-8 text-xl">10</h2>
                <h2 className="text-[gray]">Blockchains</h2>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-16 px-3">
          <img src="/show.png" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
