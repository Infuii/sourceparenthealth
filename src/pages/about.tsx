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
                <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
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
