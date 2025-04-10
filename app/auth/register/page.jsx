"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, User, Mail, Lock, ArrowRight, Github, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-col w-1/2 bg-slate-900 text-white p-10 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <Shield className="h-8 w-8 text-emerald-400" />
            <span className="font-bold text-2xl">CyberLearn</span>
          </div>
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6">Start your cybersecurity journey today</h1>
            <p className="text-slate-300 text-lg">
              Join thousands of students learning cybersecurity skills through our interactive platform.
            </p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-400/20 p-3 rounded-full">
              <Shield className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <p className="font-medium mb-1">"The best investment in my professional development."</p>
              <p className="text-slate-400 text-sm mb-3">
                From beginner to security specialist in just 6 months with CyberLearn's comprehensive curriculum.
              </p>
              <div className="flex items-center">
                <div className="font-medium text-sm">Maria Garcia</div>
                <div className="mx-2 text-slate-600">•</div>
                <div className="text-slate-400 text-sm">Cybersecurity Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-2xl">CyberLearn</span>
            </div>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-slate-500">Sign up to start learning</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create your account to start learning cybersecurity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // In a real app, this would call an API endpoint
                  window.location.href = "/auth/verification"
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="firstName" placeholder="John" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="lastName" placeholder="Doe" className="pl-10" required />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="email" type="email" placeholder="name@example.com" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
                  </div>
                  <p className="text-xs text-slate-500">
                    Password must be at least 8 characters and include a number and a special character
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">I am a</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="professional">Working Professional</SelectItem>
                      <SelectItem value="educator">Educator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-emerald-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-emerald-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-emerald-600 hover:underline font-medium">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-50 px-2 text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

