"use client";
import React, { useState } from "react";

const DocumentationPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" status after 2 seconds
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto p-8 overflow-y-auto">
        <section id="overview" className="mb-20">
          <h2 className="text-4xl font-bold text-purple-400">Overview</h2>
          <p className="mt-4 text-lg text-gray-300">
            Welcome to the official documentation for AI Agents and the Agentia
            World platform. AI agents are designed to handle specific tasks
            autonomously, analyze data, and make decisions based on insights
            gathered. This documentation will walk you through the features,
            implementation, and use cases of AI agents, as well as help you get
            started with integrating AI-powered agents into your applications.
          </p>
        </section>

        <section id="getting-started" className="mb-20">
          <h2 className="text-4xl font-bold text-purple-400">Getting Started</h2>
          <p className="mt-4 text-lg text-gray-300">
            Before you begin, make sure you have the following prerequisites
            installed:
          </p>
          <ul className="mt-4 text-lg text-gray-300">
            <li>Node.js and npm</li>
            <li>Next.js with TypeScript support</li>
            <li>Tailwind CSS for styling</li>
          </ul>
          <p className="mt-4 text-lg text-gray-300">
            To get started with your AI Agent project, follow these steps:
          </p>
          <ol className="mt-4 text-lg text-gray-300 list-decimal list-inside">
            <li>Clone the repository or create a new Next.js app.</li>
            <li>Set up TypeScript and Tailwind CSS in your Next.js project.</li>
            <li>Install necessary dependencies for AI processing and agent management.</li>
            <li>Implement the AI agent functionality in your project.</li>
          </ol>
        </section>

        <section id="ai-agent-concept" className="mb-20">
          <h2 className="text-4xl font-bold text-purple-400">AI Agent Concept</h2>
          <p className="mt-4 text-lg text-gray-300">
            AI agents are software entities that autonomously perform tasks based
            on pre-defined algorithms and real-time data. These agents can make
            decisions, process data, and interact with users or other systems.
            Some common AI agent use cases include automation, data analysis,
            customer service, and predictive analytics.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            In Agentia World, AI agents are built to handle specific industries
            and tasks, improving efficiency and decision-making processes.
          </p>
        </section>

        <section id="example-project" className="mb-20">
          <h2 className="text-4xl font-bold text-purple-400">Example Project: AI Data Analyzer</h2>
          <p className="mt-4 text-lg text-gray-300">
            Here’s a basic example of creating an AI-powered Data Analyzer using{" "}
            <b>Next.js, TypeScript, and Tailwind CSS</b>. This simple project will
            simulate an AI agent that analyzes data from a CSV file and provides
            insights based on the analysis.
          </p>

          {/* Code Snippet */}
          
          <div className="border border-purple-800 p-6 mt-8 rounded-md">
            <h3 className="text-2xl font-semibold text-white">Installation</h3>
            <div className="relative">
              <pre className="mt-4 text-gray-200 bg-black p-4 rounded-md overflow-x-auto">
                <code>{`# Install the required packages
npm install next react react-dom tailwindcss csv-parser

# Initialize TypeScript
touch tsconfig.json

# Configure Tailwind CSS
npx tailwindcss init`}</code>
              </pre>
              <button
                onClick={() =>
                  handleCopy(
                    `# Install the required packages
npm install next react react-dom tailwindcss csv-parser

# Initialize TypeScript
touch tsconfig.json

# Configure Tailwind CSS
npx tailwindcss init`
                  )
                }
                className="absolute top-4 right-4 p-2 bg-purple-800 rounded text-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="border border-purple-800 p-6 mt-8 rounded-md">
            <h3 className="text-2xl font-semibold text-white">Example Code</h3>
            <div className="relative">
              <pre className="mt-4 text-gray-200 bg-black p-4 rounded-md overflow-x-auto">
                <code>{`import { useState, useEffect } from 'react';
import fs from 'fs';
import csvParser from 'csv-parser';

const DataAnalyzer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fs.createReadStream('data.csv')
      .pipe(csvParser())
      .on('data', (row) => {
        setData((prevData) => [...prevData, row]);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
  }, []);
  
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl text-center text-white">AI Data Analyzer</h1>
      <div className="mt-8 bg-purple-900 p-6 rounded-lg">
        <h2 className="text-2xl text-white">Data Insights:</h2>
        <ul className="mt-4 text-gray-300">
          {data.map((row, index) => (
            <li key={index} className="mb-2">
              {row.Name}: {row.Value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataAnalyzer;`}</code>
              </pre>
              <button
                onClick={() =>
                  handleCopy(
                    `import { useState, useEffect } from 'react';
import fs from 'fs';
import csvParser from 'csv-parser';

const DataAnalyzer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fs.createReadStream('data.csv')
      .pipe(csvParser())
      .on('data', (row) => {
        setData((prevData) => [...prevData, row]);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
  }, []);
  
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl text-center text-white">AI Data Analyzer</h1>
      <div className="mt-8 bg-purple-900 p-6 rounded-lg">
        <h2 className="text-2xl text-white">Data Insights:</h2>
        <ul className="mt-4 text-gray-300">
          {data.map((row, index) => (
            <li key={index} className="mb-2">
              {row.Name}: {row.Value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataAnalyzer;`
                  )
                }
                className="absolute top-4 right-4 p-2 bg-purple-800 rounded text-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocumentationPage;