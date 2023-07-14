import React from "react";
import ImageComponent from "./ImageComponent";

const ContactUs = () => {
  return (
    <div>
      <div class="cus-sec-container">
        <h2 className="heading-2">Contact Us</h2>
        <div class=" flex  md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/images/contact.png"
            /> */}

            <ImageComponent
              src="/images/contact.png"
              width={500}
              height={500}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="w-full md:px-5 ">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text  ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="cus-input   "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text  ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="cus-input "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text  ">Subject</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="cus-input "
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="cus-textarea" placeholder="Bio"></textarea>
              </div>

              <button className=" cus-btn mt-3 ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
