import React from "react";
import { Button } from "../ui/button";

type BottomBarProps = {
  //   title: string;
};

const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <>
      <div className="px-8 py-4 text-center bg-[#08120E] lg:border lg:border lg:border-yellow-400 lg:rounded-2xl">
        <p className="text-[#FFCD31] font-bold">Use code : KHUCHRAHOBE</p>
        <p className="text-white pb-4">for FREE Deliveries for a month! 👇🏾</p>
        <Button className="bg-yellow-300 text-black text-lg font-bold w-full py-7 px-16 rounded-xl hover:bg-yellow-400">
          Try DeliveryHobe!
        </Button>
      </div>
    </>
  );
};

export default BottomBar;
