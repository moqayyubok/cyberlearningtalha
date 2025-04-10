"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Users,
  BookOpen,
  HelpCircle,
  MessageSquare,
  BarChart,
  School,
  Award,
  Shield,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  User,
  GraduationCap,
  CheckSquare,
  Clock,
} from "lucide-react"

export default function AdminSidebar({ userRole = "admin" }) {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState({})

  // Define menu items based on user role
  const menuItems = getMenuItems(userRole)

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
  }, [pathname, menuItems])

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

function getMenuItems(userRole) {
  // Common menu items for both admin and school admin
  const commonItems = [
    {
      key: "dashboard",
      title: "Dashboard",
      href: userRole === "admin" ? "/admin/dashboard" : "/admin/schools",
      icon: BarChart,
    },
    {
      key: "settings",
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  // Admin-specific menu items
  if (userRole === "admin") {
    return [
      ...commonItems,
      {
        key: "users",
        title: "Users",
        href: "/admin/users",
        icon: Users,
        submenu: [
          { title: "All Users", href: "/admin/users" },
          { title: "User Permissions", href: "/admin/users/permissions" },
        ],
      },
      {
        key: "courses",
        title: "Courses",
        href: "/admin/courses",
        icon: BookOpen,
        submenu: [
          { title: "All Courses", href: "/admin/courses" },
          { title: "Lessons", href: "/admin/courses/lessons" },
        ],
      },
      {
        key: "questions",
        title: "Questions",
        href: "/admin/questions",
        icon: HelpCircle,
        submenu: [
          { title: "All Questions", href: "/admin/questions" },
          { title: "Question Banks", href: "/admin/questions/banks" },
        ],
      },
      {
        key: "answers",
        title: "Answers",
        href: "/admin/answers",
        icon: CheckSquare,
        submenu: [
          { title: "All Answers", href: "/admin/answers" },
          { title: "User Answer History", href: "/admin/answers/history" },
        ],
      },
      {
        key: "progress",
        title: "Progress",
        href: "/admin/progress",
        icon: Clock,
        submenu: [
          { title: "User Progress", href: "/admin/progress/users" },
          { title: "Course Progress", href: "/admin/progress/courses" },
          { title: "Lesson Progress", href: "/admin/progress/lessons" },
        ],
      },
      {
        key: "schools",
        title: "Schools",
        href: "/admin/schools",
        icon: School,
        submenu: [
          { title: "All Schools", href: "/admin/schools" },
          { title: "Students", href: "/admin/schools/students" },
          { title: "Teachers", href: "/admin/schools/teachers" },
          { title: "School Admins", href: "/admin/schools/admins" },
        ],
      },
      {
        key: "rewards",
        title: "Rewards",
        href: "/admin/rewards",
        icon: Award,
        submenu: [
          { title: "All Rewards", href: "/admin/rewards" },
          { title: "Redemptions", href: "/admin/rewards/redemptions" },
        ],
      },
      {
        key: "admins",
        title: "Admins",
        href: "/admin/admins",
        icon: Shield,
      },
      {
        key: "logs",
        title: "Logs",
        href: "/admin/logs",
        icon: FileText,
      },
      {
        key: "chats",
        title: "Chat Logs",
        href: "/admin/chats",
        icon: MessageSquare,
      },
    ]
  }

  // School admin-specific menu items
  else if (userRole === "schoolAdmin") {
    return [
      ...commonItems,
      {
        key: "school",
        title: "School Overview",
        href: "/admin/schools/details",
        icon: School,
      },
      {
        key: "students",
        title: "Students",
        href: "/admin/schools/students",
        icon: GraduationCap,
      },
      {
        key: "teachers",
        title: "Teachers",
        href: "/admin/schools/teachers",
        icon: User,
      },
      {
        key: "courses",
        title: "Courses",
        href: "/admin/schools/courses",
        icon: BookOpen,
      },
      {
        key: "progress",
        title: "Progress",
        href: "/admin/schools/progress",
        icon: BarChart,
      },
      {
        key: "logs",
        title: "Activity Logs",
        href: "/admin/schools/logs",
        icon: FileText,
      },
    ]
  }

  return commonItems
}

