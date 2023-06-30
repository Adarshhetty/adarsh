import React from "react";
import TypeEffect from "./TypeEffect";
import Image from "next/image";
import profile from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="container  flex flex-col-reverse px-6   md:text-center mx-auto lg:h-[28rem]  lg:text-left lg:py-16 lg:flex-row lg:items-center">
      <div className="lg:ml-10 relative lg:left-14 sm:left-6 md:left-3 md:mb-4 mb-5 lg:w-1/2">
        <div className="text-3xl  font-bold tracking-wide text-white dark:text-black sm:mb-4 lg:text-5xl lg:mb-9">
          <h3 className="sm:ml-6 lg:ml-0 md:ml-0">Hi there,I am</h3>
          <h1 className="text-gray-500 sm:ml-2 lg:ml-0 md:ml-0">
            Adarsh J Shetty<span className="text-white">-</span>
          </h1>
          <div className=" md:relative md:inline-block  lg:ml-0">
            <h2 className="flex sm:gap-1 md:gap-0  ">
              Web
              <svg
                className=" mt-3 sm:w-5 sm:h-5  lg:w-8 lg:h-8 lg:mt-3 text-white dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                />
              </svg>
              <TypeEffect />
              <span className=" md:font-bold md:block lg:block">/ </span>
              <svg
                className=" mt-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 lg:mt-3 text-white dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </h2>
          </div>
        </div>
        <div className="inline-flex items-center ">
    <a href="#contact">
    <button className="mr-6 bg-white shadow  text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center hover:shadow-lg hover:scale-110 transition-all duration-100 ease-in-out cursor-pointer">
            Contact{" "}
            <svg
              className=" mt-1 ml-2 w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </button>
    </a>
         <a href="#about" >
         <button  className=" bg-white shadow  text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center hover:shadow-lg hover:scale-110 transition-all duration-100 ease-in-out cursor-pointer">
            About{" "}
            <svg
              className=" mt-1 ml-2 w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
         </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <Image
          className="sm:w-[21rem] sm:h-[21rem]  md:w-[21rem] md:h-[21rem] rounded-full  md:mb-14 object-cover h-full w-11/12 mb-10"
          src={profile}
          alt="My Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
