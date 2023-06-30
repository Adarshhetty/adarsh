"use client";
import Divider from "@/components/Divider";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";



const Form = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n0n28y8",
        "template_maxx0mb",
        form.current,
        "uyXcXBjNIvZxlL1rb"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          alert("Message sent successfully")
        
          e.target.reset()
         
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <section
      id="contact"
      className=" flex flex-col justify-center items-center min-h-screen py-3  text-white">
      <Divider />
      <div className="text-center mt-4 mb-14">
        <h3 className="text-4xl font-bold hover:underline">Contact Me</h3>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className=" lg:w-1/2  rounded-lg shadow-xl flex flex-col px-8 py-8 border border-white bg-gray-800 dark:bg-blue-500">
        <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

        <label htmlFor="name" className=" font-light mt-8 text-gray-50">
          Full name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="name"
          className="bg-transparent border-white border rounded-lg py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        />

        <label htmlFor="email" className=" font-light mt-4 text-gray-50">
          E-mail<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border border-white rounded-lg py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        />

        <label htmlFor="subject" className=" font-light mt-4 text-gray-50">
          Subject<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="subject"
          className="bg-transparent border border-white rounded-lg py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
        />

        <label htmlFor="message" className=" font-light mt-4 text-gray-50">
          Message<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <textarea
          name="message"
          className="bg-transparent border border-white rounded-lg py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"></textarea>

        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="px-10 mt-8 py-2 bg-gray-500 boder border border-white rounded-lg text-gray-50 font-light  text-lg flex flex-row items-center hover:bg-gray-800">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
