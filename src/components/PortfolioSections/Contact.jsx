'use client'

import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm always open to discussing new opportunities, freelance work, or just connecting with fellow developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 hover:border-primary-400" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 hover:border-primary-400" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 hover:border-primary-400" 
                  placeholder="Project inquiry or collaboration"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 hover:border-primary-400 resize-none" 
                  rows={4}
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group">
                  <div className="bg-primary-100 dark:bg-primary-900/20 p-3 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-all duration-200">
                    <Mail className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">hello@yourname.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group">
                  <div className="bg-secondary-100 dark:bg-secondary-900/20 p-3 rounded-lg group-hover:bg-secondary-200 dark:group-hover:bg-secondary-900/40 transition-all duration-200">
                    <Phone className="h-6 w-6 text-secondary-600 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/40 transition-all duration-200">
                    <MapPin className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-200 group"
                >
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-200 group"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
                {/* <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:scale-110 transition-all duration-200 group"
                >
                  <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a> */}
                <a 
                  href="https://wa.me/+923076669269?text=Hi Shahid! I'd like to discuss a project with you." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all duration-200 group"
                >
                  <MessageCircle className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 