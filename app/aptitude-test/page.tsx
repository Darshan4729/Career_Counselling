"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Brain, Calculator, Lightbulb, MessageSquare, Target } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "What is the missing number in the series? 3, 6, 11, 18, 27, __",
    options: ["34", "36", "38", "40"],
    correct: 1,
    explanation: "Pattern: +3, +5, +7, +9, +11",
    category: ["Logical & Analytical", "Numerical"]
  },
  {
    id: 2,
    question: "A man walks 5 km north, then 3 km east, and then 2 km south. How far is he from the starting point?",
    options: ["4 km", "5 km", "6 km", "7 km"],
    correct: 1,
    explanation: "Using Pythagoras' theorem",
    category: ["Logical & Analytical", "Problem Solving"]
  },
  {
    id: 3,
    question: "If the price of a pen increases by 20%, how much will a ₹50 pen cost?",
    options: ["₹55", "₹58", "₹60", "₹62"],
    correct: 2,
    explanation: "50 + 20% of 50 = 50 + 10 = 60",
    category: ["Numerical"]
  },
  {
    id: 4,
    question: "Rearrange the letters 'OIGLBA' to form a meaningful word.",
    options: ["GLOBAL", "OBLIGE", "BIOLOG", "BAILOG"],
    correct: 0,
    explanation: "GLOBAL is the correct arrangement",
    category: ["Pattern Recognition", "Verbal"]
  },
  {
    id: 5,
    question: "If 3A = 2B and 5B = 4C, what is A:C?",
    options: ["15:8", "8:15", "5:12", "12:5"],
    correct: 0,
    explanation: "Solving the ratio equations",
    category: ["Logical & Analytical", "Numerical"]
  },
  {
    id: 6,
    question: "What is the next number in the pattern? 144, 121, 100, 81, __",
    options: ["63", "64", "56", "49"],
    correct: 3,
    explanation: "Pattern: Squares of decreasing numbers 12², 11², 10², 9², 8², so next is 7² = 49",
    category: ["Pattern Recognition", "Numerical"]
  },
  {
    id: 7,
    question: "A shopkeeper sells a ₹200 item at a 15% discount. What is the final price?",
    options: ["₹160", "₹170", "₹175", "₹180"],
    correct: 1,
    explanation: "200 - 15% of 200 = 200 - 30 = 170",
    category: ["Numerical", "Problem Solving"]
  },
  {
    id: 8,
    question: "Which word does NOT belong in the group?",
    options: ["Rose", "Lotus", "Tulip", "Mango"],
    correct: 3,
    explanation: "Others are flowers, Mango is a fruit",
    category: ["Pattern Recognition", "Verbal"]
  },
  {
    id: 9,
    question: "If TODAY is coded as 'VQFCB', how is NIGHT coded?",
    options: ["PKIJV", "PJIKV", "PIJHV", "PJIHV"],
    correct: 3,
    explanation: "Each letter shifts forward by 2 places in the alphabet",
    category: ["Pattern Recognition", "Verbal"]
  },
  {
    id: 10,
    question: "A car travels at 60 km/h for 2.5 hours. How far does it travel?",
    options: ["120 km", "140 km", "150 km", "160 km"],
    correct: 2,
    explanation: "Distance = Speed × Time = 60 × 2.5 = 150 km",
    category: ["Numerical", "Problem Solving"]
  }
]

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

export default function AptitudeTest() {
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [name, setName] = useState("")
  const [showTest, setShowTest] = useState(false)
  const router = useRouter()

  const handleStartTest = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setShowTest(true)
    }
  }

  const handleAnswer = (questionIndex: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = parseInt(value)
    setAnswers(newAnswers)
  }

  const calculateResults = () => {
    const results = {
      "Logical & Analytical": 0,
      "Numerical": 0,
      "Pattern Recognition": 0,
      "Verbal": 0,
      "Problem Solving": 0
    }

    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        questions[index].category.forEach(category => {
          results[category as keyof typeof results]++
        })
      }
    })

    return results
  }

  const handleSubmit = () => {
    if (answers.length === questions.length) {
      setShowResults(true)
    }
  }

  if (!showTest) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Welcome to the Aptitude Test</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleStartTest} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Start Test
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const results = calculateResults()
    const topStrengths = Object.entries(results)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)

    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-center mb-4">Your Aptitude Test Results</CardTitle>
            <p className="text-center text-gray-600">Name: {name}</p>
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
                    <p className="text-gray-600 mb-4">Score: {score} out of {questions.length}</p>
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

              <div className="flex justify-center mt-8">
                <Button 
                  onClick={() => router.push("/dashboard")} 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Detailed Analysis
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">Aptitude Test</CardTitle>
          <p className="text-center text-gray-600">Name: {name}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {questions.map((q, index) => (
              <div key={q.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4">
                  Question {index + 1}: {q.question}
                </h3>
                <RadioGroup
                  value={answers[index]?.toString()}
                  onValueChange={(value) => handleAnswer(index, value)}
                  className="space-y-2"
                >
                  {q.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={optionIndex.toString()} id={`q${q.id}-${optionIndex}`} />
                      <Label htmlFor={`q${q.id}-${optionIndex}`} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={answers.length !== questions.length}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Test
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

