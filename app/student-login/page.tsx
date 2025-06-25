"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Brain, Calculator, Lightbulb, MessageSquare, Target } from "lucide-react"

const careerSuggestions = {
  "Logical & Analytical": {
    description: "Strong in Logical & Analytical Thinking",
    icon: Brain,
    careers: [
      "Engineering (Computer, Mechanical, Electrical)",
      "Software Development & AI",
      "Data Science & Analytics",
      "Finance & Investment Banking",
      "Cybersecurity"
    ]
  },
  "Numerical": {
    description: "Strong in Numerical & Mathematical Skills",
    icon: Calculator,
    careers: [
      "Chartered Accountant (CA)",
      "Financial Analyst",
      "Economist",
      "Statistician",
      "Engineering (Civil, Mechanical, Electrical)"
    ]
  },
  "Pattern Recognition": {
    description: "Strong in Pattern Recognition & Creativity",
    icon: Lightbulb,
    careers: [
      "Graphic Design & UI/UX",
      "Architecture & Interior Design",
      "Game Development",
      "Animation & Multimedia",
      "Psychology & Human Behavior Analysis"
    ]
  },
  "Verbal": {
    description: "Strong in Verbal & Language Skills",
    icon: MessageSquare,
    careers: [
      "Journalism & Mass Communication",
      "Law",
      "Public Relations & Marketing",
      "Content Writing & Copywriting",
      "Teaching & Academia"
    ]
  },
  "Problem Solving": {
    description: "Strong in Problem-Solving & Decision-Making",
    icon: Target,
    careers: [
      "Medicine & Healthcare",
      "Business Management & Consulting",
      "Military & Law Enforcement",
      "Entrepreneurship",
      "Criminology & Investigation"
    ]
  }
}

export default function StudentLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [studentName, setStudentName] = useState("")
  const [testResults, setTestResults] = useState<{
    [key: string]: number
  } | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual login logic with backend
    // For now, we'll simulate a successful login
    setIsLoggedIn(true)
    setStudentName("John Doe") // This would come from the backend
    // Simulated test results
    setTestResults({
      "Logical & Analytical": 8,
      "Numerical": 7,
      "Pattern Recognition": 6,
      "Verbal": 5,
      "Problem Solving": 7
    })
  }

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (testResults) {
    const topStrengths = Object.entries(testResults)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)

    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-center mb-4">Your Aptitude Test Results</CardTitle>
            <p className="text-center text-gray-600">Welcome back, {studentName}!</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Your Top Strengths</h3>
                <p className="text-gray-600">Based on your performance, here are your strongest areas:</p>
              </div>

              {topStrengths.map(([strength, score], index) => {
                const Icon = careerSuggestions[strength as keyof typeof careerSuggestions].icon
                return (
                  <div 
                    key={strength} 
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">
                        {index + 1}. {careerSuggestions[strength as keyof typeof careerSuggestions].description}
                      </h4>
                    </div>
                    <p className="text-gray-600 mb-4">Score: {score} out of 10</p>
                    <div className="space-y-2">
                      <p className="font-medium">Suggested Career Paths:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {careerSuggestions[strength as keyof typeof careerSuggestions].careers.map((career) => (
                          <li key={career} className="text-gray-600 hover:text-primary transition-colors duration-200">
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}

              <div className="flex justify-center gap-4 mt-8">
                <Button 
                  onClick={() => router.push("/dashboard")} 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Detailed Analysis
                </Button>
                <Button 
                  onClick={() => setIsLoggedIn(false)} 
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Logout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
} 