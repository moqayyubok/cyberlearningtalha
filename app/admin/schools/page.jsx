import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  BookOpen,
  Search,
  MoreVertical,
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  School,
  MapPin,
  Phone,
  Mail,
  User,
  UserPlus,
  Building,
  Globe,
  ArrowLeft,
  MessageSquare,
} from "lucide-react"

// Mock data for schools
const schools = [
  {
    id: 1,
    name: "Cyber Academy",
    type: "University",
    location: "San Francisco, CA",
    students: 450,
    teachers: 18,
    courses: 24,
    status: "active",
    joined: "Aug 15, 2023",
    logo: "/placeholder.svg?height=40&width=40&text=CA",
  },
  {
    id: 2,
    name: "Tech High School",
    type: "High School",
    location: "Boston, MA",
    students: 320,
    teachers: 12,
    courses: 16,
    status: "active",
    joined: "Sep 5, 2023",
    logo: "/placeholder.svg?height=40&width=40&text=THS",
  },
  {
    id: 3,
    name: "Security Institute",
    type: "Professional",
    location: "Chicago, IL",
    students: 280,
    teachers: 15,
    courses: 18,
    status: "active",
    joined: "Oct 12, 2023",
    logo: "/placeholder.svg?height=40&width=40&text=SI",
  },
  {
    id: 4,
    name: "Digital Learning Center",
    type: "Community College",
    location: "Austin, TX",
    students: 210,
    teachers: 8,
    courses: 12,
    status: "active",
    joined: "Nov 20, 2023",
    logo: "/placeholder.svg?height=40&width=40&text=DLC",
  },
  {
    id: 5,
    name: "Cyber Defense Academy",
    type: "Professional",
    location: "Seattle, WA",
    students: 175,
    teachers: 9,
    courses: 14,
    status: "pending",
    joined: "Jan 8, 2024",
    logo: "/placeholder.svg?height=40&width=40&text=CDA",
  },
  {
    id: 6,
    name: "Metropolitan University",
    type: "University",
    location: "New York, NY",
    students: 520,
    teachers: 22,
    courses: 28,
    status: "active",
    joined: "Jul 3, 2023",
    logo: "/placeholder.svg?height=40&width=40&text=MU",
  },
]

// Mock data for school details
const schoolDetails = {
  id: 1,
  name: "Cyber Academy",
  type: "University",
  description:
    "A leading institution specializing in cybersecurity education and research. Offering undergraduate, graduate, and professional certification programs.",
  address: "123 Tech Avenue, San Francisco, CA 94107",
  phone: "(415) 555-1234",
  email: "info@cyberacademy.edu",
  website: "www.cyberacademy.edu",
  contactPerson: "Dr. James Wilson",
  contactEmail: "j.wilson@cyberacademy.edu",
  contactPhone: "(415) 555-5678",
  students: 450,
  teachers: 18,
  courses: 24,
  status: "active",
  joined: "August 15, 2023",
  logo: "/placeholder.svg?height=100&width=100&text=CA",
  subscription: "Enterprise",
  billingCycle: "Annual",
  nextBillingDate: "August 15, 2024",
}

// Mock data for students in a school
const schoolStudents = [
  {
    id: 101,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    courses: 3,
    progress: 68,
    joinDate: "Sep 10, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=AJ",
  },
  {
    id: 102,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    courses: 4,
    progress: 92,
    joinDate: "Sep 12, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=MG",
  },
  {
    id: 103,
    name: "David Kim",
    email: "david.kim@example.com",
    courses: 2,
    progress: 45,
    joinDate: "Oct 5, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=DK",
  },
  {
    id: 104,
    name: "Emily Wilson",
    email: "emily.w@example.com",
    courses: 3,
    progress: 78,
    joinDate: "Oct 15, 2023",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40&text=EW",
  },
  {
    id: 105,
    name: "James Thompson",
    email: "james.t@example.com",
    courses: 5,
    progress: 82,
    joinDate: "Nov 2, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=JT",
  },
]

// Mock data for teachers in a school
const schoolTeachers = [
  {
    id: 201,
    name: "Dr. Sarah Chen",
    email: "sarah.chen@example.com",
    department: "Network Security",
    courses: 3,
    students: 245,
    joinDate: "Aug 20, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=SC",
  },
  {
    id: 202,
    name: "Prof. Michael Rodriguez",
    email: "michael.r@example.com",
    department: "Ethical Hacking",
    courses: 2,
    students: 180,
    joinDate: "Sep 1, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=MR",
  },
  {
    id: 203,
    name: "Dr. Lisa Wang",
    email: "lisa.wang@example.com",
    department: "Cryptography",
    courses: 2,
    students: 165,
    joinDate: "Sep 15, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=LW",
  },
  {
    id: 204,
    name: "Prof. Robert Johnson",
    email: "robert.j@example.com",
    department: "Cloud Security",
    courses: 1,
    students: 120,
    joinDate: "Oct 10, 2023",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=RJ",
  },
]

export default function SchoolsManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold mb-2">School Management</h1>
                <p className="text-slate-300">Manage schools, students, and teachers</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add School
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New School</DialogTitle>
                    <DialogDescription>
                      Register a new school to the platform. Schools can have their own students, teachers, and courses.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="schoolName">School Name</Label>
                        <Input id="schoolName" placeholder="Enter school name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="schoolType">School Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="university">University</SelectItem>
                            <SelectItem value="highschool">High School</SelectItem>
                            <SelectItem value="professional">Professional</SelectItem>
                            <SelectItem value="community">Community College</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Enter school description" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Enter address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">City, State</Label>
                        <Input id="location" placeholder="City, State" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter email address" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" placeholder="Enter website URL" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">Contact Person</Label>
                        <Input id="contactPerson" placeholder="Enter contact person name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Contact Email</Label>
                        <Input id="contactEmail" type="email" placeholder="Enter contact email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subscription">Subscription Plan</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Add School</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="schools" className="w-full">
            <TabsList className="w-full md:w-auto justify-start mb-8">
              <TabsTrigger value="schools" className="flex items-center">
                <School className="mr-2 h-4 w-4" />
                Schools
              </TabsTrigger>
              <TabsTrigger value="details" className="flex items-center">
                <Building className="mr-2 h-4 w-4" />
                School Details
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Students
              </TabsTrigger>
              <TabsTrigger value="teachers" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Teachers
              </TabsTrigger>
            </TabsList>

            {/* Schools Tab */}
            <TabsContent value="schools">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>All Schools</CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search schools..." />
                      </div>
                      <Select>
                        <SelectTrigger className="w-full md:w-40">
                          <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                          <SelectItem value="highschool">High School</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="community">Community College</SelectItem>
                        </SelectContent>
                      </Select>
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
                          <TableHead>School</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Teachers</TableHead>
                          <TableHead>Courses</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schools.map((school) => (
                          <TableRow key={school.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={school.logo} alt={school.name} />
                                  <AvatarFallback>
                                    {school.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{school.name}</p>
                                  <p className="text-xs text-slate-500">Joined: {school.joined}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{school.type}</TableCell>
                            <TableCell>{school.location}</TableCell>
                            <TableCell>{school.students}</TableCell>
                            <TableCell>{school.teachers}</TableCell>
                            <TableCell>{school.courses}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  school.status === "active"
                                    ? "border-emerald-500 text-emerald-600"
                                    : "border-amber-500 text-amber-600"
                                }
                              >
                                {school.status.charAt(0).toUpperCase() + school.status.slice(1)}
                              </Badge>
                            </TableCell>
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
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit School
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Users className="mr-2 h-4 w-4" />
                                    Manage Students
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    Manage Teachers
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Manage Courses
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete School
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
                      Showing <strong>1-6</strong> of <strong>18</strong> schools
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
            </TabsContent>

            {/* School Details Tab */}
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={schoolDetails.logo} alt={schoolDetails.name} />
                        <AvatarFallback>
                          {schoolDetails.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{schoolDetails.name}</CardTitle>
                        <CardDescription>{schoolDetails.type}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Details
                      </Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Manage Courses
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">School Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Address</p>
                              <p className="text-slate-600">{schoolDetails.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Phone</p>
                              <p className="text-slate-600">{schoolDetails.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Mail className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-slate-600">{schoolDetails.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Globe className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Website</p>
                              <p className="text-slate-600">{schoolDetails.website}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Primary Contact</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <User className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Contact Person</p>
                              <p className="text-slate-600">{schoolDetails.contactPerson}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Mail className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Contact Email</p>
                              <p className="text-slate-600">{schoolDetails.contactEmail}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Contact Phone</p>
                              <p className="text-slate-600">{schoolDetails.contactPhone}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Description</h3>
                        <p className="text-slate-600">{schoolDetails.description}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Statistics</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-slate-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-emerald-600">{schoolDetails.students}</p>
                            <p className="text-sm text-slate-600">Students</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-emerald-600">{schoolDetails.teachers}</p>
                            <p className="text-sm text-slate-600">Teachers</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-emerald-600">{schoolDetails.courses}</p>
                            <p className="text-sm text-slate-600">Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Subscription Details</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-5 mr-3" />
                            <div>
                              <p className="font-medium">Plan</p>
                              <p className="text-slate-600">{schoolDetails.subscription}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-5 mr-3" />
                            <div>
                              <p className="font-medium">Billing Cycle</p>
                              <p className="text-slate-600">{schoolDetails.billingCycle}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-5 mr-3" />
                            <div>
                              <p className="font-medium">Next Billing Date</p>
                              <p className="text-slate-600">{schoolDetails.nextBillingDate}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-5 mr-3" />
                            <div>
                              <p className="font-medium">Status</p>
                              <Badge variant="outline" className="border-emerald-500 text-emerald-600 mt-1">
                                Active
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-4">Account Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-5 mr-3" />
                            <div>
                              <p className="font-medium">Joined</p>
                              <p className="text-slate-600">{schoolDetails.joined}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-5 mr-3" />
                            <div>
                              <p className="font-medium">School ID</p>
                              <p className="text-slate-600">SCH-{schoolDetails.id.toString().padStart(5, "0")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Students</CardTitle>
                      <CardDescription>Manage students for {schoolDetails.name}</CardDescription>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search students..." />
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add Student
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add Student to School</DialogTitle>
                            <DialogDescription>
                              Add a new student to {schoolDetails.name} or assign an existing student.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="existingStudent" />
                              <label
                                htmlFor="existingStudent"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Assign existing student
                              </label>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="studentSearch">Search Existing Student</Label>
                              <Input id="studentSearch" placeholder="Search by name or email" />
                            </div>
                            <div className="space-y-2">
                              <Label>Or create new student</Label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="Enter first name" />
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
                              <Label htmlFor="courses">Assign Courses</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select courses" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="network">Network Security Fundamentals</SelectItem>
                                  <SelectItem value="ethical">Ethical Hacking & Penetration Testing</SelectItem>
                                  <SelectItem value="cloud">Cloud Security Fundamentals</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sendWelcome" defaultChecked />
                              <label
                                htmlFor="sendWelcome"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Send welcome email
                              </label>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">Add Student</Button>
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
                          <TableHead>Student</TableHead>
                          <TableHead>Courses</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Join Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schoolStudents.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={student.avatar} alt={student.name} />
                                  <AvatarFallback>
                                    {student.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{student.name}</p>
                                  <p className="text-xs text-slate-500">{student.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{student.courses}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className="w-full max-w-24 bg-slate-100 rounded-full h-2.5">
                                  <div
                                    className="bg-emerald-600 h-2.5 rounded-full"
                                    style={{ width: `${student.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs">{student.progress}%</span>
                              </div>
                            </TableCell>
                            <TableCell>{student.joinDate}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  student.status === "active"
                                    ? "border-emerald-500 text-emerald-600"
                                    : "border-slate-500 text-slate-600"
                                }
                              >
                                {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                              </Badge>
                            </TableCell>
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
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Student
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Manage Courses
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Send Message
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Remove from School
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
                      Showing <strong>1-5</strong> of <strong>{schoolDetails.students}</strong> students
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
            </TabsContent>

            {/* Teachers Tab */}
            <TabsContent value="teachers">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Teachers</CardTitle>
                      <CardDescription>Manage teachers for {schoolDetails.name}</CardDescription>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input className="pl-10 w-full md:w-80" placeholder="Search teachers..." />
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add Teacher
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add Teacher to School</DialogTitle>
                            <DialogDescription>
                              Add a new teacher to {schoolDetails.name} or assign an existing teacher.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="existingTeacher" />
                              <label
                                htmlFor="existingTeacher"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Assign existing teacher
                              </label>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="teacherSearch">Search Existing Teacher</Label>
                              <Input id="teacherSearch" placeholder="Search by name or email" />
                            </div>
                            <div className="space-y-2">
                              <Label>Or create new teacher</Label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="Enter first name" />
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
                              <Label htmlFor="department">Department</Label>
                              <Input id="department" placeholder="Enter department" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="courses">Assign Courses</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select courses" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="network">Network Security Fundamentals</SelectItem>
                                  <SelectItem value="ethical">Ethical Hacking & Penetration Testing</SelectItem>
                                  <SelectItem value="cloud">Cloud Security Fundamentals</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sendWelcome" defaultChecked />
                              <label
                                htmlFor="sendWelcome"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Send welcome email
                              </label>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">Add Teacher</Button>
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
                          <TableHead>Teacher</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Courses</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Join Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schoolTeachers.map((teacher) => (
                          <TableRow key={teacher.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={teacher.avatar} alt={teacher.name} />
                                  <AvatarFallback>
                                    {teacher.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{teacher.name}</p>
                                  <p className="text-xs text-slate-500">{teacher.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{teacher.department}</TableCell>
                            <TableCell>{teacher.courses}</TableCell>
                            <TableCell>{teacher.students}</TableCell>
                            <TableCell>{teacher.joinDate}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  teacher.status === "active"
                                    ? "border-emerald-500 text-emerald-600"
                                    : "border-slate-500 text-slate-600"
                                }
                              >
                                {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                              </Badge>
                            </TableCell>
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
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Teacher
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Manage Courses
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Send Message
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Remove from School
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
                      Showing <strong>1-4</strong> of <strong>{schoolDetails.teachers}</strong> teachers
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

