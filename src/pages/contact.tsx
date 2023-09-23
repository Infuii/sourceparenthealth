/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import Scroller from "./components/Scroller";
import Footer from "./components/Footer";

export default function Contact() {
  const { data: sessionData } = useSession();
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string>("GENERAL");

  useEffect(() => {
    // This useEffect will run every time the route changes.
    // Check if the `service` query parameter is defined.
    if (router.query.service) {
      setSelectedService(router.query.service as string);
    }
  }, [router.query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedService(event.target.value);
  };
  const handleQuestionClick = (index: number) => {
    setActiveQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  const FAQData = [
    {
      question:
        "What is Health Coaching and how is it different from nutritionist or dietitian?",
      answer:
        "A Health Coach is the equivalent of who you may want to hire as a sports coach if you were an athlete with a goal to make it to the olympics. What would the coach do? Provide a customized plan for your fitness and keep track of your performance, provide a space to hold you accountable. At the same time, the sports coach will be your sounding board and motivator to continue doing the hard work and reminding you of your goals using the latest research as well as looking at all modalities of therapies. A Health Coach is typically a knowledgeable person in the arena of how our body, mind and spirituality work using science, intuition, experience, listening skills and allowing you to make plans for helping you with making changes in your lifestyle, thinking and overall connection to the world. A nutritionist or a dietitian, on the other hand, is mostly experienced in using food as a way to nourish you and will help you make meal plans while they may or may not be able to provide the connection to other parts of your life.",
    },
    {
      question: "What are all the services you provide?",
      answer:
        "a. Free- Single discovery session for health planning, Nourished kitchen planning and/or Build\nAbundance and Wealth\n" +
        "b. Free- Monthly group calls\n" +
        "c. Free- Newsletter\n" +
        "d. Weekly group programs of 5 or more participants\n" +
        "e. One on one&nbsp;&nbsp;3 months\n" +
        "f. One on one 6 months\n" +
        "g. Events and retreats from time to time- will be posted on the Events tab\n" +
        "h. Health Writing services for patients, schools, parents, corporations",
    },
    {
      question: "What is Build a Nourished Kitchen Program?",
      answer:
        "Kitchen is your lab and its the source of what goes into your body. When you create this space with love and keep it simple and clutter-free, it will make life really easy for you and your cooking will become an activity you will look forward to in addition to it becoming the centre of your family and friends’ gatherings. It will provide you the nourishment not only to give you energy but also to fill you with joy, confidence and creativity.",
    },
    {
      question: "What is the price breakdown of the three coaching programs?",
      answer:
        "What is the price breakdown of the 3 coaching programs\nFor single session coaching, $150/session/60-90 mins\n1 month of coaching with 4 sessions, $400/month or $4400 paid annually to save 1 month of coaching costs and you can choose your coaching months\n3 months with 12 sessions: $80/1 hour session = $960 annual payment\nor $350/month\n6 months 18 sessions $70/session = $1260 single payment \nor $225 per month for 6 months = $1350\nGenerally people like to spread to just 2 sessions a month after the first 3 months, but those who need to continue their weekly support for the next 3 months, you will have the option to extend to weekly sessions every month, so for 6 months, you get 24 sessions, $60 per session = $1440 single payment \nor $260 per month x 6 = $1560",
    },
    {
      question:
        "What is the difference between Nutrition, Nourishment and Fitness?",
      answer:
        "Nutrition is a word that has been used rather as a cliche in the  last decade. However there is way more to it than simply adding some vitamins and isolated minerals to our body. Sometimes we start to even think of our food as micro and macronutrients and make it almost mechanistic as how much of protein, carbs and fat we are supposed to eat. How does it make you feel to eat food this way? Dont you want to enjoy your food without thinking too much about the nutrients? However, you also want your favourite foods to moorish you for energy and not upset your stomach or give you ulcers and headaches or add more weight to your body than you need to. How does it all work? Why do some people eat whatever they want and yet stay slim and energetic while some of us count each calorie and weight each nutrient and yet we add on love handles, swelling in our joints or worse off get acidity or ulcers and headaches? This is where Source Parent Health will help you understand how you are processing foods and also get you back to making choices that give you the flavours you want rather than to satisfy cravings. You will learn what nourishes you truly and how nutrition goes way beyond food, vitamins, supplements, proteins, carbs and fats. ",
    },
    {
      question: "What is Fitness?",
      answer:
        "YOU HAVE HEARD 'SURVIVAL OF THE FITTEST', but have you ever pondered on what fitness really means for you? In the wild, which animal survives? The one who can outrun the predator till it cant outrun the predator any more. In fact, sometimes the predator also becomes prey if its not fit. The question to ask is. ARE THESE ANIMALS JUST SURVIVING OR ARE THEY THRIVING? Only the one that is thriving can be fit and so is able to outrun the danger. The animal that is thriving also does not live in fear of another attack. It just goes back to its daily living activities and taking care of itself. Ot eats only what nourishes it and at a time that is nourishing and in portions that it needs. And this animal does not need a health coach. Why?  Because its connected to its Source. It needs no training unlike the animals that live in the zoo or are domesticated. Do you want to survive or thrive? So, let us redefine fitness to thriving and for thriving one needs to be connected to the Source. So that means we need to be less domesticated and more in the flow of how nature designed us. How do we balance this life of living on the cusp of nature and domestication or urbanization? So, to be fit, you need to build some skills to keep you away from fear once the danger is over and to be connected to your source of energy and motivation and love in order to be truly fit and thriving. Welcome to Soucre Parent Health Fitness.",
    },
    {
      question: "What is unique about Source Parent Health Coaching?",
      answer:
        "- The concept of Source Parent Health is that each one of us has a different source for motivation, energy, happiness, etc and we need to be connected to each other in order to be connected to our own Source of what makes us unique. Its not possible for most of us to diagnose where we may be blindsided. Just like an athlete needs a coach and a young driving learner needs a trainer, so also we need a coach who is knowledgeable and has our best interest at hand to guide us to our own center. The second concept of ParenT health is that unless we as parents who are responsible for steering the ship of our young children or the whole family, are vibrating from our core source of energy, we cannot lead the rest of the crew to destination. \n - Sarah is a unique Health Coach, primarily because she has a doctorate in Biochemistry, which makes her very comfortable following the latest scientific research publications and therefore, has the ability to discern between different treatments being used. - Sarah has also studied, practiced on herself and researched ayurveda, Qigong, detox pathways, cooking methods that reduce insulin resistance, aquafitness, yoga, meditation, hypnosis and is a certified laughter yoga instructor \n - Sarah's health coaching focuses on tapping into your own intellect to find the best path to follow for your meals, movement of the body, sleep patterns and train your brain to become laser sharp and in touch with finding your own compass to guide you rather than follow prescriptions and cookie cutter programs. \n- The primary method of coaching at SPH is through one on one as Sarah has discovered it to be the best way where true change happens in the shortest time, as observed in many client testimonials. Most programs are self-paced which leaves a person alone and unaccountable. Its easy to get distracted when nobody is waiting to hear your story.",
    },
    {
      question: "Why should I do SPH and not some other fancy online program?",
      answer:
        "- Sarah also does not give you any homework to do but takes you on a journey to yourself where you actually get to have fun and get creative and find out your true potential. Once you do that, you naturally start losing weight and make choices that energize you. So there is no program to follow or sites to cheat on. \n - Many of Sarah's clients have reversed diabetes and lost unwanted weight and resolved digestive issues without medications - This is not a diet but a coaching program like a professional athlete would have with his or her coach",
    },
    {
      question: "What is your program on building abundance?",
      answer:
        "Contact to learn more on building some extra income either as a side gig or make it your full time to not only replace your current income but take it beyond what you currently earn.  ",
    },
    {
      question: "What is the cost of customized group sessions?",
      answer:
        "Groups of 5 or more: \n       a. single session $30 per person \n        b. 4 session bundle $100 per person @$25 per session in single payment \n Either you get to choose your own group and SPH will customize the program to help you achieve your goals. \nThe second option is to join the group programs that will be posted on the Events tab. If you are signed up to receive the newsletter, you will be informed of any group coaching programs that will be designed.\n Feel free to contact SPH to ask for specific goal-oriented group sessions. We will appreciate that effort and do our best to customize the programs to your needs.",
    },
    {
      question: "What is a Health Planning session?",
      answer:
        "Outcome: Connected to one Source of credible research, community and honest responses to guide you to the Path you are meant to be on for creating more focus, energy, influence and money. Arrive at a plan for your meals, energizing sleep and exercises that you are motivated to do. Build daily habits that improve your condition from diseased to high performer.\nBenefits: \nOn this free call, you will talk about your health concerns and what would you like to achieve immediately, in the next month, next 3 months and beyond. \nYou will understand the obstacles coming in your way and how to remove some roadblocks yourself. \nLearn a unique method of weight loss, diabetes reversal without medication\nConnect to others on the same path through Facebook.",
    },
    {
      question:
        "What do I get in Health Coaching in a month or in group sessions?",
      answer:
        "Quickly get support for any acute issues like digestive upsets, a diagnosis of diabetes or how to get off medications that may be giving you side-effects.  Find your path with more ease and reduce chatter from generic solutions. Build knowledge for the source of your health and the source for your challenges through personal coaching so you too can get on the path of being who you are meant to be. \nBegin your journey to the Source with more confidence and build consistency and relationships to anchor you in your healing without distractions and attend the weekly calls on topics that range from unhealthy weight, fatigue/energy, diabetes, digestion and stress/trauma. \nWhen you do sessions in a group, you get motivated by creating your own circle of influence of 5 people moving forward to become the best versions of themselves. We do get motivated when others around us are also taking action because we become who we hang out with. \nYou could also bring together a group of 5 or more of your friends to create a customized health coaching program to build more consistency and get immense knowledge and proficiency about what makes you YOU and you’re not alone. You also change the lives of 4 others and your circle expands, so you are shifting your circle of influence to the one that makes you shine. Now you are building more consistency and getting immense knowledge and proficiency about what makes you YOU and you’re not alone.",
    },
    {
      question: "Why do I need coaching for 3 months?",
      answer:
        "It takes almost 90 days to build a habit. Having a coach by your side has always worked even for those working to get to the olympics. get this deal and test it for yourself and see yourself get things done that you have always imagined. 3 months of coaching with 4 sessions each month will build accountability and train your brain to change your personality to who you truly are and who you really want to be.\nWhen you do one-on-one coaching for 3 months: Now you are building confidence not only in yourself but also in your coach who can be your sounding board, so you start to take risks without fear. You will start building focus, self-esteem, influence and joy and that will become your habit and the new you will emerge because you would have trained this new set of muscle and memory. Your own intellect will become your guide. You will now know how to keep your balance in every situation",
    },
  ];

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>
      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase />
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-2/3 space-y-8"
        >
          <h1 className="text-center text-3xl font-light">
            Have questions? We are here to help.
          </h1>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <h2 className="mb-2 text-xl font-medium">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {FAQData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer p-4"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg">{item.question}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transform transition-transform ${
                          activeQuestion === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {activeQuestion === index && (
                      <div className="mt-2 text-gray-600">
                        {item.answer.split("\n").map((line, i) => (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            {line}
                          </motion.p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-1/2"
            >
              <h2 className="mb-2 text-xl font-medium">Contact Us</h2>
              <form
                className="mt-8"
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();

                  const target = e.target as typeof e.target & {
                    name: { value: string };
                    email: { value: string };
                    message: { value: string };
                    subject: { value: string };
                  };

                  const { name, email, message, subject } = target;
                  try {
                    // Send a POST request to the API route with the form data
                    const response = await fetch("./api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        message: message.value,
                        subject: subject.value,
                      }),
                    });

                    if (response.ok) {
                      // Email sent successfully
                      alert("Email sent successfully");
                      // Reset the form
                      (target as unknown as HTMLFormElement).reset();
                    } else {
                      // Error sending email
                      alert("Error sending email");
                    }
                  } catch (error) {
                    console.error("Error sending email:", error);
                    alert("Error sending email");
                  }
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-full">
                    <input
                      required
                      type="text"
                      name="name" // Add name attribute
                      placeholder="Name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      required
                      type="email"
                      name="email" // Add name attribute
                      placeholder="Email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    required
                    name="message" // Add name attribute
                    placeholder="Message"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    rows={4}
                  ></textarea>
                </div>
                <div className="mt-4">
                  <select
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    value={selectedService}
                    onChange={handleChange as never}
                  >
                    <option value="GENERAL">General</option>
                    <option value="Health Planning">Health Planning</option>
                    <option value="Build a nourished Kitchen">
                      Build a nourished Kitchen
                    </option>
                    <option value="Build Abundance">Build Abundance</option>
                    <option value="Group Coaching">Group Coaching</option>
                  </select>
                </div>

                <div className="mt-4">
                  <button className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
