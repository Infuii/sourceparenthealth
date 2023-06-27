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

  useEffect(() => {
    setIsNavbarVisible(true);
  }, []);

  return (
    <nav
      className={`fixed z-10 flex w-full items-center justify-between bg-[#E9E9E9] px-6 py-3 ${
        isNavbarVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <div>
        <h1 className="font-cursive font-sans text-2xl font-thin">
          <Link href="/">SourceParentHealth</Link>
        </h1>
      </div>
      <div className="flex flex-row gap-10">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/courses">Courses</Link>
      </div>
      {sessionData && (
        <div className="flex items-center">
          <img
            src={sessionData.user?.image}
            alt="User Avatar"
            className="h-8 w-8 cursor-pointer rounded-full"
          />
          <button
            className="ml-4 rounded bg-white px-2 py-1 font-bold text-black"
            onClick={() => void signOut()}
          >
            Sign out
          </button>
        </div>
      )}
      {!sessionData && (
        <>
          <button
            className="rounded bg-white px-2 py-1 font-bold text-black"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        </>
      )}
    </nav>
  );
}
