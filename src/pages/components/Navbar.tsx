/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { type Session } from "next-auth";

interface NavbarProps {
  sessionData: Session;
}

export default function Navbar({ sessionData }: NavbarProps) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <h1 className="font-cursive font-sans text-xl font-thin sm:text-2xl">
        <Link href="/">SourceParentHealth</Link>
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
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/pictures">Pictures</Link>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} sm:flex sm:items-center`}
        >
          {sessionData ? (
            <div className="flex items-center">
              <img
                src={sessionData.user?.image as string}
                alt="User Avatar"
                className="h-8 w-8 cursor-pointer rounded-full"
              />
              <button
                className="ml-2 rounded bg-white px-2 py-1 text-xs font-bold text-black sm:ml-4 sm:text-sm"
                onClick={() => void signOut()}
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              className="rounded bg-white px-2 py-1 text-xs font-bold text-black sm:text-sm"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
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
              className="ml-2 rounded bg-white px-2 py-1 text-xs font-bold text-black sm:ml-4 sm:text-sm"
              onClick={() => void signOut()}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            className="rounded bg-white px-2 py-1 text-xs font-bold text-black sm:text-sm"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}
