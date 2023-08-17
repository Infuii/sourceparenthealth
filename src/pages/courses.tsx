import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaHeart, FaBrain, FaFeather } from "react-icons/fa";
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
  const [productPurchased, setProductPurchased] = useState(false);

  const handleBuyNowClick = () => {
    setProductPurchased(true);
  };

  const handlePurchase = async (priceId: string) => {
    // Call your backend to create the Checkout Session

    const response = await fetch("./api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: priceId,
      }),
    });

    const result = (await response.json()) as { sessionId: string };
    const { sessionId } = result;

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    if (stripe !== null) {
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.log(error);
      }
    }
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
      priceId: "price1",
      icon: <FaBrain className="text-4xl text-green-500" />,
    },
    {
      title: "3-Month Weight Reduction and Diabetes Prevention Program",
      description: "Reduce weight and prevent diabetes without medication.",
      monthlyPrice: "$99",
      yearlyPrice: "$999",
      advantages: ["Advantage 1", "Advantage 2", "Advantage 3"],
      disadvantages: ["Disadvantage 1", "Disadvantage 2"],
      priceId: "price_1NVJ11Lg8nvmDPHiYx3Covxw",
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
      priceId: "price_1Nfm83Lg8nvmDPHiMWyGeUae",
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
        <h1 className="text-4xl font-semibold">Courses</h1>
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
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            className={`relative flex h-[500px] w-[350px] flex-col justify-between rounded-lg border border-t-4 border-black border-green-400 p-5 shadow shadow-xl transition-all duration-500 ease-in-out hover:border-8 ${
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
                  <span className="text-sm font-normal">/{pricingModel}</span>
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
                  <span className="text-sm text-gray-600">{advantage}</span>
                </motion.div>
              ))}
              {course.disadvantages?.map((disadvantage, index) => (
                <motion.div
                  key={index}
                  className="flex flex-row items-center space-x-2 py-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaTimes className="text-sm text-red-500" />
                  <span className="text-sm text-gray-600">{disadvantage}</span>
                </motion.div>
              ))}
            </div>
            <div>
              <button
                className="w-full rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-500 ease-in-out hover:border-4 hover:border-transparent hover:bg-blue-700 hover:shadow-lg"
                onClick={() => void handlePurchase(course.priceId)}
              >
                Buy this Plan
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <br />
      <br />
      <MembershipPlans />
      <br />
      <br />
      <Footer />
    </div>
  );
}
