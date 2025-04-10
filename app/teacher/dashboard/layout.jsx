import TeacherSidebar from "@/components/teacher-sidebar"

export default function TeacherDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <TeacherSidebar />
      <div className="pl-64 pt-16">{children}</div>
    </div>
  )
}

