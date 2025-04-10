"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Mail, ArrowLeft, ArrowRight } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-2xl">CyberLearn</span>
            </div>
            <h1 className="text-2xl font-bold">Forgot your password?</h1>
            <p className="text-slate-500">No worries, we'll send you reset instructions</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
                Enter your email address and we'll send you a link to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // In a real app, this would call an API endpoint
                  window.location.href = "/auth/verification"
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="email" type="email" placeholder="name@example.com" className="pl-10" required />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                  Send Reset Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mt-4 text-center">
                <Link href="/auth/login" className="text-emerald-600 hover:underline inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-8 text-center text-sm text-slate-500">
            If you don't receive an email within 5 minutes, check your spam folder or{" "}
            <Link href="/contact" className="text-emerald-600 hover:underline">
              contact support
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

