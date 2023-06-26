import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import Scroller from "./components/Scroller";

export default function Contact() {
  const { data: sessionData } = useSession();

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <Scroller />
      <Navbar sessionData={sessionData} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase sessionData={sessionData} />
      </div>
    </div>
  );
}
