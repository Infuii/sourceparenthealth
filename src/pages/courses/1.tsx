import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart, FaBrain, FaFeather } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import Scroller from "../components/Scroller";

if (!stripePublishableKey) {
  throw new Error("Stripe Publishable Key is not set");
}
export default function One() {
  const { data: sessionData } = useSession();
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
      yearlyPrice: "$4400",
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
      monthlyPriceId: "price_1NiGeXLg8nvmDPHi4EkzjrYH",
      yearlyPriceId: "price_1NiGeXLg8nvmDPHikaM8OINN",
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
      title: "6-Month Get Back Your Energy, Reduce Belly Fat, Sleep Like a Pro",
      description:
        "Regain energy, reduce belly fat, and improve sleep quality.",
      monthlyPrice: "$199",
      yearlyPrice: "$1999",
      advantages: [
        "Advantage 1",
        "Advantage 2",
        "Advantage 3",
        "Advantage 4",
        "Advantage 5",
      ],
      icon: <FaFeather className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <div className="main m-0 min-h-screen items-center justify-center bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] p-0 pb-16 text-center">
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>

      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <br />
      <br />
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
          const course = courses[0];
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
