import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { Shield } from "lucide-react"
import AuthStatus from "@/components/auth-status"
import MLChat from "@/components/ml-chat"
import RoleBasedAccess from "@/components/role-based-access"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cyber Learning Platform",
  description: "Master cybersecurity skills with our interactive learning platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RoleBasedAccess>
          <header className="border-b">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-emerald-600" />
                  <span className="font-bold text-xl">CyberLearn</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition-colors">
                    Contact
                  </Link>
                  <Link href="/courses" className="text-slate-700 hover:text-emerald-600 transition-colors">
                    Courses
                  </Link>
                  <Link href="/resources" className="text-slate-700 hover:text-emerald-600 transition-colors">
                    Resources
                  </Link>
                </nav>

                <AuthStatus />
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Shield className="h-6 w-6 text-emerald-400" />
                    <span className="font-bold text-xl">CyberLearn</span>
                  </Link>
                  <p className="text-slate-300">
                    Empowering individuals and organizations with cybersecurity knowledge and skills.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Free Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Certification Guides
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Webinars
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Community Forum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                        Career Resources
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                  <address className="not-italic text-slate-300 space-y-2">
                    <p>123 Tech Avenue</p>
                    <p>San Francisco, CA 94107</p>
                    <p>Email: info@cyberlearning.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </address>
                </div>
              </div>

              <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
                <p>© {new Date().getFullYear()} Cyber Learning Platform. All rights reserved.</p>
              </div>
            </div>
          </footer>

          {/* ML Chat Assistant - Available on every page */}
          <MLChat />
        </RoleBasedAccess>
      </body>
    </html>
  )
}

