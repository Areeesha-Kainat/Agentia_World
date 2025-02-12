"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const NeuralCapabilities = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const navbar = document.getElementById("navbar");
      const chatbot = document.getElementById("chatbot");

      if (navbar) navbar.style.zIndex = isInView ? "-1" : "50";
      if (chatbot) chatbot.style.zIndex = isInView ? "-1" : "50";
    }
  }, [isInView]);

  // Define capabilities inside the component
  const capabilities = [
    {
      title: "Autonomous Learning",
      description:
        "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
      icon: "🤖",
    },
    {
      title: "Multi-Modal Intelligence",
      description:
        "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
      icon: "🌐",
    },
    {
      title: "Cognitive Integration",
      description:
        "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
      icon: "🧠",
    },
    {
      title: "Ethical AI Framework",
      description:
        "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
      icon: "💡",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-50"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent"
        >
          Neural Capabilities
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg lg:text-xl text-purple-200 max-w-2xl mx-auto"
        >
          Powered by next-generation artificial intelligence
        </motion.p>

        {/* Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2 + index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-black p-6 sm:p-8 rounded-2xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 text-purple-500 group-hover:rotate-12 transition-transform duration-300">
                {capability.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-purple-200">
                {capability.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
