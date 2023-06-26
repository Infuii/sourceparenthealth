import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import AuthShowcase from "./components/AuthShowcase";
import Testimonials from "./components/Testimonials";
import Introduction from "./components/Introduction";

const testimonialList = [
  {
    name: "John Doe",
    title: "CEO",
    body: "Since I started using this solution, my overall wellness has significantly improved. I have noticed a remarkable difference in my sleeping patterns and energy levels. It's truly one of the best solutions out there.",
    image:
      "https://images.unsplash.com/photo-1601755108943-fd333fcdcdb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jane Doe",
    title: "COO",
    body: "After trying out various alternatives, I can confidently say that this is the one that stands out. It has positively impacted my well-being, helping me achieve better sleep quality and a more balanced lifestyle. It's an excellent choice for anyone seeking wellness improvement.",
    image:
      "https://images.unsplash.com/photo-1580894739431-2f8dd7409028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "John Smith",
    title: "CTO",
    body: "Having explored multiple options, I can say without a doubt that this is one of the best choices available. Its holistic approach to wellness has enhanced my sleep patterns, increased my productivity, and improved my overall quality of life. I highly recommend it to anyone looking for an effective solution.",
    image:
      "https://images.unsplash.com/photo-1556013284-198e88d1dae7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Manager",
    body: "As someone who struggled with sleep issues for years, this solution has been a game-changer. I wake up feeling refreshed and rejuvenated, ready to take on the day. It has improved not only my sleep but also my overall mood and well-being.",
    image:
      "https://images.unsplash.com/photo-1579067784348-8f9a1cd45f9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Thompson",
    title: "Freelancer",
    body: "I've tried many different approaches to improve my sleep, but none have been as effective as this solution. It has helped regulate my sleep schedule and provided me with a sense of calmness and relaxation. I can't recommend it enough!",
    image:
      "https://images.unsplash.com/photo-1627660966894-cd8db675dc9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emily Wilson",
    title: "Student",
    body: "Since incorporating this solution into my daily routine, my focus and concentration have significantly improved. I can now study for longer periods without feeling fatigued. It's been a game-changer for my academic performance.",
    image:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const { data: sessionData } = useSession();
  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <Scroller />
      <Navbar sessionData={sessionData} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase sessionData={sessionData} />
      </div>
      <br />
      <div>
        <Introduction />
      </div>
      <div className="transition-opacity duration-500">
        <Testimonials testimonials={testimonialList} />
      </div>
    </div>
  );
}
