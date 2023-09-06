/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import AuthShowcase from "./components/AuthShowcase";
import Scroller from "./components/Scroller";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

export default function About() {
  const { data: sessionData } = useSession();

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>

      <Scroller />
      <Navbar sessionData={sessionData as never} />
      <div className="flex flex-col items-center gap-2">
        <AuthShowcase />

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section
            className="z-0 h-[42.5vh] w-full bg-cover bg-no-repeat sm:h-[50vh] md:h-[60vh] lg:h-[75vh]"
            style={{
              backgroundImage: "url('/family.webp')",
            }}
          >
            <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-5xl font-semibold text-white">
              About Source Parent Health
            </div>
          </section>

          {/* Section 1 */}
          <section className="bg-gray-100 p-10">
            <motion.div
              className="flex flex-col items-center gap-4 md:flex-row-reverse md:gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-2xl font-semibold">
                  What is Source Parent Health?
                </h2>
                <p>
                  Why should a parent or teacher prioritize their health?
                  Because you have to lead the children to be prepared for the
                  future. Would you like to be led by an instructor who is
                  tired, suffering with chronic health issues, unmotivated,
                  running low on abundance of time and money? No, right? When
                  you are the pilot of a long haul flight, you’d better be
                  equipped with lots of energy, be active, intuitive, have the
                  resources and knowledge to resolve minor ailments quickly
                  without having to spend hours at the clinic and hospital to
                  get half baked solutions of medications that generally lead to
                  more side effects and simply mask the symptoms. Additionally,
                  medications have never resolved the disease. Every diabetic on
                  medication is just that- continuing on medication. They suffer
                  from kidney issues, weight issues, have to be restricted in
                  what they eat, end up with depression and heart disease and
                  generally are taking medication for not just diabetes but for
                  many other ailments. Source Parent Health is a coaching
                  program that gets you back in the driver’s seat and equips you
                  for freedom from medications. We get to the Source of your
                  energy and motivation and give you back your TIME, sleep and
                  intellect.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/17168353/pexels-photo-17168353/free-photo-of-balloons-flying-in-cappadocia-in-morning.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="Health"
                  className="w-full"
                />
              </div>
            </motion.div>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-10">
            <motion.div
              className="flex flex-col items-center gap-4 md:flex-row md:gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-2xl font-semibold">
                  Sarah’s journey to the Source:{" "}
                </h2>
                <p>
                  Sarah started her career as a scientist at Monsanto in 1999 in
                  India. Within 3 years, something inside her feel out of place.
                  She followed her intuition and decided to leave the world of
                  science research and equip herself with the knowledge to be of
                  service to the hospital industry. As a result, she decided to
                  earn her degree in Masters in Health Administration from
                  University of Ottawa in 2006. Following her intuition, she was
                  still not satisfied about the answers for “what makes a person
                  really healthy?” She kept asking herself, “why are so many
                  people sick and why do we have to spend so much time and money
                  running to doctors when the body belongs to each of us?”
                  <br />
                  Sarah herself had been treated for ulcers by an Indian herbal
                  medicine practitioner and that treatment had taken one year
                  but to this day she has been free of ulcers. However, once in
                  Canada, Sarah started experiencing severe migraines and after
                  almost 8 years of suffering and not being able to work, Sarah
                  decided to take matters in her hand and got herself certified
                  as a holistic health coach in 2012 and also a laughter yoga
                  instructor. Within months, Sarah experienced a balancing of
                  her weight going from size 12 to size 2 in 2 years and getting
                  a really good handle on her migraines without any medications.
                  <br /> In 2011, Sarah set up an organic community garden with
                  the help of 2 other neighbours and a Church pastor. Today that
                  garden is thriving with 45 families gardening to feed their
                  families and teaching children how to access fresh and
                  nourishing food. <br /> Sarah has worked with a school in
                  India to start an organic garden club for students and
                  teachers since 2021 and you can see pictures in the gallery
                  for their progress as well as the farm visits she takes of
                  these school children while visiting India. <br /> Sarah now
                  has a holistic understanding of not only how our body works at
                  a biochemical level but also at the intellectual level and how
                  to access the source of our energy at all levels.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img src="IMG_5814.jpg" alt="Nutrition" className="w-full" />
              </div>
            </motion.div>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-100 p-10">
            <motion.div
              className="flex flex-col items-center gap-4 md:flex-row-reverse md:gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-2xl font-semibold">
                  Sarah&apos;s Journey With Diabetes
                </h2>
                <p>
                  I welcome you to my personal journey blog with ending diabetes
                  but more importantly, my journey of how I managed to clear the
                  army fitness test, lifting 20kg sandbags, having more energy
                  everyday, fasting for over 12 hours for a month and generally
                  living a happier life once I got diagnosed with diabetes and
                  that too without medications even though the doctor kept
                  pushing it on me. In fact, it takes 10 years to develop
                  diabetes and I have lived those years in ignorance even though
                  my body told me that something was wrong, but my medical tests
                  were not enough for doctors to give me a diagnosis so I was at
                  best given pain relief medications. As a doctorate in
                  biochemistry (and being a scientist with Monsanto way back in
                  1999, I am privy to the research process and my concern is
                  that either research does not make its way to the doctor’s
                  prescription pad or it comes in the form of a pill with a lot
                  of marketing dollars and selfish incentives that really do
                  more harm than good and definitely modern medicine has not
                  helped cure anyone of chronic diseases. As a health coach and
                  a learner of herbal remedies, I am now knowledgeable of the
                  processes that cause chronic diseases and what can really help
                  heal completely without any sophisticated lab equipment and
                  chemicals. I have worked with different parts of the Canadian
                  health system – research, education, acute care hospitals,
                  community health centres and the federal government. These
                  projects provided me with a very broad yet deep understanding
                  of the dynamic nature of how disease prevention, disease
                  management and research could either support or undermine an
                  individual’s health. Why am I doing this? There comes a time
                  in one’s life when we are called to share what we have learnt
                  and that itself is healing to the soul. I am being called to
                  educate, coach and empower parents on their unique abilities
                  and handicaps (or HandyCaps), so that they can take control of
                  their disease naturally and end the use of or significantly
                  reduce their dependence on medications. So, once again, THANK
                  YOU for stopping by here. I would encourage you to download
                  the free ebook on The Prepared TeenAdult that is a fun way to
                  open up our perspective as parents beyond our duty and desire
                  to see our children succeed. .
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img src="/IMG_6123.jpg" alt="Family" className=" w-full" />
              </div>
            </motion.div>
          </section>
        </motion.div>
        <Socials />
      </div>
      <Footer />
    </div>
  );
}
