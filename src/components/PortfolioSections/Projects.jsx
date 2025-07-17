'use client'

import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    name: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations. Features include product management, order tracking, analytics, and customer insights. Built with TypeScript for type safety and Bootstrap for responsive design.',
    tech: ['TypeScript', 'Bootstrap 5', 'REST API', 'React.js', 'Chart.js'],
    github: 'https://github.com/yourusername/ecommerce-dashboard',
    demo: 'https://your-ecommerce-demo.com',
    color: 'text-blue-600'
  },
  {
    name: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing frontend development skills. Features dark mode, smooth animations, and optimized performance. Built with React and Tailwind CSS for a clean, professional design.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio-demo.com',
    color: 'text-purple-600'
  },
  {
    name: 'Task Management App',
    description: 'A full-featured task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Integrated with Material UI for consistent design patterns.',
    tech: ['React.js', 'Material UI', 'Firebase', 'TypeScript', 'Redux'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://your-task-manager-demo.com',
    color: 'text-green-600'
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase of my recent work demonstrating expertise in modern web technologies and user experience design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${project.color}`}>
                  <ExternalLink className="h-6 w-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-200 px-3 py-1 rounded-full text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm"
                >
                  <Eye className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 