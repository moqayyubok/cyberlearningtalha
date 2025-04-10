"use client"

import { useEffect, useState } from "react"
import AdminSidebar from "@/components/admin-sidebar"

export default function AdminSchoolsLayout({ children }) {
  const [userRole, setUserRole] = useState("admin")

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUserRole(parsedUser.role)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar userRole={userRole} />
      <div className="pl-64 pt-16">{children}</div>
    </div>
  )
}

