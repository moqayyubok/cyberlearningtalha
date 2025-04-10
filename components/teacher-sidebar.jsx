"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  FileText,
  MessageSquare,
  BarChart,
  Settings,
  GraduationCap,
  Calendar,
  CheckSquare,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

export default function TeacherSidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState({})

  // Define menu items
  const menuItems = [
    {
      key: "dashboard",
      title: "Dashboard",
      href: "/teacher/dashboard",
      icon: BarChart,
    },
    {
      key: "courses",
      title: "Courses",
      href: "/teacher/courses",
      icon: BookOpen,
      submenu: [
        { title: "My Courses", href: "/teacher/courses" },
        { title: "Create Course", href: "/teacher/courses/create" },
        { title: "Course Analytics", href: "/teacher/courses/analytics" },
      ],
    },
    {
      key: "students",
      title: "Students",
      href: "/teacher/students",
      icon: GraduationCap,
      submenu: [
        { title: "All Students", href: "/teacher/students" },
        { title: "Student Progress", href: "/teacher/students/progress" },
      ],
    },
    {
      key: "assignments",
      title: "Assignments",
      href: "/teacher/assignments",
      icon: FileText,
      submenu: [
        { title: "All Assignments", href: "/teacher/assignments" },
        { title: "Create Assignment", href: "/teacher/assignments/create" },
        { title: "Grade Assignments", href: "/teacher/assignments/grade" },
      ],
    },
    {
      key: "quizzes",
      title: "Quizzes",
      href: "/teacher/quizzes",
      icon: CheckSquare,
      submenu: [
        { title: "All Quizzes", href: "/teacher/quizzes" },
        { title: "Create Quiz", href: "/teacher/quizzes/create" },
        { title: "Quiz Results", href: "/teacher/quizzes/results" },
      ],
    },
    {
      key: "schedule",
      title: "Schedule",
      href: "/teacher/schedule",
      icon: Calendar,
    },
    {
      key: "messages",
      title: "Messages",
      href: "/teacher/messages",
      icon: MessageSquare,
    },
    {
      key: "analytics",
      title: "Analytics",
      href: "/teacher/analytics",
      icon: BarChart,
    },
    {
      key: "settings",
      title: "Settings",
      href: "/teacher/settings",
      icon: Settings,
    },
  ]

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Initialize open state based on current path
  useEffect(() => {
    const initialOpenState = {}
    menuItems.forEach((item) => {
      if (item.submenu && item.submenu.some((subItem) => pathname.startsWith(subItem.href))) {
        initialOpenState[item.key] = true
      }
    })
    setOpenMenus(initialOpenState)
  }, [pathname])

  return (
    <div className="w-64 bg-slate-900 text-white h-screen overflow-y-auto fixed left-0 top-0 pt-16">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.key}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.key)}
                    className={cn(
                      "flex items-center w-full px-4 py-2.5 text-sm rounded-md transition-colors",
                      pathname.startsWith(item.href)
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:text-white hover:bg-slate-800",
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                    <div className="ml-auto">
                      {openMenus[item.key] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </div>
                  </button>
                  {openMenus[item.key] && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                            pathname === subItem.href
                              ? "bg-slate-800 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-800",
                          )}
                        >
                          <div className="w-2 h-2 rounded-full bg-slate-600 mr-3"></div>
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2.5 text-sm rounded-md transition-colors",
                    pathname === item.href
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800",
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

