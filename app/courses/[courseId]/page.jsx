"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Users, BookOpen, Star, Award, Play, FileText, Download, Edit, Plus } from "lucide-react"
import RoleIndicator from "@/components/role-indicator"

// Mock course data
const courses = {
  "network-security": {
    id: "network-security",
    title: "Network Security Fundamentals",
    description:
      "Learn the core principles of network security, including protocols, firewalls, and threat detection. This comprehensive course covers everything from basic networking concepts to advanced security implementations.",
    level: "beginner",
    duration: "8 weeks",
    students: 1245,
    lessons: 24,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=800&text=Network+Security",
    instructor: {
      name: "Dr. Sarah Chen",
      title: "Lead Security Instructor",
      bio: "Former network security engineer with 12+ years of experience in the field.",
      avatar: "/placeholder.svg?height=100&width=100&text=SC",
    },
    syllabus: [
      {
        title: "Module 1: Introduction to Network Security",
        lessons: [
          { title: "Understanding Network Fundamentals", duration: "45 min" },
          { title: "Common Network Threats and Vulnerabilities", duration: "50 min" },
          { title: "Security Models and Frameworks", duration: "55 min" },
        ],
      },
      {
        title: "Module 2: Network Protocols and Security",
        lessons: [
          { title: "TCP/IP Security Considerations", duration: "60 min" },
          { title: "Secure Network Protocols", duration: "55 min" },
          { title: "VPN Technologies and Implementation", duration: "65 min" },
        ],
      },
      {
        title: "Module 3: Firewall Configuration",
        lessons: [
          { title: "Firewall Types and Architecture", duration: "50 min" },
          { title: "Rule-Based Access Control", duration: "45 min" },
          { title: "Advanced Firewall Features", duration: "60 min" },
        ],
      },
      {
        title: "Module 4: Intrusion Detection and Prevention",
        lessons: [
          { title: "IDS/IPS Fundamentals", duration: "55 min" },
          { title: "Signature-Based vs. Anomaly-Based Detection", duration: "50 min" },
          { title: "Implementing and Tuning IDS Solutions", duration: "70 min" },
        ],
      },
    ],
    features: [
      "24 comprehensive video lessons",
      "12 hands-on lab exercises",
      "4 practical assessments",
      "Certificate of completion",
      "Access to private community forum",
      "Downloadable resources and cheat sheets",
    ],
  },
  "ethical-hacking": {
    id: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    description:
      "Master the techniques used by security professionals to identify and exploit vulnerabilities. Learn how to think like a hacker to better defend your systems.",
    level: "intermediate",
    duration: "10 weeks",
    students: 987,
    lessons: 32,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=800&text=Ethical+Hacking",
    instructor: {
      name: "Michael Rodriguez",
      title: "Senior Penetration Tester",
      bio: "Certified ethical hacker with experience working with Fortune 500 companies.",
      avatar: "/placeholder.svg?height=100&width=100&text=MR",
    },
    syllabus: [
      {
        title: "Module 1: Introduction to Ethical Hacking",
        lessons: [
          { title: "Ethical Hacking Methodology", duration: "45 min" },
          { title: "Legal Considerations and Scope", duration: "50 min" },
          { title: "Setting Up Your Testing Environment", duration: "60 min" },
        ],
      },
      {
        title: "Module 2: Reconnaissance Techniques",
        lessons: [
          { title: "Open Source Intelligence (OSINT)", duration: "55 min" },
          { title: "Network Scanning and Enumeration", duration: "65 min" },
          { title: "Vulnerability Scanning", duration: "60 min" },
        ],
      },
    ],
    features: [
      "32 in-depth video lessons",
      "16 hands-on lab exercises",
      "5 capture-the-flag challenges",
      "Certificate of completion",
      "Access to private community forum",
      "Downloadable tools and resources",
    ],
  },
  "incident-response": {
    id: "incident-response",
    title: "Security Operations & Incident Response",
    description:
      "Develop skills to detect, analyze, and respond to cybersecurity incidents effectively. Learn to build and manage a security operations center.",
    level: "advanced",
    duration: "12 weeks",
    students: 756,
    lessons: 36,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=800&text=Incident+Response",
    instructor: {
      name: "Priya Patel",
      title: "Security Operations Manager",
      bio: "Former SOC lead with experience handling major security incidents.",
      avatar: "/placeholder.svg?height=100&width=100&text=PP",
    },
    syllabus: [
      {
        title: "Module 1: Security Operations Fundamentals",
        lessons: [
          { title: "SOC Structure and Roles", duration: "45 min" },
          { title: "Security Monitoring Tools", duration: "50 min" },
          { title: "Alert Triage and Management", duration: "60 min" },
        ],
      },
      {
        title: "Module 2: Incident Detection",
        lessons: [
          { title: "Threat Intelligence Integration", duration: "55 min" },
          { title: "Behavioral Analysis", duration: "65 min" },
          { title: "Advanced Detection Techniques", duration: "60 min" },
        ],
      },
    ],
    features: [
      "36 comprehensive video lessons",
      "18 hands-on lab exercises",
      "6 incident response simulations",
      "Certificate of completion",
      "Access to private community forum",
      "Downloadable playbooks and templates",
    ],
  },
}

export default function CourseDetailsPage({ params }) {
  const [userRole, setUserRole] = useState(null)
  const [enrolled, setEnrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUserRole(parsedUser.role)

      // Simulate enrollment status and progress
      if (parsedUser.role === "student") {
        // Randomly determine if student is enrolled
        setEnrolled(Math.random() > 0.5)
        // Random progress between 0-100
        setProgress(Math.floor(Math.random() * 100))
      }
    }
  }, [])

  const courseId = params.courseId
  const course = courses[courseId]

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
        <Link href="/courses">
          <Button>Back to Courses</Button>
        </Link>
      </div>
    )
  }

  const handleEnroll = () => {
    setEnrolled(true)
    setProgress(0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Course Header */}
      <section
        className="bg-slate-900 text-white py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('/placeholder.svg?height=600&width=1200&text=Cybersecurity')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <RoleIndicator />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Badge
                  className={`
                    ${course.level === "beginner" ? "bg-emerald-100 text-emerald-800" : ""} 
                    ${course.level === "intermediate" ? "bg-blue-100 text-blue-800" : ""} 
                    ${course.level === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                  `}
                >
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </Badge>
                <Badge variant="outline" className="border-white/30">
                  Most Popular
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-slate-300 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-6 text-sm text-slate-300 mb-8">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {course.lessons} lessons
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="font-medium text-white">{course.rating}</span>
                  <span className="ml-1">({Math.floor(course.students * 0.65)} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.instructor.avatar || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-slate-300">{course.instructor.title}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-96">
              <Card className="bg-white text-slate-900">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{enrolled ? "Continue Learning" : "Enroll in this course"}</CardTitle>
                  {enrolled ? (
                    <CardDescription>Track your progress and continue learning</CardDescription>
                  ) : (
                    <CardDescription>Get full access to all course materials</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolled ? (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Your Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                      <Link href={`/courses/${course.id}/learn`}>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
                          Continue Learning
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold">$199</span>
                        <span className="text-slate-500 line-through">$299</span>
                      </div>
                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6"
                        onClick={handleEnroll}
                      >
                        Enroll Now
                      </Button>
                      <p className="text-center text-sm text-slate-500">30-day money-back guarantee</p>
                    </>
                  )}
                  <div className="pt-4 space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Hands-on lab exercises</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Community support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Admin/Teacher Actions */}
              {(userRole === "admin" || userRole === "teacher") && (
                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Lesson
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="w-full md:w-auto justify-start mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.syllabus.map((module, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle>{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="flex items-center justify-between py-2 border-b last:border-0"
                          >
                            <div className="flex items-center">
                              <Play className="h-4 w-4 mr-3 text-emerald-600" />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-slate-500">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                    <div className="space-y-4">
                      <p>
                        This comprehensive course is designed to give you a solid foundation in network security
                        principles and practices. Whether you're just starting your cybersecurity journey or looking to
                        formalize your existing knowledge, this course provides the perfect balance of theory and
                        practical skills.
                      </p>
                      <p>
                        Throughout the course, you'll learn how to identify common network vulnerabilities, implement
                        effective security controls, and monitor networks for suspicious activity. By the end, you'll
                        have the skills to help secure an organization's network infrastructure against various threats.
                      </p>
                      <p>
                        All concepts are reinforced with hands-on lab exercises that simulate real-world scenarios,
                        ensuring you can apply what you've learned in practical situations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Basic understanding of computer networks</li>
                      <li>Familiarity with operating systems (Windows, Linux)</li>
                      <li>No prior security experience required</li>
                      <li>Computer with internet connection</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Includes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <Play className="h-5 w-5 text-slate-500 mr-3" />
                        <span>{course.lessons} video lessons</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-slate-500 mr-3" />
                        <span>12 downloadable resources</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-slate-500 mr-3" />
                        <span>Full lifetime access</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-slate-500 mr-3" />
                        <span>Certificate of completion</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Share This Course</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <Button variant="outline" size="icon">
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
                        <Button variant="outline" size="icon">
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
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon">
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
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon">
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
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                          </svg>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructor">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <img
                    src={course.instructor.avatar || "/placeholder.svg"}
                    alt={course.instructor.name}
                    className="w-32 h-32 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                    <p className="text-emerald-600 mb-4">{course.instructor.title}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">4.9</span>
                        <span className="text-slate-500 ml-1">Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>3,245 Students</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>7 Courses</span>
                      </div>
                    </div>
                    <p className="mb-4">{course.instructor.bio}</p>
                    <p className="mb-6">
                      Dr. Chen specializes in network security and has helped organizations around the world implement
                      robust security measures. She brings real-world experience to her teaching, making complex
                      concepts accessible to students of all backgrounds.
                    </p>
                    <Button variant="outline">View Full Profile</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                  <div className="w-full md:w-64 text-center p-6 bg-slate-50 rounded-lg">
                    <div className="text-5xl font-bold mb-2">{course.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-slate-300"}`}
                          fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-slate-500">Course Rating</p>
                  </div>
                  <div className="flex-1 space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const percentage = rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 1 : 1
                      return (
                        <div key={rating} className="flex items-center gap-4">
                          <div className="flex items-center w-20">
                            <span>{rating}</span>
                            <Star className="h-4 w-4 text-yellow-400 ml-1" fill="currentColor" />
                          </div>
                          <Progress value={percentage} className="h-2 flex-1" />
                          <div className="w-12 text-right text-slate-500">{percentage}%</div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6">Student Reviews</h3>
                <div className="space-y-8">
                  {[
                    {
                      name: "Alex Johnson",
                      date: "2 months ago",
                      rating: 5,
                      comment:
                        "This course exceeded my expectations. The instructor explains complex concepts in a way that's easy to understand, and the labs provided valuable hands-on experience.",
                    },
                    {
                      name: "Maria Garcia",
                      date: "3 months ago",
                      rating: 5,
                      comment:
                        "As someone new to cybersecurity, I found this course to be the perfect introduction. The curriculum is well-structured and builds your knowledge step by step.",
                    },
                    {
                      name: "David Kim",
                      date: "1 month ago",
                      rating: 4,
                      comment:
                        "Great content and instruction. I would have liked more advanced topics toward the end, but overall it was an excellent learning experience.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-8 last:border-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-slate-500 text-sm">{review.date}</div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-slate-300"}`}
                            fill={i < review.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(courses)
              .filter((c) => c.id !== courseId)
              .slice(0, 3)
              .map((relatedCourse) => (
                <Card key={relatedCourse.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedCourse.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex justify-between items-center mb-4">
                      <Badge
                        className={`
                          ${relatedCourse.level === "beginner" ? "bg-emerald-100 text-emerald-800" : ""} 
                          ${relatedCourse.level === "intermediate" ? "bg-blue-100 text-blue-800" : ""} 
                          ${relatedCourse.level === "advanced" ? "bg-purple-100 text-purple-800" : ""}
                        `}
                      >
                        {relatedCourse.level.charAt(0).toUpperCase() + relatedCourse.level.slice(1)}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span>{relatedCourse.rating}</span>
                      </div>
                    </div>
                    <Link href={`/courses/${relatedCourse.id}`}>
                      <Button variant="outline" className="w-full">
                        View Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

