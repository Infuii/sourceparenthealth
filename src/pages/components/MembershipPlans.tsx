import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error("Stripe Publishable Key is not set");
}

const stripePromise = loadStripe(stripePublishableKey);
// Add the type for membership plan
type MembershipPlanType = {
  title: string;
  outcome: string;
  benefits: string;
  annualPrice: string;
  monthlyPrice: string;
};

// Sample membership plan data
const membershipPlans: MembershipPlanType[] = [
  {
    title: "Monthly Subscription",
    outcome:
      "Begin your journey to the Source with more confidence and build consistency and relationships to anchor you in your healing without distractions and attend the weekly calls on topics that range from unhealthy weight, fatigue/energy, diabetes, digestion and stress/trauma.",
    benefits: "Weekly group calls on various health topics",
    annualPrice: "$150 (you get 2 months for free)",
    monthlyPrice: "$15 a month",
  },
];

const MembershipPlans: React.FC = () => {
  const selectedPriceId = "price_1Ni3eRLg8nvmDPHioUDa2CBO";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4">
      {membershipPlans.map((plan, index) => (
        <motion.div
          key={plan.title}
          className={`relative w-[600px] transform flex-col justify-between overflow-hidden rounded-lg border border-t-4 border-black border-green-400 bg-gray-100 p-5 text-center shadow shadow-xl transition-all duration-500 ease-in-out hover:bg-gray-200`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.5, duration: 1 }}
        >
          <h1 className="mb-2 text-2xl font-bold">
            Monthly Membership Subscription
          </h1>
          <p className="mb-2 text-sm">
            {/* Attend four weekly calls, get replies to your questions within 24
            hours, get one group coaching for five people once a month, and get
            access to all the events. */}
          </p>
          <br />
          <button
            onClick={() => toggleExpand(index)}
            className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Learn More
          </button>

          <motion.div
            initial={{ height: "0px", opacity: 0 }}
            animate={{
              height: expandedIndex === index ? "auto" : "0px",
              opacity: expandedIndex === index ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Outcome:</h3>
                <p className="text-sm">{plan.outcome}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Benefits:</h3>
                <p className="text-sm">
                  {plan.benefits}; annual {plan.annualPrice}, Monthly (
                  {plan.monthlyPrice})
                </p>
              </div>
              <div className="flex justify-between">
                <Link
                  className="rounded bg-green-500 px-4 py-2 text-white"
                  href={"https://calendly.com/sourceparenthealth"}
                >
                  Book a session
                </Link>
                <button
                  className="rounded bg-red-500 px-4 py-2 text-white"
                  onClick={() => void handlePurchase(selectedPriceId as never)}
                >
                  Buy
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default MembershipPlans;
