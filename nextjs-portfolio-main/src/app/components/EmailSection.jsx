"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-col gap-4">
          {/* Contact Info Icons */}
          <div className="flex flex-col gap-2 mb-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <FiPhone color="rgba(168, 85, 247, 1)"/> +1 (908) 842-7400
            </div>
            <div className="flex items-center gap-2">
              <FiMail color="rgba(168, 85, 247, 1)"/><a href="mailto:diyasanghvi1201@gmail.com">diyasanghvi1201@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin color="rgba(168, 85, 247, 1)"/>  17 SummerhillWay, San Rafael , CA 94903
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-4">
            <Link href="https://github.com/Diya1201">
              <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/diya-sanghvi1201/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
      <div>
          <form className="flex flex-col" action="https://api.web3forms.com/submit" method="post">
            <input type="hidden" name="access_key" value="dc1ea72c-941a-40c5-a83f-e488f5547986"/>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;
