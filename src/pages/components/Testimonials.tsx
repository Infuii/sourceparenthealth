/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Element } from "react-scroll";

type Testimonial = {
  name: string;
  title: string;
  body: string;
  image: string;
  main: string;
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = [] }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  const goForward = () => {
    setTimeout(
      setCurrentTestimonial,
      500,
      (currentTestimonial + 1) % testimonials.length
    );
    setIsLoaded(false);
  };

  const goBack = () => {
    const nextIndex = currentTestimonial - 1;
    if (nextIndex < 0) {
      setTimeout(setCurrentTestimonial, 500, testimonials.length - 1);
    } else {
      setTimeout(setCurrentTestimonial, 500, nextIndex);
    }
    setIsLoaded(false);
  };

  useEffect(() => {
    const timer = setTimeout(goForward, 7500);
    return () => clearTimeout(timer);
  }, [currentTestimonial]);
  useEffect(() => {
    setTimeout(setIsTestimonialsVisible, 750, true);
  }, []);
  useEffect(() => {
    setIsLoaded(false);
    const fadeInTimer = setTimeout(() => setIsLoaded(true), 500);
    const fadeOutTimer = setTimeout(() => setIsLoaded(false), 7000);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [currentTestimonial]);

  return (
    <Element
      name="testimonialSection"
      className={`container mx-auto my-10 flex flex-col overflow-hidden shadow-sm md:my-24 md:flex-row ${
        isTestimonialsVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <div className="relative flex w-full flex-col items-center justify-center bg-black py-2 md:w-1/2 md:py-24">
        <div className="grid-indigo absolute left-0 top-0 z-10 h-16 w-16 md:ml-20 md:mt-24 md:h-40 md:w-40"></div>
        <div className="relative z-20 mb-0 px-6 py-2 text-2xl font-semibold leading-tight tracking-tight text-indigo-100 md:mx-auto md:w-64 md:px-1 md:py-6 md:text-5xl">
          <span className="md:block">What Our</span>
          <span className="md-block">Customers</span>
          <span className="block">Are Saying!</span>
        </div>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 hidden md:block">
          <button
            className="h-10 w-12 rounded-l-full border-r bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
            onClick={goBack}
          >
            <FaArrowLeft />
          </button>
          <button
            className="h-10 w-12 rounded-r-full bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
            onClick={goForward}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-white md:w-1/2">
        <div
          className={`h-full w-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative p-4 md:p-10">
            <div className="mb-4 h-40 overflow-hidden rounded-full bg-indigo-200 md:h-72">
              <img
                className="h-full w-full object-cover object-center"
                src={testimonials[currentTestimonial]?.image}
                alt={testimonials[currentTestimonial]?.name}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
            <p className="mb-4 text-center text-4xl text-gray-800">
              &rdquo;{testimonials[currentTestimonial]?.main}&ldquo;
            </p>{" "}
            <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 md:text-3xl">
              - {testimonials[currentTestimonial]?.name}
            </h2>
            <p className="mb-2 text-center text-gray-600">
              {testimonials[currentTestimonial]?.title}
            </p>
            {/* Add location here */}
            <blockquote className="font-cursive max-h-[300px] overflow-y-auto text-center font-sans text-3xl font-light leading-relaxed">
              <p className="inline -rotate-3 transform text-9xl text-gray-500">
                &ldquo;
              </p>
              <span>{testimonials[currentTestimonial]?.body}</span>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between md:hidden">
        <button
          className="h-10 w-10 rounded-full bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
          onClick={goBack}
        >
          <FaArrowLeft />
        </button>
        <button
          className="h-10 w-10 rounded-full bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
          onClick={goForward}
        >
          <FaArrowRight />
        </button>
      </div>
    </Element>
  );
};

export default Testimonials;
