"use client"

import { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  CheckCircle,
  BadgeIcon as Certificate,
  Zap,
  Shield,
  Target,
  Users,
  School,
} from "lucide-react"
import Link from "next/link"
import CreateCourseForm from "@/components/create-course-form"
import { useSearchParams } from "next/navigation"
import RoleIndicator from "@/components/role-indicator"

// Mock user data for different roles
const userData = {
  student: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "/placeholder.svg?height=200&width=200&text=AJ",
    joinDate: "January 2023",
    bio: "Cybersecurity enthusiast and IT professional looking to expand my knowledge and skills.",
    enrolledCourses: [
      {
        id: "network-security",
        title: "Network Security Fundamentals",
        progress: 68,
        lastAccessed: "2 days ago",
        image: "/placeholder.svg?height=100&width=200&text=Network+Security",
      },
      {
        id: "ethical-hacking",
        title: "Ethical Hacking & Penetration Testing",
        progress: 32,
        lastAccessed: "1 week ago",
        image: "/placeholder.svg?height=100&width=200&text=Ethical+Hacking",
      },
      {
        id: "cloud-security",
        title: "Cloud Security Fundamentals",
        progress: 12,
        lastAccessed: "3 weeks ago",
        image: "/placeholder.svg?height=100&width=200&text=Cloud+Security",
      },
    ],
    completedCourses: [
      {
        id: "cybersecurity-basics",
        title: "Introduction to Cybersecurity",
        completedDate: "December 2023",
        certificate: true,
        image: "/placeholder.svg?height=100&width=200&text=Intro+Cybersecurity",
      },
    ],
    achievements: [
      {
        title: "Fast Learner",
        description: "Completed 5 lessons in one day",
        icon: Zap,
        date: "March 15, 2024",
      },
      {
        title: "Perfect Score",
        description: "Scored 100% on a quiz",
        icon: Target,
        date: "February 28, 2024",
      },
      {
        title: "Early Bird",
        description: "Enrolled in a course within 24 hours of launch",
        icon: Clock,
        date: "January 10, 2024",
      },
    ],
    stats: {
      totalPoints: 1250,
      rank: "Cybersecurity Apprentice",
      nextRank: "Cybersecurity Specialist",
      pointsToNextRank: 750,
      coursesCompleted: 1,
      lessonsCompleted: 42,
      quizzesPassed: 15,
      streak: 8,
    },
    badges: [
      {
        name: "Network Defender",
        image: "/placeholder.svg?height=80&width=80&text=🛡️",
        earned: "March 2024",
      },
      {
        name: "Quiz Master",
        image: "/placeholder.svg?height=80&width=80&text=🏆",
        earned: "February 2024",
      },
      {
        name: "Dedicated Learner",
        image: "/placeholder.svg?height=80&width=80&text=📚",
        earned: "January 2024",
      },
    ],
  },
  teacher: {
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    avatar: "/placeholder.svg?height=200&width=200&text=SC",
    joinDate: "August 2022",
    bio: "Cybersecurity instructor with 10+ years of industry experience. Specializing in network security and ethical hacking.",
    teachingCourses: [
      {
        id: "network-security",
        title: "Network Security Fundamentals",
        students: 245,
        rating: 4.8,
        lastUpdated: "2 days ago",
        image: "/placeholder.svg?height=100&width=200&text=Network+Security",
      },
      {
        id: "web-security",
        title: "Web Application Security",
        students: 189,
        rating: 4.6,
        lastUpdated: "1 week ago",
        image: "/placeholder.svg?height=100&width=200&text=Web+Security",
      },
    ],
    stats: {
      totalStudents: 566,
      averageRating: 4.7,
      coursesCreated: 3,
      totalLessons: 86,
    },
    certifications: [
      {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        date: "2020",
      },
      {
        name: "Certified Information Systems Security Professional (CISSP)",
        issuer: "ISC²",
        date: "2018",
      },
    ],
  },
  admin: {
    name: "Michael Rodriguez",
    email: "michael.r@example.com",
    avatar: "/placeholder.svg?height=200&width=200&text=MR",
    joinDate: "March 2021",
    bio: "Platform administrator and cybersecurity expert. Responsible for content quality and user experience.",
    stats: {
      totalUsers: 2547,
      activeCourses: 24,
      totalSchools: 18,
      totalRevenue: "$107,940",
    },
    recentActions: [
      {
        action: "Updated course",
        details: "Web Application Security - Added new lesson",
        timestamp: "2 hours ago",
      },
      {
        action: "User management",
        details: "Added new admin user: John Smith",
        timestamp: "Yesterday",
      },
      {
        action: "System backup",
        details: "Weekly database backup",
        timestamp: "2 days ago",
      },
    ],
  },
  schoolAdmin: {
    name: "Priya Patel",
    email: "priya.p@example.com",
    avatar: "/placeholder.svg?height=200&width=200&text=PP",
    joinDate: "October 2022",
    bio: "School administrator for Cyber Academy. Managing teachers, students, and curriculum.",
    school: {
      name: "Cyber Academy",
      students: 450,
      teachers: 18,
      courses: 24,
    },
    stats: {
      activeStudents: 432,
      completionRate: 78,
      averageProgress: 65,
      totalEnrollments: 1245,
    },
    recentActions: [
      {
        action: "Added teacher",
        details: "New instructor: Lisa Wang",
        timestamp: "1 day ago",
      },
      {
        action: "Course assignment",
        details: "Assigned 'Cloud Security' to 3 teachers",
        timestamp: "3 days ago",
      },
      {
        action: "Student enrollment",
        details: "Processed 25 new student enrollments",
        timestamp: "1 week ago",
      },
    ],
  },
}

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState("student")
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setUserRole(parsedUser.role)
    }
  }, [])

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  // Get the appropriate user data based on role
  const profileData = userData[userRole]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="w-32 h-32 border-4 border-white">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback>
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{profileData.name}</h1>
                <RoleIndicator />
              </div>
              <p className="text-slate-300 mb-4">{profileData.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                {userRole === "student" && (
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    {profileData.stats.rank}
                  </Badge>
                )}
                {userRole === "teacher" && (
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    Instructor
                  </Badge>
                )}
                {userRole === "admin" && (
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Administrator
                  </Badge>
                )}
                {userRole === "schoolAdmin" && (
                  <Badge variant="outline" className="border-amber-400 text-amber-400">
                    School Admin
                  </Badge>
                )}
                <Badge variant="outline" className="border-slate-400">
                  Member since {profileData.joinDate}
                </Badge>
              </div>
              <p className="max-w-xl text-slate-300">{profileData.bio}</p>
            </div>
            <div className="ml-auto hidden md:block">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userRole === "student" && (
              <>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalPoints}</div>
                  <div className="text-sm">Total Points</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.coursesCompleted}</div>
                  <div className="text-sm">Courses Completed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.lessonsCompleted}</div>
                  <div className="text-sm">Lessons Completed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.streak} Days</div>
                  <div className="text-sm">Current Streak</div>
                </div>
              </>
            )}

            {userRole === "teacher" && (
              <>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalStudents}</div>
                  <div className="text-sm">Total Students</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.averageRating}</div>
                  <div className="text-sm">Average Rating</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.coursesCreated}</div>
                  <div className="text-sm">Courses Created</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalLessons}</div>
                  <div className="text-sm">Total Lessons</div>
                </div>
              </>
            )}

            {userRole === "admin" && (
              <>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalUsers}</div>
                  <div className="text-sm">Total Users</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.activeCourses}</div>
                  <div className="text-sm">Active Courses</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalSchools}</div>
                  <div className="text-sm">Total Schools</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalRevenue}</div>
                  <div className="text-sm">Total Revenue</div>
                </div>
              </>
            )}

            {userRole === "schoolAdmin" && (
              <>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.activeStudents}</div>
                  <div className="text-sm">Active Students</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.completionRate}%</div>
                  <div className="text-sm">Completion Rate</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.averageProgress}%</div>
                  <div className="text-sm">Average Progress</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold mb-1">{profileData.stats.totalEnrollments}</div>
                  <div className="text-sm">Total Enrollments</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={tabParam || getDefaultTab()} className="w-full">
            <TabsList className="w-full md:w-auto justify-start mb-8">
              {userRole === "student" && (
                <>
                  <TabsTrigger value="progress">My Progress</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                </>
              )}

              {userRole === "teacher" && (
                <>
                  <TabsTrigger value="courses">My Courses</TabsTrigger>
                  <TabsTrigger value="students">My Students</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </>
              )}

              {userRole === "admin" && (
                <>
                  <TabsTrigger value="overview">Platform Overview</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                </>
              )}

              {userRole === "schoolAdmin" && (
                <>
                  <TabsTrigger value="school">School Overview</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                </>
              )}

              <TabsTrigger value="custom-course">Create Course</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Student Tabs */}
            {userRole === "student" && (
              <>
                <TabsContent value="progress">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Enrolled Courses</CardTitle>
                          <CardDescription>Track your progress in current courses</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {profileData.enrolledCourses.map((course) => (
                              <div key={course.id} className="flex flex-col md:flex-row gap-4 items-start">
                                <img
                                  src={course.image || "/placeholder.svg"}
                                  alt={course.title}
                                  className="w-full md:w-32 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="font-medium">{course.title}</h3>
                                    <div className="text-sm text-slate-500">Last accessed: {course.lastAccessed}</div>
                                  </div>
                                  <div className="space-y-2 w-full">
                                    <div className="flex justify-between text-sm">
                                      <span>Progress</span>
                                      <span>{course.progress}%</span>
                                    </div>
                                    <Progress value={course.progress} className="h-2" />
                                  </div>
                                </div>
                                <Link href={`/courses/${course.id}`}>
                                  <Button variant="outline" size="sm">
                                    Continue
                                  </Button>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Completed Courses</CardTitle>
                          <CardDescription>Courses you've successfully finished</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {profileData.completedCourses.map((course) => (
                              <div key={course.id} className="flex flex-col md:flex-row gap-4 items-start">
                                <img
                                  src={course.image || "/placeholder.svg"}
                                  alt={course.title}
                                  className="w-full md:w-32 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="font-medium">{course.title}</h3>
                                    <div className="text-sm text-slate-500">Completed: {course.completedDate}</div>
                                  </div>
                                  <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                    <span className="text-sm text-emerald-600">Completed</span>
                                    {course.certificate && (
                                      <Badge className="ml-3 bg-amber-100 text-amber-800 hover:bg-amber-100">
                                        Certificate Earned
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <Link href={`/courses/${course.id}`}>
                                  <Button variant="outline" size="sm">
                                    Review
                                  </Button>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Rank Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center mb-6">
                            <Shield className="h-16 w-16 mx-auto text-emerald-600 mb-2" />
                            <h3 className="font-bold text-lg">{profileData.stats.rank}</h3>
                            <p className="text-sm text-slate-500">
                              {profileData.stats.pointsToNextRank} points to {profileData.stats.nextRank}
                            </p>
                          </div>
                          <Progress
                            value={
                              (profileData.stats.totalPoints /
                                (profileData.stats.totalPoints + profileData.stats.pointsToNextRank)) *
                              100
                            }
                            className="h-2 mb-4"
                          />
                          <div className="flex justify-between text-sm text-slate-500">
                            <span>{profileData.stats.totalPoints} pts</span>
                            <span>{profileData.stats.totalPoints + profileData.stats.pointsToNextRank} pts</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Recent Badges</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-3 gap-4">
                            {profileData.badges.map((badge, index) => (
                              <div key={index} className="text-center">
                                <img
                                  src={badge.image || "/placeholder.svg"}
                                  alt={badge.name}
                                  className="w-16 h-16 mx-auto mb-2"
                                />
                                <h4 className="text-sm font-medium">{badge.name}</h4>
                                <p className="text-xs text-slate-500">{badge.earned}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="achievements">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profileData.achievements.map((achievement, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-100 rounded-full">
                              <achievement.icon className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                              <h3 className="font-bold mb-1">{achievement.title}</h3>
                              <p className="text-sm text-slate-500 mb-2">{achievement.description}</p>
                              <p className="text-xs text-slate-400">Earned on {achievement.date}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="certificates">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profileData.completedCourses
                      .filter((course) => course.certificate)
                      .map((course) => (
                        <Card key={course.id} className="overflow-hidden">
                          <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                            <Certificate className="h-20 w-20 text-emerald-600" />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription>Completed on {course.completedDate}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                View
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </>
            )}

            {/* Teacher Tabs */}
            {userRole === "teacher" && (
              <>
                <TabsContent value="courses">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profileData.teachingCourses.map((course) => (
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
                            <div className="flex items-center">
                              <span className="text-amber-500 mr-1">★</span>
                              <span className="text-sm">{course.rating}</span>
                            </div>
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

                    <Link href="/teacher/dashboard" className="block">
                      <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full">
                        <BookOpen className="h-12 w-12 text-slate-300 mb-4" />
                        <h3 className="font-medium text-center mb-2">Create New Course</h3>
                        <p className="text-sm text-slate-500 text-center mb-4">
                          Add a new course to your teaching portfolio
                        </p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Create Course</Button>
                      </Card>
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="students">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Students</CardTitle>
                      <CardDescription>Students enrolled in your courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            name: "Alex Johnson",
                            email: "alex.j@example.com",
                            progress: 78,
                            courses: 2,
                            lastActive: "Today",
                            avatar: "/placeholder.svg?height=40&width=40&text=AJ",
                          },
                          {
                            name: "Maria Garcia",
                            email: "maria.g@example.com",
                            progress: 92,
                            courses: 3,
                            lastActive: "Yesterday",
                            avatar: "/placeholder.svg?height=40&width=40&text=MG",
                          },
                          {
                            name: "David Kim",
                            email: "david.k@example.com",
                            progress: 45,
                            courses: 1,
                            lastActive: "3 days ago",
                            avatar: "/placeholder.svg?height=40&width=40&text=DK",
                          },
                        ].map((student, index) => (
                          <div
                            key={index}
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
                      <div className="mt-6 text-center">
                        <Link href="/teacher/dashboard?tab=students">
                          <Button variant="outline">View All Students</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="certifications">
                  <div className="grid md:grid-cols-2 gap-6">
                    {profileData.certifications.map((cert, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{cert.name}</CardTitle>
                          <CardDescription>
                            Issued by {cert.issuer} • {cert.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-end">
                            <Button variant="outline" size="sm">
                              View Certificate
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </>
            )}

            {/* Admin Tabs */}
            {userRole === "admin" && (
              <>
                <TabsContent value="overview">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Platform Statistics</CardTitle>
                        <CardDescription>Overview of platform performance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Total Users</span>
                            <span className="font-bold">{profileData.stats.totalUsers}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Active Courses</span>
                            <span className="font-bold">{profileData.stats.activeCourses}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Total Schools</span>
                            <span className="font-bold">{profileData.stats.totalSchools}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Total Revenue</span>
                            <span className="font-bold">{profileData.stats.totalRevenue}</span>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link href="/admin/dashboard">
                            <Button className="w-full">Go to Admin Dashboard</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common administrative tasks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Link href="/admin/dashboard">
                            <Button variant="outline" className="w-full justify-start">
                              <Users className="mr-2 h-4 w-4" />
                              Manage Users
                            </Button>
                          </Link>
                          <Link href="/admin/dashboard?tab=courses">
                            <Button variant="outline" className="w-full justify-start">
                              <BookOpen className="mr-2 h-4 w-4" />
                              Manage Courses
                            </Button>
                          </Link>
                          <Link href="/admin/schools">
                            <Button variant="outline" className="w-full justify-start">
                              <School className="mr-2 h-4 w-4" />
                              Manage Schools
                            </Button>
                          </Link>
                          <Link href="/admin/dashboard?tab=logs">
                            <Button variant="outline" className="w-full justify-start">
                              <Clock className="mr-2 h-4 w-4" />
                              View System Logs
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your recent administrative actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {profileData.recentActions.map((action, index) => (
                          <div key={index} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                            <div className="p-2 bg-slate-100 rounded-full mr-4">
                              <Clock className="h-4 w-4 text-slate-500" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <h3 className="font-medium">{action.action}</h3>
                                <span className="text-sm text-slate-500">{action.timestamp}</span>
                              </div>
                              <p className="text-sm text-slate-600">{action.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}

            {/* School Admin Tabs */}
            {userRole === "schoolAdmin" && (
              <>
                <TabsContent value="school">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>{profileData.school.name}</CardTitle>
                        <CardDescription>School overview and statistics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Total Students</span>
                            <span className="font-bold">{profileData.school.students}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Total Teachers</span>
                            <span className="font-bold">{profileData.school.teachers}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Active Courses</span>
                            <span className="font-bold">{profileData.school.courses}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Completion Rate</span>
                            <span className="font-bold">{profileData.stats.completionRate}%</span>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link href="/admin/schools">
                            <Button className="w-full">Manage School</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common school management tasks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Link href="/admin/schools?tab=students">
                            <Button variant="outline" className="w-full justify-start">
                              <Users className="mr-2 h-4 w-4" />
                              Manage Students
                            </Button>
                          </Link>
                          <Link href="/admin/schools?tab=teachers">
                            <Button variant="outline" className="w-full justify-start">
                              <Users className="mr-2 h-4 w-4" />
                              Manage Teachers
                            </Button>
                          </Link>
                          <Link href="/admin/schools?tab=courses">
                            <Button variant="outline" className="w-full justify-start">
                              <BookOpen className="mr-2 h-4 w-4" />
                              Manage Courses
                            </Button>
                          </Link>
                          <Link href="/admin/schools?tab=details">
                            <Button variant="outline" className="w-full justify-start">
                              <School className="mr-2 h-4 w-4" />
                              School Settings
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your recent school management actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {profileData.recentActions.map((action, index) => (
                          <div key={index} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                            <div className="p-2 bg-slate-100 rounded-full mr-4">
                              <Clock className="h-4 w-4 text-slate-500" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <h3 className="font-medium">{action.action}</h3>
                                <span className="text-sm text-slate-500">{action.timestamp}</span>
                              </div>
                              <p className="text-sm text-slate-600">{action.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}

            {/* Common Tabs for All Roles */}
            <TabsContent value="custom-course">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Create Your Custom Course</h2>
                  <Link href="/courses">
                    <Button variant="outline">Browse Existing Courses</Button>
                  </Link>
                </div>

                <p className="text-slate-600 mb-6">
                  Design your own personalized learning experience by creating a custom course tailored to your specific
                  interests and goals in cybersecurity.
                </p>

                <CreateCourseForm redirectOnCreate={true} />
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Manage your account information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">First Name</Label>
                          <Input
                            type="text"
                            className="w-full p-2 border rounded"
                            defaultValue={profileData.name.split(" ")[0]}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Last Name</Label>
                          <Input
                            type="text"
                            className="w-full p-2 border rounded"
                            defaultValue={profileData.name.split(" ")[1]}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Email</Label>
                        <Input type="email" className="w-full p-2 border rounded" defaultValue={profileData.email} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Bio</Label>
                        <Textarea className="w-full p-2 border rounded" rows={3} defaultValue={profileData.bio} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Notification Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Course updates</Label>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">New course recommendations</Label>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Forum activity</Label>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Achievement notifications</Label>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Marketing emails</Label>
                          <Checkbox />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Privacy Settings</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Show my profile to other students</Label>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Show my course progress</Label>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Show my achievements</Label>
                          <Checkbox defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-4">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

// Helper function to determine the default tab based on user role
function getDefaultTab() {
  // Get user from localStorage
  const storedUser = localStorage.getItem("tempUser")
  if (!storedUser) return "progress"

  const user = JSON.parse(storedUser)
  const role = user.role

  switch (role) {
    case "teacher":
      return "courses"
    case "admin":
      return "overview"
    case "schoolAdmin":
      return "school"
    default:
      return "progress"
  }
}

