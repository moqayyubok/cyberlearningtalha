"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Edit, Mail, Calendar, BookOpen, Award, Shield, UserIcon } from "lucide-react"
import type { User, Progress as ProgressType, UserPermission } from "@/types/schema"

export default function UserProfilePage({ params }: { params: { id: string } }) {
  const userId = Number.parseInt(params.id)
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user: User = {
    userId,
    userName: "alexj",
    firstName: "Alex",
    middleName: "David",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    role: "student",
    avatarUrl: "/placeholder.svg?height=100&width=100&text=AJ",
    createdAt: "2024-01-15T10:30:00Z",
  }

  // Mock progress data
  const progressData: ProgressType[] = [
    {
      progressId: 1,
      userId,
      lessonId: 101,
      status: "completed",
      createdAt: "2024-03-10T14:30:00Z",
    },
    {
      progressId: 2,
      userId,
      lessonId: 102,
      status: "completed",
      createdAt: "2024-03-15T16:45:00Z",
    },
    {
      progressId: 3,
      userId,
      lessonId: 103,
      status: "in progress",
      createdAt: "2024-03-20T09:15:00Z",
    },
    {
      progressId: 4,
      userId,
      lessonId: 104,
      status: "not started",
      createdAt: "2024-03-25T11:30:00Z",
    },
  ]

  // Mock permissions data
  const permissionsData: UserPermission[] = [
    {
      permissionId: 1,
      userId,
      role: "student",
      text: "View enrolled courses",
    },
    {
      permissionId: 2,
      userId,
      role: "student",
      text: "Submit assignments",
    },
    {
      permissionId: 3,
      userId,
      role: "student",
      text: "Participate in forums",
    },
    {
      permissionId: 4,
      userId,
      role: "student",
      text: "View certificates",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/users">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/admin/users/${userId}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Link>
          </Button>
        </div>
      </div>

      {/* User Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="w-24 h-24 border-4 border-white shadow-md">
              <AvatarImage src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback>
                {user.firstName[0]}
                {user.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-3">
              <div>
                <h2 className="text-2xl font-bold">
                  {user.firstName} {user.middleName ? `${user.middleName} ` : ""}
                  {user.lastName}
                </h2>
                <p className="text-slate-500">@{user.userName}</p>
                <div className="flex items-center gap-2 mt-1">
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
                  <Badge variant="outline" className="border-emerald-500 text-emerald-600">
                    Active
                  </Badge>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <UserIcon className="h-4 w-4" />
                  <span>User ID: {user.userId}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="h-4 w-4" />
                  <span>Joined: {formatDate(user.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Details Tabs */}
      <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="profile">
            <UserIcon className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="progress">
            <BookOpen className="h-4 w-4 mr-2" />
            Progress
          </TabsTrigger>
          <TabsTrigger value="permissions">
            <Shield className="h-4 w-4 mr-2" />
            Permissions
          </TabsTrigger>
          <TabsTrigger value="rewards">
            <Award className="h-4 w-4 mr-2" />
            Rewards
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription>Detailed information about the user</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Username</h3>
                    <p>{user.userName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">First Name</h3>
                    <p>{user.firstName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Middle Name</h3>
                    <p>{user.middleName || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Last Name</h3>
                    <p>{user.lastName}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Email</h3>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Role</h3>
                    <p>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Created At</h3>
                    <p>{formatDate(user.createdAt)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Avatar URL</h3>
                    <p className="truncate">{user.avatarUrl || "N/A"}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>User's progress across lessons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Progress ID</TableHead>
                      <TableHead>Lesson ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {progressData.map((progress) => (
                      <TableRow key={progress.progressId}>
                        <TableCell>{progress.progressId}</TableCell>
                        <TableCell>
                          <Link
                            href={`/admin/courses/lessons/${progress.lessonId}`}
                            className="text-blue-600 hover:underline"
                          >
                            {progress.lessonId}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              progress.status === "completed"
                                ? "bg-emerald-100 text-emerald-800"
                                : progress.status === "in progress"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-slate-100 text-slate-800"
                            }
                          >
                            {progress.status.charAt(0).toUpperCase() + progress.status.slice(1).replace(/_/g, " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(progress.createdAt)}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/progress/${progress.progressId}/edit`}>Edit</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Overall Progress</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion Rate</span>
                    <span>
                      {Math.round(
                        (progressData.filter((p) => p.status === "completed").length / progressData.length) * 100,
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={(progressData.filter((p) => p.status === "completed").length / progressData.length) * 100}
                    className="h-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Permissions</CardTitle>
              <CardDescription>Manage what this user can access and modify</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Role-based Permissions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Role</h4>
                        <p className="text-sm text-slate-500">
                          {user.role === "student"
                            ? "Basic access to enrolled courses and learning materials"
                            : user.role === "teacher"
                              ? "Access to create and manage courses and student progress"
                              : "Full administrative access to the platform"}
                        </p>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Specific Permissions</h3>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Permission ID</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {permissionsData.map((permission) => (
                          <TableRow key={permission.permissionId}>
                            <TableCell>{permission.permissionId}</TableCell>
                            <TableCell>{permission.role.charAt(0).toUpperCase() + permission.role.slice(1)}</TableCell>
                            <TableCell>{permission.text}</TableCell>
                            <TableCell>
                              <Badge className="bg-emerald-100 text-emerald-800">Enabled</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/admin/users/${userId}/permissions/edit`} className="w-full">
                      Edit Permissions
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Rewards</CardTitle>
              <CardDescription>Badges and achievements earned by the user</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Badges</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: "Fast Learner",
                        image: "/placeholder.svg?height=80&width=80&text=🚀",
                        date: "Mar 15, 2024",
                      },
                      {
                        name: "Perfect Score",
                        image: "/placeholder.svg?height=80&width=80&text=🎯",
                        date: "Feb 28, 2024",
                      },
                      {
                        name: "Early Bird",
                        image: "/placeholder.svg?height=80&width=80&text=🌅",
                        date: "Jan 10, 2024",
                      },
                    ].map((badge, index) => (
                      <div key={index} className="border rounded-lg p-4 text-center">
                        <img
                          src={badge.image || "/placeholder.svg"}
                          alt={badge.name}
                          className="w-16 h-16 mx-auto mb-2"
                        />
                        <h4 className="font-medium">{badge.name}</h4>
                        <p className="text-xs text-slate-500">Earned on {badge.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Reward Points</h3>
                  <div className="border rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-emerald-600">1,250</div>
                      <div className="text-sm text-slate-500">Total Points</div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Next Rank: Cybersecurity Specialist</span>
                          <span>750 points needed</span>
                        </div>
                        <Progress value={62.5} className="h-2" />
                      </div>
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Recent Transactions</h4>
                        <div className="space-y-2">
                          {[
                            { action: "Completed lesson", points: "+50", date: "Apr 5, 2024" },
                            { action: "Quiz perfect score", points: "+100", date: "Mar 28, 2024" },
                            { action: "Redeemed reward", points: "-200", date: "Mar 15, 2024" },
                          ].map((transaction, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{transaction.action}</span>
                              <div className="flex items-center gap-2">
                                <span
                                  className={transaction.points.startsWith("+") ? "text-emerald-600" : "text-red-600"}
                                >
                                  {transaction.points}
                                </span>
                                <span className="text-slate-500">{transaction.date}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full text-sm">{children}</table>
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead>{children}</thead>
}

function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>
}

function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b">{children}</tr>
}

function TableHead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <th className={`p-3 text-left font-medium ${className || ""}`}>{children}</th>
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="p-3">{children}</td>
}

