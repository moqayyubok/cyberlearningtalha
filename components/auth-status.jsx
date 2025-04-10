"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut, BookOpen, Award, School, Shield } from "lucide-react"
import TempLoginModal from "./temp-login-modal"
import { Badge } from "@/components/ui/badge"

export default function AuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (userProfile) => {
    // Save user to localStorage
    localStorage.setItem("tempUser", JSON.stringify(userProfile))
    setUser(userProfile)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("tempUser")
    setIsLoggedIn(false)
    setUser(null)
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center space-x-4">
        <TempLoginModal onLogin={handleLogin} />
        <Link href="/auth/login">
          <Button variant="outline">Log In</Button>
        </Link>
        <Link href="/auth/register">
          <Button className="bg-emerald-600 hover:bg-emerald-700">Sign Up</Button>
        </Link>
      </div>
    )
  }

  // Determine dashboard link based on user role
  const getDashboardLink = () => {
    switch (user.role) {
      case "admin":
        return "/admin/dashboard"
      case "schoolAdmin":
        return "/admin/schools"
      case "teacher":
        return "/teacher/dashboard"
      default:
        return "/profile"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-slate-500">{user.email}</p>
            <Badge variant="outline" className="mt-1 text-xs">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link href="/profile" className="w-full">
              Profile
            </Link>
          </DropdownMenuItem>

          {user.role === "student" && (
            <>
              <DropdownMenuItem>
                <BookOpen className="mr-2 h-4 w-4" />
                <Link href="/courses" className="w-full">
                  My Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Award className="mr-2 h-4 w-4" />
                <Link href="/profile?tab=achievements" className="w-full">
                  Achievements
                </Link>
              </DropdownMenuItem>
            </>
          )}

          {(user.role === "admin" || user.role === "schoolAdmin") && (
            <DropdownMenuItem>
              <Shield className="mr-2 h-4 w-4" />
              <Link href={getDashboardLink()} className="w-full">
                Admin Dashboard
              </Link>
            </DropdownMenuItem>
          )}

          {user.role === "teacher" && (
            <DropdownMenuItem>
              <BookOpen className="mr-2 h-4 w-4" />
              <Link href="/teacher/courses" className="w-full">
                My Courses
              </Link>
            </DropdownMenuItem>
          )}

          {user.role === "schoolAdmin" && (
            <DropdownMenuItem>
              <School className="mr-2 h-4 w-4" />
              <Link href="/admin/schools" className="w-full">
                School Management
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href="/profile?tab=settings" className="w-full">
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

