/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { FaAddressBook, FaAward, FaGem } from "react-icons/fa";

export default function Introduction() {
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
    triggerOnce: true,
    threshold: 0.6,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div>
      <div className="flex items-center justify-center">
        <motion.div
          ref={ref1}
          className="justify-top relative top-0 flex w-4/5 flex-col items-center gap-4 bg-pink-100 px-20"
          style={{ height: "45vh" }}
          variants={slideIn}
          transition={{ duration: 1.0 }}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
        >
          <hr className="h-3 border-gray-300"></hr>
          <motion.h1
            className="relative top-5 text-5xl font-light"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Welcome to Source Parent Health!
          </motion.h1>
          <motion.h5
            className="relative top-5 text-2xl font-light"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A new and upcoming business that is dedicated to making YOUR life
            more special
          </motion.h5>
          <motion.p
            className="relative top-5 tracking-wide text-gray-500"
            style={{ fontFamily: "montserrat" }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Build, grow, and develop your wellness lifestyle to suit your needs.
          </motion.p>
          <div className="flex gap-4">
            <Link
              href="/courses"
              className="relative top-5 rounded-lg bg-blue-500 px-4 py-2 text-white"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="relative top-5 rounded-lg border border-gray-500 bg-transparent px-4 py-2"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
      <div
        className="flex items-center"
        style={{
          height: "40vh",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1597571063304-81f081944ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="relative flex h-96 w-2/3 justify-center gap-4 p-8"
          variants={slideIn}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-1/4 flex-col">
            <motion.h1
              className="font-cursive text-6xl font-light tracking-wide"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              Buy Our E-BOOK!
            </motion.h1>
            <br />
            <motion.p
              className="tracking-wide text-gray-600"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              et justo sed
            </motion.p>
            <br />
            <Link
              href="https://www.google.com"
              className="rounded-lg bg-yellow-700 px-6 py-3 text-white"
            >
              Get a free viewing of our e-book!
            </Link>
          </div>
        </motion.div>
        <div className="flex w-1/3 items-center justify-center">
          <motion.img
            src="https://freesvg.org/img/1488738791.png"
            alt="E-Book"
            className="h-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
      {/* Additional Boxes */}
      <div className="flex items-center justify-center">
        <motion.div
          ref={ref2}
          className="relative flex h-96 w-3/5 flex-col items-start justify-center gap-4 bg-yellow-200 p-8"
          variants={slideIn}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
        >
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
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          ref={ref3}
          className="relative flex w-full flex-col items-start justify-center gap-4 bg-green-200 p-8"
          variants={slideIn}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-4xl font-bold"
            variants={fadeIn}
            transition={{ duration: 1.5 }}
          >
            Box 2
          </motion.h1>
          <motion.p
            className="text-gray-500"
            variants={fadeIn}
            transition={{ duration: 2.0, delay: 0.2 }}
          >
            Content of Box 2
          </motion.p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          ref={ref4}
          className="relative flex h-96 w-96 flex-col items-start justify-center gap-4 bg-blue-200 p-8"
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
          className="relative flex h-96 w-96 flex-col items-start justify-center gap-4 bg-purple-200 p-8"
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
      {/* Membership Plans */}
      <br />

      <div className="text-center text-3xl font-light">
        <h1>Build your wellness lifestyle with our courses!</h1>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <div className="flex w-2/3 gap-8">
          <div className="flex flex-col items-center justify-center p-8">
            <FaAddressBook color="#FF00FF" size={70} />
            <br />
            <h2 className="text-2xl font-bold">Basic Course</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white">
              Learn More
            </button>
          </div>
          <div className="flex flex-col items-center justify-center p-8">
            <FaAward color="#FF00FF" size={70} />
            <br />
            <h2 className="text-2xl font-bold">Premium Course</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 text-white">
              Learn More
            </button>
          </div>
          <div className="flex flex-col items-center justify-center p-8">
            <FaGem color="#FF00FF" size={70} />
            <br />
            <h2 className="text-2xl font-bold">Diamond Course</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 rounded-lg bg-purple-500 px-4 py-2 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
