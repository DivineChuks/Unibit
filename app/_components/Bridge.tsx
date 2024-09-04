import React from "react";

const Bridge = () => {
  return (
    <div className="bg-[#0D1316] py-[4.5rem]">
      <div className="w-full max-w-[1100px] 2xl:max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col hover:border hover:border-main hover:cursor-pointer rounded-[2rem] p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-main shadow-sm">
            <img src="/bridge.png" />
            <button className="border mb-3 mt-4 border-main w-fit text-main rounded-full px-5 py-1.5">
              Bridge
            </button>
            <h2 className="text-3xl mb-4 text-white font-bold">
              Seamless Interoperability Unleashed
            </h2>
            <p className="text-[gray] font-semibold ">
              Experience unparalleled interoperability with our advanced bridge
              technology, seamlessly connecting the BRC20 and EVM networks.
              Facilitate effortless asset transfers and unlock new opportunities
              across the blockchain spectrum.
            </p>
          </div>
          <div className="flex flex-col hover:border hover:border-main hover:cursor-pointer rounded-[2rem] p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-main shadow-sm">
            <img src="/dex.png" />
            <button className="border mb-3 mt-4 border-main w-fit text-main rounded-full px-5 py-1.5">
              DEX
            </button>
            <h2 className="text-3xl mb-4 text-white font-bold">
              Next-Gen Trading: Decentralized, Secure, Swift
            </h2>
            <p className="text-[gray] font-semibold ">
              Dive into a decentralized trading experience where security meets
              efficiency. Our DEX leverages the latest in liquidity solutions,
              offering you a robust platform for trading across diverse
              blockchain ecosystems without compromising on speed or safety.
            </p>
          </div>
          <div className="flex flex-col hover:border hover:border-main hover:cursor-pointer rounded-[2rem] p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-main shadow-sm">
            <img src="/token-creator.png" />
            <button className="border mb-3 mt-4 border-main w-fit text-main rounded-full px-5 py-1.5">
              TOKEN CREATOR
            </button>
            <h2 className="text-3xl mb-4 text-white font-bold">
              Tokenization Tailored to Your Vision
            </h2>
            <p className="text-[gray] font-semibold ">
              Bring your token concepts to life with our comprehensive Token
              Creator. Designed for both novices and experts, this tool provides
              an intuitive interface for creating, launching, and managing
              custom tokens, enabling you to harness the power of blockchain
              with ease and precision.
            </p>
          </div>
          <div className="flex flex-col hover:border hover:border-main hover:cursor-pointer rounded-[2rem] p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-main shadow-sm">
            <img src="/inscription-tool.png" />
            <button className="border mb-3 mt-4 border-main w-fit text-main rounded-full px-5 py-1.5">
              INSCRIPTION TOOL
            </button>
            <h2 className="text-3xl mb-4 text-white font-bold">
              Eternalize Your Digital Legacy
            </h2>
            <p className="text-[gray] font-semibold ">
              Our Inscription Tool offers a secure, immutable platform for
              engraving your data onto the blockchain. Whether it&apos;s artwork,
              intellectual property, or personal records, ensure your digital
              assets stand the test of time in an ever-evolving digital
              landscape.
            </p>
          </div>
          <div className="flex flex-col hover:border hover:border-main hover:cursor-pointer rounded-[2rem] p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-main shadow-sm">
            <img src="/nft.png" />
            <button className="border mb-3 mt-4 border-main w-fit text-main rounded-full px-5 py-1.5">
              NFTS
            </button>
            <h2 className="text-3xl mb-4 text-white font-bold">
              NFT Emporium: Where Uniqueness Lives
            </h2>
            <p className="text-[gray] font-semibold ">
              Step into a world where digital artistry meets blockchain
              innovation. Our NFT marketplace is a curated space for creators
              and collectors to explore, buy, and sell unique digital treasures.
              With robust security and an intuitive interface, it&apos;s the ultimate
              destination for NFT enthusiasts.
            </p>
          </div>
          <div className="flex flex-col hover:border hover:border-main hover:cursor-pointer rounded-[2rem] p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-main shadow-sm">
            <img src="/pools.png" />
            <button className="border mb-3 mt-4 border-main w-fit text-main rounded-full px-5 py-1.5">
              POOLS
            </button>
            <h2 className="text-3xl mb-4 text-white font-bold">
              Revolutionize Your Earnings with Dynamic Liquidity Pools
            </h2>
            <p className="text-[gray] font-semibold ">
              Unlock the full potential of your assets with our dynamic
              liquidity pools. Designed for maximum efficiency, these pools not
              only enhance the liquidity of decentralized exchanges but also
              offer participants a chance to earn competitive rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
