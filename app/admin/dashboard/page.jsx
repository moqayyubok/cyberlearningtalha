import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Users,
  BookOpen,
  Award,
  Shield,
  Search,
  MoreVertical,
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  Download,
  MessageSquare,
  UserPlus,
  FileText,
  Settings,
  BarChart,
  User,
  School,
} from "lucide-react"

// Mock data for users
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "student",
    status: "active",
    courses: 3,
    joined: "Jan 15, 2024",
    lastLogin: "Apr 5, 2024",
    avatar: "/placeholder.svg?height=40&width=40&text=AJ",
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "teacher",
    status: "active",
    courses: 5,
    joined: "Nov 8, 2023",
    lastLogin: "Apr 7, 2024",
    avatar: "/placeholder.svg?height=40&width=40&text=SC",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    email: "michael.r@example.com",
    role: "admin",
    status: "active",
    courses: 0,
    joined: "Aug 22, 2023",
    lastLogin: "Apr 6, 2024",
    avatar: "/placeholder.svg?height=40&width=40&text=MR",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.w@example.com",
    role: "student",
    status: "inactive",
    courses: 2,
    joined: "Feb 3, 2024",
    lastLogin: "Mar 15, 2024",
    avatar: "/placeholder.svg?height=40&width=40&text=EW",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.kim@example.com",
    role: "student",
    status: "active",
    courses: 4,
    joined: "Dec 12, 2023",
    lastLogin: "Apr 7, 2024",
    avatar: "/placeholder.svg?height=40&width=40&text=DK",
  },
  {
    id: 6,
    name: "Priya Patel",
    email: "priya.p@example.com",
    role: "teacher",
    status: "active",
    courses: 3,
    joined: "Oct 5, 2023",
    lastLogin: "Apr 6, 2024",
    avatar: "/placeholder.svg?height=40&width=40&text=PP",
  },
]

// Mock data for courses
const courses = [
  {
    id: "network-security",
    title: "Network Security Fundamentals",
    instructor: "Sarah Chen",
    students: 1245,
    status: "active",
    created: "Nov 10, 2023",
    lastUpdated: "Mar 28, 2024",
    revenue: "$24,900",
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    instructor: "Michael Rodriguez",
    students: 987,
    status: "active",
    created: "Jan 5, 2024",
    lastUpdated: "Apr 2, 2024",
    revenue: "$19,740",
  },
  {
    id: "incident-response",
    title: "Security Operations & Incident Response",
    instructor: "Priya Patel",
    students: 756,
    status: "active",
    created: "Dec 15, 2023",
    lastUpdated: "Mar 20, 2024",
    revenue: "$15,120",
  },
  {
    id: "web-security",
    title: "Web Application Security",
    instructor: "Sarah Chen",
    students: 1089,
    status: "active",
    created: "Feb 8, 2024",
    lastUpdated: "Apr 5, 2024",
    revenue: "$21,780",
  },
  {
    id: "cloud-security",
    title: "Cloud Security Fundamentals",
    instructor: "Priya Patel",
    students: 1320,
    status: "active",
    created: "Oct 20, 2023",
    lastUpdated: "Mar 15, 2024",
    revenue: "$26,400",
  },
  {
    id: "malware-analysis",
    title: "Malware Analysis & Reverse Engineering",
    instructor: "Michael Rodriguez",
    students: 645,
    status: "draft",
    created: "Mar 10, 2024",
    lastUpdated: "Apr 1, 2024",
    revenue: "$0",
  },
]

// Mock data for rewards
const rewards = [
  {
    id: 1,
    name: "Fast Learner",
    type: "achievement",
    criteria: "Complete 5 lessons in one day",
    points: 50,
    icon: "🚀",
    created: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Perfect Score",
    type: "achievement",
    criteria: "Score 100% on a quiz",
    points: 100,
    icon: "🎯",
    created: "Jan 15, 2024",
  },
  {
    id: 3,
    name: "Network Defender",
    type: "badge",
    criteria: "Complete Network Security course",
    points: 200,
    icon: "🛡️",
    created: "Jan 20, 2024",
  },
  {
    id: 4,
    name: "Quiz Master",
    type: "badge",
    criteria: "Pass 10 quizzes with 90%+ score",
    points: 150,
    icon: "🏆",
    created: "Feb 5, 2024",
  },
  {
    id: 5,
    name: "Dedicated Learner",
    type: "badge",
    criteria: "Maintain a 7-day learning streak",
    points: 75,
    icon: "📚",
    created: "Feb 10, 2024",
  },
]

// Mock data for logs
const logs = [
  {
    id: 1,
    user: "Alex Johnson",
    action: "Completed lesson",
    details: "Network Security Fundamentals - Lesson 3",
    timestamp: "Apr 7, 2024 - 14:32",
    ip: "192.168.1.105",
  },
  {
    id: 2,
    user: "Sarah Chen",
    action: "Updated course",
    details: "Web Application Security - Added new lesson",
    timestamp: "Apr 7, 2024 - 13:15",
    ip: "192.168.1.87",
  },
  {
    id: 3,
    user: "Michael Rodriguez",
    action: "User management",
    details: "Added new admin user: John Smith",
    timestamp: "Apr 7, 2024 - 11:45",
    ip: "192.168.1.22",
  },
  {
    id: 4,
    user: "David Kim",
    action: "Enrolled in course",
    details: "Cloud Security Fundamentals",
    timestamp: "Apr 7, 2024 - 10:20",
    ip: "192.168.1.156",
  },
  {
    id: 5,
    user: "Emily Wilson",
    action: "Password reset",
    details: "Requested password reset link",
    timestamp: "Apr 6, 2024 - 18:05",
    ip: "192.168.1.201",
  },
  {
    id: 6,
    user: "Priya Patel",
    action: "Created quiz",
    details: "Security Operations - Module 2 Quiz",
    timestamp: "Apr 6, 2024 - 16:30",
    ip: "192.168.1.92",
  },
  {
    id: 7,
    user: "Alex Johnson",
    action: "Submitted assignment",
    details: "Ethical Hacking - Assignment 2",
    timestamp: "Apr 6, 2024 - 15:45",
    ip: "192.168.1.105",
  },
  {
    id: 8,
    user: "System",
    action: "Backup completed",
    details: "Weekly database backup",
    timestamp: "Apr 6, 2024 - 03:00",
    ip: "192.168.1.5",
  },
]

// Mock data for chat logs
const chatLogs = [
  {
    id: 1,
    participants: "Alex Johnson, Sarah Chen",
    course: "Network Security Fundamentals",
    messages: 12,
    lastMessage: "Thanks for clarifying that concept!",
    timestamp: "Apr 7, 2024 - 15:20",
  },
  {
    id: 2,
    participants: "David Kim, Priya Patel",
    course: "Cloud Security Fundamentals",
    messages: 8,
    lastMessage: "When is the next assignment due?",
    timestamp: "Apr 7, 2024 - 14:05",
  },
  {
    id: 3,
    participants: "Emily Wilson, Sarah Chen",
    course: "Web Application Security",
    messages: 15,
    lastMessage: "I'm having trouble with the lab exercise.",
    timestamp: "Apr 6, 2024 - 18:30",
  },
  {
    id: 4,
    participants: "Support Chat",
    course: "General",
    messages: 5,
    lastMessage: "Your account has been updated.",
    timestamp: "Apr 6, 2024 - 16:45",
  },
  {
    id: 5,
    participants: "Course Announcement",
    course: "Ethical Hacking & Penetration Testing",
    messages: 1,
    lastMessage: "New module released: Advanced Exploitation Techniques",
    timestamp: "Apr 6, 2024 - 10:15",
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-slate-300">Manage your platform, users, and content</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/admin/schools">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <School className="mr-2 h-4 w-4" />
                  Manage Schools
                </Button>
              </Link>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Settings className="mr-2 h-4 w-4" />
                System Settings
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
                  <p className="text-sm text-slate-500">Total Users</p>
                  <p className="text-2xl font-bold">2,547</p>
                </div>
                <Users className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Active Courses</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Revenue</p>
                  <p className="text-2xl font-bold">$107,940</p>
                </div>
                <BarChart className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Active Schools</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <School className="h-8 w-8 text-emerald-600" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="w-full md:w-auto justify-start mb-8">
              <TabsTrigger value="users" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex items-center">
                <Award className="mr-2 h-4 w-4" />
                Rewards
              </TabsTrigger>
              <TabsTrigger value="logs" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Logs
              </TabsTrigger>
              <TabsTrigger value="chats" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat Logs
              </TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>Manage Users</CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search users..." />
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add User
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New User</DialogTitle>
                            <DialogDescription>
                              Create a new user account. They will receive an email to set their password.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="Enter first name" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Enter last name" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="Enter email address" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="role">Role</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="student">Student</SelectItem>
                                  <SelectItem value="teacher">Teacher</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="school">School (Optional)</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select school" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="school1">Cyber Academy</SelectItem>
                                  <SelectItem value="school2">Tech High School</SelectItem>
                                  <SelectItem value="school3">Security Institute</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sendEmail" />
                              <label
                                htmlFor="sendEmail"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Send welcome email
                              </label>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">Create User</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Courses</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Last Login</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={user.avatar} alt={user.name} />
                                  <AvatarFallback>
                                    {user.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{user.name}</p>
                                  <p className="text-xs text-slate-500">{user.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  user.role === "admin"
                                    ? "bg-purple-100 text-purple-800"
                                    : user.role === "teacher"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-slate-100 text-slate-800"
                                }
                              >
                                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  user.status === "active"
                                    ? "border-emerald-500 text-emerald-600"
                                    : "border-slate-500 text-slate-600"
                                }
                              >
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell>{user.courses}</TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell>{user.lastLogin}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    View Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit User
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Send Message
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Shield className="mr-2 h-4 w-4" />
                                    Reset Password
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete User
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-slate-500">
                      Showing <strong>1-6</strong> of <strong>2,547</strong> users
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>Manage Courses</CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search courses..." />
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Course
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create New Course</DialogTitle>
                            <DialogDescription>
                              Add a new course to the platform. You can edit details and add content later.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="courseTitle">Course Title</Label>
                              <Input id="courseTitle" placeholder="Enter course title" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="courseDescription">Description</Label>
                              <Input id="courseDescription" placeholder="Enter course description" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="instructor">Instructor</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select instructor" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="sarah">Sarah Chen</SelectItem>
                                  <SelectItem value="michael">Michael Rodriguez</SelectItem>
                                  <SelectItem value="priya">Priya Patel</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="level">Difficulty Level</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="beginner">Beginner</SelectItem>
                                  <SelectItem value="intermediate">Intermediate</SelectItem>
                                  <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="price">Price ($)</Label>
                              <Input id="price" type="number" placeholder="Enter price" />
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="publishNow" />
                              <label
                                htmlFor="publishNow"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Publish immediately
                              </label>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">Create Course</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Instructor</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {courses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">{course.title}</p>
                                <p className="text-xs text-slate-500">Last updated: {course.lastUpdated}</p>
                              </div>
                            </TableCell>
                            <TableCell>{course.instructor}</TableCell>
                            <TableCell>{course.students.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  course.status === "active"
                                    ? "border-emerald-500 text-emerald-600"
                                    : "border-amber-500 text-amber-600"
                                }
                              >
                                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell>{course.created}</TableCell>
                            <TableCell>{course.revenue}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Course
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Course
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Manage Lessons
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Users className="mr-2 h-4 w-4" />
                                    Manage Students
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete Course
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-slate-500">
                      Showing <strong>1-6</strong> of <strong>24</strong> courses
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>Manage Rewards</CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search rewards..." />
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Reward
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create New Reward</DialogTitle>
                            <DialogDescription>Add a new achievement or badge to motivate students.</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="rewardName">Reward Name</Label>
                              <Input id="rewardName" placeholder="Enter reward name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="rewardType">Type</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="achievement">Achievement</SelectItem>
                                  <SelectItem value="badge">Badge</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="criteria">Criteria</Label>
                              <Input id="criteria" placeholder="Enter criteria for earning" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="points">Points Value</Label>
                              <Input id="points" type="number" placeholder="Enter points" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="icon">Icon</Label>
                              <Input id="icon" placeholder="Enter emoji or icon code" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">Create Reward</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead>Reward</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Criteria</TableHead>
                          <TableHead>Points</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rewards.map((reward) => (
                          <TableRow key={reward.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                                  <span className="text-xl">{reward.icon}</span>
                                </div>
                                <div>
                                  <p className="font-medium">{reward.name}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  reward.type === "achievement"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-purple-100 text-purple-800"
                                }
                              >
                                {reward.type.charAt(0).toUpperCase() + reward.type.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell>{reward.criteria}</TableCell>
                            <TableCell>{reward.points}</TableCell>
                            <TableCell>{reward.created}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Reward
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Users className="mr-2 h-4 w-4" />
                                    View Recipients
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete Reward
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Logs Tab */}
            <TabsContent value="logs">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>System Logs</CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search logs..." />
                      </div>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Logs
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Details</TableHead>
                          <TableHead>Timestamp</TableHead>
                          <TableHead>IP Address</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {logs.map((log) => (
                          <TableRow key={log.id}>
                            <TableCell>{log.user}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  log.action.includes("Completed") || log.action.includes("Enrolled")
                                    ? "border-emerald-500 text-emerald-600"
                                    : log.action.includes("Updated") || log.action.includes("Created")
                                      ? "border-blue-500 text-blue-600"
                                      : log.action.includes("management") || log.action.includes("reset")
                                        ? "border-amber-500 text-amber-600"
                                        : "border-slate-500 text-slate-600"
                                }
                              >
                                {log.action}
                              </Badge>
                            </TableCell>
                            <TableCell>{log.details}</TableCell>
                            <TableCell>{log.timestamp}</TableCell>
                            <TableCell>{log.ip}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-slate-500">
                      Showing <strong>1-8</strong> of <strong>1,245</strong> logs
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Chat Logs Tab */}
            <TabsContent value="chats">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>Chat Logs</CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search chat logs..." />
                      </div>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Chats
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Participants</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Messages</TableHead>
                          <TableHead>Last Message</TableHead>
                          <TableHead>Timestamp</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {chatLogs.map((chat) => (
                          <TableRow key={chat.id}>
                            <TableCell>{chat.participants}</TableCell>
                            <TableCell>{chat.course}</TableCell>
                            <TableCell>{chat.messages}</TableCell>
                            <TableCell>
                              <p className="truncate max-w-xs">{chat.lastMessage}</p>
                            </TableCell>
                            <TableCell>{chat.timestamp}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-slate-500">
                      Showing <strong>1-5</strong> of <strong>124</strong> chat logs
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
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

