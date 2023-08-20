/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { FaAddressBook, FaAngleUp, FaAward, FaGem } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { BookOpen, Download } from "react-feather"; // SVG icons from Feather Icons

export default function Introduction() {
  const styles = {
    divStyle: {
      "@media (min-width: 768px)": {
        position: "relative",
        right: "30vh",
      },
    },
  };
  const [windowWidth, setWindowWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to update window width
  const updateWindowDimensions = () => {
    const newWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setWindowWidth(newWidth);
  };

  // Use useEffect to update window width when the component mounts and when the window is resized
  useEffect(() => {
    updateWindowDimensions();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowDimensions);

      return () => window.removeEventListener("resize", updateWindowDimensions);
    }
  }, []);
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    threshold: 0.1,
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.1,
  });
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideIn = {
    hidden: { x: 400, opacity: 0.2 },
    visible: { x: 0, opacity: 1 },
  };

  const combination = {
    hidden: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref1, inView1] = useInView({
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.3,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.3,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.1,
  });
  const ebookRef = useRef<HTMLDivElement | null>(null);
  const title = "The Prepared TeenAdult";
  const subtitle =
    "Share with your children and students but also reflect on the prompts for yourself. “we must not prepare the road for the child but prepare the child for the road”. So, if you have to be the one leading this preparation, would’nt you have to be at the top of your game too?  ";

  const ebookCoverSrc = "https://picsum.photos/200/300";
  const backgroundCoverSrc =
    "https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  return (
    <div className="z-1 relative overflow-hidden">
      <div className="z-1 relative flex items-center justify-center">
        <motion.div
          ref={ref1}
          className="z-1 justify-top relative top-10 flex h-[140vh] w-4/5 flex-col items-center rounded-lg bg-pink-100 px-10 shadow-lg lg:w-1/2 lg:w-[100vh] lg:gap-10"
          style={{
            width: "100%",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundImage: "url('/IMG_5555.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <hr className="h-3 border-gray-300"></hr>
          <motion.h1
            ref={ref5}
            className="relative top-5 text-center text-5xl font-light text-white sm:text-6xl md:text-7xl"
            transition={{ duration: 1.0, delay: 0.2 }}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Welcome to Source Parent Health!
          </motion.h1>
          <motion.h5
            ref={ref5}
            className="relative top-5 text-center text-2xl font-light text-white sm:text-3xl md:text-4xl"
            variants={fadeIn}
            initial="hidden"
            transition={{ duration: 1.1, delay: 0.5 }}
            animate={inView5 ? "visible" : "hidden"}
          >
            A journey to be the parent you are meant to be by connecting to your
            Source
          </motion.h5>
          <motion.p
            ref={ref5}
            className="relative top-5 tracking-wide text-gray-500 text-white"
            style={{ fontFamily: "Montserrat" }}
            variants={fadeIn}
            initial="hidden"
            transition={{ duration: 1.2, delay: 0.8 }}
            animate={inView5 ? "visible" : "hidden"}
          >
            With a Health Coach, you too can win at the Olympics of TIME =
            Thoughts that Influence Money + Energy{" "}
          </motion.p>
          <motion.div
            className="z-20 flex flex-col gap-4 sm:flex-row"
            ref={ref5}
            variants={fadeIn}
            initial="hidden"
            transition={{ duration: 1.3, delay: 1.1 }}
            animate={inView5 ? "visible" : "hidden"}
          >
            <Link
              href="/courses"
              className="relative top-5 rounded-lg bg-blue-500 px-4 py-2 text-white"
            >
              Get Started
            </Link>
            <div ref={dropdownRef} className="relative top-5 z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg border border-gray-500 bg-transparent px-4 py-2 text-white"
              >
                Learn More
              </button>
              {isOpen && (
                <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg">
                  <div className="z-50 py-1">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Book your Discovery call now
                    </Link>
                    <Link
                      href="#"
                      className="z-1000 block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subscribe to Newsletter
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Download your Free eBook: The Prepared TeenAdult
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            ref={ref4}
            className="hidden justify-center gap-12 pb-6 sm:w-2/3 md:mt-12 md:flex md:w-1/2 lg:mt-16 lg:w-4/5"
            style={{ position: "relative", top: "-2.5vh" }}
            variants={combination}
            transition={{ duration: 1.0 }}
            initial="hidden"
            animate={inView4 ? "hidden" : "visible"}
          >
            <motion.div
              className="flex flex-col items-center"
              variants={slideIn}
            >
              <div className="relative rounded-full p-2">
                <FaAddressBook className="text-6xl text-blue-500" />
              </div>
              <motion.h2
                className="relative top-5 text-center text-3xl font-light text-white"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Become the Driver of your life
              </motion.h2>
              <motion.p
                className="relative top-5 text-center tracking-wide text-gray-300"
                style={{ fontFamily: "Montserrat" }}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Learn how to control the every day
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              variants={slideIn}
            >
              <div className="relative rounded-full p-2">
                <FaAward className="text-6xl text-yellow-500" />
              </div>
              <motion.h2
                className="relative top-5 text-center text-3xl font-light text-white"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Create What Matters Most
              </motion.h2>
              <motion.p
                className="relative top-5 text-center tracking-wide text-gray-300"
                style={{ fontFamily: "Montserrat" }}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Set and accomplish your personal wellness targets.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              variants={slideIn}
            >
              <div className="relative rounded-full p-2">
                <FaGem className="text-6xl text-pink-500" />
              </div>
              <motion.h2
                className="relative top-5 text-center text-3xl font-light text-white"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience Abundance & Energy
              </motion.h2>
              <motion.p
                className="relative top-5 text-center tracking-wide text-gray-300"
                style={{ fontFamily: "Montserrat" }}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Indulge in what we have to offer
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref5}
            className="absolute flex flex w-2/5 items-center justify-center md:top-[95vh] lg:top-[100vh] xl:top-[65vh]"
            transition={{ duration: 1.5, delay: 0.75 }}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div
              className="relative top-[60vh] w-2/3 md:top-[5vh] lg:top-[5vh] xl:top-[30vh]"
              style={{ position: "relative" }}
            >
              <h1 className="text-center text-3xl text-gray-300">
                Sign up to our Newsletter
              </h1>
              <form
                className="mt-8"
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const target = e.target as typeof e.target & {
                    email: { value: string };
                  };
                  const email = target.email.value;

                  try {
                    const response = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ email: email }),
                    });

                    if (response.ok) {
                      alert(
                        "You have successfully signed up for the newsletter"
                      );
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert("Error signing up for the newsletter");
                    }
                  } catch (error) {
                    console.error("Error:", error);
                    alert("Error signing up for the newsletter");
                  }
                }}
              >
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
        {/* contact info */}
      </div>

      <br />
      <br />
      <br />
      {/* <div className="flex w-1/3 items-center justify-center">
        <motion.img
          src="https://freesvg.org/img/1488738791.png"
          alt="E-Book"
          className="h-80"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div> */}

      {/* Additional Boxes */}

      <div className="flex items-center justify-center">
        <motion.article
          ref={ref4}
          className="rounded-xl bg-white p-4 text-center ring ring-indigo-50 sm:p-6 lg:p-8"
          variants={slideIn}
          initial="hidden"
          animate={inView4 ? "hidden" : "visible"}
          transition={{ duration: 2.25, delay: 1.0 }}
        >
          <div className="flex items-start sm:gap-8">
            <div
              className="hidden text-center sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div className="flex items-center gap-1">
                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>

            <div>
              <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                Wellness E-Book
              </strong>

              <h3 className="mt-4 text-lg font-medium sm:text-xl">
                <a href="" className="hover:underline">
                  Download your Free eBook: The Prepared TeenAdult
                </a>
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                Prompts to guide you and your child towards the progress they
                wish to make to get back to your/their energy and influence in
                the world. Share with your children and students but also
                reflect on the prompts for yourself. “we must not prepare the
                road for the child but prepare the child for the road”. So, if
                you have to be the one leading this preparation, would’nt you
                have to be at the top of your game too? Benefits: Free
                newsletter. Free eBook. Free health planning call
              </p>
              <button
                onClick={() =>
                  scroll.scrollTo(ebookRef?.current?.offsetTop ?? 0, {
                    smooth: true,
                  })
                }
                className="relative top-5 rounded-lg border border-gray-500 bg-transparent px-4 py-2 text-black"
              >
                Go to E-Book
              </button>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <span className="text-xs">24 mins</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <FaAngleUp className="text-xs" />
                  <span className="text-xs">3.5k</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          ref={ref4}
          className="relative flex h-96 w-96 flex-col items-start justify-center gap-4 rounded-lg bg-blue-200 p-8 shadow-lg"
          variants={combination}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-4xl font-bold"
            variants={fadeIn}
            transition={{ duration: 1.5 }}
          >
            Box 3
          </motion.h1>
          <motion.p
            className="text-gray-500"
            variants={fadeIn}
            transition={{ duration: 2.0, delay: 0.2 }}
          >
            Content of Box 3
          </motion.p>
        </motion.div>
        <motion.div
          className="relative flex h-96 w-96 flex-col items-start justify-center gap-4 rounded-lg bg-purple-200 p-8 shadow-lg"
          variants={combination}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-4xl font-bold"
            variants={fadeIn}
            transition={{ duration: 1.5 }}
          >
            Box 4
          </motion.h1>
          <motion.p
            className="text-gray-500"
            variants={fadeIn}
            transition={{ duration: 2.0, delay: 0.2 }}
          >
            Content of Box 4
          </motion.p>
        </motion.div>
      </div>
      {/* <div className="flex items-center justify-center">
        <motion.h1
          className="text-4xl font-bold"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          Pictures
        </motion.h1>
        <motion.p
          className="text-gray-500"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our collection of pictures
        </motion.p>
        <Link
          href="/pictures"
          className="text-blue-500 underline"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          View pictures
        </Link>
      </div> */}

      {/* Membership Plans */}

      <div
        className="text-center text-3xl font-light"
        style={{ position: "relative", top: "-20vh" }}
      >
        <h1>Build your wellness lifestyle with our courses!</h1>
      </div>
      <motion.div
        className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start"
        ref={ref1}
        variants={fadeIn}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        transition={{ duration: 1.0, delay: 0.2 }}
        style={{ position: "relative", top: "-20vh" }}
      >
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg sm:mx-2 sm:my-4 sm:w-auto">
          <FaAddressBook color="#FF00FF" size={70} />
          <br />
          <h2 className="text-2xl font-bold">Basic Course</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white">
            <Link href="/courses/1">Learn More</Link>
          </button>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg sm:mx-2 sm:my-4 sm:w-auto">
          <FaAward color="#FF00FF" size={70} />
          <br />
          <h2 className="text-2xl font-bold">Premium Course</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 text-white">
            <Link href="/courses/2">Learn More</Link>
          </button>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg sm:mx-2 sm:my-4 sm:w-auto">
          <FaGem color="#FF00FF" size={70} />
          <br />
          <h2 className="text-2xl font-bold">Exclusive Course</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white">
            <Link href="/courses/3">Learn More</Link>
          </button>
        </div>
      </motion.div>

      <div className="mt-10 flex items-center justify-center">
        <motion.div
          ref={ref2}
          className="m-2 flex w-full flex-col items-center gap-4 md:w-4/5 md:flex-row lg:relative"
          style={styles.divStyle as never}
          variants={windowWidth <= 768 ? fadeIn : slideIn} // Use fadeIn for screens <= 768px and slideIn for larger screens
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1/2">
            <img
              src="https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Fitness"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold">Fitness</h2>
            <p className="text-lg">
              Let us redefine fitness to thriving and for thriving one needs to
              be connected to the Source. So that means we need to be less
              domesticated and more in the flow of how nature designed us. How
              do we balance this life of living on the cusp of nature and
              domestication or urbanization? So, to be fit, you need to build
              some skills to keep you away from fear once the danger is over and
              to be connected to your source of energy and motivation and love
              in order to be truly fit and thriving. Welcome to Soucre Parent
              Health Fitness.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <motion.div
          ref={ref3}
          className="m-2 flex w-full flex-col items-center gap-4 md:w-4/5 md:flex-row lg:relative"
          style={styles.divStyle as never}
          variants={windowWidth <= 768 ? fadeIn : slideIn} // Use fadeIn for screens <= 768px and slideIn for larger screens
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold">Nutrition</h2>
            <p className="text-lg">
              Nutrition is a word that has been used rather as a cliche in the
              last decade. However there is way more to it than simply adding
              some vitamins and isolated minerals to our body. Sometimes we
              start to even think of our food as micro and macronutrients and
              make it almost mechanistic as how much of protein, carbs and fat
              we are supposed to eat. How does it make you feel to eat food this
              way? You will learn what nourishes you truly and how nutrition
              goes way beyond food, vitamins, supplements, proteins, carbs and
              fats.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.pexels.com/photos/6200979/pexels-photo-6200979.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Nutrition"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <motion.div
          ref={ref4}
          className="m-2 flex w-full flex-col items-center gap-4 md:w-4/5 md:flex-row lg:relative"
          style={styles.divStyle as never}
          variants={windowWidth <= 768 ? fadeIn : slideIn} // Use fadeIn for screens <= 768px and slideIn for larger screens
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1/2">
            <img
              src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/335067741_881350312975397_3784625920049088698_n.jpg?stp=dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0XarZ73yRNsAX9F6rqC&_nc_ht=scontent-bos5-1.xx&oh=00_AfAYcRpmq_e6ABDIKcGsxLOhKXsI_R3hUyayAq7-fEOWeg&oe=64A04577"
              alt="Nutrition"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold">Nutrition</h2>
            <p className="text-lg">
              Dont you want to enjoy your food without thinking too much about
              the nutrients? However, you also want your favourite foods to
              moorish you for energy and not upset your stomach or give you
              ulcers and headaches or add more weight to your body than you need
              to. How does it all work? Why do some people eat whatever they
              want and yet stay slim and energetic while some of us count each
              calorie and weight each nutrient and yet we add on love handles,
              swelling in our joints or worse off get acidity or ulcers and
              headaches? This is where Source Parent Health will help you
              understand how you are processing foods and also get you back to
              making choices that give you the flavours you want rather than to
              satisfy cravings.
            </p>
          </div>
        </motion.div>
      </div>
      <br />
      <motion.div
        ref={ebookRef}
        className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url(${backgroundCoverSrc})`,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md backdrop-filter"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <AnimatePresence>
          <motion.div className="z-10 mb-8 flex w-2/5 justify-center sm:w-1/4 md:w-1/5">
            <BookOpen color="#fff" size={48} />
          </motion.div>
          <motion.img
            ref={imgRef}
            src={ebookCoverSrc} // maybe change to https://fastly.picsum.photos/id/377/200/300.jpg?hmac=veEWg3ApI7rkKqMF6MuaWBmxPgnEe-Ar9eDdMG3q-kk or https://fastly.picsum.photos/id/959/200/300.jpg?hmac=q2WZ7w-aqWQyUVa4vEv-28yCS6TLS-M19or3y7YVvso
            alt="E-Book Cover"
            className="z-10 mb-8 w-2/5 rounded object-cover sm:w-1/4 md:w-1/6"
            initial={{ opacity: 0 }}
            animate={{ opacity: imgInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            ref={heroRef}
            className="z-10 mb-4 text-5xl font-bold tracking-wide"
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={char + "-" + index.toString()}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.25, duration: 5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            ref={subtitleRef}
            className="font-raleway z-10 mb-6 justify-center text-center tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: subtitleInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {subtitle}
          </motion.p>
          <motion.a
            href="/ebook.pdf"
            download
            className="z-10 flex items-center gap-2 rounded-lg border-2 border-transparent bg-white px-6 py-3 font-semibold tracking-wide text-black transition-colors duration-200 hover:border-black hover:bg-purple-300"
            whileHover={{ scale: 1.1 }}
          >
            <Download color="#8B5CF6" size={24} /> Get a free viewing of our
            e-book!
          </motion.a>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
