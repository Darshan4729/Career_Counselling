import {
  Shield,
  ChartBar,
  Building2,
  Paintbrush,
  GraduationCap,
  Heart,
  Link
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const careerProfiles = [
  {
    title: "Cybersecurity Analyst",
    icon: Shield,
    emoji: "🔒",
    description: "Protect digital assets and defend against cyber threats.",
    skills: ["Threat Analysis", "Security Protocols", "Incident Response", "Risk Assessment"],
    education: "Bachelor's in Computer Science, Information Security, or related field",
    salary: "💰 $85,000 - $120,000/year",
    outlook: "📈 35% growth projected over the next decade",
    link: "/careers/cybersecurity-analyst"
  },
  {
    title: "Data Scientist",
    icon: ChartBar,
    emoji: "📊",
    description: "Transform data into actionable insights and drive business decisions.",
    skills: ["Machine Learning", "Statistical Analysis", "Python/R Programming", "Data Visualization"],
    education: "Bachelor's or Master's in Data Science, Statistics, or related field",
    salary: "💰 $110,000 - $140,000/year",
    outlook: "📈 40% growth projected over the next decade",
    link: "/careers/data-scientist"
  },
  {
    title: "Cloud Solutions Architect",
    icon: Building2,
    emoji: "☁️",
    description: "Design and optimize cloud infrastructure for scalable applications.",
    skills: ["AWS/GCP/Azure", "Infrastructure Design", "DevOps Practices", "Cost Optimization"],
    education: "Bachelor's in Computer Science, IT, or related field",
    salary: "💰 $130,000 - $160,000/year",
    outlook: "📈 45% growth projected over the next decade",
    link: "/careers/cloud-solutions-architect"
  },
  {
    title: "UX/UI Designer",
    icon: Paintbrush,
    emoji: "🎨",
    description: "Create intuitive and engaging digital experiences.",
    skills: ["Wireframing", "User Research", "Prototyping", "Visual Design"],
    education: "Bachelor's in Design, Computer Science, or related field",
    salary: "💰 $80,000 - $110,000/year",
    outlook: "📈 30% growth projected over the next decade",
    link: "/careers/ux-ui-designer"
  },
  {
    title: "Robotics Engineer",
    icon: GraduationCap,
    emoji: "🤖",
    description: "Design and develop intelligent machines and automation systems.",
    skills: ["Mechanical Design", "Programming", "Control Systems", "AI Integration"],
    education: "Bachelor's or Master's in Robotics, Mechanical Engineering, or related field",
    salary: "💰 $95,000 - $130,000/year",
    outlook: "📈 35% growth projected over the next decade",
    link: "/careers/robotics-engineer"
  },
  {
    title: "Digital Health Specialist",
    icon: Heart,
    emoji: "❤️",
    description: "Transform healthcare through technology and innovation.",
    skills: ["Health Informatics", "Clinical Systems", "Data Analytics", "Patient Care"],
    education: "Bachelor's in Health Informatics, Biomedical Engineering, or related field",
    salary: "💰 $85,000 - $120,000/year",
    outlook: "📈 40% growth projected over the next decade",
    link: "/careers/digital-health-specialist"
  }
]

export function CareerCard({ profile }: { profile: typeof careerProfiles[0] }) {
  return (
    <Link href={profile.link} className="block">
      <Card className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-3 rounded-full">
              {profile.icon && <profile.icon className="h-6 w-6 text-primary" />}
            </div>
            <div>
              <CardTitle className="text-gray-900 text-xl">{profile.emoji} {profile.title}</CardTitle>
              <CardDescription className="text-gray-700 mt-2">
                {profile.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-900">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill} className="bg-white/10 px-3 py-1.5 rounded-md text-xs text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-900">Education</h4>
              <p className="text-sm text-gray-700">{profile.education}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-900">Average Salary</h4>
              <p className="text-sm text-gray-700">{profile.salary}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-900">Job Outlook</h4>
              <p className="text-sm text-gray-700">{profile.outlook}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href={profile.link} className="block">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Learn more about becoming a {profile.title}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  )
}
