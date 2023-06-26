/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export default function Introduction() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          className="relative flex w-2/5 flex-col items-start justify-center gap-4 bg-pink-100 px-20"
          style={{ height: "50vh" }}
        >
          <hr className="h-3 border-gray-300"></hr>
          <h1 className="text-4xl font-light">
            Welcome to Source Parent Health!
          </h1>
          <h5 className="text-2xl font-light">
            A new and upcoming business that is dedicated to making YOUR life
            more special
          </h5>

          <p
            className="tracking-wide text-gray-500"
            style={{ fontFamily: "montserrat" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
            justo sed
          </p>
          <div className="flex gap-4">
            <Link
              href="/courses"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-gray-500 bg-transparent px-4 py-2"
            >
              Learn More
            </Link>
          </div>
        </div>
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
        <div className="relative flex h-96 w-2/3 justify-center gap-4 p-8">
          <div className="relative w-1/4 flex-col">
            <h1 className="font-cursive text-6xl font-light tracking-wide">
              Buy Our E-BOOK!
            </h1>
            <br />
            <p className="tracking-wide text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              et justo sed
            </p>
            <br />
            <Link
              href="https://www.google.com"
              className="rounded-lg bg-yellow-700 px-6 py-3 text-white"
            >
              Get a free viewing of our e-book!
            </Link>
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <img
            src="https://freesvg.org/img/1488738791.png"
            alt="E-Book"
            className="h-80"
          />
        </div>
      </div>
      {/* Additional Boxes */}
      <div className="flex items-center justify-center">
        <div className="relative flex h-96 w-3/5 flex-col items-start justify-center gap-4 bg-yellow-200 p-8">
          <h1 className="text-4xl font-bold">Pictures</h1>
          <p className="text-gray-500">Explore our collection of pictures</p>
          <Link href="/pictures" className="text-blue-500 underline">
            View pictures
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex w-full flex-col items-start justify-center gap-4 bg-green-200 p-8">
          <h1 className="text-4xl font-bold">Box 2</h1>
          <p className="text-gray-500">Content of Box 2</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex h-96 w-96 flex-col items-start justify-center gap-4 bg-blue-200 p-8">
          <h1 className="text-4xl font-bold">Box 3</h1>
          <p className="text-gray-500">Content of Box 3</p>
        </div>
        <div className="relative flex h-96 w-96 flex-col items-start justify-center gap-4 bg-purple-200 p-8">
          <h1 className="text-4xl font-bold">Box 4</h1>
          <p className="text-gray-500">Content of Box 4</p>
        </div>
      </div>
    </div>
  );
}
