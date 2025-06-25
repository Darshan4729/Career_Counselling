'use client';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Brain, Compass, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the chat component to avoid SSR issues
const ChatWithCounselor = dynamic(
  () => import('@/components/chat/ChatWithCounselor'),
  { ssr: false }
);

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <main className="container mx-auto px-4 py-12 bg-[#fff9f1] rounded-xl shadow-lg">
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold"
                  onClick={() => router.push('/aptitude-test')}
                >
                  Take Aptitude Test
                </Button>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                  onClick={() => router.push('/ai-counselor')}
                >
                  Chat with AI Counselor
                </Button>
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-10 max-w-3xl">
                Our AI-powered platform helps secondary school students explore career options, take aptitude tests, and
                receive personalized guidance for their future.
              </p>
            </div>
          </div>
        </section>



        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <Button 
                  variant="ghost" 
                  className="w-full text-start text-2xl font-bold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
                  onClick={() => router.push('/aptitude-test')}
                >
                  Take Aptitude Tests
                </Button>
                <CardDescription className="font-bold text-gray-700">
                  Discover your strengths, interests, and abilities through our comprehensive assessment tools.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/aptitude-test" className="text-primary hover:underline flex items-center">
                  Start Testing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <Button 
                  variant="ghost" 
                  className="w-full text-start text-2xl font-bold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
                  onClick={() => router.push('/ai-counselor')}
                >
                  AI Career Counseling
                </Button>
                <CardDescription className="font-bold text-gray-700">
                  Get personalized guidance from our AI counselor based on your test results and interests.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/ai-counselor" className="text-primary hover:underline flex items-center">
                  Chat Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <Button 
                  variant="ghost" 
                  className="w-full text-start text-2xl font-bold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
                  onClick={() => router.push('/careers')}
                >
                  Explore Career Paths
                </Button>
                <CardDescription className="font-bold text-gray-700">
                  Learn about different professions, required qualifications, and future prospects.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/careers" className="text-primary hover:underline flex items-center">
                  Browse Careers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-20 border border-slate-800">
          <h3 className="text-2xl font-bold mb-6 text-white">Why Choose CareerCompass?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white">Scientifically Validated Tests</h4>
                <p className="font-bold text-gray-600">
                  Our aptitude tests are designed by career experts and psychologists to provide accurate insights.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white">AI-Powered Guidance</h4>
                <p className="font-bold text-gray-600">
                  Get personalized career recommendations based on your unique profile and preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white">Comprehensive Resources</h4>
                <p className="font-bold text-gray-600">
                  Access detailed information about hundreds of career paths, educational requirements, and job
                  prospects.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-white">Accessible to Everyone</h4>
                <p className="font-bold text-gray-600">
                  Our platform is designed to be accessible to all secondary students, regardless of background.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-24">
          <h3 className="text-4xl font-bold mb-8 text-white">Ready to Start Your Journey?</h3>
          <p className="text-xl font-semibold text-gray-800 mb-12 max-w-3xl mx-auto">
            Take the first step toward discovering your ideal career path with our comprehensive tools and resources.
          </p>
          <Link href="/register">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Create Free Account
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-[#665c54] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-bold">CareerCompass</h4>
              </div>
              <p className="text-slate-400">Making career guidance accessible to every secondary school student.</p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                    Career Paths
                  </Link>
                </li>
                <li>
                  <Link href="/aptitude-test" className="text-slate-400 hover:text-white transition-colors">
                    Aptitude Tests
                  </Link>
                </li>
                <li>
                  <Link href="/ai-counselor" className="text-slate-400 hover:text-white transition-colors">
                    AI Counselor
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4">Resources</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-slate-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p> {new Date().getFullYear()} CareerCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
