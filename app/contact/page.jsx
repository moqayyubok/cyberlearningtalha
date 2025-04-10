import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about our courses or need help? We're here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Please provide details about your inquiry" rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-slate-600">info@cyberlearning.com</p>
                      <p className="text-slate-600">support@cyberlearning.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                      <p className="text-slate-600">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-slate-600">123 Tech Avenue</p>
                      <p className="text-slate-600">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I enroll in a course?",
                      answer:
                        "You can enroll in any course by creating an account and selecting the course you're interested in.",
                    },
                    {
                      question: "Are there any prerequisites for the courses?",
                      answer: "Prerequisites vary by course. Each course page lists any required knowledge or skills.",
                    },
                    {
                      question: "Do you offer certification upon completion?",
                      answer:
                        "Yes, we provide certificates of completion for all our courses that you can share on your resume or LinkedIn.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/about">
                    <Button variant="link" className="text-emerald-600 p-0">
                      Learn more about us →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

