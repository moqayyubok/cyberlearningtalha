"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Users,
  BookOpen,
  FileText,
  BarChart3,
  HelpCircle,
  Award,
  Gift,
  School,
  FileCode,
  MessageSquare,
  ShieldAlert,
  Settings,
  User,
  ChevronDown,
  ChevronRight,
  LogOut,
  GraduationCapIcon as Graduation,
  CheckSquare,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarItem {
  title: string
  href: string
  icon: React.ElementType
  submenu?: SidebarItem[]
}

export function AdminSidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    users: true,
    courses: true,
    schools: true,
    progress: true,
    questions: true,
    answers: true,
    rewards: true,
  })

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: BarChart3,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
      submenu: [
        { title: "All Users", href: "/admin/users", icon: Users },
        { title: "User Permissions", href: "/admin/users/permissions", icon: ShieldAlert },
      ],
    },
    {
      title: "Courses",
      href: "/admin/courses",
      icon: BookOpen,
      submenu: [
        { title: "All Courses", href: "/admin/courses", icon: BookOpen },
        { title: "Lessons", href: "/admin/courses/lessons", icon: FileText },
      ],
    },
    {
      title: "Questions",
      href: "/admin/questions",
      icon: HelpCircle,
      submenu: [
        { title: "All Questions", href: "/admin/questions", icon: HelpCircle },
        { title: "Question Banks", href: "/admin/questions/banks", icon: Database },
      ],
    },
    {
      title: "Answers",
      href: "/admin/answers",
      icon: CheckSquare,
      submenu: [
        { title: "All Answers", href: "/admin/answers", icon: CheckSquare },
        { title: "User Answer History", href: "/admin/answers/history", icon: FileCode },
      ],
    },
    {
      title: "Progress",
      href: "/admin/progress",
      icon: BarChart3,
      submenu: [
        { title: "User Progress", href: "/admin/progress/users", icon: User },
        { title: "Course Progress", href: "/admin/progress/courses", icon: BookOpen },
        { title: "Lesson Progress", href: "/admin/progress/lessons", icon: FileText },
      ],
    },
    {
      title: "Schools",
      href: "/admin/schools",
      icon: School,
      submenu: [
        { title: "All Schools", href: "/admin/schools", icon: School },
        { title: "Students", href: "/admin/schools/students", icon: Graduation },
        { title: "Teachers", href: "/admin/schools/teachers", icon: User },
        { title: "School Admins", href: "/admin/schools/admins", icon: ShieldAlert },
      ],
    },
    {
      title: "Rewards",
      href: "/admin/rewards",
      icon: Gift,
      submenu: [
        { title: "All Rewards", href: "/admin/rewards", icon: Gift },
        { title: "Redemptions", href: "/admin/rewards/redemptions", icon: Award },
      ],
    },
    {
      title: "Admins",
      href: "/admin/admins",
      icon: ShieldAlert,
    },
    {
      title: "Logs",
      href: "/admin/logs",
      icon: FileText,
    },
    {
      title: "Chat Logs",
      href: "/admin/chat-logs",
      icon: MessageSquare,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-screen sticky top-0">
      <div className="p-4 border-b border-slate-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-2">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                {item.submenu ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleMenu(item.title.toLowerCase())}
                      className={cn(
                        "flex items-center w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white",
                        pathname.startsWith(item.href) ? "bg-slate-800 text-white" : "text-slate-300",
                      )}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      <span>{item.title}</span>
                      {openMenus[item.title.toLowerCase()] ? (
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      ) : (
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      )}
                    </button>
                    {openMenus[item.title.toLowerCase()] && (
                      <ul className="pl-6 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.title}>
                            <Link
                              href={subitem.href}
                              className={cn(
                                "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white",
                                pathname === subitem.href ? "bg-slate-800 text-white" : "text-slate-300",
                              )}
                            >
                              <subitem.icon className="h-4 w-4 mr-2" />
                              <span>{subitem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white",
                      pathname === item.href ? "bg-slate-800 text-white" : "text-slate-300",
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-slate-700">
        <Button variant="destructive" className="w-full" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )
}

