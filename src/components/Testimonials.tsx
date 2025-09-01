"use client";

import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Bloom Fashion Co.",
      role: "Marketing Director",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/77322e6c-81ec-425b-ad25-c58c9b160ea6.png",
      content: "FabMotif transformed our social media presence completely. Our engagement increased by 300% in just 3 months. Their designs are consistently on-brand and absolutely stunning.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "TechFlow Startup",
      role: "Founder & CEO",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2fe16a2c-5c1e-49e0-a705-1b6b16ba242a.png",
      content: "The team at FabMotif doesn't just create beautiful designs – they understand our business goals. Their content calendar strategy helped us reach 50K followers in 6 months.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Wellness Studio",
      role: "Studio Owner",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/786a28ff-f543-44f4-b360-c960e64fe595.png",
      content: "Working with FabMotif has been a game-changer. Their performance reports help us understand what works, and their designs consistently drive new clients to our studio.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Local Restaurant Chain",
      role: "Brand Manager",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efc49459-0ff5-4d75-9a61-64e645e0ad3d.png",
      content: "The consistency and quality of their work is unmatched. Every post looks professional and drives real results. Our online orders have increased by 40% since working with them.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            What Our <span className="text-green-500">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with FabMotif.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={`${testimonials[currentIndex].name} headshot`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-poppins font-bold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-green-500 font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <span className="text-gray-600 text-xl">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <span className="text-gray-600 text-xl">→</span>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-500 font-medium mb-8">
            Trusted by amazing brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-gray-400 font-medium text-sm">
                    {testimonial.company.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;