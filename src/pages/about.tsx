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
            className="z-0 w-full bg-cover bg-center"
            style={{
              height: "75vh",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1574158622682-e40e69881006')",
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
                <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, metus quis eleifend sollicitudin, lacus elit
                  faucibus tortor, sed molestie enim arcu et nibh. Curabitur
                  fermentum felis id ultrices cursus. Curabitur sodales felis
                  sed tortor aliquet, sed vulputate elit condimentum.
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
                <img
                  src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Nutrition"
                  className="w-full"
                />
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
                  What We Want For You
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, metus quis eleifend sollicitudin, lacus elit
                  faucibus tortor, sed molestie enim arcu et nibh. Curabitur
                  fermentum felis id ultrices cursus. Curabitur sodales felis
                  sed tortor aliquet, sed vulputate elit condimentum.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                  alt="Family"
                  className="w-full"
                />
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
