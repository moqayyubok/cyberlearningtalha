"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    "New Users": 120,
    "Course Enrollments": 240,
    "Completed Courses": 60,
  },
  {
    name: "Feb",
    "New Users": 132,
    "Course Enrollments": 270,
    "Completed Courses": 75,
  },
  {
    name: "Mar",
    "New Users": 145,
    "Course Enrollments": 290,
    "Completed Courses": 90,
  },
  {
    name: "Apr",
    "New Users": 165,
    "Course Enrollments": 310,
    "Completed Courses": 110,
  },
  {
    name: "May",
    "New Users": 180,
    "Course Enrollments": 330,
    "Completed Courses": 130,
  },
  {
    name: "Jun",
    "New Users": 210,
    "Course Enrollments": 380,
    "Completed Courses": 150,
  },
]

export function DashboardChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-80 flex items-center justify-center">Loading chart...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="New Users" fill="#10b981" />
        <Bar dataKey="Course Enrollments" fill="#0ea5e9" />
        <Bar dataKey="Completed Courses" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

