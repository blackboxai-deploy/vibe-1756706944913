"use client";

import React from "react";

const About = () => {
  const values = [
    {
      title: "On-time Delivery",
      description: "We respect deadlines and deliver quality work when promised.",
      icon: "⏰"
    },
    {
      title: "Brand Consistency",
      description: "Every design maintains your brand identity across all platforms.",
      icon: "🎨"
    },
    {
      title: "Performance Tracking",
      description: "Data-driven insights to measure and improve your social media ROI.",
      icon: "📈"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", color: "text-green-500" },
    { number: "150+", label: "Happy Clients", color: "text-blue-500" },
    { number: "98%", label: "Client Satisfaction", color: "text-purple-500" },
    { number: "24/7", label: "Support Available", color: "text-orange-500" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              Who We Are at <span className="text-green-500">FabMotif</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a passionate team of designers, strategists, and social media experts dedicated to helping brands shine in the digital world. With years of experience in creating compelling visual content, we understand what it takes to capture attention and drive engagement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: to transform your social media presence through strategic design, consistent branding, and data-driven insights that deliver real results for your business.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11b149b1-2301-444c-b2ee-c53c7e391977.png"
                alt="Creative team working together in modern design studio workspace"
                className="w-full h-full object-cover"
              />
              {/* Overlay with team info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-poppins font-bold text-xl mb-2">Our Creative Team</h4>
                  <p className="text-sm opacity-90">Passionate designers crafting your success</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-500 font-bold text-xl">5★</span>
                </div>
                <div>
                  <div className="font-poppins font-bold text-lg text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              Why Choose FabMotif?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results through our core values and proven approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h4 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              Our Track Record
            </h3>
            <p className="text-lg text-gray-600">
              Numbers that speak to our commitment and success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`font-poppins font-bold text-3xl sm:text-4xl ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;