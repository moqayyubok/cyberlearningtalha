"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CheckCircle, Clock, Calendar, MessageSquare, FileText, BarChart } from "lucide-react"
import RoleIndicator from "@/components/role-indicator"

// Mock student data
const studentData = {
  id: 101,
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "/placeholder.svg?height=200&width=200&text=AJ",
  joinDate: "September 10, 2023",
  lastActive: "Today at 2:45 PM",
  status: "active",
  bio: "Cybersecurity enthusiast with a background in IT support. Looking to transition into a security role.",
  courses: [
    {
      id: "network-security",
      title: "Network Security Fundamentals",
      progress: 68,
      lastAccessed: "2 days ago",
      grade: 85,
      status: "in-progress",
    },
    {
      id: "ethical-hacking",
      title: "Ethical Hacking & Penetration Testing",
      progress: 32,
      lastAccessed: "1 week ago",
      grade: 78,
      status: "in-progress",
    },
  ],
  completedCourses: [
    {
      id: "cybersecurity-basics",
      title: "Introduction to Cybersecurity",
      completedDate: "August 15, 2023",
      grade: 92,
      certificate: true,
    },
  ],
  assignments: [
    {
      id: 1,
      title: "Network Topology Analysis",
      course: "Network Security Fundamentals",
      dueDate: "April 15, 2024",
      status: "submitted",
      submittedDate: "April 10, 2024",
      grade: 88,
    },
    {
      id: 2,
      title: "Vulnerability Assessment Report",
      course: "Ethical Hacking & Penetration Testing",
      dueDate: "April 20, 2024",
      status: "in-progress",
      submittedDate: null,
      grade: null,
    },
    {
      id: 3,
      title: "Firewall Configuration Lab",
      course: "Network Security Fundamentals",
      dueDate: "April 5, 2024",
      status: "graded",
      submittedDate: "April 3, 2024",
      grade: 95,
    },
  ],
  quizzes: [
    {
      id: 1,
      title: "Network Protocols Quiz",
      course: "Network Security Fundamentals",
      date: "March 28, 2024",
      score: 18,
      total: 20,
      percentage: 90,
    },
    {
      id: 2,
      title: "Reconnaissance Techniques Quiz",
      course: "Ethical Hacking & Penetration Testing",
      date: "April 2, 2024",
      score: 15,
      total: 20,
      percentage: 75,
    },
  ],
  messages: [
    {
      id: 1,
      date: "April 7, 2024",
      content: "Hi Professor, I had a question about the firewall lab assignment. Is it possible to get an extension?",
      time: "10:23 AM",
    },
    {
      id: 2,
      date: "March 30, 2024",
      content:
        "Thank you for the feedback on my last assignment. I'll incorporate your suggestions in my next submission.",
      time: "3:45 PM",
    },
  ],
  stats: {
    averageGrade: 85,
    completionRate: 92,
    attendanceRate: 95,
    participationScore: 88,
  },
}

export default function StudentDetailPage({ params }) {
  const studentId = params.studentId
  const [student, setStudent] = useState(null)

  useEffect(() => {
    // In a real app, this would fetch the student data from an API
    setStudent(studentData)
  }, [studentId])

  if (!student) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/teacher/students">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Student Profile</h1>
            <p className="text-slate-500">View and manage student information</p>
          </div>
        </div>
        <RoleIndicator />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{student.name}</CardTitle>
                    <CardDescription>{student.email}</CardDescription>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="border-emerald-500 text-emerald-600">
                        {student.status === "active" ? "Active" : "Inactive"}
                      </Badge>
                      <Badge variant="outline">Student</Badge>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-slate-50 rounded-md">
                  <p className="text-sm text-slate-500">Avg. Grade</p>
                  <p className="text-xl font-bold text-emerald-600">{student.stats.averageGrade}%</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-md">
                  <p className="text-sm text-slate-500">Completion</p>
                  <p className="text-xl font-bold text-emerald-600">{student.stats.completionRate}%</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-md">
                  <p className="text-sm text-slate-500">Attendance</p>
                  <p className="text-xl font-bold text-emerald-600">{student.stats.attendanceRate}%</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-md">
                  <p className="text-sm text-slate-500">Participation</p>
                  <p className="text-xl font-bold text-emerald-600">{student.stats.participationScore}%</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">About</h3>
                  <p className="text-slate-600">{student.bio}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Joined</h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                      <span>{student.joinDate}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Last Active</h3>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-slate-500 mr-2" />
                      <span>{student.lastActive}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="courses">
            <TabsList>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enrolled Courses</CardTitle>
                  <CardDescription>Courses this student is currently taking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.courses.map((course) => (
                      <div
                        key={course.id}
                        className="flex flex-col md:flex-row gap-4 items-start border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="font-medium">{course.title}</h3>
                            <div className="flex items-center">
                              <Badge className="mr-2">
                                {course.status === "in-progress" ? "In Progress" : "Completed"}
                              </Badge>
                              <span className="text-sm text-slate-500">Last accessed: {course.lastAccessed}</span>
                            </div>
                          </div>
                          <div className="space-y-2 w-full">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm">
                              Current Grade: <span className="font-medium">{course.grade}%</span>
                            </span>
                            <Link href={`/courses/${course.id}`}>
                              <Button variant="outline" size="sm">
                                View Course
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Separator />

                    <h3 className="font-medium mb-4">Completed Courses</h3>
                    {student.completedCourses.map((course) => (
                      <div key={course.id} className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="font-medium">{course.title}</h3>
                            <div className="text-sm text-slate-500">Completed: {course.completedDate}</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                              <span className="text-sm text-emerald-600">
                                Completed with grade: <span className="font-medium">{course.grade}%</span>
                              </span>
                              {course.certificate && (
                                <Badge className="ml-3 bg-amber-100 text-amber-800 hover:bg-amber-100">
                                  Certificate Earned
                                </Badge>
                              )}
                            </div>
                            <Link href={`/courses/${course.id}`}>
                              <Button variant="outline" size="sm">
                                View Course
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>View and grade student assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.assignments.map((assignment) => (
                      <div key={assignment.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="font-medium">{assignment.title}</h3>
                          <div className="text-sm text-slate-500">{assignment.course}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                              <span className="text-sm">Due: {assignment.dueDate}</span>
                            </div>
                            <Badge
                              className={
                                assignment.status === "graded"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : assignment.status === "submitted"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-amber-100 text-amber-800"
                              }
                            >
                              {assignment.status === "graded"
                                ? "Graded"
                                : assignment.status === "submitted"
                                  ? "Submitted"
                                  : "In Progress"}
                            </Badge>
                            {assignment.grade && (
                              <span className="text-sm font-medium">Grade: {assignment.grade}/100</span>
                            )}
                          </div>
                          <div className="mt-2 md:mt-0">
                            {assignment.status === "submitted" ? (
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                Grade Assignment
                              </Button>
                            ) : assignment.status === "graded" ? (
                              <Button variant="outline" size="sm">
                                View Submission
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm" disabled>
                                Not Submitted
                              </Button>
                            )}
                          </div>
                        </div>
                        {assignment.submittedDate && (
                          <div className="mt-2 text-sm text-slate-500">Submitted: {assignment.submittedDate}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quizzes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quizzes</CardTitle>
                  <CardDescription>View student quiz results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.quizzes.map((quiz) => (
                      <div key={quiz.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="font-medium">{quiz.title}</h3>
                          <div className="text-sm text-slate-500">{quiz.course}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                              <span className="text-sm">Date: {quiz.date}</span>
                            </div>
                            <span className="text-sm font-medium">
                              Score: {quiz.score}/{quiz.total} ({quiz.percentage}%)
                            </span>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Message History</CardTitle>
                  <CardDescription>Recent communications with this student</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.messages.map((message) => (
                      <div key={message.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-slate-500">
                            {message.date} at {message.time}
                          </span>
                        </div>
                        <p className="text-slate-700">{message.content}</p>
                      </div>
                    ))}

                    <div className="flex justify-end">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send New Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Student's overall performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average Grade</span>
                    <span className="font-medium">{student.stats.averageGrade}%</span>
                  </div>
                  <Progress value={student.stats.averageGrade} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion Rate</span>
                    <span className="font-medium">{student.stats.completionRate}%</span>
                  </div>
                  <Progress value={student.stats.completionRate} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Attendance Rate</span>
                    <span className="font-medium">{student.stats.attendanceRate}%</span>
                  </div>
                  <Progress value={student.stats.attendanceRate} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Participation Score</span>
                    <span className="font-medium">{student.stats.participationScore}%</span>
                  </div>
                  <Progress value={student.stats.participationScore} className="h-2" />
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <BarChart className="h-4 w-4 mr-2" />
                  View Detailed Analytics
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks for this student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Progress Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Assign Additional Resources
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Schedule 1:1 Meeting
              </Button>
              <Button variant="outline" className="w-full justify-start text-amber-600 hover:text-amber-700">
                <Clock className="h-4 w-4 mr-2" />
                Grant Deadline Extension
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

