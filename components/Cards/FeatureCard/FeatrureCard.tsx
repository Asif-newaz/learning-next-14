import React from "react";

type FeatureCardProps = {
//   title: string;
};

const FeatureCard: React.FC<FeatureCardProps> = () => {
  return (
    <>
      <div className="p-6 h-24 flex items-center bg-white/10 rounded-2xl">
        <h1 className="text-5xl">✨</h1>
        <div className="pl-6">
            <p className="text-white font-bold text-lg">Buy Khuchras Online</p>
            <p className="text-sm text-white/80">for the first time ever!</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
