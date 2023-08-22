import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaHeart, FaBrain, FaFeather } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";

export default function Three() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();
  const [pricingModel, setPricingModel] = useState("monthly");

  useEffect(() => {
    if (inView) {
      void animation.start({ opacity: 1, transition: { duration: 0.7 } });
    }
    if (!inView) {
      void animation.start({ opacity: 0 });
    }
  }, [animation, inView]);

  const handlePurchase = () => {
    // TODO: Add Stripe integration
  };

  const courses = [
    {
      title: "Free Discovery Call",
      description:
        "Get a 1-hour discovery call for free, learn more about yourself and your lifestyle.",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      advantages: [
        "Advantage 1",
        "Advantage 2",
        "Advantage 3",
        "Advantage 4",
        "Advantage 5",
      ],
      icon: <FaBrain className="text-4xl text-green-500" />,
    },
    {
      title: "3-Month Weight Reduction and Diabetes Prevention Program",
      description: "Reduce weight and prevent diabetes without medication.",
      monthlyPrice: "$99",
      yearlyPrice: "$999",
      advantages: ["Advantage 1", "Advantage 2", "Advantage 3"],
      disadvantages: ["Disadvantage 1", "Disadvantage 2"],
      icon: <FaHeart className="text-4xl text-red-500" />,
    },
    {
      title: "Level 3: Build TIME",
      description:
        "Go beyond basic habits with one-on-one customized sessions. Focus on thought nourishment, influence at home and work, a healthier money mindset, and abundant energy.",
      monthlyPrice: "$225",
      yearlyPrice: "$1260",
      advantages: [
        "T = Thoughts that Nourish",
        "I = Influence at home and work",
        "M = Money Mindset",
        "E = Energy Abundance",
        "Bring Back Abundance of Time",
        "Nourish your Microbiome",
        "Become Influential",
        "Learn Your Energetics",
        "Encompasses All Programs",
      ],
      monthlyPriceId: "price_1NhIWrLg8nvmDPHi98uc3WJj",
      yearlyPriceId: "price_1NhIWrLg8nvmDPHioBmtDX5M",
      icon: <FaFeather className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-8 flex justify-center gap-4"
      animate={animation}
    >
      {/* Just take the first course and render its box */}
      {(() => {
        const course = courses[2];
        return (
          <motion.div
            key={course?.title}
            className={`relative flex h-full w-full flex-col justify-between rounded-lg border border-t-4 border-black border-green-400 bg-gray-100 p-5 shadow shadow-xl transition-all duration-500 ease-in-out hover:border-8 md:w-1/2`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href={`/courses/1`}>
              <div className="flex flex-col items-center justify-start space-y-4">
                {course?.icon}
                <h1 className="text-xl font-semibold">{course?.title}</h1>
                <p className="text-sm">{course?.description}</p>
                <p className="font-serif text-lg font-bold text-gray-500">
                  Price:{" "}
                  {pricingModel === "monthly"
                    ? course?.monthlyPrice
                    : course?.yearlyPrice}
                  <span className="text-sm font-normal">/{pricingModel}</span>
                </p>
              </div>
            </Link>
            <div className="py-2">
              {course?.advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex flex-row items-center space-x-2 py-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaCheck className="text-sm text-green-500" />
                  <span className="text-sm text-gray-600">{advantage}</span>
                </motion.div>
              ))}
            </div>
            <div>
              <button
                className="w-full rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-500 ease-in-out hover:border-4 hover:border-transparent hover:bg-blue-700 hover:shadow-lg"
                onClick={() => handlePurchase()}
              >
                Opt in
              </button>
            </div>
          </motion.div>
        );
      })()}
    </motion.div>
  );
}
