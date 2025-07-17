"use client"

import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

export default function ApiShowcase() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/octocat/repos') // Replace 'octocat' with your GitHub username
      .then(res => res.json())
      .then(data => {
        setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source Contributions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Active participation in the developer community through open source projects and code contributions.
          </p>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Loading repositories...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map(repo => (
              <div key={repo.id} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-primary-600">
                    <Github className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4 truncate">
                    {repo.name}
                  </h3>
                </div>
                
                {repo.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Star className="h-4 w-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <GitBranch className="h-4 w-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  {repo.language && (
                    <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-200 px-2 py-1 rounded text-xs font-semibold">
                      {repo.language}
                    </span>
                  )}
                </div>

                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Repository
                </a>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            <Github className="h-5 w-5" />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
} 