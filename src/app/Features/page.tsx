"use client";
import React from 'react';
import Image from 'next/image';
import robotImg from '@/assets/robo.png';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const AIPage = () => {
  const chartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'AI Agent Demand Increase',
        data: [10, 30, 50, 70, 90, 120],
        borderColor: 'rgba(128, 0, 128, 1)', // Purple color
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Fix TypeScript error
      },
      title: {
        display: true,
        text: 'Increase in AI Agent Demand Over Years',
      },
    },
  };

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Left Side: Robot GIF */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={robotImg} alt="Robot" className="w-full max-w-sm rounded-lg shadow-md" />
        </div>

        {/* Right Side: Animated Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold text-purple-700 animate-fadeIn">Welcome to the Future of AI</h1>
          <p className="mt-4 text-lg text-purple-200 animate-slideIn">
            Artificial Intelligence is transforming the world. Discover how AI agents work and their growing demand.
          </p>
        </div>
      </div>

      {/* How AI Agents Work Section */}
      {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
        {['Data Collection', 'Processing & Analysis', 'Decision Making'].map((title, index) => (
          <div key={index} 
         
          className="border border-purple-800 p-6 rounded-lg shadow-md transition hover:shadow-lg">
            <h2 className="text-xl font-semibold text-purple-200">{title}</h2>
            <p className="mt-2 text-purple-200">
              {title === 'Data Collection'
                ? 'AI agents gather data from various sources to learn and make decisions.'
                : title === 'Processing & Analysis'
                ? 'Using algorithms, AI agents process and analyze data to identify patterns.'
                : 'Based on the analysis, AI agents make informed decisions or predictions.'}
            </p>
          </div>
        ))}
      </div> */}

      {/* How AI Agents Work Section */}
<div className="grid md:grid-cols-3 gap-8 mb-12">
  {['Data Collection', 'Processing & Analysis', 'Decision Making'].map((title, index) => (
    <div
      key={index}
      className="border border-purple-800 p-6 rounded-lg shadow-md transition hover:shadow-lg hover:scale-105 transform duration-300"
    >
      {/* Emoji for each section */}
      <div className="text-4xl mb-4">
        {title === 'Data Collection' && '📊'}
        {title === 'Processing & Analysis' && '🧠'}
        {title === 'Decision Making' && '🚀'}
      </div>
      
      <h2 className="text-xl font-semibold text-purple-200">{title}</h2>
      <p className="mt-2 text-purple-200">
        {title === 'Data Collection'
          ? 'AI agents gather data from various sources to learn and make decisions. '
          : title === 'Processing & Analysis'
          ? 'Using advanced algorithms, AI agents process and analyze data to identify patterns. '
          : 'Based on the analysis, AI agents make informed decisions or predictions. '}
      </p>
    </div>
  ))}
</div>

      {/* Chart Section */}
      <div className="bg-black p-8 rounded-lg shadow-md">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          .animate-fadeIn { animation: fadeIn 2s ease-in-out; }
          .animate-slideIn { animation: slideIn 2s ease-in-out; }
        `}
      </style>
    </div>
  );
};

export default AIPage;


