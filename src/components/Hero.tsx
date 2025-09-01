"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Boost Your Brand with{" "}
                <span className="text-green-500">Social Media Design</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Premium graphics, content calendars & performance reports that drive engagement and grow your audience.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Phone Status Bar */}
                  <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-xs font-medium text-gray-800">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Instagram-like Interface */}
                  <div className="bg-white">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                        <span className="font-medium text-sm">fabmotif_agency</span>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
                      </div>
                    </div>

                    {/* Post Image */}
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/344510c8-04ff-45dd-92d7-81ed46e0cbf0.png" 
                        alt="Professional brand design social media post with modern typography and green accents"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Post Actions */}
                    <div className="px-4 py-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-4">
                          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="font-semibold text-sm">2,847 likes</div>
                        <div className="text-sm">
                          <span className="font-medium">fabmotif_agency</span> Fresh brand identity design for our amazing client! ✨ #BrandDesign #SocialMedia
                        </div>
                        <div className="text-gray-500 text-sm">View all 47 comments</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;