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
import type { Question } from "@/types/schema"

// Mock data for questions
const questions: Question[] = [
  {
    questionId: 1001,
    lessonId: 101,
    question: "What is the primary purpose of a firewall in network security?",
    correctAnswer: "To monitor and control incoming and outgoing network traffic based on predetermined security rules",
    difficulty: "easy",
    createdAt: "2023-11-16T10:30:00Z",
  },
  {
    questionId: 1002,
    lessonId: 101,
    question: "Which of the following is NOT a common network protocol?",
    correctAnswer: "XTP (Xpress Transfer Protocol)",
    difficulty: "medium",
    createdAt: "2023-11-16T11:45:00Z",
  },
  {
    questionId: 1003,
    lessonId: 102,
    question: "What encryption protocol is commonly used to secure web traffic?",
    correctAnswer: "TLS (Transport Layer Security)",
    difficulty: "easy",
    createdAt: "2023-11-21T14:30:00Z",
  },
  {
    questionId: 1004,
    lessonId: 103,
    question: "What is the difference between stateful and stateless firewalls?",
    correctAnswer:
      "Stateful firewalls track the state of active connections, while stateless firewalls check packets against a set of rules without tracking connection state",
    difficulty: "hard",
    createdAt: "2023-11-26T09:15:00Z",
  },
  {
    questionId: 1005,
    lessonId: 104,
    question: "What is the first phase of the ethical hacking methodology?",
    correctAnswer: "Reconnaissance",
    difficulty: "easy",
    createdAt: "2024-01-11T11:30:00Z",
  },
  {
    questionId: 1006,
    lessonId: 105,
    question: "Which tool is commonly used for vulnerability scanning?",
    correctAnswer: "Nessus",
    difficulty: "medium",
    createdAt: "2024-01-16T13:45:00Z",
  },
]

// Mock data for lessons (for the dropdown)
const lessons = [
  { lessonId: 101, title: "Introduction to Network Security" },
  { lessonId: 102, title: "Network Protocols and Security" },
  { lessonId: 103, title: "Firewall Configuration" },
  { lessonId: 104, title: "Ethical Hacking Methodology" },
  { lessonId: 105, title: "Vulnerability Scanning" },
  { lessonId: 106, title: "Incident Response Planning" },
]

export default function QuestionsPage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter questions based on lesson, difficulty, and search query
  const filteredQuestions = questions.filter((question) => {
    const matchesLesson = selectedLesson ? question.lessonId === selectedLesson : true
    const matchesDifficulty = selectedDifficulty ? question.difficulty === selectedDifficulty : true
    const matchesSearch =
      searchQuery.toLowerCase() === ""
        ? true
        : question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          question.correctAnswer.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesLesson && matchesDifficulty && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const getLessonTitle = (lessonId: number) => {
    const lesson = lessons.find((l) => l.lessonId === lessonId)
    return lesson ? lesson.title : "Unknown Lesson"
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Questions</h1>
      </div>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Manage Questions</CardTitle>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  className="pl-10 w-full md:w-80"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select onValueChange={(value) => setSelectedLesson(value === "all" ? null : Number.parseInt(value))}>
                <SelectTrigger className="w-full md:w-60">
                  <SelectValue placeholder="Filter by lesson" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Lessons</SelectItem>
                  {lessons.map((lesson) => (
                    <SelectItem key={lesson.lessonId} value={lesson.lessonId.toString()}>
                      {lesson.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setSelectedDifficulty(value === "all" ? null : value)}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Question
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Question</DialogTitle>
                    <DialogDescription>Add a new question to a lesson.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="question">Question</Label>
                      <Textarea id="question" placeholder="Enter question text" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="correctAnswer">Correct Answer</Label>
                      <Textarea id="correctAnswer" placeholder="Enter correct answer" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lessonId">Lesson</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select lesson" />
                        </SelectTrigger>
                        <SelectContent>
                          {lessons.map((lesson) => (
                            <SelectItem key={lesson.lessonId} value={lesson.lessonId.toString()}>
                              {lesson.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Create Question</Button>
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
                  <TableHead>Question ID</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead>Lesson</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question) => (
                  <TableRow key={question.questionId}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{question.questionId}</TableCell>
                    <TableCell>
                      <div className="truncate max-w-xs font-medium">{question.question}</div>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/admin/courses/lessons/${question.lessonId}`}
                        className="text-blue-600 hover:underline"
                      >
                        {getLessonTitle(question.lessonId)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          question.difficulty === "easy"
                            ? "bg-emerald-100 text-emerald-800"
                            : question.difficulty === "medium"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(question.createdAt)}</TableCell>
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
                            <Link href={`/admin/questions/${question.questionId}`} className="w-full">
                              View Question
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <Link href={`/admin/questions/${question.questionId}/edit`} className="w-full">
                              Edit Question
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <Link href={`/admin/questions/${question.questionId}/answers`} className="w-full">
                              View Answers
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Question
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
              Showing <strong>{filteredQuestions.length}</strong> of <strong>{questions.length}</strong> questions
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

