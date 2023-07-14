import React from "react";
import { confirmSVG, detailSVG, userSVG } from "./svgIcons";
import ImageComponent from "./ImageComponent";

const StepLine = () => {
  return (
    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
    </div>
  );
};
const HowToCreateAccount = () => {
  return (
    <div class="cus-sec-container ">
      <div class=" flex flex-wrap">
        <h2 className="heading-2">How to transfer money in 3 easy steps</h2>
        <div class="flex flex-wrap  w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div class="flex relative pb-12">
              <StepLine />
              <div class="flex-shrink-0 w-10 h-10 rounded-full cus-bg-primary inline-flex items-center justify-center text-white relative z-10">
                {userSVG}
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Create account
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem voluptas nihil rem assumenda quo explicabo sint
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <StepLine />

              <div class="flex-shrink-0 w-10 h-10 rounded-full cus-bg-primary inline-flex items-center justify-center text-white relative z-10">
                {detailSVG}
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Enter details
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem voluptas nihil rem assumenda quo explicabo sint
                </p>
              </div>
            </div>
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full cus-bg-primary inline-flex items-center justify-center text-white relative z-10">
                {confirmSVG}
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Confirmation
                </h2>
                <p class="leading-relaxed">
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div>
          </div>
          <img
            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/500x250"
            alt="step"
          />

          {/* <ImageComponent
            src="https://dummyimage.com/500x250"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HowToCreateAccount;
