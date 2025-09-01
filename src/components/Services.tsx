"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Social Media Designs",
      description: "Eye-catching Reels, Carousels, and Stories that capture attention and drive engagement.",
      features: ["Instagram Posts", "Story Templates", "Reel Covers", "Carousel Designs"],
      icon: "📱"
    },
    {
      title: "Content Calendar",
      description: "Strategic content planning with consistent posting schedules to maximize reach.",
      features: ["Monthly Planning", "Content Strategy", "Posting Schedule", "Brand Consistency"],
      icon: "📅"
    },
    {
      title: "Performance Reports",
      description: "Detailed analytics and insights to track growth and optimize your social media strategy.",
      features: ["Monthly Analytics", "Growth Tracking", "Engagement Metrics", "Strategy Insights"],
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Our <span className="text-green-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to elevate your social media presence and build a stronger brand identity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-white border-0 shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3 group-hover:text-green-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-600 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a 
                    href="#" 
                    className="text-green-500 font-medium hover:text-green-600 transition-colors duration-200 inline-flex items-center group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    Learn More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
              Ready to Transform Your Social Media?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and create a custom strategy that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Get Free Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;