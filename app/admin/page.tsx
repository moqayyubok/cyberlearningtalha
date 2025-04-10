import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BookOpen, School, BarChart3, TrendingUp, BookOpenCheck, Award } from "lucide-react"
import { DashboardChart } from "@/components/admin/dashboard-chart"
import { RecentActivityList } from "@/components/admin/recent-activity-list"
import { TopPerformersTable } from "@/components/admin/top-performers-table"

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Last updated: April 7, 2025, 1:02 AM</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Total Users</p>
              <Users className="h-4 w-4 text-slate-500" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">2,547</p>
                <p className="text-xs text-slate-500">+12% from last month</p>
              </div>
              <div className="rounded-full bg-emerald-100 p-1">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Active Courses</p>
              <BookOpen className="h-4 w-4 text-slate-500" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-slate-500">+3 new this month</p>
              </div>
              <div className="rounded-full bg-emerald-100 p-1">
                <BookOpenCheck className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Schools</p>
              <School className="h-4 w-4 text-slate-500" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-xs text-slate-500">+2 from last month</p>
              </div>
              <div className="rounded-full bg-emerald-100 p-1">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">Revenue</p>
              <BarChart3 className="h-4 w-4 text-slate-500" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">$107,940</p>
                <p className="text-xs text-slate-500">+18% from last month</p>
              </div>
              <div className="rounded-full bg-emerald-100 p-1">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>User activity and enrollment trends</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivityList />
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different data views */}
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">
            <Users className="h-4 w-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="courses">
            <BookOpen className="h-4 w-4 mr-2" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="schools">
            <School className="h-4 w-4 mr-2" />
            Schools
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Award className="h-4 w-4 mr-2" />
            Achievements
          </TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Students</CardTitle>
              <CardDescription>Students with highest completion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <TopPerformersTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Courses</CardTitle>
              <CardDescription>Courses with highest enrollment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-3 text-left font-medium">Course</th>
                      <th className="p-3 text-left font-medium">Instructor</th>
                      <th className="p-3 text-left font-medium">Students</th>
                      <th className="p-3 text-left font-medium">Rating</th>
                      <th className="p-3 text-left font-medium">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Network Security Fundamentals",
                        instructor: "Sarah Chen",
                        students: 1245,
                        rating: 4.8,
                        revenue: "$24,900",
                      },
                      {
                        name: "Ethical Hacking & Penetration Testing",
                        instructor: "Michael Rodriguez",
                        students: 987,
                        rating: 4.9,
                        revenue: "$19,740",
                      },
                      {
                        name: "Cloud Security Fundamentals",
                        instructor: "Priya Patel",
                        students: 1320,
                        rating: 4.7,
                        revenue: "$26,400",
                      },
                      {
                        name: "Web Application Security",
                        instructor: "Sarah Chen",
                        students: 1089,
                        rating: 4.6,
                        revenue: "$21,780",
                      },
                      {
                        name: "Security Operations & Incident Response",
                        instructor: "Priya Patel",
                        students: 756,
                        rating: 4.7,
                        revenue: "$15,120",
                      },
                    ].map((course, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3">{course.name}</td>
                        <td className="p-3">{course.instructor}</td>
                        <td className="p-3">{course.students}</td>
                        <td className="p-3">{course.rating}</td>
                        <td className="p-3">{course.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schools" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Schools</CardTitle>
              <CardDescription>Schools with highest student engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-3 text-left font-medium">School</th>
                      <th className="p-3 text-left font-medium">Type</th>
                      <th className="p-3 text-left font-medium">Students</th>
                      <th className="p-3 text-left font-medium">Teachers</th>
                      <th className="p-3 text-left font-medium">Courses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Cyber Academy",
                        type: "University",
                        students: 450,
                        teachers: 18,
                        courses: 24,
                      },
                      {
                        name: "Tech High School",
                        type: "High School",
                        students: 320,
                        teachers: 12,
                        courses: 16,
                      },
                      {
                        name: "Security Institute",
                        type: "Professional",
                        students: 280,
                        teachers: 15,
                        courses: 18,
                      },
                      {
                        name: "Digital Learning Center",
                        type: "Community College",
                        students: 210,
                        teachers: 8,
                        courses: 12,
                      },
                      {
                        name: "Metropolitan University",
                        type: "University",
                        students: 520,
                        teachers: 22,
                        courses: 28,
                      },
                    ].map((school, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3">{school.name}</td>
                        <td className="p-3">{school.type}</td>
                        <td className="p-3">{school.students}</td>
                        <td className="p-3">{school.teachers}</td>
                        <td className="p-3">{school.courses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Latest badges and rewards earned by users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-3 text-left font-medium">User</th>
                      <th className="p-3 text-left font-medium">Achievement</th>
                      <th className="p-3 text-left font-medium">Type</th>
                      <th className="p-3 text-left font-medium">Points</th>
                      <th className="p-3 text-left font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        user: "Alex Johnson",
                        achievement: "Network Defender",
                        type: "Badge",
                        points: 200,
                        date: "Apr 6, 2025",
                      },
                      {
                        user: "Maria Garcia",
                        achievement: "Perfect Score",
                        type: "Achievement",
                        points: 100,
                        date: "Apr 5, 2025",
                      },
                      {
                        user: "David Kim",
                        achievement: "Fast Learner",
                        type: "Achievement",
                        points: 50,
                        date: "Apr 5, 2025",
                      },
                      {
                        user: "Emily Wilson",
                        achievement: "Quiz Master",
                        type: "Badge",
                        points: 150,
                        date: "Apr 4, 2025",
                      },
                      {
                        user: "James Thompson",
                        achievement: "Dedicated Learner",
                        type: "Badge",
                        points: 75,
                        date: "Apr 3, 2025",
                      },
                    ].map((achievement, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3">{achievement.user}</td>
                        <td className="p-3">{achievement.achievement}</td>
                        <td className="p-3">{achievement.type}</td>
                        <td className="p-3">{achievement.points}</td>
                        <td className="p-3">{achievement.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

