import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Social Media Designs",
    description: "Professional graphics for all your social media platforms",
    features: [
      "Instagram Reels Design",
      "Carousel Post Design",
      "Story Templates",
      "Feed Consistency",
      "Brand Guidelines",
      "Platform Optimization"
    ],
    price: "Starting at $299/month",
    popular: false
  },
  {
    title: "Content Calendar",
    description: "Strategic content planning and scheduling for maximum engagement",
    features: [
      "30-Day Content Strategy",
      "Post Scheduling",
      "Hashtag Research",
      "Trend Analysis",
      "Content Themes",
      "Publishing Calendar"
    ],
    price: "Starting at $199/month",
    popular: true
  },
  {
    title: "Performance Reports",
    description: "Detailed analytics and insights to track your social media growth",
    features: [
      "Monthly Analytics Report",
      "Engagement Metrics",
      "Follower Growth Tracking",
      "ROI Analysis",
      "Competitor Analysis",
      "Strategy Recommendations"
    ],
    price: "Starting at $149/month",
    popular: false
  }
];

const additionalServices = [
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, colors, and typography",
    price: "Starting at $599"
  },
  {
    title: "Website Design",
    description: "Modern, responsive websites that convert visitors into customers",
    price: "Starting at $1,299"
  },
  {
    title: "Video Content Creation",
    description: "Professional video content for social media and marketing campaigns",
    price: "Starting at $399"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Our <span className="text-green-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media design solutions to elevate your brand presence and drive meaningful engagement across all platforms.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`relative h-full ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-6 bg-green-500 hover:bg-green-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-green-500 mt-4">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${service.popular ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600">
                Expand your brand presence with our comprehensive design solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="font-poppins text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-green-500 mb-4">
                      {service.price}
                    </div>
                    <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s create a custom package that perfectly fits your brand&apos;s needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-gray-400 px-8 py-4">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}