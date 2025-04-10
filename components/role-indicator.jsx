"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Shield, User, Users, School } from "lucide-react"

export default function RoleIndicator() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  if (!user) return null

  const getRoleIcon = () => {
    switch (user.role) {
      case "admin":
        return <Shield className="h-4 w-4 mr-1" />
      case "teacher":
        return <Users className="h-4 w-4 mr-1" />
      case "schoolAdmin":
        return <School className="h-4 w-4 mr-1" />
      default:
        return <User className="h-4 w-4 mr-1" />
    }
  }

  const getRoleColor = () => {
    switch (user.role) {
      case "admin":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "teacher":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "schoolAdmin":
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
    }
  }

  const getRoleName = () => {
    switch (user.role) {
      case "schoolAdmin":
        return "School Admin"
      default:
        return user.role.charAt(0).toUpperCase() + user.role.slice(1)
    }
  }

  return (
    <Badge className={`${getRoleColor()} flex items-center`}>
      {getRoleIcon()}
      {getRoleName()} Mode
    </Badge>
  )
}

