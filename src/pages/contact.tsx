import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import Scroller from "./components/Scroller";

export default function Contact() {
  const { data: sessionData } = useSession();

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase sessionData={sessionData} />
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <div className="w-2/3">
          <h1 className="text-center text-3xl font-light">
            Contact Us for More Information
          </h1>
          <form className="mt-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
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
        </div>
      </div>
      <br />
    </div>
  );
}
