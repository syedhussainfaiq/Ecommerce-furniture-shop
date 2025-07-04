"use client";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { GiRotaryPhone } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";
import { BsFillTrophyFill } from "react-icons/bs";

export default function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // State for submission status and messages
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please enter a message.");
      return;
    }

    // Simulate form submission
    setSubmissionStatus("success");
    setSubmissionMessage("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmissionStatus("idle");
      setSubmissionMessage("");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-[36px] font-semibold text-black leading-tight">
            Get In Touch With Us
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact and Form Section */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Contact Info */}
          <div className="bg-white p-8 w-full lg:w-[393px]">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-black">Address</h2>
              <p className="mt-2 text-base font-inter text-black flex items-center gap-2">
                <LiaMapMarkerAltSolid className="w-4 h-4 font-inter text-black" />
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
            <div className="mb-8 flex items-start">
              <FaPhoneAlt className="w-6 h-6 text-black mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-medium text-black">Phone</h2>
                <p className="mt-2 text-base font-inter text-black">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <GoClockFill className="w-6 h-6 text-black mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-medium text-black">Working Time</h2>
                <p className="mt-2 text-base font-inter text-black">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 w-full lg:w-[635px]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-black"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Abc"
                  className="mt-2 w-full h-[75px] px-4 text-base text-gray-400 border border-gray-400 rounded-[10px] focus:outline-none focus:border-[#029FAE]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-black"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Abc@def.com"
                  className="mt-2 w-full h-[75px] px-4 text-base text-gray-400 border border-gray-400 rounded-[10px] focus:outline-none focus:border-[#029FAE]"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="This is an optional"
                  className="mt-2 w-full h-[75px] px-4 text-base text-gray-400 border border-gray-400 rounded-[10px] focus:outline-none focus:border-[#029FAE]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi! I’d like to ask about"
                  className="mt-2 w-full h-[120px] px-4 py-2 text-base text-gray-400 border border-gray-400 rounded-[10px] focus:outline-none focus:border-[#029FAE] resize-none"
                />
              </div>
              {submissionStatus !== "idle" && (
                <div
                  className={`text-base font-inter ${
                    submissionStatus === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {submissionMessage}
                </div>
              )}
              <button
                type="submit"
                className="w-[237px] h-[55px] bg-[#029FAE] text-white text-base font-normal rounded-[5px] border border-[#B88E2F] hover:bg-[#028a98] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <div className="relative bg-gray-100 py-24 flex flex-col justify-between items-center min-h-[270px] w-full max-w-[1320px] mx-auto left-0 right-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1188px] mx-auto gap-12 px-4">
          {/* Feature 1: Contact Info */}
          <div className="flex flex-row items-center gap-2.5 w-full md:w-[337px]">
            <div className="w-[60px] h-[60px] bg-white flex items-center justify-center">
              <BsFillTrophyFill className="w-8 h-8 text-[#029FAE]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-['Poppins'] font-semibold text-[25px] leading-[150%] text-gray-800">High Quality</h3>
              <p className="font-['Poppins'] font-medium text-[20px] leading-[150%] text-gray-500">crafted from top materials</p>
            </div>
          </div>

          {/* Feature 2: Phone Support */}
          <div className="flex flex-row items-center gap-2.5 w-full md:w-[328px]">
            <div className="w-[60px] h-[60px] bg-white flex items-center justify-center">
              <ImCheckmark className="w-8 h-8 text-[#029FAE]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-['Poppins'] font-semibold text-[25px] leading-[150%] text-gray-800">Warranty Protection</h3>
              <p className="font-['Poppins'] font-medium text-[20px] leading-[150%] text-gray-500">over 2 years</p>
            </div>
          </div>

          {/* Feature 3: Live Chat */}
          <div className="flex flex-row items-center gap-2.5 w-full md:w-[259px]">
            <div className="w-[60px] h-[60px] bg-white flex items-center justify-center">
              <GiRotaryPhone className="w-8 h-8 text-[#029FAE]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-['Poppins'] font-semibold text-[25px] leading-[150%] text-gray-800">Live Chat</h3>
              <p className="font-['Poppins'] font-medium text-[20px] leading-[150%] text-gray-500">24/7 Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}