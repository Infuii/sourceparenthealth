import React, { useState } from "react";
import { motion } from "framer-motion";

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
          onClick={() => toggleExpand(index)}
          className={`relative flex h-[70px] w-[400px] transform flex-col justify-between overflow-hidden rounded-lg border border-t-4 border-black border-green-400 bg-gray-100 p-5 text-center shadow shadow-xl transition-all duration-500 ease-in-out hover:bg-gray-200`}
          initial={{ opacity: 0, height: "70px", width: "400px" }}
          animate={{
            opacity: 1,
            height: expandedIndex === index ? "400px" : "70px",
            width: expandedIndex === index ? "405px" : "400px",
          }}
          transition={{ delay: index * 0.5, duration: 1 }}
        >
          <h1 className="text-xl font-semibold">{plan.title}</h1>
          <motion.div
            className="flex flex-col space-y-4"
            animate={{
              opacity: expandedIndex === index ? 1 : 0,
              maxHeight: expandedIndex === index ? "400px" : "300px",
            }}
            transition={{ duration: 1 }}
          >
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
              <button className="rounded bg-blue-500 px-4 py-2 text-white">
                Learn more
              </button>
              <button className="rounded bg-green-500 px-4 py-2 text-white">
                Book a session
              </button>
              <button className="rounded bg-red-500 px-4 py-2 text-white">
                Buy
              </button>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default MembershipPlans;
