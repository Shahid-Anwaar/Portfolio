'use client'

import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const aboutItems = [
  {
    icon: User,
    title: 'Who I Am',
    description: 'A passionate frontend developer with 3+ years of experience crafting beautiful, responsive, and accessible web applications. I specialize in modern JavaScript frameworks and cutting-edge web technologies.',
    color: 'text-primary-600'
  },
  {
    icon: Target,
    title: 'What I Do',
    description: 'I build exceptional user experiences using React, TypeScript, Tailwind CSS, and Material UI. From concept to deployment, I create scalable solutions that drive business growth and user engagement.',
    color: 'text-secondary-600'
  },
  {
    icon: Heart,
    title: 'What I Love',
    description: 'Clean, maintainable code, pixel-perfect designs, and creating intuitive user interfaces that users love to interact with. I believe in writing code that not only works but also inspires.',
    color: 'text-green-600'
  }
];

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated frontend developer passionate about creating exceptional digital experiences and pushing the boundaries of web technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 