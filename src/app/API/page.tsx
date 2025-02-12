"use client";
import React from "react";
import { Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const APIPage = () => {
  const [copied, setCopied] = useState(false);

  const exampleRequest = `fetch('https://api.agentiaworld.com/v1/data', {
  method: 'GET',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`;

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleRequest);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-purple-500"
        >
          Agentia World API 
        </motion.h1>
        <p className="text-lg text-gray-300 mt-2">
          Seamlessly integrate AI-powered solutions into your applications.
        </p>
      </div>

      {/* API Structure */}
      <div className="mt-12">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-purple-400"
        >
           API Structure
        </motion.h2>
        <p className="mt-2 text-gray-300">
          Our API follows a RESTful architecture and returns JSON responses.
        </p>

        <div className="bg-purple-900 p-4 rounded-lg mt-4 w-full max-w-3xl mx-auto lg:mx-0 lg:ml-8">
          <pre className="text-white text-sm overflow-x-auto p-2 rounded-md">
            <code className="block whitespace-pre-wrap break-words">
              {`BASE URL: https://api.agentiaworld.com/v1/`}
            </code>
          </pre>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="mt-12">
        <motion.h2 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-purple-400"
        >
           API Endpoints
        </motion.h2>
        <p className="text-gray-300 mt-2">Below are some key API endpoints:</p>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { method: "GET", endpoint: "/users", desc: "Retrieve all users" },
            { method: "POST", endpoint: "/users", desc: "Create a new user" },
            { method: "PUT", endpoint: "/users/{id}", desc: "Update user details" },
            { method: "DELETE", endpoint: "/users/{id}", desc: "Delete a user" },
            { method: "GET", endpoint: "/agents", desc: "Retrieve AI agents list" },
            { method: "POST", endpoint: "/auth/login", desc: "User authentication" },
          ].map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border border-purple-800 p-4 rounded-lg shadow-lg text-center"
            >
              <span className={`font-bold text-lg ${
                api.method === "GET" ? "text-green-400" : 
                api.method === "POST" ? "text-blue-400" : 
                api.method === "PUT" ? "text-yellow-400" : 
                "text-red-400"
              }`}>
                {api.method}
              </span>
              <p className="text-lg text-white mt-1">{api.endpoint}</p>
              <p className="text-gray-300 mt-2 text-sm">{api.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Example API Call */}
      <div className="mt-12">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-purple-400"
        >
           Example API Request
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Use the following JavaScript code to make a GET request.
        </p>

        <div className="relative bg-black border border-purple-700 p-4 mt-4 rounded-lg">
          <pre className="text-white text-sm overflow-x-auto">
            <code>{exampleRequest}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-purple-700 p-1 rounded-md hover:bg-purple-500 transition"
          >
            <Copy className="w-4 h-4 text-white" />
          </button>
          {copied && <span className="absolute bottom-2 right-2 text-green-400 text-xs">Copied!</span>}
        </div>
      </div>

      {/* Authentication Section */}
      <div className="mt-12">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-purple-400"
        >
           Authentication
        </motion.h2>
        <p className="text-gray-300 mt-2">
          To access the API, include your API key in the request headers.
        </p>
        <div className="bg-purple-900 p-4 rounded-lg mt-4">
          <pre className="text-white text-sm">
            <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default APIPage;
