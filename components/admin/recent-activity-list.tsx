import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, FileText, UserPlus, Settings } from "lucide-react"

const activities = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32&text=AJ",
    },
    action: "completed lesson",
    target: "Network Security Fundamentals - Lesson 3",
    time: "2 minutes ago",
    icon: FileText,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32&text=SC",
    },
    action: "updated course",
    target: "Web Application Security",
    time: "15 minutes ago",
    icon: BookOpen,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    id: 3,
    user: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32&text=MR",
    },
    action: "added new user",
    target: "John Smith (Admin)",
    time: "1 hour ago",
    icon: UserPlus,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
  },
  {
    id: 4,
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32&text=DK",
    },
    action: "enrolled in course",
    target: "Cloud Security Fundamentals",
    time: "2 hours ago",
    icon: BookOpen,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    id: 5,
    user: {
      name: "System",
      avatar: "/placeholder.svg?height=32&width=32&text=SYS",
    },
    action: "updated system settings",
    target: "Email notification preferences",
    time: "3 hours ago",
    icon: Settings,
    iconColor: "text-slate-500",
    iconBg: "bg-slate-100",
  },
  {
    id: 6,
    user: {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=32&width=32&text=PP",
    },
    action: "created new quiz",
    target: "Security Operations - Module 2 Quiz",
    time: "5 hours ago",
    icon: FileText,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
  },
]

export function RecentActivityList() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div className={`${activity.iconBg} p-2 rounded-full`}>
            <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">{activity.user.name}</span>
            </div>
            <p className="text-sm text-slate-600">
              {activity.action} <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-slate-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

