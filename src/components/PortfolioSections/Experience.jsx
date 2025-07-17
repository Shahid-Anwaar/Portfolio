'use client'

import React from 'react';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Solutions Inc.',
    period: '2023 - Present',
    location: 'Remote',
    details: 'Lead frontend development for enterprise applications serving 100K+ users. Mentored 5 junior developers, implemented CI/CD pipelines, and reduced page load times by 40%. Technologies: React, TypeScript, Tailwind CSS, and Material UI.',
    icon: Briefcase,
    color: 'text-primary-600'
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Innovations Studio',
    period: '2022 - 2023',
    location: 'San Francisco, CA',
    details: 'Developed responsive web applications and e-commerce platforms using modern JavaScript frameworks. Collaborated with UX/UI designers to implement pixel-perfect designs. Achieved 95% client satisfaction rate.',
    icon: Building,
    color: 'text-secondary-600'
  },
  {
    role: 'Web Developer Intern',
    company: 'StartupHub Technologies',
    period: '2021 - 2022',
    location: 'New York, NY',
    details: 'Assisted in building responsive websites and learned modern development practices. Contributed to 3 major projects, implemented accessibility features, and optimized performance for mobile devices.',
    icon: Calendar,
    color: 'text-green-600'
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proven track record of delivering high-quality frontend solutions and driving technical excellence across diverse projects.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl relative">
              <div className="absolute top-4 left-4 text-primary-600 opacity-20">
                <exp.icon className="h-12 w-12" />
              </div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${exp.color}`}>
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">{exp.role}</h3>
                </div>
                
                <div className="flex items-center gap-4 mb-3">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 