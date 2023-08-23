/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { type Session } from "next-auth";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface NavbarProps {
  sessionData: Session;
}

export default function Navbar({ sessionData }: NavbarProps) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsNavbarVisible(true);
  }, []);

  return (
    <nav
      className={`fixed top-2 z-50 flex w-full items-center justify-between bg-[#E9E9E9] px-2 py-2 sm:px-6 ${
        isNavbarVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <h1 className="font-cursive flex flex-row gap-2 font-sans text-xl font-thin sm:text-2xl">
        <Link href="/">
          <img
            src="/sphlogop.png"
            alt="logo"
            height="40px"
            width="40px"
            className="relative bottom-2"
          />
        </Link>
        <Link href="/">Source Parent Health</Link>
      </h1>
      <div className="sm:hidden">
        <button onClick={toggle}>
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path className="inline-flex" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:w-auto sm:items-center`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-10">
          {/* Dropdown */}
          <div className="group relative">
            <button
              className="focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? (
                <p>
                  Home{" "}
                  <FaChevronUp className="inline-block" color="" size={13.5} />
                </p>
              ) : (
                <p>
                  Home{" "}
                  <FaChevronDown
                    className="inline-block"
                    color=""
                    size={13.5}
                  />
                </p>
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
                <div className="rounded-md ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <ScrollLink
                      to="newsletterSection"
                      smooth={true}
                      duration={500}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Newsletter
                    </ScrollLink>
                    <ScrollLink
                      to="ebookSection"
                      smooth={true}
                      duration={500}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Download our Free E-Book!
                    </ScrollLink>
                    <ScrollLink
                      to="testimonialSection"
                      smooth={true}
                      duration={500}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      View Testimonials
                    </ScrollLink>
                    <ScrollLink
                      to="socialSection"
                      smooth={true}
                      duration={500}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Socials
                    </ScrollLink>
                    <Link
                      href="https://calendly.com/sourceparenthealth"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Book a Discovery Call
                    </Link>
                    <Link
                      href="/contact"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Frequently Asked Questions
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/courses">Services</Link>
          <Link href="/pictures">Pictures</Link>
        </div>
      </div>
      <div className="hidden sm:flex sm:items-center">
        {sessionData ? (
          <div className="flex items-center">
            <img
              src={sessionData.user?.image as string}
              alt="User Avatar"
              className="h-8 w-8 cursor-pointer rounded-full"
            />
            <button
              className="ml-2 hidden rounded bg-white px-2 py-1 text-xs font-bold text-black sm:ml-4 sm:text-sm"
              onClick={() => void signOut()}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            className="hidden rounded bg-white px-2 py-1 text-xs font-bold text-black sm:text-sm"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}
