"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, UserPlus, Edit, Trash2, User, MessageSquare, Shield } from "lucide-react"
import type { User as UserType } from "@/types/schema"

// Mock data for users
const users: UserType[] = [
  {
    userId: 1,
    userName: "alexj",
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    role: "student",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=AJ",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    userId: 2,
    userName: "sarahc",
    firstName: "Sarah",
    lastName: "Chen",
    email: "sarah.chen@example.com",
    role: "teacher",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=SC",
    createdAt: "2023-11-08T14:20:00Z",
  },
  {
    userId: 3,
    userName: "michaelr",
    firstName: "Michael",
    lastName: "Rodriguez",
    email: "michael.r@example.com",
    role: "admin",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=MR",
    createdAt: "2023-08-22T09:15:00Z",
  },
  {
    userId: 4,
    userName: "emilyw",
    firstName: "Emily",
    lastName: "Wilson",
    email: "emily.w@example.com",
    role: "student",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=EW",
    createdAt: "2024-02-03T11:45:00Z",
  },
  {
    userId: 5,
    userName: "davidk",
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@example.com",
    role: "student",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=DK",
    createdAt: "2023-12-12T16:30:00Z",
  },
  {
    userId: 6,
    userName: "priyap",
    firstName: "Priya",
    lastName: "Patel",
    email: "priya.p@example.com",
    role: "teacher",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=PP",
    createdAt: "2023-10-05T13:10:00Z",
  },
]

export default function UsersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter users based on role and search query
  const filteredUsers = users.filter((user) => {
    const matchesRole = selectedRole ? user.role === selectedRole : true
    const matchesSearch =
      searchQuery.toLowerCase() === ""
        ? true
        : user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesRole && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
      </div>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Manage Users</CardTitle>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  className="pl-10 w-full md:w-80"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select onValueChange={(value) => setSelectedRole(value === "all" ? null : value)}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>
                      Create a new user account. They will receive an email to set their password.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="userName">Username</Label>
                      <Input id="userName" placeholder="Enter username" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="middleName">Middle Name</Label>
                        <Input id="middleName" placeholder="Enter middle name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avatarUrl">Avatar URL</Label>
                      <Input id="avatarUrl" placeholder="Enter avatar URL" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sendEmail" />
                      <label
                        htmlFor="sendEmail"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Send welcome email
                      </label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Create User</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.userId}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{user.userId}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
                          <AvatarFallback>
                            {user.firstName[0]}
                            {user.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {user.firstName} {user.lastName}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.userName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-800"
                            : user.role === "teacher"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-100 text-slate-800"
                        }
                      >
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(user.createdAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <Link href={`/admin/users/${user.userId}`} className="w-full">
                              View Profile
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <Link href={`/admin/users/${user.userId}/edit`} className="w-full">
                              Edit User
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="mr-2 h-4 w-4" />
                            <Link href={`/admin/users/${user.userId}/permissions`} className="w-full">
                              Manage Permissions
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-slate-500">
              Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> users
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

