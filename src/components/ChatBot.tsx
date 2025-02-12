// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import chatbotImage from "@/assets/chatbot.png";

// // FAQ Data for AI and AI Agents
// const faqData = [
//   {
//     question: "What is Artificial Intelligence (AI)?",
//     answer: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans.",
//   },
//   {
//     question: "What are AI agents?",
//     answer: "AI agents are autonomous systems that perceive their environment, make decisions, and take actions to achieve specific goals. Examples include chatbots, recommendation systems, and autonomous robots.",
//   },
//   {
//     question: "How do AI agents learn?",
//     answer: "AI agents learn through machine learning techniques, such as supervised learning, unsupervised learning, and reinforcement learning, using data to improve their performance over time.",
//   },
//   {
//     question: "What is the difference between AI and machine learning?",
//     answer: "AI is the broader concept of machines performing tasks that require human intelligence, while machine learning is a subset of AI that focuses on enabling machines to learn from data without explicit programming.",
//   },
//   {
//     question: "What are the applications of AI?",
//     answer: "AI is used in various fields, including healthcare (diagnosis, treatment planning), finance (fraud detection, trading), transportation (autonomous vehicles), and customer service (chatbots).",
//   },
//   {
//     question: "What is natural language processing (NLP)?",
//     answer: "Natural Language Processing (NLP) is a branch of AI that enables machines to understand, interpret, and generate human language. It powers chatbots, translation tools, and voice assistants.",
//   },
//   {
//     question: "What is deep learning?",
//     answer: "Deep learning is a subset of machine learning that uses neural networks with multiple layers to model complex patterns in data. It is used in image recognition, speech recognition, and more.",
//   },
//   {
//     question: "What are the ethical concerns with AI?",
//     answer: "Ethical concerns with AI include bias in algorithms, privacy issues, job displacement, and the potential misuse of AI technologies.",
//   },
//   {
//     question: "Can AI replace human jobs?",
//     answer: "While AI can automate repetitive tasks, it is unlikely to fully replace jobs that require creativity, emotional intelligence, and complex decision-making. Instead, it will augment human capabilities.",
//   },
//   {
//     question: "What is reinforcement learning?",
//     answer: "Reinforcement learning is a type of machine learning where an AI agent learns by interacting with its environment and receiving rewards or penalties for its actions.",
//   },
//   {
//     question: "What is computer vision?",
//     answer: "Computer vision is a field of AI that enables machines to interpret and analyze visual data, such as images and videos, for tasks like object detection and facial recognition.",
//   },
//   {
//     question: "What is the Turing Test?",
//     answer: "The Turing Test is a measure of a machine's ability to exhibit intelligent behavior indistinguishable from that of a human. It was proposed by Alan Turing in 1950.",
//   },
//   {
//     question: "What are neural networks?",
//     answer: "Neural networks are computational models inspired by the human brain. They consist of interconnected layers of nodes (neurons) that process data and learn patterns.",
//   },
//   {
//     question: "What is the future of AI?",
//     answer: "The future of AI includes advancements in general AI (machines with human-like intelligence), improved human-AI collaboration, and applications in solving global challenges like climate change and healthcare.",
//   },
// ];

// // Casual Responses for the ChatBot
// const casualResponses = [
//   { keyword: "hi", response: "Hello! How can I assist you with AI and AI agents today?" },
//   { keyword: "how are you", response: "I'm doing great, thank you for asking! How can I help you with AI today?" },
//   { keyword: "thanks", response: "You're welcome! Let me know if you need anything else about AI." },
//   { keyword: "bye", response: "Goodbye! Have a great day exploring the world of AI!" },
//   { keyword: "help", response: "Sure! I'm here to assist you with anything related to AI and AI agents. How can I help?" },
//   { keyword: "founder", response: "The founder of this chatbot is Areesha Kainat." },
//   { keyword: "who created you", response: "I was created by Areesha Kainat." },
//   { keyword: "who made you", response: "Areesha Kainat is the creator of this chatbot." },
//   { keyword: "ai", response: "AI, or Artificial Intelligence, is the simulation of human intelligence in machines. What would you like to know about AI?" },
//   { keyword: "ai agents", response: "AI agents are autonomous systems that perceive their environment and take actions to achieve goals. How can I assist you with AI agents?" },
//   { keyword: "machine learning", response: "Machine learning is a subset of AI that enables systems to learn from data and improve over time. What do you need help with?" },
//   { keyword: "deep learning", response: "Deep learning is a type of machine learning that uses neural networks to model complex patterns. How can I assist you with deep learning?" },
//   { keyword: "nlp", response: "Natural Language Processing (NLP) enables machines to understand and generate human language. What do you need help with regarding NLP?" },
//   { keyword: "ethics", response: "Ethical concerns in AI include bias, privacy, and job displacement. What specific ethical issue are you interested in?" },
// ];

// // ChatBot Component
// const ChatBot = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<Array<{ user: string; bot: string }>>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isChatVisible, setIsChatVisible] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     setMessages([...messages, { user: message, bot: "..." }]);
//     setIsLoading(true);

//     const casualResponse = casualResponses.find((response) =>
//       message.toLowerCase().includes(response.keyword)
//     );

//     if (casualResponse) {
//       setTimeout(() => {
//         setMessages([...messages, { user: message, bot: casualResponse.response }]);
//         setMessage("");
//         setIsLoading(false);
//       }, 1000);
//       return;
//     }

//     const faq = faqData.find((faq) =>
//       faq.question.toLowerCase().includes(message.toLowerCase())
//     );

//     setTimeout(() => {
//       setMessages([
//         ...messages,
//         {
//           user: message,
//           bot: faq ? faq.answer : "Sorry, I couldn't find an answer to that question. Please try again.",
//         },
//       ]);
//       setMessage("");
//       setIsLoading(false);
//     }, 1000);
//   };

//   const toggleChat = () => {
//     setIsChatVisible(!isChatVisible);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-4">
//       {/* ChatBot Toggle Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-col items-center cursor-pointer"
//         onClick={toggleChat}
//       >
//         {/* <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-purple-600"} mb-2`}>Let's Talk</h3> */}
//         <h3 className={`text-lg font-semibold ${isDarkMode ?  "text-purple-600": "text-white" } mb-2`}>Let's Talk</h3>
//         <Image
//           src={chatbotImage}
//           alt="ChatBot"
//           width={74}
//           height={74}
//           className="w-16 h-16 rounded-full hover:scale-110 transition-transform"
//         />
//       </motion.div>

//       {/* ChatBot Window */}
//       <AnimatePresence>
//         {isChatVisible && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className={`w-full max-w-lg ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg rounded-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"} sm:w-11/12 md:w-96`}
//             style={{
//               position: "fixed",
//               bottom: "8rem", // Adjust this value as needed
//               right: "2rem", // Always on the right
//             }}
//           >
//             {/* Chat Header */}
//             <div className={`${isDarkMode ? "bg-purple-800" : "bg-purple-600"} text-white text-lg font-bold py-4 px-6 rounded-t-lg flex justify-between items-center`}>
//               <span>AI Assistant</span>
//               <button
//                 onClick={toggleDarkMode}
//                 className="p-1 rounded-full hover:bg-purple-700 transition-all"
//               >
//                 {isDarkMode ? "🌙" : "☀️"}
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="p-4 space-y-4 overflow-y-auto max-h-48">
//               <AnimatePresence>
//                 {messages.map((msg, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-col space-y-2"
//                   >
//                     {/* User Message */}
//                     <div className={`self-end ${isDarkMode ? "bg-purple-700" : "bg-purple-600"} text-white px-4 py-2 rounded-lg shadow-md max-w-max`}>
//                       {msg.user}
//                     </div>
//                     {/* Bot Message */}
//                     <div className={`self-start ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-800"} px-4 py-2 rounded-lg shadow-sm max-w-max`}>
//                       {msg.bot}
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//               {isLoading && (
//                 <div className={`text-sm animate-pulse ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Bot is typing...</div>
//               )}
//             </div>

//             {/* Input */}
//             <div className={`flex items-center p-4 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
//               <input
//                 type="text"
//                 placeholder="Ask me about AI & AI agents..."
//                 className={`flex-grow border ${isDarkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-300 bg-white text-gray-800"} rounded-full px-4 py-2 focus:ring-2 focus:ring-purple-600 outline-none transition-all`}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={isLoading}
//                 className={`ml-3 ${isDarkMode ? "bg-purple-700" : "bg-purple-600"} text-white px-6 py-2 rounded-full shadow-md hover:${isDarkMode ? "bg-purple-800" : "bg-purple-700"} disabled:opacity-50 transition-all`}
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ChatBot;







// ================== responsive=================

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import chatbotImage from "@/assets/chatbot.png";

// FAQ Data for AI and AI Agents
const faqData = [
  {
    question: "What is Artificial Intelligence (AI)?",
    answer: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans.",
  },
  {
    question: "What are AI agents?",
    answer: "AI agents are autonomous systems that perceive their environment, make decisions, and take actions to achieve specific goals. Examples include chatbots, recommendation systems, and autonomous robots.",
  },
  {
    question: "How do AI agents learn?",
    answer: "AI agents learn through machine learning techniques, such as supervised learning, unsupervised learning, and reinforcement learning, using data to improve their performance over time.",
  },
  {
    question: "What is the difference between AI and machine learning?",
    answer: "AI is the broader concept of machines performing tasks that require human intelligence, while machine learning is a subset of AI that focuses on enabling machines to learn from data without explicit programming.",
  },
  {
    question: "What are the applications of AI?",
    answer: "AI is used in various fields, including healthcare (diagnosis, treatment planning), finance (fraud detection, trading), transportation (autonomous vehicles), and customer service (chatbots).",
  },
  {
    question: "What is natural language processing (NLP)?",
    answer: "Natural Language Processing (NLP) is a branch of AI that enables machines to understand, interpret, and generate human language. It powers chatbots, translation tools, and voice assistants.",
  },
  {
    question: "What is deep learning?",
    answer: "Deep learning is a subset of machine learning that uses neural networks with multiple layers to model complex patterns in data. It is used in image recognition, speech recognition, and more.",
  },
  {
    question: "What are the ethical concerns with AI?",
    answer: "Ethical concerns with AI include bias in algorithms, privacy issues, job displacement, and the potential misuse of AI technologies.",
  },
  {
    question: "Can AI replace human jobs?",
    answer: "While AI can automate repetitive tasks, it is unlikely to fully replace jobs that require creativity, emotional intelligence, and complex decision-making. Instead, it will augment human capabilities.",
  },
  {
    question: "What is reinforcement learning?",
    answer: "Reinforcement learning is a type of machine learning where an AI agent learns by interacting with its environment and receiving rewards or penalties for its actions.",
  },
  {
    question: "What is computer vision?",
    answer: "Computer vision is a field of AI that enables machines to interpret and analyze visual data, such as images and videos, for tasks like object detection and facial recognition.",
  },
  {
    question: "What is the Turing Test?",
    answer: "The Turing Test is a measure of a machine's ability to exhibit intelligent behavior indistinguishable from that of a human. It was proposed by Alan Turing in 1950.",
  },
  {
    question: "What are neural networks?",
    answer: "Neural networks are computational models inspired by the human brain. They consist of interconnected layers of nodes (neurons) that process data and learn patterns.",
  },
  {
    question: "What is the future of AI?",
    answer: "The future of AI includes advancements in general AI (machines with human-like intelligence), improved human-AI collaboration, and applications in solving global challenges like climate change and healthcare.",
  },
];

// Casual Responses for the ChatBot
const casualResponses = [
  { keyword: "hi", response: "Hello! How can I assist you with AI and AI agents today?" },
  { keyword: "how are you", response: "I'm doing great, thank you for asking! How can I help you with AI today?" },
  { keyword: "thanks", response: "You're welcome! Let me know if you need anything else about AI." },
  { keyword: "bye", response: "Goodbye! Have a great day exploring the world of AI!" },
  { keyword: "help", response: "Sure! I'm here to assist you with anything related to AI and AI agents. How can I help?" },
  { keyword: "founder", response: "The founder of this chatbot is Areesha Kainat." },
  { keyword: "who created you", response: "I was created by Areesha Kainat." },
  { keyword: "who made you", response: "Areesha Kainat is the creator of this chatbot." },
  { keyword: "ai", response: "AI, or Artificial Intelligence, is the simulation of human intelligence in machines. What would you like to know about AI?" },
  { keyword: "ai agents", response: "AI agents are autonomous systems that perceive their environment and take actions to achieve goals. How can I assist you with AI agents?" },
  { keyword: "machine learning", response: "Machine learning is a subset of AI that enables systems to learn from data and improve over time. What do you need help with?" },
  { keyword: "deep learning", response: "Deep learning is a type of machine learning that uses neural networks to model complex patterns. How can I assist you with deep learning?" },
  { keyword: "nlp", response: "Natural Language Processing (NLP) enables machines to understand and generate human language. What do you need help with regarding NLP?" },
  { keyword: "ethics", response: "Ethical concerns in AI include bias, privacy, and job displacement. What specific ethical issue are you interested in?" },
];


// ChatBot Component
const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ user: string; bot: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { user: message, bot: "..." }]);
    setIsLoading(true);

    const casualResponse = casualResponses.find((response) =>
      message.toLowerCase().includes(response.keyword)
    );

    if (casualResponse) {
      setTimeout(() => {
        setMessages([...messages, { user: message, bot: casualResponse.response }]);
        setMessage("");
        setIsLoading(false);
      }, 1000);
      return;
    }

    const faq = faqData.find((faq) =>
      faq.question.toLowerCase().includes(message.toLowerCase())
    );

    setTimeout(() => {
      setMessages([
        ...messages,
        {
          user: message,
          bot: faq ? faq.answer : "Sorry, I couldn't find an answer to that question. Please try again.",
        },
      ]);
      setMessage("");
      setIsLoading(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-4">
      {/* ChatBot Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center cursor-pointer"
        onClick={toggleChat}
      >
        <h3 className={`text-lg font-semibold ${isDarkMode ? "text-purple-600" : "text-white"} mb-2`}>Let's Talk</h3>
        <Image
          src={chatbotImage}
          alt="ChatBot"
          width={74}
          height={74}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full hover:scale-110 transition-transform"
        />
      </motion.div>

      {/* ChatBot Window */}
      <AnimatePresence>
        {isChatVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`w-full max-w-lg ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg rounded-lg border ${isDarkMode ? "border-gray-700" : "border-gray-200"} sm:w-11/12 md:w-96`}
            style={{
              position: "fixed",
              bottom: "6rem", // Adjusted for smaller screens
              right: "1rem", // Adjusted for smaller screens
            }}
          >
            {/* Chat Header */}
            <div className={`${isDarkMode ? "bg-purple-800" : "bg-purple-600"} text-white text-lg font-bold py-4 px-6 rounded-t-lg flex justify-between items-center`}>
              <span>AI Assistant</span>
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full hover:bg-purple-700 transition-all"
              >
                {isDarkMode ? "🌙" : "☀️"}
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 overflow-y-auto max-h-48 sm:max-h-64 md:max-h-96">
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col space-y-2"
                  >
                    {/* User Message */}
                    <div className={`self-end ${isDarkMode ? "bg-purple-700" : "bg-purple-600"} text-white px-4 py-2 rounded-lg shadow-md max-w-max`}>
                      {msg.user}
                    </div>
                    {/* Bot Message */}
                    <div className={`self-start ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-800"} px-4 py-2 rounded-lg shadow-sm max-w-max`}>
                      {msg.bot}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className={`text-sm animate-pulse ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Bot is typing...</div>
              )}
            </div>

            {/* Input */}
            <div className={`flex items-center p-4 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
              <input
                type="text"
                placeholder="Ask me about AI & AI agents..."
                className={`flex-grow border ${isDarkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-300 bg-white text-gray-800"} rounded-full px-4 py-2 focus:ring-2 focus:ring-purple-600 outline-none transition-all`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className={`ml-3 ${isDarkMode ? "bg-purple-700" : "bg-purple-600"} text-white px-2 py-2 rounded-full shadow-md hover:${isDarkMode ? "bg-purple-800" : "bg-purple-700"} disabled:opacity-50 transition-all`}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
