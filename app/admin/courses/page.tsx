"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
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
import { Search, MoreVertical, PlusCircle, Edit, Trash2, Eye, FileText } from "lucide-react"
import type { Course } from "@/types/schema"

// Mock data for courses
const courses: Course[] = [
  {
    courseId: 1,
    title: "Network Security Fundamentals",
    description: "Learn the core principles of network security, including protocols, firewalls, and threat detection.",
    difficulty: "beginner",
    createdAt: "2023-11-10T14:30:00Z",
  },
  {
    courseId: 2,
    title: "Ethical Hacking & Penetration Testing",
    description: "Master the techniques used by security professionals to identify and exploit vulnerabilities.",
    difficulty: "intermediate",
    createdAt: "2024-01-05T09:15:00Z",
  },
  {
    courseId: 3,
    title: "Security Operations & Incident Response",
    description: "Develop skills to detect, analyze, and respond to cybersecurity incidents effectively.",
    difficulty: "advanced",
    createdAt: "2023-12-15T11:45:00Z",
  },
  {
    courseId: 4,
    title: "Web Application Security",
    description: "Learn to identify and mitigate security vulnerabilities in web applications.",
    difficulty: "intermediate",
    createdAt: "2024-02-08T13:20:00Z",
  },
  {
    courseId: 5,
    title: "Cloud Security Fundamentals",
    description: "Understand security principles and best practices for major cloud platforms.",
    difficulty: "beginner",
    createdAt: "2023-10-20T10:00:00Z",
  },
  {
    courseId: 6,
    title: "Malware Analysis & Reverse Engineering",
    description: "Learn techniques to analyze malicious software and understand its behavior.",
    difficulty: "advanced",
    createdAt: "2024-03-10T15:30:00Z",
  },
]

export default function CoursesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter courses based on difficulty and search query
  const filteredCourses = courses.filter((course) => {
    const matchesDifficulty = selectedDifficulty ? course.difficulty === selectedDifficulty : true
    const matchesSearch =
      searchQuery.toLowerCase() === ""
        ? true
        : course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesDifficulty && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
      </div>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Manage Courses</CardTitle>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  className="pl-10 w-full md:w-80"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select onValueChange={(value) => setSelectedDifficulty(value === "all" ? null : value)}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
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
                      <Label htmlFor="title">Course Title</Label>
                      <Input id="title" placeholder="Enter course title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Enter course description" rows={4} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty Level</Label>
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
                  <TableHead>Course ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.courseId}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{course.courseId}</TableCell>
                    <TableCell>
                      <div className="font-medium">{course.title}</div>
                    </TableCell>
                    <TableCell>
                      <div className="truncate max-w-xs">{course.description}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          course.difficulty === "beginner"
                            ? "bg-emerald-100 text-emerald-800"
                            : course.difficulty === "intermediate"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                        }
                      >
                        {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(course.createdAt)}</TableCell>
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
                            <Link href={`/admin/courses/${course.courseId}`} className="w-full">
                              View Course
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <Link href={`/admin/courses/${course.courseId}/edit`} className="w-full">
                              Edit Course
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <Link href={`/admin/courses/${course.courseId}/lessons`} className="w-full">
                              Manage Lessons
                            </Link>
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
              Showing <strong>{filteredCourses.length}</strong> of <strong>{courses.length}</strong> courses
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
    </div>
  )
}

