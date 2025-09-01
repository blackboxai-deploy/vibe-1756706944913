"use client";

import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Social Media", "Branding", "Content Calendar"];
  
  const projects = [
    {
      id: 1,
      title: "Fashion Brand Campaign",
      category: "Social Media",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/785192dc-71d5-4d60-88a3-892bebf061df.png",
      description: "Complete social media rebrand with 50+ posts"
    },
    {
      id: 2,
      title: "Tech Startup Identity",
      category: "Branding",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91a1b11a-f35c-4b96-96f3-bf78fee64ca7.png",
      description: "Logo design and brand guidelines"
    },
    {
      id: 3,
      title: "Restaurant Content Strategy",
      category: "Content Calendar",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/471cda0a-b445-4455-b651-b79fab2a6a4e.png",
      description: "30-day content calendar with food photography"
    },
    {
      id: 4,
      title: "Fitness Influencer Posts",
      category: "Social Media",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18f8b512-5b0c-4f83-b9b7-2bcc578a2303.png",
      description: "Instagram stories and workout posts"
    },
    {
      id: 5,
      title: "E-commerce Brand Kit",
      category: "Branding",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58893549-0048-4141-a09e-059b0150b09c.png",
      description: "Complete brand identity and social templates"
    },
    {
      id: 6,
      title: "Travel Blog Content",
      category: "Content Calendar",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b35b10c-e385-42bb-9322-8c10dc401330.png",
      description: "Monthly travel content with destination guides"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Our <span className="text-green-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped brands transform their social media presence and achieve remarkable results.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.description}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-lg text-gray-900 mb-2 group-hover:text-green-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;