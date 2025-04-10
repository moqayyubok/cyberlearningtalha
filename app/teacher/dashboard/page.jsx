import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Users, FileText, MessageSquare, CheckCircle, BarChart } from "lucide-react"
import Link from "next/link"

// Mock data for teacher dashboard
const teacherData = {
  name: "Sarah Chen",
  courses: [
    {
      id: "network-security",
      title: "Network Security Fundamentals",
      students: 245,
      progress: 68,
      lastUpdated: "2 days ago",
      image: "/placeholder.svg?height=100&width=200&text=Network+Security",
    },
    {
      id: "web-security",
      title: "Web Application Security",
      students: 189,
      progress: 42,
      lastUpdated: "1 week ago",
      image: "/placeholder.svg?height=100&width=200&text=Web+Security",
    },
    {
      id: "cloud-security",
      title: "Cloud Security Fundamentals",
      students: 132,
      progress: 85,
      lastUpdated: "3 days ago",
      image: "/placeholder.svg?height=100&width=200&text=Cloud+Security",
    },
  ],
  students: [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      progress: 78,
      courses: 2,
      lastActive: "Today",
      avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@example.com",
      progress: 92,
      courses: 3,
      lastActive: "Yesterday",
      avatar: "/placeholder.svg?height=40&width=40&text=MG",
    },
    {
      id: 3,
      name: "David Kim",
      email: "david.k@example.com",
      progress: 45,
      courses: 1,
      lastActive: "3 days ago",
      avatar: "/placeholder.svg?height=40&width=40&text=DK",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily.w@example.com",
      progress: 65,
      courses: 2,
      lastActive: "Today",
      avatar: "/placeholder.svg?height=40&width=40&text=EW",
    },
  ],
  assignments: [
    {
      id: 1,
      title: "Network Topology Analysis",
      course: "Network Security Fundamentals",
      dueDate: "Apr 15, 2024",
      submissions: 187,
      pending: 58,
    },
    {
      id: 2,
      title: "Vulnerability Assessment Report",
      course: "Web Application Security",
      dueDate: "Apr 20, 2024",
      submissions: 112,
      pending: 77,
    },
    {
      id: 3,
      title: "Cloud Security Architecture",
      course: "Cloud Security Fundamentals",
      dueDate: "Apr 25, 2024",
      submissions: 98,
      pending: 34,
    },
  ],
  messages: [
    {
      id: 1,
      from: "Alex Johnson",
      subject: "Question about firewall configuration",
      preview: "I'm having trouble with the lab exercise on configuring...",
      time: "2 hours ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    {
      id: 2,
      from: "Maria Garcia",
      subject: "Assignment extension request",
      preview: "Due to some technical issues I encountered during...",
      time: "Yesterday",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40&text=MG",
    },
    {
      id: 3,
      from: "David Kim",
      subject: "Additional resources for cloud security",
      preview: "Thank you for the lecture today. I was wondering if...",
      time: "2 days ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40&text=DK",
    },
  ],
  stats: {
    totalStudents: 566,
    averageProgress: 72,
    completionRate: 68,
    averageRating: 4.8,
  },
}

export default function TeacherDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
              <p className="text-slate-300">Welcome back, {teacherData.name}</p>
            </div>
            <div className="ml-auto">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <FileText className="mr-2 h-4 w-4" />
                Create New Course
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-6 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Students</p>
                  <p className="text-2xl font-bold">{teacherData.stats.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Avg. Progress</p>
                  <p className="text-2xl font-bold">{teacherData.stats.averageProgress}%</p>
                </div>
                <BarChart className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Completion Rate</p>
                  <p className="text-2xl font-bold">{teacherData.stats.completionRate}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Avg. Rating</p>
                  <p className="text-2xl font-bold">{teacherData.stats.averageRating}/5</p>
                </div>
                <div className="text-amber-500 text-xl">★</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="w-full md:w-auto justify-start mb-8">
              <TabsTrigger value="courses" className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                My Courses
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Students
              </TabsTrigger>
              <TabsTrigger value="assignments" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Assignments
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teacherData.courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>Last updated: {course.lastUpdated}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-slate-500 mr-1" />
                          <span className="text-sm">{course.students} students</span>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Course Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Link href={`/courses/${course.id}`} className="flex-1">
                          <Button size="sm" className="w-full">
                            View
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add New Course Card */}
                <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-[350px]">
                  <BookOpen className="h-12 w-12 text-slate-300 mb-4" />
                  <h3 className="font-medium text-center mb-2">Create New Course</h3>
                  <p className="text-sm text-slate-500 text-center mb-4">Add a new course to your teaching portfolio</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <FileText className="mr-2 h-4 w-4" />
                    Create Course
                  </Button>
                </Card>
              </div>
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>View and manage your students across all courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {teacherData.students.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={student.avatar} alt={student.name} />
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{student.name}</h3>
                            <p className="text-sm text-slate-500">{student.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <p className="text-sm text-slate-500">Progress</p>
                            <div className="flex items-center">
                              <Progress value={student.progress} className="h-2 w-24 mr-2" />
                              <span className="text-sm">{student.progress}%</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-500">Courses</p>
                            <p className="font-medium">{student.courses}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-500">Last Active</p>
                            <p className="font-medium">{student.lastActive}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Assignments</CardTitle>
                    <CardDescription>Manage and grade student assignments</CardDescription>
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Create Assignment</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {teacherData.assignments.map((assignment) => (
                      <div
                        key={assignment.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <h3 className="font-medium">{assignment.title}</h3>
                          <p className="text-sm text-slate-500">{assignment.course}</p>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <p className="text-sm text-slate-500">Due Date</p>
                            <p className="font-medium">{assignment.dueDate}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-500">Submissions</p>
                            <p className="font-medium">
                              {assignment.submissions}/{assignment.submissions + assignment.pending}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-500">Pending</p>
                            <Badge variant="outline" className="border-amber-500 text-amber-600">
                              {assignment.pending}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button size="sm">Grade</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Student communications and inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teacherData.messages.map((message) => (
                      <div key={message.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <Avatar>
                          <AvatarImage src={message.avatar} alt={message.from} />
                          <AvatarFallback>
                            {message.from
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium flex items-center">
                              {message.from}
                              {message.unread && (
                                <Badge className="ml-2 bg-emerald-100 text-emerald-800 text-xs">New</Badge>
                              )}
                            </h3>
                            <p className="text-xs text-slate-500">{message.time}</p>
                          </div>
                          <p className="font-medium text-sm">{message.subject}</p>
                          <p className="text-sm text-slate-500 truncate">{message.preview}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Reply
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

