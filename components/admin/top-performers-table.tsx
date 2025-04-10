import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const students = [
  {
    id: 1,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=MG",
    courses: 4,
    progress: 92,
    completionRate: "92%",
    lastActive: "Today",
  },
  {
    id: 2,
    name: "James Thompson",
    email: "james.t@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=JT",
    courses: 5,
    progress: 82,
    completionRate: "82%",
    lastActive: "Today",
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=AJ",
    courses: 3,
    progress: 68,
    completionRate: "68%",
    lastActive: "Yesterday",
  },
  {
    id: 4,
    name: "Lisa Wang",
    email: "lisa.wang@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=LW",
    courses: 4,
    progress: 78,
    completionRate: "78%",
    lastActive: "Today",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.kim@example.com",
    avatar: "/placeholder.svg?height=32&width=32&text=DK",
    courses: 2,
    progress: 45,
    completionRate: "45%",
    lastActive: "3 days ago",
  },
]

export function TopPerformersTable() {
  return (
    <div className="rounded-md border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-slate-50">
            <th className="p-3 text-left font-medium">Student</th>
            <th className="p-3 text-left font-medium">Courses</th>
            <th className="p-3 text-left font-medium">Progress</th>
            <th className="p-3 text-left font-medium">Completion Rate</th>
            <th className="p-3 text-left font-medium">Last Active</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-3">
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
                    <div className="font-medium">{student.name}</div>
                    <div className="text-xs text-slate-500">{student.email}</div>
                  </div>
                </div>
              </td>
              <td className="p-3">{student.courses}</td>
              <td className="p-3 w-40">
                <div className="space-y-1">
                  <Progress value={student.progress} className="h-2" />
                  <div className="text-xs text-slate-500">{student.progress}% complete</div>
                </div>
              </td>
              <td className="p-3">
                <Badge variant={student.progress > 75 ? "success" : student.progress > 50 ? "default" : "outline"}>
                  {student.completionRate}
                </Badge>
              </td>
              <td className="p-3">{student.lastActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

