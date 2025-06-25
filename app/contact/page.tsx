import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f1] to-[#fff3e8] py-12">
      <div className="container mx-auto px-4">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Email Us</h3>
              <p className="text-gray-600">info@careercompass.com</p>
              <p className="text-gray-600">support@careercompass.com</p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
             
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM - 5PM</p>
              <p className="text-gray-600">Sat: 10AM - 2PM</p>
            </div>
          </Card>
        </div>

        {/* Location Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Our Location</h3>
              <p className="text-gray-600">Reva University, Bangalore</p>
            
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Send us a Message</CardTitle>
            <CardDescription>
              Have questions about career counseling? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="What is your inquiry about?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-[150px]"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" size="lg" className="px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 