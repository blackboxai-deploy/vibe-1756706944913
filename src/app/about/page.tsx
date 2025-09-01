import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    description: "Leading creative vision with 8+ years in brand design and social media strategy.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ff59635-d36a-4803-acd7-200a87d4e0a5.png"
  },
  {
    name: "Mike Chen",
    role: "Senior Designer",
    description: "Specializing in motion graphics and video content creation for social platforms.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58b114d6-fbbc-4384-b2d8-842737656c99.png"
  },
  {
    name: "Emma Rodriguez",
    role: "Content Strategist",
    description: "Expert in social media analytics and content planning for maximum engagement.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f62431f-b396-4eff-aa03-6a3183db0e04.png"
  },
  {
    name: "Alex Thompson",
    role: "Brand Consultant",
    description: "Helping brands find their unique voice and visual identity across all platforms.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3584d609-3f0d-4c35-98a9-7a20e56b9a7e.png"
  }
];

const values = [
  {
    title: "On-time Delivery",
    description: "We respect your deadlines and deliver projects when promised, every time.",
    icon: "⏰"
  },
  {
    title: "Brand Consistency",
    description: "Every design maintains your brand identity while standing out in the social feed.",
    icon: "🎯"
  },
  {
    title: "Performance Tracking",
    description: "Data-driven approach with detailed analytics to measure and improve results.",
    icon: "📈"
  },
  {
    title: "Creative Excellence",
    description: "Award-winning designs that capture attention and drive meaningful engagement.",
    icon: "✨"
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "150+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
                  About <span className="text-green-500">FabMotif</span>
                </h1>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    FabMotif is a premium creative agency specializing in social media design and brand development. Founded in 2019, we&apos;ve helped over 150 brands transform their digital presence and achieve remarkable growth.
                  </p>
                  <p>
                    Our team of passionate designers, strategists, and analysts work together to create visually stunning content that not only looks amazing but delivers measurable results for your business.
                  </p>
                  <p>
                    We believe that great design is more than just aesthetics—it&apos;s about creating meaningful connections between brands and their audiences through strategic visual storytelling.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46c35906-82b4-44bd-898c-34f51f8e52db.png"
                  alt="FabMotif creative team working in modern design studio"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Why Choose FabMotif?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our core values drive everything we do, ensuring exceptional results for every client
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Meet Our Creative Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Talented professionals dedicated to bringing your brand vision to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/20 transition-all duration-300"></div>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-green-500 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
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
                Our Impact by Numbers
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-poppins font-bold text-3xl lg:text-4xl text-green-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To empower brands with visually compelling social media content that drives engagement, builds communities, and generates measurable business results. We&apos;re not just designers—we&apos;re your strategic partners in digital success.
            </p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
              Work With Our Team
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}