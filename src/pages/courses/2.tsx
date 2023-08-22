import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart, FaBrain, FaFeather } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error("Stripe Publishable Key is not set");
}
export default function One() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();
  const [pricingModel, setPricingModel] = useState("monthly");
  const stripePromise = loadStripe(stripePublishableKey as never);

  useEffect(() => {
    if (inView) {
      void animation.start({ opacity: 1, transition: { duration: 0.7 } });
    }
    if (!inView) {
      void animation.start({ opacity: 0 });
    }
  }, [animation, inView]);

  const handlePurchase = async (selectedPriceId: string) => {
    try {
      // Call your backend to create the Checkout Session
      const response = await fetch("../api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedPriceId }),
      });

      const data: { sessionId: string } = (await response.json()) as never;
      console.log("Received sessionId from backend:", data.sessionId);
      const { sessionId } = data;

      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      if (stripe !== null) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.log(error);
        }
      }
    } catch (err) {
      console.error("There was an error with the purchase process:", err);
    }
  };

  const courses = [
    {
      title: "Level 1: Build Your STEM",
      description:
        "Reduce weight and prevent diabetes without medication with one-on-one customized sessions, four one-on-one coaching calls per month.",
      monthlyPrice: "$400",
      monthlyFrequency: "month (4 sessions)",
      yearlyPrice: "$4400",
      yearlyFrequency: "year ($400 off)",
      advantages: [
        "S = Sleep Restore",
        "T = Toxin Release",
        "E = Eat to Heal",
        "M = Move Joyfully",
        "Reduce Weight",
        "Prevent Diabetes without Medications",
        "Quick Support for Acute Issues",
        "Weekly Group Calls focusing on weight, diabetes",
        "Weekly Group Calls focusing on fatigue, stress",
      ],
      monthlyPriceId: "price_1NhIJbLg8nvmDPHiOQigBy1k",
      yearlyPriceId: "price_1NhIJbLg8nvmDPHibiS7ZTui",
      icon: <FaBrain className="text-4xl text-green-500" />,
    },
    {
      title: "Level 2: GERM Health",
      description:
        "Building on STEM concepts with a focus on digestive health and one-on-one customized sessions.",
      monthlyPrice: "$350",
      monthlyFrequency: "month for 3 months",
      yearlyPrice: "$960",
      yearlyFrequency: "3 months (4 sessions)",
      advantages: [
        "G = Gut Health",
        "E = Emotional Freedom",
        "R = Relationship Rich",
        "M = Money Confidence",
        "Build on STEM Concepts",
        "Focus on Digestive Health",
        "Build Habits and Consistency",
        "Clear Understanding on Diabetes, Digestive Disorders, Unwanted Weight, and Fatty Liver",
        "Create Own Meal Plans without Compromising on Taste and Family Gatherings",
      ],
      monthlyPriceId: "price_1NhIUiLg8nvmDPHijSGeb3Wy",
      yearlyPriceId: "price_1NhIUiLg8nvmDPHiFSIvpnUt",
      icon: <FaHeart className="text-4xl text-red-500" />,
    },
    {
      title: "Level 3: Build TIME",
      description:
        "Go beyond basic habits with one-on-one customized sessions. Focus on thought nourishment, influence at home and work, a healthier money mindset, and abundant energy.",
      monthlyPrice: "$225",
      monthlyFrequency: "6 months",
      yearlyPrice: "$1260",
      yearlyFrequency: "per year",
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
    <div className="items-center justify-center text-center">
      <br />
      <button
        className={`px-4 py-2 ${
          pricingModel === "monthly"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setPricingModel("monthly")}
      >
        Monthly
      </button>
      <button
        className={`px-4 py-2 ${
          pricingModel === "yearly"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setPricingModel("yearly")}
      >
        Yearly
      </button>
      <motion.div
        ref={ref}
        className="mt-8 flex justify-center gap-4"
        animate={animation}
      >
        {/* Just take the first course and render its box */}
        {(() => {
          const course = courses[1];
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
                  onClick={() =>
                    void handlePurchase(
                      pricingModel === "monthly"
                        ? (course?.monthlyPriceId as never)
                        : (course?.yearlyPriceId as never)
                    )
                  }
                >
                  Opt in
                </button>
              </div>
            </motion.div>
          );
        })()}
      </motion.div>
    </div>
  );
}
