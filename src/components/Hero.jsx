import React from "react";
import ExchangeMoney from "./ExchangeMoney";
import ImageComponent from "./ImageComponent";

const Hero = () => {
  return (
    <div className="">
      <div className=" flex  md:flex-row flex-col cus-bg-primary relative  ">
        <div className=" flex  2xl:gap-64 items-center mt-4   mb-14">
          <div className="md:opacity-0 lg:opacity-100 hidden lg:block ">
            {/* <img src="/images/hero.png" className="max-w-sm " /> */}

            <ImageComponent
              src="/images/hero.png"
              className="max-w-sm  "
              width={350}
              height={350}
            />
          </div>
          <div className="text-center md:text-5xl text-2xl font-bold text-gray-200 mx-auto  ">
            <h1>Trusted Global Currency</h1>
            <h1>Converter & Money </h1>
            <p className="py-6 text-xs text-gray-700 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="absolute top-10  right-0 sm:opacity-0 lg:opacity-100 hidden lg:block">
          {/* <img src="/images/hand.png" className="max-w-sm  " alt="IMG" /> */}

          <ImageComponent src="/images/hand.png" width={500} height={500} />
        </div>
      </div>

      <div className="-translate-y-16 z-50 ">
        <ExchangeMoney />
      </div>
    </div>
  );
};

export default Hero;
