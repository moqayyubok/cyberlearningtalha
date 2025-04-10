import AdminSidebar from "@/components/admin-sidebar"

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar userRole="admin" />
      <div className="pl-64 pt-16">{children}</div>
    </div>
  )
}

