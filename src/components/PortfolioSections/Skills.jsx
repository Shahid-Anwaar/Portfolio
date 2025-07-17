'use client'

import React from 'react';
import { Code, Palette, Database, Globe, Layers, Zap, Shield, Smartphone, Cpu } from 'lucide-react';

const skills = [
  {
    icon: Globe,
    title: 'HTML5',
    description: 'Semantic markup, accessibility standards, and modern HTML5 features for creating well-structured web applications.',
    color: 'text-orange-600'
  },
  {
    icon: Palette,
    title: 'CSS3',
    description: 'Advanced CSS techniques including Flexbox, Grid, animations, and responsive design principles for modern layouts.',
    color: 'text-blue-600'
  },
  {
    icon: Code,
    title: 'JavaScript (ES6+)',
    description: 'Modern JavaScript features, async programming, DOM manipulation, and functional programming concepts.',
    color: 'text-yellow-600'
  },
  {
    icon: Layers,
    title: 'Bootstrap 5',
    description: 'Rapid prototyping with Bootstrap components, custom theming, and responsive grid system implementation.',
    color: 'text-purple-600'
  },
  {
    icon: Palette,
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development, custom design systems, and responsive layouts.',
    color: 'text-cyan-600'
  },
  {
    icon: Cpu,
    title: 'React.js',
    description: 'Component-based architecture, hooks, state management, and modern React development patterns.',
    color: 'text-blue-600'
  },
  {
    icon: Smartphone,
    title: 'Material UI',
    description: 'Google Material Design components, theming, and responsive design for consistent user interfaces.',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'TypeScript',
    description: 'Static typing, enhanced developer experience, and type-safe development for large-scale applications.',
    color: 'text-blue-600'
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'RESTful APIs, GraphQL, authentication, and third-party service integrations for dynamic applications.',
    color: 'text-green-600'
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in modern frontend technologies with hands-on experience in building scalable, responsive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${skill.color}`}>
                  <skill.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 