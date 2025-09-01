"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const services = [
  "Social Media Design",
  "Content Calendar",
  "Performance Reports",
  "Brand Identity",
  "Website Design",
  "Video Content"
];

const contactInfo = [
  {
    title: "Email Us",
    details: "hello@fabmotif.com",
    description: "Send us an email anytime"
  },
  {
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 9AM to 6PM"
  },
  {
    title: "Visit Us",
    details: "123 Creative Street, Design District, NY 10001",
    description: "Schedule an in-person meeting"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Let&apos;s Create Something <span className="text-green-500">Amazing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your social media presence? Get in touch with our team to discuss your project and receive a custom proposal.
            </p>
          </div>
        </section>

        <div className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-poppins text-2xl">Get Your Free Consultation</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Service Interest</Label>
                          <Select onValueChange={(value) => handleChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Project Budget</Label>
                          <Select onValueChange={(value) => handleChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-1k">Under $1,000</SelectItem>
                              <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-plus">$10,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-green-500 font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Office Image */}
                <Card className="overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e57ef39-ef6d-4605-9b45-5f636c27bcbc.png"
                    alt="FabMotif office space with creative team collaboration area"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                      Visit Our Creative Studio
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Drop by our design studio to meet the team and see our creative process in action. We&apos;d love to show you around!
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Quick Links */}
                <Card className="p-6 bg-green-50 border-green-200">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                    Quick Questions?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-gray-900">Response Time:</strong>
                      <span className="text-gray-600 ml-2">Within 24 hours</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Project Timeline:</strong>
                      <span className="text-gray-600 ml-2">2-4 weeks typical</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Free Consultation:</strong>
                      <span className="text-gray-600 ml-2">Always included</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Revisions:</strong>
                      <span className="text-gray-600 ml-2">Unlimited until satisfied</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join 150+ satisfied clients who have transformed their social media presence with FabMotif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-gray-400 px-8 py-4">
                View Our Work
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}