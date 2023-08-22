import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart, FaBrain, FaFeather } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Scroller from "./components/Scroller";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import Link from "next/link";
import MembershipPlans from "./components/MembershipPlans";
import Footer from "./components/Footer";
import { loadStripe } from "@stripe/stripe-js";
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error("Stripe Publishable Key is not set");
}

const stripePromise = loadStripe(stripePublishableKey);
export default function Courses() {
  const { data: sessionData } = useSession();
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

  const handlePurchase = async (selectedPriceId: string) => {
    try {
      // Call your backend to create the Checkout Session
      const response = await fetch("/api/create-checkout-session", {
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
    <div className="main m-0 min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] p-0 pb-16">
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>

      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase />
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <br />
        <h1 className="text-4xl font-semibold">One-On-One Health Coaching</h1>
      </div>
      <div className="my-8 flex justify-center">
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
      </div>
      <motion.div
        ref={ref}
        className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-4 md:flex-row md:justify-center"
        animate={animation}
      >
        {courses.map((course, index) => {
          const selectedPriceId =
            pricingModel === "monthly"
              ? course.monthlyPriceId
              : course.yearlyPriceId;

          return (
            <motion.div
              key={course.title}
              className={`relative flex h-[700px] w-[350px] flex-col justify-between rounded-lg border border-t-4 border-black border-green-400 p-5 shadow shadow-xl transition-all duration-500 ease-in-out hover:border-8 ${
                index === 1 ? "scale-105 transform text-black" : "bg-gray-100"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.5 }}
            >
              <Link href={`/courses/${index + 1}`}>
                {index === 1 && (
                  <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded bg-black px-2 py-1 text-lg text-white">
                    POPULAR
                  </div>
                )}
                <div className="flex flex-col items-center justify-start space-y-4">
                  {course.icon}
                  <h1 className="text-xl font-semibold">{course.title}</h1>
                  <p className="text-sm">{course.description}</p>
                  <p className="font-serif text-lg font-bold text-gray-500">
                    Price:{" "}
                    {pricingModel === "monthly"
                      ? course.monthlyPrice
                      : course.yearlyPrice}
                    <span className="text-sm font-normal">
                      /
                      {pricingModel === "monthly"
                        ? course.monthlyFrequency
                        : course.yearlyFrequency}
                    </span>
                  </p>
                </div>
              </Link>
              <div className="py-2">
                {course.advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-row items-center space-x-2 py-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <FaCheck className="text-sm text-green-500" />
                    <span className="text-md text-gray-600">{advantage}</span>
                  </motion.div>
                ))}
              </div>
              <div>
                <button
                  className="w-full rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-500 ease-in-out hover:border-4 hover:border-transparent hover:bg-blue-700 hover:shadow-lg"
                  onClick={() => void handlePurchase(selectedPriceId)}
                >
                  Opt in
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <br />
      <br />
      <MembershipPlans />
      <br />

      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Contact for our Other Services
        </h2>
        <div className="flex space-x-6">
          <Link
            href="/contact?service=Health Planning"
            className="text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            Health Planning
          </Link>
          <Link
            href="/contact?service=Build a nourished Kitchen"
            className="text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            Build a nourished Kitchen
          </Link>
          <Link
            href="/contact?service=Build Abundance"
            className="text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            Build Abundance
          </Link>
          <Link
            href="/contact?service=Group Coaching"
            className="text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            Group Coaching
          </Link>
        </div>
        <Link
          href="/contact"
          className="text-gray-600 transition duration-300 hover:text-gray-800 hover:underline"
        >
          See FAQ section to learn More about each of these programs
        </Link>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
}
