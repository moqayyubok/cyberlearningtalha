"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Clock, Users, BookOpen, PlusCircle, Edit, Eye } from "lucide-react"
import RoleIndicator from "@/components/role-indicator"

// Mock course data
const courses = [
  {
    id: "network-security",
    title: "Network Security Fundamentals",
    description: "Learn the core principles of network security, including protocols, firewalls, and threat detection.",
    level: "beginner",
    duration: "8 weeks",
    students: 1245,
    lessons: 24,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=400&text=Network+Security",
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    description: "Master the techniques used by security professionals to identify and exploit vulnerabilities.",
    level: "intermediate",
    duration: "10 weeks",
    students: 987,
    lessons: 32,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=400&text=Ethical+Hacking",
  },
  {
    id: "incident-response",
    title: "Security Operations & Incident Response",
    description: "Develop skills to detect, analyze, and respond to cybersecurity incidents effectively.",
    level: "advanced",
    duration: "12 weeks",
    students: 756,
    lessons: 36,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=400&text=Incident+Response",
  },
  {
    id: "web-security",
    title: "Web Application Security",
    description: "Learn to identify and mitigate security vulnerabilities in web applications.",
    level: "intermediate",
    duration: "9 weeks",
    students: 1089,
    lessons: 28,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=400&text=Web+Security",
  },
  {
    id: "cloud-security",
    title: "Cloud Security Fundamentals",
    description: "Understand security principles and best practices for major cloud platforms.",
    level: "beginner",
    duration: "8 weeks",
    students: 1320,
    lessons: 26,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=400&text=Cloud+Security",
  },
  {
    id: "malware-analysis",
    title: "Malware Analysis & Reverse Engineering",
    description: "Learn techniques to analyze malicious software and understand its behavior.",
    level: "advanced",
    duration: "14 weeks",
    students: 645,
    lessons: 42,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=400&text=Malware+Analysis",
  },
]

export default function CoursesPage() {
  const [userRole, setUserRole] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUserRole(parsedUser.role)
    }
  }, [])

  useEffect(() => {
    // Filter courses based on search term
    if (searchTerm) {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredCourses(filtered)
    } else {
      setFilteredCourses(courses)
    }
  }, [searchTerm])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <RoleIndicator />
          </div>
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover comprehensive cybersecurity courses designed for all skill levels
          </p>
          <div className="mt-8">
            <Link href="/courses/create">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Custom Course
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input className="pl-10" placeholder="Search courses..." value={searchTerm} onChange={handleSearch} />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                Most Popular
              </Button>
              <Button variant="outline" size="sm">
                Newest
              </Button>
              <Button variant="outline" size="sm">
                Highest Rated
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full md:w-auto justify-start">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} userRole={userRole} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beginner" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter((course) => course.level === "beginner")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} userRole={userRole} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="intermediate" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter((course) => course.level === "intermediate")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} userRole={userRole} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter((course) => course.level === "advanced")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} userRole={userRole} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your own custom course tailored to your specific learning needs!
          </p>
          <Link href="/courses/create">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Custom Course
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function CourseCard({ course, userRole }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{course.title}</CardTitle>
          <Badge
            className={`
            ${course.level === "beginner" ? "bg-emerald-100 text-emerald-800" : ""} 
            ${course.level === "intermediate" ? "bg-blue-100 text-blue-800" : ""} 
            ${course.level === "advanced" ? "bg-purple-100 text-purple-800" : ""}
          `}
          >
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-600 mb-4">{course.description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {course.students.toLocaleString()} students
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <span className="text-amber-500 mr-1">★</span>
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex gap-2">
            {(userRole === "admin" || userRole === "teacher") && (
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            )}
            <Link href={`/courses/${course.id}`}>
              <Button size="sm">
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

