import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div style={{ position: "relative", top: "10vh" }}>
      <h1 className="bg-[#1F2937] py-8 text-center font-serif text-4xl text-white">
        Source Parent Health
      </h1>
      <footer className="grid grid-cols-2 gap-6 bg-gray-800 px-6 py-10 text-white sm:grid-cols-4">
        {/* Source Parent Health section */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="mb-4 border-b border-gray-500 pb-2 text-lg font-semibold">
            Source Parent Health
          </h2>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/pictures">
            <p>Pictures</p>
          </Link>
          {/* Add more links as needed */}
        </div>

        {/* Socials section */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="mb-4 border-b border-gray-500 pb-2 text-lg font-semibold">
            Socials
          </h2>
          <Link href="https://facebook.com">
            <p>Facebook</p>
          </Link>
          <Link href="https://twitter.com">
            <p>Twitter</p>
          </Link>
          <Link href="https://instagram.com">
            <p>Instagram</p>
          </Link>
          <Link href="https://linkedin.com">
            <p>LinkedIn</p>
          </Link>
        </div>

        {/* Contact section */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="mb-4 border-b border-gray-500 pb-2 text-lg font-semibold">
            Contact
          </h2>
          <p>Email: info@sourceparenthealth.com</p>
          <Link href="/contact">
            <p>Contact Page</p>
          </Link>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Newsletter sign up section */}
        <div className="col-span-2 rounded-lg bg-[#1D2137] p-6 sm:col-span-1">
          <h2 className="mb-4 text-2xl font-semibold">
            Sign Up to the Newsletter
          </h2>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="mb-2 w-full rounded-lg border border-gray-200 px-4 py-2"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                required
                className="mr-2"
                onChange={(e) => setIsEnabled(e.target.checked)}
              />
              <label>I want to subscribe to the newsletter</label>
            </div>
            <button
              type="submit"
              disabled={!isEnabled}
              className={`mt-4 rounded-lg px-4 py-2 text-white ${
                isEnabled ? "bg-blue-500" : "bg-blue-300"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
