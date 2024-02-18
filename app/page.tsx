import BottomBar from "@/components/BottomBar/BottomBar";
import FeatureCard from "@/components/Cards/FeatureCard/FeatrureCard";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0F2019",
      }}
    >
      <Header title="Eng" />
      <div className="pb-7 flex justify-center">
        <img src="/images/advertize.png" alt="" />
      </div>
      <h1 className="text-[#ffffff] text-center font-bold text-2xl ">
        The Delivery Service <br className="block lg:hidden" /> for Beyadobs by
        Beyadobs
      </h1>
      <div className="py-8 px-5 space-y-4 lg:min-h-72 lg:px-52 lg:gap-x-2 lg:gap-y-5 lg:flex lg:flex-wrap lg:justify-center lg:content-between lg:align-center lg:space-y-0">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
      <div className="w-screen flex lg:justify-center">
        <div className="w-full lg:w-auto">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
