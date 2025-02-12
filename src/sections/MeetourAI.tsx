"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import robotImage from "@/assets/bg.png";
import Image from "next/image";

export const MeetOurAI = () => {
  const texts = [
    "Ask me anything...",
    "How can I assist you today?",
    "Let’s build the future together!",
    "Welcome to Agentia World!",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < texts[currentTextIndex].length) {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Pause before switching text
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, [charIndex, currentTextIndex]);

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: AI Robot Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="w-full lg:w-1/2"
        >
          <Image
            src={robotImage}
            alt="AI Robot"
            className="w-full h-auto max-w-md mx-auto lg:mx-0"
          />
        </motion.div>

        {/* Right Side: Heading and Animated Input */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
          }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
            Meet Our AI
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl text-purple-300">
            Interact with the future of artificial intelligence.
          </p>

          {/* Animated Input Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
            }}
            className="mt-8 relative"
          >
            <input
              type="text"
              readOnly
              value={displayedText}
              className="w-full bg-black border-2 border-purple-500 rounded-lg py-4 px-6 text-white text-lg sm:text-xl font-medium placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 shadow-md hover:border-purple-300"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
