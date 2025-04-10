"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Shield, User, Users, School } from "lucide-react"

// Sample user profiles for different roles
const userProfiles = {
  student: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=AJ",
    role: "student",
  },
  teacher: {
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=SC",
    role: "teacher",
  },
  admin: {
    name: "Michael Rodriguez",
    email: "michael.r@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=MR",
    role: "admin",
  },
  schoolAdmin: {
    name: "Priya Patel",
    email: "priya.p@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=PP",
    role: "schoolAdmin",
  },
}

export default function TempLoginModal({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("student")
  const [open, setOpen] = useState(false)

  const handleLogin = () => {
    // Get the selected user profile
    const userProfile = userProfiles[selectedRole]

    // Call the onLogin callback with the selected user profile
    onLogin(userProfile)

    // Close the dialog
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Test Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Temporary Login</DialogTitle>
          <DialogDescription>Select a user role to test different features and permissions.</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <RadioGroup value={selectedRole} onValueChange={setSelectedRole} className="space-y-4">
            <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-slate-50">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer flex-1">
                <User className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="font-medium">Student</p>
                  <p className="text-xs text-slate-500">Access courses and track progress</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-slate-50">
              <RadioGroupItem value="teacher" id="teacher" />
              <Label htmlFor="teacher" className="flex items-center gap-2 cursor-pointer flex-1">
                <Users className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="font-medium">Teacher</p>
                  <p className="text-xs text-slate-500">Manage courses and students</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-slate-50">
              <RadioGroupItem value="admin" id="admin" />
              <Label htmlFor="admin" className="flex items-center gap-2 cursor-pointer flex-1">
                <Shield className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="font-medium">Admin</p>
                  <p className="text-xs text-slate-500">Full platform administration</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-slate-50">
              <RadioGroupItem value="schoolAdmin" id="schoolAdmin" />
              <Label htmlFor="schoolAdmin" className="flex items-center gap-2 cursor-pointer flex-1">
                <School className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="font-medium">School Admin</p>
                  <p className="text-xs text-slate-500">Manage school, teachers, and students</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleLogin} className="bg-emerald-600 hover:bg-emerald-700">
            Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

