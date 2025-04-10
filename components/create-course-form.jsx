"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"

// List of cybersecurity topics
const cybersecurityTopics = [
  "Network Security",
  "Web Application Security",
  "Cloud Security",
  "Ethical Hacking",
  "Malware Analysis",
  "Incident Response",
  "Cryptography",
  "Security Operations",
  "Threat Intelligence",
  "Digital Forensics",
  "Mobile Security",
  "IoT Security",
]

export default function CreateCourseForm({ onSuccess, compact = false, redirectOnCreate = false }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "",
    duration: "",
    topics: [],
    isPublic: false,
  })
  const [courseCreated, setCourseCreated] = useState(false)
  const [createdCourse, setCreatedCourse] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTopicChange = (topic) => {
    setFormData((prev) => {
      const topics = [...prev.topics]
      if (topics.includes(topic)) {
        return { ...prev, topics: topics.filter((t) => t !== topic) }
      } else {
        return { ...prev, topics: [...topics, topic] }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create a new course object with the form data
    const newCourse = {
      id: `custom-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      level: formData.level,
      duration: formData.duration,
      topics: formData.topics,
      isPublic: formData.isPublic,
      students: 0,
      lessons: Math.floor(Math.random() * 20) + 10, // Random number of lessons between 10-30
      image: `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(formData.title)}`,
      rating: 5.0,
      createdAt: new Date().toISOString(),
    }

    // In a real app, this would send the data to an API
    console.log("Creating course:", newCourse)

    // Set the created course and show success state
    setCreatedCourse(newCourse)
    setCourseCreated(true)

    // Call the onSuccess callback if provided
    if (onSuccess) {
      onSuccess(newCourse)
    }

    // Redirect if specified
    if (redirectOnCreate) {
      router.push(`/courses/${newCourse.id}`)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      level: "",
      duration: "",
      topics: [],
      isPublic: false,
    })
    setCourseCreated(false)
    setCreatedCourse(null)
  }

  if (courseCreated && createdCourse && !redirectOnCreate) {
    return (
      <Card className="mb-8">
        <CardHeader className="bg-emerald-50 border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{createdCourse.title}</CardTitle>
              <CardDescription>Custom Course Created Successfully</CardDescription>
            </div>
            <Badge
              className={
                createdCourse.level === "beginner"
                  ? "bg-emerald-100 text-emerald-800"
                  : createdCourse.level === "intermediate"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-purple-100 text-purple-800"
              }
            >
              {createdCourse.level.charAt(0).toUpperCase() + createdCourse.level.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-slate-600">{createdCourse.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-slate-500 mr-2" />
              <span>Duration: {createdCourse.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-slate-500 mr-2" />
              <span>Lessons: {createdCourse.lessons}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-slate-500 mr-2" />
              <span>Students: {createdCourse.students}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Topics Covered</h3>
            <div className="flex flex-wrap gap-2">
              {createdCourse.topics.map((topic) => (
                <Badge key={topic} variant="outline" className="bg-slate-50">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={resetForm}>
              Create Another Course
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => router.push(`/courses/${createdCourse.id}`)}
            >
              Start Learning
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={compact ? "border-0 shadow-none" : ""}>
      {!compact && (
        <CardHeader>
          <CardTitle>Create Custom Course</CardTitle>
          <CardDescription>
            Tell us what you want to learn, and we'll create a custom course tailored to your needs
          </CardDescription>
        </CardHeader>
      )}
      <CardContent className={compact ? "px-0" : ""}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Course Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter a title for your course"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Course Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe what you want to learn in this course"
              rows={compact ? 3 : 4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="level">Difficulty Level</Label>
              <Select onValueChange={(value) => handleSelectChange("level", value)} required>
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
              <Label htmlFor="duration">Course Duration</Label>
              <RadioGroup onValueChange={(value) => handleSelectChange("duration", value)} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4 weeks" id="4weeks" />
                  <Label htmlFor="4weeks">4 weeks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="8 weeks" id="8weeks" />
                  <Label htmlFor="8weeks">8 weeks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="12 weeks" id="12weeks" />
                  <Label htmlFor="12weeks">12 weeks</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Topics You Want to Learn</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {cybersecurityTopics.map((topic) => (
                <div key={topic} className="flex items-center space-x-2">
                  <Checkbox
                    id={`topic-${topic.replace(/\s+/g, "-").toLowerCase()}`}
                    checked={formData.topics.includes(topic)}
                    onCheckedChange={() => handleTopicChange(topic)}
                  />
                  <Label htmlFor={`topic-${topic.replace(/\s+/g, "-").toLowerCase()}`}>{topic}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isPublic"
              checked={formData.isPublic}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isPublic: checked }))}
            />
            <Label htmlFor="isPublic">Make this course public (visible to other students)</Label>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Create Custom Course
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

