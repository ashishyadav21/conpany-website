"use client";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FcCellPhone } from "react-icons/fc";
import React from "react";
import { useRouter } from "next/navigation";
import "./ContactUs.css";
const ContactUs = () => {
  const router = useRouter();

  return (
    <div>
      <div className="scroll-snap-y scroll-smooth">
        <section className="h-[576px] bg-event bg-cover z-10 bg-center items-center justify-center">
        </section>

        <div className="container bg-gray-100 -mt-20 m-auto max-w-6xl p-8 text-black py-10 mb-10">
          <div className="container text-center m-auto w-100 grid gap-3">
            <h1 className="font-extrabold text-4xl sm:text-3xl">
              CONTACT US ABOUT HUBSPOT'S SOFTWARE
            </h1>
            <p className="font-normal text-xl sm:text-lg mb-8 text-gray-400">
              We'd love to show you how you can get more traffic and leads
              increase your sales productivity. provide better customer service,
              or all of the above! Here are a few ways to reach out to our sales
              team.
            </p>
          </div>
          <div className="gridcontainer">
            <div className="flex-container">
              <div className="container first py-10 px-6 bg-white shadow-sm shadow-gray-400 hover:shadow-2xl hover:shadow-gray-600 rounded-lg flex flex-row gap-3">
                <div className="left">
                  <FcCellPhone size={80} />
                </div>
                <div className="right grid gap-3">
                  <h3 className="text-xl font-bold">Call us directly at</h3>
                  <h2 className="text-2xl font-bold text-violet-700">+917015010257</h2>
                </div>
              </div>
              <div className="container second py-10 px-6 bg-white shadow-sm shadow-gray-400 hover:shadow-2xl hover:shadow-gray-600 rounded-lg flex flex-row gap-3">
                <div className="left">
                  <IoChatbubbleEllipsesOutline size={80} />
                </div>
                <div className="right grid gap-3">
                  <h3 className="text-xl font-bold">Chat with Our Developer</h3>
                  <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out hover:-translate-y-1">
                    CHAT
                  </button>
                </div>
              </div>
            </div>

            <div className="container form py-10 text-center px-6 grid gap-6 bg-white shadow-sm shadow-gray-400 hover:shadow-2xl hover:shadow-gray-600 rounded-lg">
              <h3 className="text-4xl sm:text-3xl font-extrabold">
                Contact Us
              </h3>
              <p className="font-normal text-xl sm:text-lg text-gray-600">
                Need to get in touch with us? fill out the form with the inquiry{" "}
              </p>
              <form action="" className="grid gap-6">
                <div className="input grid gap-1">
                  <label htmlFor="fn" className=" text-left text-lg font-bold ">
                    First name
                  </label>
                  <input
                    type="text"
                    className="focus:outline-none inputfield px-2 bg-gray-100"
                  />
                </div>
                <div className="input grid gap-1">
                  <label htmlFor="ln" className="text-left font-bold">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="focus:outline-none inputfield px-2 bg-gray-100"
                  />
                </div>
                <div className="input grid gap-1">
                  <label htmlFor="email" className="text-left font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="focus:outline-none inputfield px-2 bg-gray-100"
                  />
                </div>
                <div className="input grid gap-1 text-left">
                  <label htmlFor="text" className="font-bold">
                    What can we help you with?
                  </label>
                  <textarea
                    name="text"
                    className="focus:outline-none p-2 bg-gray-100"
                  ></textarea>
                </div>
                <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out hover:-translate-y-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

