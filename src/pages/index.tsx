import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import AuthShowcase from "./components/AuthShowcase";
import Testimonials from "./components/Testimonials";
import Introduction from "./components/Introduction";
import Socials from "./components/Socials";
import SocialsAlert from "./components/SocialsAlert";
import Footer from "./components/Footer";

const testimonialList = [
  {
    name: "John Doe",
    title: "CEO",
    body: "Since I started using this solution, my overall wellness has significantly improved. I have noticed a remarkable difference in my sleeping patterns and energy levels. It's truly one of the best solutions out there.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Jane Doe",
    title: "COO",
    body: "After trying out various alternatives, I can confidently say that this is the one that stands out. It has positively impacted my well-being, helping me achieve better sleep quality and a more balanced lifestyle. It's an excellent choice for anyone seeking wellness improvement.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "John Smith",
    title: "CTO",
    body: "Having explored multiple options, I can say without a doubt that this is one of the best choices available. Its holistic approach to wellness has enhanced my sleep patterns, increased my productivity, and improved my overall quality of life. I highly recommend it to anyone looking for an effective solution.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Manager",
    body: "As someone who struggled with sleep issues for years, this solution has been a game-changer. I wake up feeling refreshed and rejuvenated, ready to take on the day. It has improved not only my sleep but also my overall mood and well-being.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Michael Thompson",
    title: "Freelancer",
    body: "I've tried many different approaches to improve my sleep, but none have been as effective as this solution. It has helped regulate my sleep schedule and provided me with a sense of calmness and relaxation. I can't recommend it enough!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Emily Wilson",
    title: "Student",
    body: "Since incorporating this solution into my daily routine, my focus and concentration have significantly improved. I can now study for longer periods without feeling fatigued. It's been a game-changer for my academic performance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
];

export default function Home() {
  const { data: sessionData } = useSession();
  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>
      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase sessionData={sessionData as never} />
      </div>
      <br />
      <div>
        <Introduction />
      </div>
      <div className="transition-opacity duration-500">
        <Testimonials testimonials={testimonialList} />
      </div>
      <div>
        <SocialsAlert />
      </div>
      <div>
        <Socials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
