"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Brain, Compass, GraduationCap, Lightbulb, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f1] to-[#fff3e8]">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold mb-6">About CareerCompass</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Choosing the right career is one of the most important decisions in life, and we are here to make it easier for you. 
              Our AI-powered career counseling platform helps students discover the best career paths based on their skills, 
              interests, and aptitude. Whether you're interested in technology, medicine, business, or creative fields, 
              our platform provides personalized guidance to help you succeed.
            </p>
          </section>

          {/* Mission & Vision Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                  <CardDescription>
                    To empower students with AI-driven career guidance, helping them make informed decisions for a successful future.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                  <CardDescription>
                    To be the most trusted online platform for career counseling, making career exploration simple, accessible, and data-driven.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>1. Take an Aptitude Test</CardTitle>
                  <CardDescription>
                    Answer a set of questions to assess your skills and interests.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>2. Get AI-Based Recommendations</CardTitle>
                  <CardDescription>
                    Our system analyzes your responses to suggest the best career options.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>3. Explore Career Paths</CardTitle>
                  <CardDescription>
                    Learn about different career opportunities, required skills, and educational paths.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>4. Plan Your Future</CardTitle>
                  <CardDescription>
                    Get insights on college programs, job trends, and career growth opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Insights</CardTitle>
                  <CardDescription>
                    Our recommendations are based on real data and research.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personalized Career Guidance</CardTitle>
                  <CardDescription>
                    Every student is unique, and our platform gives tailored advice.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Career Database</CardTitle>
                  <CardDescription>
                    Explore career options from technology to healthcare, business, and more.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Easy & Free to Use</CardTitle>
                  <CardDescription>
                    Get career advice in just a few clicks!
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Meet Our Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-slate-600">
                  Our platform is developed by a team of educators, engineers, and career experts passionate about helping students achieve their dreams.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">📧 Email:</span>
                    <a href="mailto:support@careercompass.com" className="text-primary hover:underline">
                      support@careercompass.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">📞 Phone:</span>
                    <span>+123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">🌐 Follow Us:</span>
                    <div className="flex gap-4">
                      <a href="#" className="text-primary hover:underline">Facebook</a>
                      <a href="#" className="text-primary hover:underline">Instagram</a>
                      <a href="#" className="text-primary hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>


        </div>
      </main>
    </div>
  )
} 