/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Testimonial = {
  name: string;
  title: string;
  body: string;
  image: string;
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTestominialsVisible, setIsTestimonialsVisible] = useState(false);

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
    const timer = setTimeout(goForward, 5000);
    return () => clearTimeout(timer);
  }, [currentTestimonial]);
  useEffect(() => {
    setTimeout(setIsTestimonialsVisible, 750, true);
  }, []);
  useEffect(() => {
    setIsLoaded(false);
    const fadeInTimer = setTimeout(() => setIsLoaded(true), 500);
    const fadeOutTimer = setTimeout(() => setIsLoaded(false), 4500);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [currentTestimonial]);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 bg-[#C3C3C3] ${
        isTestominialsVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <br />
      <h1 className="font-cursive font-sans text-4xl font-thin">
        Testimonials
      </h1>
      <br />
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          className="rounded bg-transparent px-2 py-1 font-bold text-black"
          onClick={goBack}
        >
          <FaArrowLeft />
        </button>
        <div
          className={`flex flex-col items-center justify-center ${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <img
            src={testimonials[currentTestimonial].image}
            alt="User Avatar"
            className="h-32 w-32 cursor-pointer rounded-full"
          />
          <br />
          <h1 className="font-cursive font-sans text-2xl font-thin">
            {testimonials[currentTestimonial].name}
          </h1>
          <br />
          <h1 className="font-cursive font-sans text-2xl font-thin">
            {testimonials[currentTestimonial].title}
          </h1>
          <br />
          <h1 className="font-cursive font-sans text-3xl font-thin leading-relaxed">
            &quot;{testimonials[currentTestimonial].body}&quot;
          </h1>
          <br />
        </div>
        <button
          className="rounded bg-transparent px-2 py-1 font-bold text-black"
          onClick={goForward}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
