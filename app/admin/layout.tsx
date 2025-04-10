import type { ReactNode } from "react"
import Link from "next/link"
import { Shield } from "lucide-react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Admin Header */}
        <header className="bg-white border-b h-16 flex items-center px-6 sticky top-0 z-10">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-600" />
                <span className="font-bold text-xl">CyberLearn</span>
              </Link>
              <span className="text-sm text-slate-500 ml-4 pl-4 border-l">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Admin User</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

