import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, BookOpen, Code, Zap, ArrowRight, PlusCircle } from "lucide-react"
import Link from "next/link"
import RoleIndicator from "@/components/role-indicator"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <RoleIndicator />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Cybersecurity Skills</h1>
            <p className="text-xl mb-8">Interactive learning platform for beginners and professionals</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses/create">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Custom Course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cybersecurity Fundamentals",
                description: "Learn the core concepts of cybersecurity from industry experts",
                icon: Shield,
              },
              {
                title: "Hands-on Labs",
                description: "Practice in real-world scenarios with our virtual labs",
                icon: Code,
              },
              {
                title: "Certification Prep",
                description: "Get ready for top industry certifications with targeted courses",
                icon: BookOpen,
              },
              {
                title: "Live Workshops",
                description: "Join interactive sessions with cybersecurity professionals",
                icon: Zap,
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-emerald-600 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Security Fundamentals",
                level: "Beginner",
                duration: "8 weeks",
                rating: "4.8/5",
                id: "network-security",
              },
              {
                title: "Ethical Hacking & Penetration Testing",
                level: "Intermediate",
                duration: "10 weeks",
                rating: "4.9/5",
                id: "ethical-hacking",
              },
              {
                title: "Security Operations & Incident Response",
                level: "Advanced",
                duration: "12 weeks",
                rating: "4.7/5",
                id: "incident-response",
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-slate-200 flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Course+${index + 1}`}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-slate-100 rounded-full text-sm">{course.level}</span>
                    <span className="px-2 py-1 bg-slate-100 rounded-full text-sm">{course.duration}</span>
                    <span className="px-2 py-1 bg-slate-100 rounded-full text-sm">⭐ {course.rating}</span>
                  </div>
                  <CardDescription>Learn essential skills and techniques from industry experts.</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${course.id}`} className="w-full">
                    <Button className="w-full">View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="flex justify-center gap-4">
              <Link href="/courses">
                <Button variant="outline" size="lg">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses/create">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Custom Course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have advanced their careers with our comprehensive learning platform.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

