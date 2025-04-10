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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Upload, Plus, Trash2 } from "lucide-react"
import RoleIndicator from "@/components/role-indicator"

export default function CreateCoursePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("basic")
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Module 1: Introduction",
      lessons: [
        { id: 1, title: "Lesson 1: Getting Started", type: "video", duration: "15" },
        { id: 2, title: "Lesson 2: Key Concepts", type: "video", duration: "20" },
      ],
    },
  ])

  const handleAddModule = () => {
    const newModuleId = modules.length > 0 ? Math.max(...modules.map((m) => m.id)) + 1 : 1
    setModules([
      ...modules,
      {
        id: newModuleId,
        title: `Module ${newModuleId}: New Module`,
        lessons: [],
      },
    ])
  }

  const handleAddLesson = (moduleId) => {
    setModules(
      modules.map((module) => {
        if (module.id === moduleId) {
          const newLessonId = module.lessons.length > 0 ? Math.max(...module.lessons.map((l) => l.id)) + 1 : 1
          return {
            ...module,
            lessons: [
              ...module.lessons,
              {
                id: newLessonId,
                title: `Lesson ${newLessonId}: New Lesson`,
                type: "video",
                duration: "15",
              },
            ],
          }
        }
        return module
      }),
    )
  }

  const handleRemoveModule = (moduleId) => {
    setModules(modules.filter((module) => module.id !== moduleId))
  }

  const handleRemoveLesson = (moduleId, lessonId) => {
    setModules(
      modules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lessons: module.lessons.filter((lesson) => lesson.id !== lessonId),
          }
        }
        return module
      }),
    )
  }

  const handleModuleTitleChange = (moduleId, newTitle) => {
    setModules(
      modules.map((module) => {
        if (module.id === moduleId) {
          return { ...module, title: newTitle }
        }
        return module
      }),
    )
  }

  const handleLessonChange = (moduleId, lessonId, field, value) => {
    setModules(
      modules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lessons: module.lessons.map((lesson) => {
              if (lesson.id === lessonId) {
                return { ...lesson, [field]: value }
              }
              return lesson
            }),
          }
        }
        return module
      }),
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the data to an API
    alert("Course created successfully!")
    router.push("/teacher/courses")
  }

  const nextTab = () => {
    if (activeTab === "basic") setActiveTab("curriculum")
    else if (activeTab === "curriculum") setActiveTab("settings")
  }

  const prevTab = () => {
    if (activeTab === "settings") setActiveTab("curriculum")
    else if (activeTab === "curriculum") setActiveTab("basic")
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/teacher/courses">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Create New Course</h1>
            <p className="text-slate-500">Design and publish your cybersecurity course</p>
          </div>
        </div>
        <RoleIndicator />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>

        <form onSubmit={handleSubmit}>
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
                <CardDescription>Provide the basic details about your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input id="title" placeholder="Enter course title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Course Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what students will learn in this course"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="level">Difficulty Level</Label>
                    <Select defaultValue="beginner">
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
                    <Label htmlFor="duration">Estimated Duration</Label>
                    <div className="flex gap-2">
                      <Input id="duration" type="number" min="1" defaultValue="8" required />
                      <Select defaultValue="weeks">
                        <SelectTrigger>
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hours">Hours</SelectItem>
                          <SelectItem value="days">Days</SelectItem>
                          <SelectItem value="weeks">Weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Course Thumbnail</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-slate-400 mb-2" />
                    <p className="text-sm text-slate-500 mb-2">Drag and drop an image, or click to browse</p>
                    <p className="text-xs text-slate-400">Recommended size: 1280x720px (16:9)</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Upload Image
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="network">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="network">Network Security</SelectItem>
                      <SelectItem value="web">Web Security</SelectItem>
                      <SelectItem value="cloud">Cloud Security</SelectItem>
                      <SelectItem value="ethical">Ethical Hacking</SelectItem>
                      <SelectItem value="forensics">Digital Forensics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Enter tags separated by commas" />
                </div>

                <div className="flex justify-end">
                  <Button type="button" onClick={nextTab} className="bg-emerald-600 hover:bg-emerald-700">
                    Continue to Curriculum
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum">
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <CardDescription>Organize your course into modules and lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {modules.map((module) => (
                  <div key={module.id} className="border rounded-md p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <Input
                        value={module.title}
                        onChange={(e) => handleModuleTitleChange(module.id, e.target.value)}
                        className="font-medium text-lg"
                      />
                      <Button variant="ghost" size="icon" type="button" onClick={() => handleRemoveModule(module.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>

                    <div className="pl-4 space-y-3">
                      {module.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center gap-2">
                          <Input
                            value={lesson.title}
                            onChange={(e) => handleLessonChange(module.id, lesson.id, "title", e.target.value)}
                            className="flex-1"
                          />
                          <Select
                            value={lesson.type}
                            onValueChange={(value) => handleLessonChange(module.id, lesson.id, "type", value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="video">Video</SelectItem>
                              <SelectItem value="text">Text</SelectItem>
                              <SelectItem value="quiz">Quiz</SelectItem>
                              <SelectItem value="assignment">Assignment</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            type="number"
                            value={lesson.duration}
                            onChange={(e) => handleLessonChange(module.id, lesson.id, "duration", e.target.value)}
                            className="w-20"
                            placeholder="Min"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            type="button"
                            onClick={() => handleRemoveLesson(module.id, lesson.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        onClick={() => handleAddLesson(module.id)}
                        className="mt-2"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Lesson
                      </Button>
                    </div>
                  </div>
                ))}

                <Button variant="outline" type="button" onClick={handleAddModule} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Module
                </Button>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevTab}>
                    Back to Basic Info
                  </Button>
                  <Button type="button" onClick={nextTab} className="bg-emerald-600 hover:bg-emerald-700">
                    Continue to Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Course Settings</CardTitle>
                <CardDescription>Configure additional settings for your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Pricing</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" min="0" step="0.01" defaultValue="199.99" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salePrice">Sale Price ($)</Label>
                      <Input id="salePrice" type="number" min="0" step="0.01" defaultValue="149.99" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Visibility</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="published" />
                      <Label htmlFor="published">Publish course immediately</Label>
                    </div>
                    <p className="text-sm text-slate-500">If unchecked, the course will be saved as a draft</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visibility">Course Visibility</Label>
                    <Select defaultValue="public">
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public (Anyone can enroll)</SelectItem>
                        <SelectItem value="private">Private (Invitation only)</SelectItem>
                        <SelectItem value="password">Password Protected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Requirements</h3>
                  <div className="space-y-2">
                    <Label htmlFor="prerequisites">Prerequisites</Label>
                    <Textarea
                      id="prerequisites"
                      placeholder="List any prerequisites for this course"
                      rows={3}
                      defaultValue="Basic understanding of computer networks
Familiarity with operating systems (Windows, Linux)
No prior security experience required"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Additional Settings</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certificate" defaultChecked />
                      <Label htmlFor="certificate">Enable course completion certificate</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="forum" defaultChecked />
                      <Label htmlFor="forum">Enable course discussion forum</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reviews" defaultChecked />
                      <Label htmlFor="reviews">Allow student reviews</Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevTab}>
                    Back to Curriculum
                  </Button>
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                    Create Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </form>
      </Tabs>
    </div>
  )
}

