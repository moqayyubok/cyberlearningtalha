"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import CreateCourseForm from "@/components/create-course-form"

export default function CreateCoursePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/courses">
            <Button variant="outline" size="icon" className="mr-4">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Create Custom Course</h1>
        </div>

        <CreateCourseForm />
      </div>
    </div>
  )
}

