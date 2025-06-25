"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  ChevronRight,
  Compass,
  FileText,
  Lightbulb,
  MessageSquare,
  User,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react"

export default function DashboardPage() {
  const [userName, setUserName] = useState("")
  const [testResults, setTestResults] = useState<{
    [key: string]: number
  } | null>(null)

  useEffect(() => {
    // Get user data from localStorage (set during login)
    const storedName = localStorage.getItem("studentName")
    const storedResults = localStorage.getItem("testResults")
    
    if (storedName) {
      setUserName(storedName)
    }
    if (storedResults) {
      setTestResults(JSON.parse(storedResults))
    }
  }, [])

  // Mock data for the dashboard
  const mockTestResults = [
    {
      id: 1,
      name: "Aptitude Test",
      date: new Date().toLocaleDateString(),
      completed: true,
      studentName: userName || "Student",
      topStrengths: testResults ? Object.entries(testResults)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([strength]) => strength) : ["Logical & Analytical", "Numerical", "Problem Solving"],
    },
    {
      id: 2,
      name: "Career Interest Inventory",
      date: new Date().toLocaleDateString(),
      completed: true,
      studentName: userName || "Student",
      topInterests: ["Investigative", "Social", "Artistic"],
    },
    {
      id: 3,
      name: "Personality Assessment",
      date: new Date().toLocaleDateString(),
      completed: false,
      studentName: userName || "Student",
      progress: 65,
    },
  ]

  const recommendedCareers = [
    {
      title: "Data Scientist",
      match: 92,
      description: "Analyze complex data to help organizations make better decisions",
      path: "/careers/data-scientist",
    },
    {
      title: "Research Psychologist",
      match: 88,
      description: "Study human behavior and mental processes through research",
      path: "/careers/research-psychologist",
    },
    {
      title: "UX Researcher",
      match: 85,
      description: "Study user behaviors and needs to inform product design",
      path: "/careers/ux-researcher",
    },
    {
      title: "Science Teacher",
      match: 82,
      description: "Educate students in scientific principles and methods",
      path: "/careers/science-teacher",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Career Fair",
      date: "November 15, 2023",
      time: "10:00 AM - 2:00 PM",
      description: "Connect with employers from technology, healthcare, and education sectors",
    },
    {
      id: 2,
      title: "College Application Workshop",
      date: "November 22, 2023",
      time: "4:00 PM - 5:30 PM",
      description: "Learn tips and strategies for successful college applications",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100">
      <header className="bg-white/80 backdrop-blur-sm shadow-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-slate-900">CareerCompass</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-5 w-5 mr-2 text-slate-700" />
                Messages
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="h-5 w-5 mr-2 text-slate-700" />
                Calendar
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5 text-slate-700" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-slate-900 hover:text-primary transition-colors">Welcome back, {userName || "Student"}!</h1>
              <p className="text-lg text-slate-700">Continue exploring your career journey and track your progress</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link href="/aptitude-test">
                <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-100">Take More Tests</Button>
              </Link>
              <Link href="/ai-counselor">
                <Button className="bg-primary hover:bg-primary/90">Chat with AI Counselor</Button>
              </Link>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 bg-white">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-700">Overview</TabsTrigger>
              <TabsTrigger value="assessments" className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-700">My Assessments</TabsTrigger>
              <TabsTrigger value="recommendations" className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-700">Career Matches</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-primary data-[state=active]:text-white text-slate-700">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                <Card className="bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-slate-900">Top Strengths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700">
                      {testResults ? Object.entries(testResults)
                        .sort(([, a], [, b]) => b - a)
                        .slice(0, 3)
                        .map(([strength, score]) => (
                          <li key={strength} className="flex items-center gap-2">
                            <div className="bg-primary/10 p-1.5 rounded-full">
                              <Brain className="h-4 w-4 text-primary" />
                            </div>
                            <span>{strength} ({score}/10)</span>
                          </li>
                        )) : (
                        <li className="text-slate-600">Complete the aptitude test to see your strengths</li>
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/dashboard/strengths" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Detailed Analysis
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white border border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900">Recent Activity</CardTitle>
                    <CardDescription className="text-slate-600">
                      Your latest actions and progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <BarChart3 className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Completed Aptitude Test</p>
                          <p className="text-sm text-slate-600">{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <MessageSquare className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Career Interest Inventory</p>
                          <p className="text-sm text-slate-600">{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900">Upcoming Events</CardTitle>
                    <CardDescription className="text-slate-600">
                      Important dates and activities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-full">
                            <Calendar className="h-4 w-4 text-slate-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{event.title}</p>
                            <p className="text-sm text-slate-600">{event.date} at {event.time}</p>
                            <p className="text-sm text-slate-600 mt-1">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="assessments" className="mt-6">
              <div className="grid gap-6">
                {mockTestResults.map((test) => (
                  <Card key={test.id} className="bg-white border border-slate-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-slate-900">{test.name}</CardTitle>
                          <CardDescription className="text-slate-600">
                            <div>Completed by: {test.studentName}</div>
                            <div>Completed on: {test.date}</div>
                          </CardDescription>
                        </div>
                        {test.completed ? (
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            Completed
                          </div>
                        ) : (
                          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                            In Progress
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {test.completed ? (
                        <div className="space-y-4">
                          {test.topStrengths && (
                            <div>
                              <h4 className="font-medium mb-2 text-slate-900">Top Strengths:</h4>
                              <ul className="list-disc list-inside space-y-1 text-slate-700">
                                {test.topStrengths.map((strength, index) => (
                                  <li key={index}>{strength}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {test.topInterests && (
                            <div>
                              <h4 className="font-medium mb-2 text-slate-900">Top Interests:</h4>
                              <ul className="list-disc list-inside space-y-1 text-slate-700">
                                {test.topInterests.map((interest, index) => (
                                  <li key={index}>{interest}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Progress value={test.progress} className="h-2" />
                          <p className="text-sm text-slate-600">
                            Complete the assessment to see your results
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        {test.completed ? "View Detailed Results" : "Continue Assessment"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-6">
              <div className="grid gap-6">
                {recommendedCareers.map((career, index) => (
                  <Card key={index} className="bg-white border border-slate-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-slate-900">{career.title}</CardTitle>
                          <CardDescription className="text-slate-600">{career.description}</CardDescription>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {career.match}% Match
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2 text-slate-900">Required Skills:</h4>
                          <ul className="list-disc list-inside space-y-1 text-slate-700">
                            <li>Analytical thinking</li>
                            <li>Problem-solving</li>
                            <li>Communication</li>
                            <li>Technical expertise</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2 text-slate-900">Education Path:</h4>
                          <p className="text-slate-700">
                            Bachelor's degree in related field, followed by specialized training or certifications
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="grid gap-6">
                <Card className="bg-white border border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900">Career Resources</CardTitle>
                    <CardDescription className="text-slate-600">
                      Helpful materials and guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <BookOpen className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Career Guide</p>
                          <p className="text-sm text-slate-600">
                            Comprehensive guide to choosing and pursuing your career path
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <GraduationCap className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Education Resources</p>
                          <p className="text-sm text-slate-600">
                            Information about colleges, courses, and certifications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <Briefcase className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Job Search Guide</p>
                          <p className="text-sm text-slate-600">
                            Tips and strategies for finding and applying to jobs
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

