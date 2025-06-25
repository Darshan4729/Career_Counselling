import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Code,
  FlaskRoundIcon as Flask,
  GraduationCap,
  Heart,
  Search,
  Users,
  ArrowRight as ArrowRightIcon,
  Leaf,
  Camera,
  Shield,
  ChartBar,
  Paintbrush,
  CloudIcon as Cloud,
  Bot as Robot,
  Cross as MedicalCross
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#4B3621]">Career Explorer</h1>
          <p className="text-lg text-center mb-12 text-[#4B3621] max-w-2xl mx-auto">
            Discover and learn about different career paths and opportunities
          </p>



          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Trending Careers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Product Manager */}
              <Link href="/careers/ai-product-manager" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">🌐 AI Product Manager</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Drive innovation at the intersection of technology and business.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Strategic Product Planning</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">AI/ML Technologies</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Stakeholder Alignment</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Technical Roadmapping</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's or Master's in Computer Science, Business, or related field
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $120,000 - $150,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 45% growth projected over the next decade
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/ai-product-manager" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Learn more about becoming an AI Product Manager
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* Sustainability Consultant */}
              <Link href="/careers/sustainability-consultant" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">🌱 Sustainability Consultant</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Make an impact by guiding businesses toward a greener future.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Environmental Regulations</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Data-Driven Strategy</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Sustainable Design</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Project Leadership</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's in Environmental Science, Sustainability, or a related field
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $65,000 - $95,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 30% growth expected over 10 years
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/sustainability-consultant" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Explore the role of a Sustainability Consultant
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* Cybersecurity Analyst */}
              <Link href="/careers/cybersecurity-analyst" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">🛡️ Cybersecurity Analyst</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Guard digital frontiers and prevent cyber threats.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Threat Detection & Response</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Risk Management</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Network Security</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Security Auditing</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's in Cybersecurity, IT, or related field
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $90,000 - $130,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 35% growth—well above average
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/cybersecurity-analyst" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        How to launch a career in Cybersecurity
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* Data Scientist */}
              <Link href="/careers/data-scientist" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <ChartBar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">📊 Data Scientist</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Turn data into powerful business insights.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Machine Learning</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Statistical Analysis</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Data Wrangling (Python, R)</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Visualization Tools (Tableau, Power BI)</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's or Master's in Data Science, Math, or related field
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $110,000 - $145,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 36% growth expected in the next decade
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/data-scientist" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Start your journey as a Data Scientist
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* Cloud Solutions Architect */}
              <Link href="/careers/cloud-architect" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Cloud className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">☁️ Cloud Solutions Architect</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Build the backbone of the modern digital world.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">AWS, Azure, Google Cloud</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">DevOps Tools</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Infrastructure as Code</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Cloud Security</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's in Computer Science, Engineering, or related field
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $130,000 - $160,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 38% projected job growth
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/cloud-architect" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Learn how to become a Cloud Architect
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* UX/UI Designer */}
              <Link href="/careers/ux-ui-designer" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Paintbrush className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">🎨 UX/UI Designer</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Craft digital experiences that users love.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Design Thinking</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Wireframes & Prototypes</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Tools like Figma & Adobe XD</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">User Research</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's in Design, HCI, or related field
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $75,000 - $110,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 27% growth anticipated
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/ux-ui-designer" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Discover the world of UX/UI Design
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* Robotics Engineer */}
              <Link href="/careers/robotics-engineer" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Robot className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">🤖 Robotics Engineer</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Bring machines to life through smart automation.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Mechatronics</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Embedded Programming</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Control Systems</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">AI Integration</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's or Master's in Robotics, Mechanical, or Electrical Engineering
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $85,000 - $125,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 40% job growth forecast
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/robotics-engineer" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Explore careers in Robotics Engineering
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>

              {/* Digital Health Specialist */}
              <Link href="/careers/digital-health" className="block">
                <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <MedicalCross className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl">🏥 Digital Health Specialist</CardTitle>
                        <CardDescription className="text-gray-700 mt-2">
                          Shape the future of healthcare with technology.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Health Informatics</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Telemedicine Platforms</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Compliance (HIPAA)</span>
                          <span className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">Healthcare Analytics</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
                        <p className="text-sm text-gray-700">
                          Bachelor's or Master's in Health Tech, Public Health, or Informatics
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
                        <p className="text-sm text-gray-700">💰 $80,000 - $115,000/year</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
                        <p className="text-sm text-gray-700">
                          📈 28% growth expected
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/careers/digital-health" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Learn about Digital Health Careers
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
