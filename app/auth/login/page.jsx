"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Mail, Lock, ArrowRight, Github, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
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
            <h1 className="text-4xl font-bold mb-6">Welcome back to your cybersecurity journey</h1>
            <p className="text-slate-300 text-lg">
              Log in to access your courses, track your progress, and continue building your cybersecurity skills.
            </p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-400/20 p-3 rounded-full">
              <Shield className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <p className="font-medium mb-1">"CyberLearn has transformed my career path."</p>
              <p className="text-slate-400 text-sm mb-3">
                The hands-on labs and expert instruction helped me land my dream job in cybersecurity.
              </p>
              <div className="flex items-center">
                <div className="font-medium text-sm">Alex Johnson</div>
                <div className="mx-2 text-slate-600">•</div>
                <div className="text-slate-400 text-sm">Security Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-2xl">CyberLearn</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-slate-500">Sign in to continue your learning</p>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="sso">SSO</TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>Enter your email and password to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      // In a real app, this would call an API endpoint
                      window.location.href = "/"
                    }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="email" type="email" placeholder="name@example.com" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/auth/forgot-password" className="text-sm text-emerald-600 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me for 30 days
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <Link href="/auth/register" className="text-emerald-600 hover:underline font-medium">
                      Sign up
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
            </TabsContent>

            <TabsContent value="sso">
              <Card>
                <CardHeader>
                  <CardTitle>Single Sign-On</CardTitle>
                  <CardDescription>Sign in with your organization's SSO provider</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sso-email">Work Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="sso-email" type="email" placeholder="name@company.com" className="pl-10" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Continue with SSO</Button>
                  <div className="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <Link href="/auth/register" className="text-emerald-600 hover:underline font-medium">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-sm text-slate-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-emerald-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-emerald-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

