"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Search, MoreVertical, PlusCircle, Edit, Trash2, Eye, HelpCircle } from "lucide-react"
import type { Lesson } from "@/types/schema"

// Mock data for lessons
const lessons: Lesson[] = [
  {
    lessonId: 101,
    courseId: 1,
    title: "Introduction to Network Security",
    content:
      "This lesson covers the basic concepts of network security and why it's important in today's digital landscape.",
    createdAt: "2023-11-15T10:30:00Z",
  },
  {
    lessonId: 102,
    courseId: 1,
    title: "Network Protocols and Security",
    content: "Learn about common network protocols and their security implications, including TCP/IP, UDP, and HTTP.",
    createdAt: "2023-11-20T14:45:00Z",
  },
  {
    lessonId: 103,
    courseId: 1,
    title: "Firewall Configuration",
    content: "This lesson teaches you how to configure firewalls to protect your network from unauthorized access.",
    createdAt: "2023-11-25T09:15:00Z",
  },
  {
    lessonId: 104,
    courseId: 2,
    title: "Ethical Hacking Methodology",
    content: "Learn the systematic approach to ethical hacking, including reconnaissance, scanning, and exploitation.",
    createdAt: "2024-01-10T11:30:00Z",
  },
  {
    lessonId: 105,
    courseId: 2,
    title: "Vulnerability Scanning",
    content: "This lesson covers tools and techniques for identifying vulnerabilities in systems and networks.",
    createdAt: "2024-01-15T13:45:00Z",
  },
  {
    lessonId: 106,
    courseId: 3,
    title: "Incident Response Planning",
    content: "Learn how to develop and implement an effective incident response plan for cybersecurity events.",
    createdAt: "2023-12-20T15:00:00Z",
  },
]

// Mock data for courses (for the dropdown)
const courses = [
  { courseId: 1, title: "Network Security Fundamentals" },
  { courseId: 2, title: "Ethical Hacking & Penetration Testing" },
  { courseId: 3, title: "Security Operations & Incident Response" },
  { courseId: 4, title: "Web Application Security" },
  { courseId: 5, title: "Cloud Security Fundamentals" },
  { courseId: 6, title: "Malware Analysis & Reverse Engineering" },
]

export default function LessonsPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter lessons based on course and search query
  const filteredLessons = lessons.filter((lesson) => {
    const matchesCourse = selectedCourse ? lesson.courseId === selectedCourse : true
    const matchesSearch =
      searchQuery.toLowerCase() === ""
        ? true
        : lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lesson.content.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCourse && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const getCourseTitle = (courseId: number) => {
    const course = courses.find((c) => c.courseId === courseId)
    return course ? course.title : "Unknown Course"
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Lessons</h1>
      </div>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Manage Lessons</CardTitle>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  className="pl-10 w-full md:w-80"
                  placeholder="Search lessons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select onValueChange={(value) => setSelectedCourse(value === "all" ? null : Number.parseInt(value))}>
                <SelectTrigger className="w-full md:w-60">
                  <SelectValue placeholder="Filter by course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {courses.map((course) => (
                    <SelectItem key={course.courseId} value={course.courseId.toString()}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Lesson
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Lesson</DialogTitle>
                    <DialogDescription>
                      Add a new lesson to a course. You can edit details and add content later.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Lesson Title</Label>
                      <Input id="title" placeholder="Enter lesson title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea id="content" placeholder="Enter lesson content" rows={6} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="courseId">Course</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.courseId} value={course.courseId.toString()}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Create Lesson</Button>
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
                  <TableHead>Lesson ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Content</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLessons.map((lesson) => (
                  <TableRow key={lesson.lessonId}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{lesson.lessonId}</TableCell>
                    <TableCell>
                      <div className="font-medium">{lesson.title}</div>
                    </TableCell>
                    <TableCell>
                      <Link href={`/admin/courses/${lesson.courseId}`} className="text-blue-600 hover:underline">
                        {getCourseTitle(lesson.courseId)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="truncate max-w-xs">{lesson.content}</div>
                    </TableCell>
                    <TableCell>{formatDate(lesson.createdAt)}</TableCell>
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
                            <Link href={`/admin/courses/lessons/${lesson.lessonId}`} className="w-full">
                              View Lesson
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <Link href={`/admin/courses/lessons/${lesson.lessonId}/edit`} className="w-full">
                              Edit Lesson
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <HelpCircle className="mr-2 h-4 w-4" />
                            <Link href={`/admin/courses/lessons/${lesson.lessonId}/questions`} className="w-full">
                              Manage Questions
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Lesson
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
              Showing <strong>{filteredLessons.length}</strong> of <strong>{lessons.length}</strong> lessons
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

