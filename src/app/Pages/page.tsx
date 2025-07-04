"use client";
import { useState } from "react";

// Define the shape of FAQ items
interface FAQ {
  question: string;
  answer: string;
}

const Page: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "How do we serve food?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What are our opening hours?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Do we offer delivery?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What payment methods do we accept?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Can we accommodate dietary restrictions?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do I make a reservation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Do we have parking facilities?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Are pets allowed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ]);
  const [newQuestion, setNewQuestion] = useState<string>("");

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setFaqs([
        ...faqs,
        {
          question: newQuestion,
          answer: "Thank you for your question! We'll get back to you with an answer soon.",
        },
      ]);
      setNewQuestion("");
    }
  };

  return (
    <section className="relative w-full max-w-[1320px] mx-auto py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="font-helvetica font-bold text-[48px] leading-[56px] text-[#333333] md:text-4xl sm:text-3xl">
          Questions Look Here
        </h2>
        <p className="font-inter text-[16px] leading-[24px] text-[#4F4F4F] mt-4 max-w-[771px] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* User Input Form */}
      <div className="mb-12 max-w-[648px] mx-auto">
        <h3 className="font-inter font-bold text-[18px] leading-[26px] text-[#333333] mb-4">
          Ask a New Question
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newQuestion}
            onChange={handleInputChange}
            placeholder="Enter your question here"
            className="flex-grow p-3 rounded-lg border border-[#4F4F4F] font-inter text-[16px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#333333]"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#333333] text-white font-inter text-[16px] px-6 py-3 rounded-lg hover:bg-[#4F4F4F] transition-colors"
          >
            Submit
          </button>
        </div>
      </div>

      {/* FAQ Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1320px] mx-auto">
        {faqs.map((faq: FAQ, index: number) => (
          <div
            key={index}
            className={`relative w-full max-w-[648px] rounded-lg p-6 transition-all duration-300 ${
              index === 7 ? "bg-[#FAF7F2]" : "bg-[#F7F7F7]"
            } ${activeIndex === index ? "h-auto" : "h-[170px]"}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-inter font-bold text-[18px] leading-[26px] text-[#333333] w-[calc(100%-48px)] pr-4">
                {faq.question}
              </h3>
              <button
                onClick={() => toggleFAQ(index)}
                className="absolute right-[3.7%] top-[14.71%] w-6 h-6 flex items-center justify-center"
                aria-label={activeIndex === index ? "Collapse FAQ" : "Expand FAQ"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3.75"
                    y1="12"
                    x2="20.25"
                    y2="12"
                    stroke="#333333"
                    strokeWidth="1.5"
                    className={activeIndex === index ? "hidden" : "block"}
                  />
                  <line
                    x1="12"
                    y1="3.75"
                    x2="12"
                    y2="20.25"
                    stroke="#333333"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <p
              className={`font-inter text-[16px] leading-[24px] text-[#4F4F4F] mt-6 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;