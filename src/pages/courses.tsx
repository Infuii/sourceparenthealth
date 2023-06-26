import { useSession } from "next-auth/react";
import Scroller from "./components/Scroller";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function Courses() {
  const { data: sessionData } = useSession();

  const handlePurchase = () => {
    // TODO: Add Stripe integration
  };

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <Scroller />
      <Navbar sessionData={sessionData} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase sessionData={sessionData} />
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Courses</h1>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <div className="flex flex-col justify-between rounded-lg border border-t-4 border-black border-green-400 bg-[#C2C2C2] bg-[#C2C2C2] p-10 p-5 shadow shadow-xl">
          <div>
            <h1 className="text-2xl font-bold">Free Discovery Call</h1>
            <p className="text-lg font-semibold">
              Get a 1-hour discovery call for free.
            </p>
            <p className="text-lg font-semibold">Price: Free</p>
            <div className="py-2">
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 1</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 2</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 3</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 4</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 5</span>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handlePurchase()}
            >
              Buy this Plan
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-t-4 border-black border-green-400 bg-[#C2C2C2] bg-[#C2C2C2] p-10 p-5 shadow shadow-xl">
          <div>
            <h1 className="text-2xl font-bold">
              3-Month Weight Reduction and Diabetes Prevention Program
            </h1>
            <p className="text-lg font-semibold">
              Reduce weight and prevent diabetes without medication.
            </p>
            <p className="text-lg font-semibold">Price: $99</p>
            <div className="py-2">
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 1</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 2</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 3</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaTimes className="text-lg text-red-500" />
                <span className="text-gray-600">Disadvantage 1</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaTimes className="text-lg text-red-500" />
                <span className="text-gray-600">Disadvantage 2</span>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handlePurchase()}
            >
              Buy this Plan
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-t-4 border-black border-green-400 bg-[#C2C2C2] bg-[#C2C2C2] p-10 p-5 shadow shadow-xl">
          <div>
            <h1 className="text-2xl font-bold">
              6-Month Get Back Your Energy, Reduce Belly Fat, Sleep Like a Pro
            </h1>
            <p className="text-lg font-semibold">
              Regain energy, reduce belly fat, and improve sleep quality.
            </p>
            <p className="text-lg font-semibold">Price: $199</p>
            <div className="py-2">
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 1</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 2</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 3</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 4</span>
              </div>
              <div className="flex flex-row items-center space-x-2 py-2">
                <FaCheck className="text-lg text-green-500" />
                <span className="text-gray-600">Advantage 5</span>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => handlePurchase()}
            >
              Buy this Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
