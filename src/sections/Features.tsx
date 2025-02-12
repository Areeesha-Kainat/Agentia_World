// const tabs = [
//   {
//     icon: "/assets/lottie/vroom.lottie",
//     title: "User-friendly dashboard",
//     isNew: false,
//     backgroundPositionX: 0,
//     backgroundPositionY: 0,
//     backgroundSizeX: 150,
//   },
//   {
//     icon: "/assets/lottie/click.lottie",
//     title: "One-click optimization",
//     isNew: false,
//     backgroundPositionX: 98,
//     backgroundPositionY: 100,
//     backgroundSizeX: 135,
//   },
//   {
//     icon: "/assets/lottie/stars.lottie",
//     title: "Smart keyword generator",
//     isNew: true,
//     backgroundPositionX: 100,
//     backgroundPositionY: 27,
//     backgroundSizeX: 177,
//   },
// ];





"use client";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "Neural Networks",
      description: "Advanced neural architectures for complex decision making",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.5a2 2 0 0 1-1.5-.7l-1.1-1.4a2 2 0 0 0-1.6-.8H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
          <path d="M2 8v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
          <path d="M9 22v-8l2 1 2-1v8" />
        </svg>
      ),
    },
    {
      title: "Deep Learning",
      description: "Sophisticated deep learning models for pattern recognition",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12a10 10 0 1 1 10 10" />
          <path d="M2 12a10 10 0 1 0 10 10" />
          <path d="M8 12h8" />
          <path d="M12 16V8" />
        </svg>
      ),
    },
    {
      title: "Advanced ML",
      description: "Cutting-edge machine learning algorithms",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 22v-2" />
          <path d="m17 20.7-1.5-1.5" />
          <path d="m17 3.3-1.5 1.5" />
          <path d="m7 20.7 1.5-1.5" />
          <path d="m7 3.3 1.5 1.5" />
        </svg>
      ),
    },
    {
      title: "Global Scale",
      description: "Distributed AI processing across global networks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9m-9 9a9 9 0 0 1 9-9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent"
        >
          Powered by Advanced AI
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto"
        >
          Built on cutting-edge neural architectures
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-2xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300 hover:scale-105 group"
            >
              {/* Feature Icon */}
              <div className="w-12 h-12 mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>

              {/* Feature Description */}
              <p className="mt-4 text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};