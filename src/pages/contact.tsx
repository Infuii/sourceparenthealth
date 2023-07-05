/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import Scroller from "./components/Scroller";
import Footer from "./components/Footer";

export default function Contact() {
  const { data: sessionData } = useSession();
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const handleQuestionClick = (index: number) => {
    setActiveQuestion((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };

  const FAQData = [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      question: "Question 3",
      answer: "Answer 3",
    },
    {
      question: "Question 4",
      answer: "Answer 4",
    },
    {
      question: "Question 5",
      answer: "Answer 5",
    },
  ];

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>

      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase />
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-2/3 space-y-8"
        >
          <h1 className="text-center text-3xl font-light">
            Have questions? We are here to help.
          </h1>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <h2 className="mb-2 text-xl font-medium">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {FAQData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer p-4"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg">{item.question}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transform transition-transform ${
                          activeQuestion === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {activeQuestion === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-2 text-gray-600"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-1/2"
            >
              <h2 className="mb-2 text-xl font-medium">Contact Us</h2>
              <form
                className="mt-8"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const { name, email, message } = e.target.elements;

                  try {
                    // Send a POST request to the API route with the form data
                    const response = await fetch("./api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: name.value as string,
                        email: email.value as string,
                        message: message.value as string,
                      }),
                    });

                    if (response.ok) {
                      // Email sent successfully
                      alert("Email sent successfully");
                      // Reset the form
                      e.target.reset();
                    } else {
                      // Error sending email
                      alert("Error sending email");
                    }
                  } catch (error) {
                    console.error("Error sending email:", error);
                    alert("Error sending email");
                  }
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-full">
                    <input
                      type="text"
                      name="name" // Add name attribute
                      placeholder="Name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      name="email" // Add name attribute
                      placeholder="Email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    name="message" // Add name attribute
                    placeholder="Message"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    rows={4}
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
