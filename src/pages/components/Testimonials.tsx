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
    const timer = setTimeout(goForward, 12500);
    return () => clearTimeout(timer);
  }, [currentTestimonial]);
  useEffect(() => {
    setTimeout(setIsTestimonialsVisible, 750, true);
  }, []);
  useEffect(() => {
    setIsLoaded(false);
    const fadeInTimer = setTimeout(() => setIsLoaded(true), 1000);
    const fadeOutTimer = setTimeout(() => setIsLoaded(false), 12500);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [currentTestimonial]);

  return (
    // <Element
    //   name="testimonialSection"
    //   className={`container mx-auto my-10 flex flex-col overflow-hidden shadow-sm md:my-24 md:flex-row ${
    //     isTestimonialsVisible ? "opacity-100" : "opacity-0"
    //   } transition-opacity duration-700`}
    // >
    //   <div className="relative flex w-full flex-col items-center justify-center bg-black py-2 md:w-1/2 md:py-24">
    //     <div className="grid-indigo absolute left-0 top-0 z-10 h-16 w-16 md:ml-20 md:mt-24 md:h-40 md:w-40"></div>
    //     <div className="relative z-20 mb-0 px-6 py-2 text-2xl font-semibold leading-tight tracking-tight text-indigo-100 md:mx-auto md:w-64 md:px-1 md:py-6 md:text-5xl">
    //       <span className="md:block">What Our</span>
    //       <span className="md-block">Customers</span>
    //       <span className="block">Are Saying!</span>
    //     </div>
    //     <div className="absolute bottom-0 right-0 mb-4 mr-4 hidden md:block">
    //       <button
    //         className="h-10 w-12 rounded-l-full border-r bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
    //         onClick={goBack}
    //       >
    //         <FaArrowLeft />
    //       </button>
    //       <button
    //         className="h-10 w-12 rounded-r-full bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
    //         onClick={goForward}
    //       >
    //         <FaArrowRight />
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex w-full items-center justify-center bg-white md:w-1/2">
    //     <div
    //       className={`h-full w-full transition-opacity duration-500 ${
    //         isLoaded ? "opacity-100" : "opacity-0"
    //       }`}
    //     >
    //       <div className="relative p-4 md:p-10">
    //         <div className="mb-4 h-40 overflow-hidden rounded-full bg-indigo-200 md:h-72">
    //           <img
    //             className="h-full w-full object-cover object-center"
    //             src={testimonials[currentTestimonial]?.image}
    //             alt={testimonials[currentTestimonial]?.name}
    //             onLoad={() => setIsLoaded(true)}
    //           />
    //         </div>
    //         <p className="mb-4 text-center text-4xl text-gray-800">
    //           &rdquo;{testimonials[currentTestimonial]?.main}&ldquo;
    //         </p>{" "}
    //         <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 md:text-3xl">
    //           - {testimonials[currentTestimonial]?.name}
    //         </h2>
    //         <p className="mb-2 text-center text-gray-600">
    //           {testimonials[currentTestimonial]?.title}
    //         </p>
    //         {/* Add location here */}
    //         <blockquote className="font-cursive max-h-[300px] overflow-y-auto text-center font-sans text-3xl font-light leading-relaxed">
    //           <p className="inline -rotate-3 transform text-9xl text-gray-500">
    //             &ldquo;
    //           </p>
    //           <span>{testimonials[currentTestimonial]?.body}</span>
    //         </blockquote>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-4 flex justify-between md:hidden">
    //     <button
    //       className="h-10 w-10 rounded-full bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
    //       onClick={goBack}
    //     >
    //       <FaArrowLeft />
    //     </button>
    //     <button
    //       className="h-10 w-10 rounded-full bg-gray-100 font-bold text-gray-500 hover:text-indigo-500 focus:outline-none"
    //       onClick={goForward}
    //     >
    //       <FaArrowRight />
    //     </button>
    //   </div>
    // </Element>

    <section className="text-neutral-700 dark:text-neutral-300">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0"></p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-5">
        <div>
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-600 dark:shadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-[##9d789b]"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img src="/khalid.jpg" alt="img" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Khalid Parvez</h4>
              <p>Engineer, United States</p>
              <br />
              <hr />{" "}
              <div className="mt-4 max-h-40 overflow-y-auto">
                <h1>
                  <br />
                  <strong>
                    Source Parent Health gives you amazing results
                  </strong>
                </h1>
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  It has been a pleasure working with Sarah for the last 4
                  months in the Source Parent Health coaching program. I am
                  looking forward to accomplishing more health goals going
                  forward. With Sarah’s health coaching, I was able to lower my
                  A1c from diabetic range to a healthy 5.6 in 3 months while
                  enjoying my favorite foods when I wanted to. Sarah has a very
                  intuitive method of coaching that gave me the tools to take
                  lead on my weight, energy, sleep, and eating patterns.I would
                  highly encourage anyone with diabetes and weight issues to
                  enroll in Source Parent Health coaching program and see the
                  amazing results for themselves in an enjoyable manner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-600 dark:shadow-black/30">
            <div className="h-12 overflow-hidden rounded-t-lg bg-[##7a81a8]"></div>
            <div className="mx-auto -mt-8 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img src="/arthur.jpg" alt="img" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Arthur Walowski</h4>
              <p>Business Owner, Canada</p>
              <br />
              <hr />
              <h1>
                <br />
                <strong>Coaching with Sarah is easy to comprehend</strong>
              </h1>
              <p className="mt-4">
                <div className="mt-4 max-h-40 overflow-y-auto"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                I think the thing that stood out to me the most was how you were
                able to help me see food in a different way and how I wasn’t
                really thinking about what I was putting in my body. Once you
                helped me realize what I was doing wrong it definitely made it
                easier to comprehend.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-600 dark:shadow-black/30">
            <div className="h-28 overflow-hidden rounded-t-lg bg-[##6d5b98]"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img src="/aparna.png" alt="img" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Aparna Sharma</h4>
              <p>Senior HR Executive, India</p>
              <br />
              <hr />

              <div className="mt-4 max-h-40 overflow-y-auto">
                <h1>
                  <br />
                  <strong>Sarah is an asset</strong>
                </h1>
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  I have known Sarah as an astute professional fo rover a decade
                  now, and a benevolent fellow human being. Committed, sharp,
                  and extremely thorough with her work coupled with risk-taking
                  ability which has alway smade her stand out from her other
                  team members. She has demonstrated learning agility in a great
                  variety of tasks that she has undertaken. Sarah is an absolute
                  asset for any organization, client, and a great friend too!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-600 dark:shadow-black/30">
            <div className="h-20 overflow-hidden rounded-t-lg bg-[##7a81a8]"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img src="/filler.webp" alt="img" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Farzeen Rizvi</h4>
              <p>Professional Engineer, Canada</p>
              <br />
              <br />
              <hr />
              <div className="mt-4 max-h-40 overflow-y-auto">
                <h1>
                  <br />
                  <strong>
                    I experienced abundant energy with Sarah’s coaching
                  </strong>
                </h1>
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Sarah’s workshop has “re-calibrated” my perception on personal
                  health and well-being; our most cherished gift. Sarah’s
                  in-depth knowledge on the subject, and motivation, is apparent
                  in her delivery. Her approach on nutrition, emotional and
                  spiritual health has allowed me to examine my life in a
                  holistic manner, and enhance it. Weight loss and increased
                  energy are just a few of the many benefits I have reaped from
                  this workshop, . I feel privileged to have had the opportunity
                  to engage with such a wonderful group of women. This series
                  should become a permanent program offered to all families.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-600 dark:shadow-black/30">
            <div className="h-36 overflow-hidden rounded-t-lg bg-[##9d789b]"></div>
            <div className="mx-auto -mt-20 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img src="/sheila.jpg" alt="img" />
            </div>
            <div className="p-6">
              <h4 className="mb-4 text-2xl font-semibold">Sheila Osta</h4>
              <p>School Teacher, Karnataka India</p>
              <div className="mt-4 max-h-40 overflow-y-auto">
                <br />
                <hr />
                <h1>
                  <br />
                  <strong>
                    With Sarah’s coaching I can see light at the end of the
                    tunnel
                  </strong>
                </h1>
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  It has been a few weeks since I have started my diabetes
                  reversal journey with health coach Sarah Musavi. Sarah takes a
                  keen interest in hearing me out without rushing through the
                  session. I must admit that each session has been truly
                  intriguing and engaging . She is so very dedicated that we
                  lose track of time going beyond an hour sometimes. I feel
                  truly inspired and encouraged about my reversal process each
                  time I have a session. I have now begun seeing the light at
                  the end of my tunnel. I would definitely recommend you to give
                  her a shot. It would well be worth your time. Kudos to you
                  Sarah!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
