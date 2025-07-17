'use client'

import React from 'react';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Frontend Developer & UI Specialist{' '}
              <span className="text-primary-600 dark:text-primary-400">Creating</span>{' '}
              <span className="text-secondary-500 dark:text-secondary-400">Beautiful Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Expert in React, TypeScript, Tailwind CSS, and modern web technologies — building responsive, accessible, and performant applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 font-semibold text-lg">
                Download Resume
              </button>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Code className="h-5 w-5 text-primary-600" />
                <span className="font-medium">React & TypeScript</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Palette className="h-5 w-5 text-secondary-500" />
                <span className="font-medium">Tailwind & Material UI</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="font-medium">API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 