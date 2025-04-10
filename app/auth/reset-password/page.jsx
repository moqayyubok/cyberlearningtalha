"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Lock, ArrowRight } from "lucide-react"

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-2xl">CyberLearn</span>
            </div>
            <h1 className="text-2xl font-bold">Set new password</h1>
            <p className="text-slate-500">Create a strong password for your account</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>Your new password must be different from previously used passwords</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // In a real app, this would call an API endpoint
                  window.location.href = "/auth/login?reset=success"
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      required
                      minLength={8}
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Password must be at least 8 characters and include a number and a special character
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                  Reset Password
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col"></CardFooter>
          </Card>

          <div className="mt-8 text-center text-sm text-slate-500">
            Having trouble?{" "}
            <Link href="/contact" className="text-emerald-600 hover:underline">
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

