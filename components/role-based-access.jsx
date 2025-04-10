"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

// Define which paths are accessible to which roles
const roleAccessMap = {
  student: ["/", "/profile", "/courses", "/courses/create", "/about", "/contact"],
  teacher: [
    "/",
    "/profile",
    "/courses",
    "/teacher/dashboard",
    "/teacher/courses",
    "/teacher/students",
    "/teacher/assignments",
    "/about",
    "/contact",
  ],
  admin: ["/", "/profile", "/courses", "/admin/dashboard", "/admin/schools", "/about", "/contact"],
  schoolAdmin: ["/", "/profile", "/courses", "/admin/schools", "/about", "/contact"],
  // Public routes accessible to all users regardless of login status
  public: [
    "/",
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verification",
    "/about",
    "/contact",
  ],
}

export default function RoleBasedAccess({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAccess = () => {
      // Always allow access to course detail pages
      if (pathname.startsWith("/courses/") && pathname !== "/courses/create") {
        setIsAuthorized(true)
        setIsLoading(false)
        return
      }

      // Check if the current path is public
      if (
        roleAccessMap.public.some(
          (route) => pathname === route || (route.endsWith("*") && pathname.startsWith(route.slice(0, -1))),
        )
      ) {
        setIsAuthorized(true)
        setIsLoading(false)
        return
      }

      // Get user from localStorage
      const storedUser = localStorage.getItem("tempUser")

      // If no user and not on a public route, redirect to login
      if (!storedUser) {
        router.push("/auth/login")
        return
      }

      const user = JSON.parse(storedUser)
      const userRole = user.role

      // Check if user has access to this route
      const hasAccess = roleAccessMap[userRole]?.some(
        (route) => pathname === route || (route.endsWith("*") && pathname.startsWith(route.slice(0, -1))),
      )

      if (!hasAccess) {
        // Redirect to appropriate dashboard based on role
        switch (userRole) {
          case "admin":
            router.push("/admin/dashboard")
            break
          case "schoolAdmin":
            router.push("/admin/schools")
            break
          case "teacher":
            router.push("/teacher/dashboard")
            break
          default:
            router.push("/profile")
        }
      } else {
        setIsAuthorized(true)
      }

      setIsLoading(false)
    }

    checkAccess()
  }, [pathname, router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return isAuthorized ? children : null
}

