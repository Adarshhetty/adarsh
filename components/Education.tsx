import React from "react";
import Divider from "./Divider";

const Education = () => {
  return (
    <section id="education" className=" min-h-screen py-3  text-white">
      <div>
      <Divider/>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-4xl font-bold hover:underline">Education</h3>
      </div>

      <div className="relative  lg:flex md:flex md:justify-between sm:flex-shrink   grid-cols-2 lg:justify-center py-14 mt-14">
        <ol className="relative border-l md:mr-14 lg:ml-0 md:ml-0 sm:ml-1 w-1/2 lg:w-fit border-gray-700 left-14 ">
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              N.M.A.M INSTITUTE OF TECHNOLOGY , NITTE
              <span className="md:mr-6 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 dark:text-blue-300 ml-3">
                Present
              </span>
            </h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-400 ">
              YEAR : 2020 - PRESENT
            </time>
            <p className=" text-lg font-normal text-gray-400">
              Bachelor's degree in Computer Science.
            </p>
            <p className=" text-lg font-normal text-gray-400">CGPA : 8.81</p>
          </li>
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              KARKALA JNANASUDHA PU COLLEGE , GANITNAGAR
            </h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-400 ">
              YEAR : 2018 - 2020
            </time>
            <p className="text-lg font-normal text-gray-400 ">
              Physics , Chemistry , Maths , Biology.
            </p>
            <p className=" text-lg font-normal text-gray-400">
              PERCENTAGE : 85.66 %
            </p>
          </li>
          <li className="ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              DR N.S.A.M ENGLISH MEDIUM HIGH SCHOOL , NITTE
            </h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-400 ">
              YEAR : 2008 - 2018
            </time>
            <p className="text-lg font-normal text-gray-400 ">High School.</p>
            <p className=" text-lg font-normal text-gray-400">
              PERCENTAGE : 84.2 %
            </p>
          </li>
        </ol>
        <div className="md:w-1/2 lg:w-6/12 sm:mt-10 lg:mt-0 md:mt-0 flex sm:justify-center md:justify-end lg:justify-end">
          <a
            href="#"
            className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
              PROGRAMMING LANGUAGES
            </h3>
            <p className=" flex-wrap font-normal text-gray-400">
              <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                C ++
              </button>
              <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                HTML
              </button>
              <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                CSS
              </button>

              <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                JAVASCRIPT
              </button>
              <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                TYPESCRIPT
              </button>
            </p>

            <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
              FRAMEWORKS & LIBRARIES
            </h3>
            <p className=" flex-wrap font-normal text-gray-400">
            <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                REACTJS
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                BOOTSTRAP
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                NEXTJS
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                TAILWIND
              </button>
            </p>

            <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
              SOFT SKILLS
            </h3>
            <p className=" flex-wrap font-normal text-gray-400">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                CANVA
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                FIGMA
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                ADAPTABILITY
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                PROBLEM SOLVING
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled>
                CREATIVITY
              </button>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
