"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, GraduationCap, LineChart } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f1] to-[#fff3e8]">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-[#2e4052]">Career Resources</h1>
          <p className="text-lg text-[#435e46] text-center mb-12 font-medium">
            Comprehensive tools and guides to help you in your career journey
          </p>

          {/* Career Guides & Insights Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2E4053] flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Career Guides & Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Technology Careers</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Comprehensive guide on becoming a Software Developer
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.coursera.org/articles/software-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Healthcare & Medicine</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Step-by-step guide to becoming a Doctor
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.ama-assn.org/residents-students/preparing-medical-school/how-become-physician"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Business & Finance</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Career roadmap for Finance Professionals
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.cfainstitute.org/en/programs/cfa/career-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    View Career Map <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Top In-Demand Jobs (2025 & Beyond)</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    World Economic Forum Future Jobs Report
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.weforum.org/reports/the-future-of-jobs-report-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Read Report <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Educational & Skill Development Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2E4053] flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Educational & Skill Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Programming & AI Courses</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Python for Everybody on Coursera
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.coursera.org/specializations/python"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Finance & Business</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Harvard Business Online Courses
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://online.hbs.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Healthcare & Medical Courses</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Free & Paid Healthcare Courses on edX
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.edx.org/learn/health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Scholarships & Financial Aid</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Global Scholarships for Students
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.scholarships.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Find Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Internships & Jobs</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    LinkedIn Jobs & Internships
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.linkedin.com/jobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Search Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Career Assessment & Tools Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2E4053] flex items-center gap-2">
              <LineChart className="h-6 w-6" />
              Career Assessment & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Personality & Career Test</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    16 Personalities Test - Find your ideal career match
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.16personalities.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Take Test <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Holland Code Career Test</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Truity Career Assessment
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.truity.com/test/holland-code-career-test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Take Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Resume Builder</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    AI Resume Generator by Novoresume
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://novoresume.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Create Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Cover Letter Maker</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Professional Cover Letters by Zety
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://zety.com/cover-letter-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    Create Cover Letter <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-[#2E4053] font-bold">Salary & Job Growth Data</CardTitle>
                  <CardDescription className="text-[#3E8E41] font-medium">
                    Highest Paying Jobs on Glassdoor
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href="https://www.glassdoor.com/blog/highest-paying-jobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0097A7] hover:underline flex items-center font-semibold"
                  >
                    View Data <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 