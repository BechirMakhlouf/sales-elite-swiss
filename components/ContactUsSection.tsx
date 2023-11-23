"use client";
import React from "react";

const ContactUsSection = () => {
  return (
    <>
      <div>
        <h1 className="m-4 text-5xl underline decoration-dashed decoration-secondary">
          Let&apos;s Get In Touch!
        </h1>
        <div className="flex flex-col lg:flex-row p-8 justify-center items-center gap-x-12">
          {/* full name */}
          <form
            action=""
            className="min-w-[32rem] p-6 flex flex-col gap-y-2 border-2 border-secondary border-dashed rounded-md"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <h1 className="text-4xl my-4">Send an email!</h1>
            <div className="flex flex-col md:flex-row gap-x-4">
              <div className="w-full">
                <label htmlFor="first-name">First Name</label>
                <input
                  name="first-name"
                  type="text"
                  className="block w-full h-10 border-2 border-secondary border-dashed rounded-md"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="second-name">Second Name</label>
                <input
                  name="second-name"
                  type="text"
                  className="block h-10 w-full border-2 border-secondary border-dashed rounded-md"
                  required
                />
              </div>
            </div>
            {/* Email */}
            <label htmlFor="email-address">Email</label>
            <input
              name="email-address"
              type="email"
              className="block w-full h-10 border-2 border-secondary border-dashed rounded-md"
              required
            />
            {/* Object */}
            <label htmlFor="email-object">Object</label>
            <input
              name="email-object"
              type="text"
              className="block w-full h-10 border-2 border-secondary border-dashed rounded-md"
              required
            />

            <label htmlFor="email-message">Message</label>
            <textarea
              name="email-message"
              id=""
              cols={30}
              rows={10}
              className="block w-full border-2 border-secondary border-dashed rounded-md"
              required
            >
            </textarea>{" "}
            <input
              type="submit"
              className="inline-block w-fit px-4 py-2 border-2 border-secondary border-dashed rounded-md"
            />
          </form>
          <h1 className="text-4xl underline decoration-dashed decoration-secondary">or</h1>
          <div className="p-6 border-2 border-secondary border-dashed rounded-md">
            <h1 className="text-center text-4xl">Call Us</h1>
            <h1 className="text-4xl text-secondary">+123 457891011</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
