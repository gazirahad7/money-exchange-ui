import React from "react";
import { switchArrowSVG } from "./svgIcons";

// TODO: Add something new
const ExchangeMoney = () => {
  return (
    <div className="container mx-auto px-4">
      <div className=" border rounded-lg border-gray-200 md:px-4 md:py-4  p-3 shadow-lg bg-white  ">
        <div className="flex  flex-col md:flex-row  items-center justify-between gap-4 ">
          <div className="flex gap-2 items-center flex-col md:flex-row ">
            <div className="form-control ">
              <label className="label">
                <span className="cus-label ">Send</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className=" cus-input  "
              />
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="cus-label">Form</span>
                </label>
                <select className=" cus-select-input">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                  <option>CAD - Canadian Dollar</option>
                  <option>AUD - Australian Dollar</option>
                  <option>JPY - Japanese Yen</option>
                  <option>INR - Indian Rupee</option>
                </select>
              </div>

              <div className="mt-8">
                <select className="cus-select-input max-w-xs  ">
                  <option disabled selected>
                    Currency
                  </option>
                  <option>AFN</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-full w-[50px] h-[50px] border border-gray-400 p-3  md:self-end text-center md:mt-0 mt-3 ">
            {switchArrowSVG}
          </div>
          <div>
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <div className="flex gap-2 justify-center items-center">
                <div className="form-control w-full   ">
                  <label className="label">
                    <span className="cus-label">To</span>
                  </label>
                  <select className=" cus-select-input">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>GBP - British Pound</option>
                    <option>CAD - Canadian Dollar</option>
                    <option>AUD - Australian Dollar</option>
                    <option>JPY - Japanese Yen</option>
                    <option>INR - Indian Rupee</option>
                  </select>
                </div>

                <div className="mt-8">
                  <select className="cus-select-input max-w-xs  ">
                    <option disabled selected>
                      Currency
                    </option>
                    <option>AFN</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>

              <div className="form-control  ">
                <label className="label">
                  <span className="cus-label">Receive</span>
                </label>
                <input type="text" className=" cus-input   " readOnly />
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center  gap-4 my-4">
          <p>Exchange rate: 1 USD = 105 BDT</p>

          <button className="btn cus-bg-primary text-white font-semibold cus-btn">
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeMoney;
