import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    title: "TechStart Social Media Campaign",
    category: "Social Media Design",
    description: "Complete social media design package including feed posts, stories, and reels for a tech startup",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02b843f2-0470-4428-bf2e-24920968442c.png",
    tags: ["Instagram", "Reels", "Stories", "Tech"],
    results: "+285% Engagement"
  },
  {
    id: 2,
    title: "Fashion Brand Content Calendar",
    category: "Content Strategy",
    description: "30-day content calendar with cohesive design system for luxury fashion brand",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44e1811f-6abe-4210-b550-fd60a1ce99f1.png",
    tags: ["Fashion", "Luxury", "Content", "Strategy"],
    results: "+150% Reach"
  },
  {
    id: 3,
    title: "Restaurant Social Media Makeover",
    category: "Brand Identity",
    description: "Full social media redesign with food photography direction and brand guidelines",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de1fed41-d22a-48c8-af09-ad02e07753dd.png",
    tags: ["Food", "Restaurant", "Photography", "Branding"],
    results: "+320% Followers"
  },
  {
    id: 4,
    title: "Fitness Influencer Reels Package",
    category: "Video Content",
    description: "Dynamic reel templates and motion graphics for fitness content creator",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2d228d8-2314-4b78-ac4a-465c023929d2.png",
    tags: ["Fitness", "Reels", "Motion", "Influencer"],
    results: "+500% Views"
  },
  {
    id: 5,
    title: "E-commerce Product Showcase",
    category: "Product Design",
    description: "Product catalog designs and promotional posts for online retail brand",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec6a62f1-67e2-4e6f-866f-061372e69e34.png",
    tags: ["E-commerce", "Products", "Retail", "Sales"],
    results: "+200% Sales"
  },
  {
    id: 6,
    title: "Non-Profit Awareness Campaign",
    category: "Campaign Design",
    description: "Social impact campaign with infographics and awareness posts",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/228d8ecb-120a-4732-9a2a-aed2e5f64b71.png",
    tags: ["Non-Profit", "Awareness", "Impact", "Community"],
    results: "+400% Donations"
  }
];

const categories = ["All", "Social Media Design", "Content Strategy", "Brand Identity", "Video Content", "Product Design", "Campaign Design"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Our <span className="text-green-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we&apos;ve helped brands across industries achieve remarkable results through strategic social media design and content creation.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-green-500 hover:bg-green-600" : "border-gray-300 hover:border-green-500 hover:text-green-500"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/2] mb-6">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="bg-white/90 hover:bg-white text-gray-900">
                          View Project
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                      {item.category}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {item.results}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-poppins font-semibold text-xl text-gray-900 group-hover:text-green-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-lg text-gray-600">
                Our portfolio speaks for itself with measurable success metrics
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-green-500 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-green-500 mb-2">250%</div>
                <div className="text-gray-600 font-medium">Avg. Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-green-500 mb-2">150+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-green-500 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our portfolio of successful brands and see the FabMotif difference in your social media performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-gray-400 px-8 py-4">
                Download Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}