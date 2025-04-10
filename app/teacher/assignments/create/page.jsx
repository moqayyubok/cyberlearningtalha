"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, ArrowLeft, Upload, Clock } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import RoleIndicator from "@/components/role-indicator"

export default function CreateAssignmentPage() {
  const router = useRouter()
  const [dueDate, setDueDate] = useState(new Date())

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the data to an API
    alert("Assignment created successfully!")
    router.push("/teacher/assignments")
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/teacher/assignments">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Create New Assignment</h1>
            <p className="text-slate-500">Create an assignment for your students</p>
          </div>
        </div>
        <RoleIndicator />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Assignment Details</CardTitle>
                <CardDescription>Provide the basic information about this assignment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Assignment Title</Label>
                  <Input id="title" placeholder="Enter assignment title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Instructions</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed instructions for the assignment"
                    rows={8}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resources">Additional Resources (Optional)</Label>
                  <Textarea
                    id="resources"
                    placeholder="Provide links or references to help students complete the assignment"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Attachments</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-slate-400 mb-2" />
                    <p className="text-sm text-slate-500 mb-2">Drag and drop files, or click to browse</p>
                    <p className="text-xs text-slate-400">PDF, DOCX, ZIP, etc. (Max 10MB)</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Upload Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grading Criteria</CardTitle>
                <CardDescription>Define how this assignment will be graded</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="points">Total Points</Label>
                    <Input id="points" type="number" min="1" defaultValue="100" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gradingType">Grading Type</Label>
                    <Select defaultValue="rubric">
                      <SelectTrigger>
                        <SelectValue placeholder="Select grading type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="points">Points Based</SelectItem>
                        <SelectItem value="rubric">Rubric</SelectItem>
                        <SelectItem value="complete">Complete/Incomplete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rubric">Rubric (Optional)</Label>
                  <Textarea
                    id="rubric"
                    placeholder="Describe your grading rubric"
                    rows={4}
                    defaultValue="Technical Accuracy: 40 points
Clarity and Organization: 30 points
Depth of Analysis: 20 points
Proper Citations: 10 points"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="allowResubmissions" />
                    <Label htmlFor="allowResubmissions">Allow resubmissions</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="showRubric" defaultChecked />
                    <Label htmlFor="showRubric">Show rubric to students</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Assignment Settings</CardTitle>
                <CardDescription>Configure assignment availability and options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="network">Network Security Fundamentals</SelectItem>
                      <SelectItem value="ethical">Ethical Hacking & Penetration Testing</SelectItem>
                      <SelectItem value="web">Web Application Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="module">Module</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select module" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="module1">Module 1: Introduction</SelectItem>
                      <SelectItem value="module2">Module 2: Network Protocols</SelectItem>
                      <SelectItem value="module3">Module 3: Firewall Configuration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dueDate ? format(dueDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={dueDate} onSelect={setDueDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Due Time</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select defaultValue="11">
                      <SelectTrigger>
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select defaultValue="59">
                      <SelectTrigger>
                        <SelectValue placeholder="Minute" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 60 }, (_, i) => (
                          <SelectItem key={i} value={i.toString().padStart(2, "0")}>
                            {i.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Select defaultValue="pm">
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="AM/PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="am">AM</SelectItem>
                        <SelectItem value="pm">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="timeLimit">Time Limit (Optional)</Label>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <Input id="timeLimit" type="number" placeholder="Minutes" />
                  </div>
                  <p className="text-xs text-slate-500">Leave blank for no time limit</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="published" defaultChecked />
                    <Label htmlFor="published">Publish immediately</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="allowLate" />
                    <Label htmlFor="allowLate">Allow late submissions</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submission Settings</CardTitle>
                <CardDescription>Configure how students will submit their work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="submissionType">Submission Type</Label>
                  <Select defaultValue="file">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="file">File Upload</SelectItem>
                      <SelectItem value="text">Text Entry</SelectItem>
                      <SelectItem value="url">Website URL</SelectItem>
                      <SelectItem value="media">Media Recording</SelectItem>
                      <SelectItem value="multiple">Multiple Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fileTypes">Accepted File Types</Label>
                  <Input id="fileTypes" defaultValue=".pdf, .docx, .pptx, .zip" />
                  <p className="text-xs text-slate-500">Comma-separated list of file extensions</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxFiles">Maximum Files</Label>
                  <Input id="maxFiles" type="number" min="1" defaultValue="3" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxSize">Maximum File Size (MB)</Label>
                  <Input id="maxSize" type="number" min="1" defaultValue="10" />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                Create Assignment
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

