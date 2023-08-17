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
    name: "Khalid Parvez",
    title: "Engineer, United States",
    body: "It's been a pleasure working with Sarah for the last 4 months in the Source Parent Health coaching program. I am looking forward to accomplishing more health goals going forward. With Sarah’s health coaching, I was able to lower my A1c from diabetic range to a healthy 5.6 in 3 months while enjoying my favorite foods when I wanted to. Sarah has a very intuitive method of coaching that gave me the tools to take lead on my weight, energy, sleep, and eating patterns.I would highly encourage anyone with diabetes and weight issues to enroll in Source Parent Health coaching program and see the amazing results for themselves in an enjoyable manner.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Arthur Walowski",
    title: "Business Owner, Canada",
    body: "I think the thing that stood out to me the most was how you were able to help me see food in a different way and how I wasn’t really thinking about what I was putting in my body. Once you helped me realize what I was doing wrong it definitely made it easier to comprehend.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Aparna Sharma",
    title: "Senior HR Executive, India",
    body: "I have known Sarah as an astute professional fo rover a decade now, and a benevolent fellow human being. Committed, sharp, and extremely thorough with her work coupled with risk-taking ability which has alway smade her stand out from her other team members. She has demonstrated learning agility in a rgeat variety of tasks that she has undertaken. Sarah is an absolute asset for any organization, client, and a great friend too!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-rkxZKhNIZzymDzz2X3FQgqtuFYL1vNovJvxfCNvCg&s",
  },
  {
    name: "Farzeen Rizvi",
    title: "Professional Engineer, Canada",
    body: "Sarah’s workshop has “re-calibrated” my perception on personal health and well-being; our most cherished gift.  Sarah’s in-depth knowledge on the subject, and motivation, is apparent in her delivery. Her approach on nutrition, emotional  and spiritual health has allowed me to examine my life in a holistic manner, and enhance it. Weight loss and increased energy are just a few of the many benefits I have reaped from this workshop, . I feel privileged to have had the opportunity to engage with such a wonderful group of women. This series should become a permanent program offered to all families.",
    image: "",
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
        <AuthShowcase />
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
