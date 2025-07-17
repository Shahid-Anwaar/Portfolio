'use client'

import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology & Innovation',
    year: '2019 - 2023',
    details: 'Graduated with First Class Honours. Specialized in web development, software engineering, and user interface design. Completed thesis on "Modern Frontend Architecture Patterns".',
    icon: GraduationCap,
    color: 'text-primary-600'
  },
  {
    degree: 'Advanced Frontend Development Certification',
    institution: 'Meta Frontend Development Program',
    year: '2023',
    details: 'Comprehensive program covering React, TypeScript, modern CSS, and responsive design. Completed with distinction and received certification for advanced frontend development skills.',
    icon: Award,
    color: 'text-secondary-600'
  },
  {
    degree: 'Professional Web Development Courses',
    institution: 'Udemy, Coursera & Frontend Masters',
    year: '2022 - 2024',
    details: 'Advanced courses in JavaScript ES6+, React Hooks, TypeScript, Tailwind CSS, and modern development practices. Continuous learning to stay current with industry trends.',
    icon: BookOpen,
    color: 'text-green-600'
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in modern web technologies and frontend development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl relative">
              <div className="absolute top-4 left-4 text-primary-600 opacity-20">
                <edu.icon className="h-12 w-12" />
              </div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${edu.color}`}>
                    <edu.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">{edu.degree}</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{edu.year}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 