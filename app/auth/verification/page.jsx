"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Shield, ArrowRight, Mail } from "lucide-react"

export default function VerificationPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-2xl">CyberLearn</span>
            </div>
            <h1 className="text-2xl font-bold">Check your email</h1>
            <p className="text-slate-500">We've sent a verification code to your email</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Verify your email</CardTitle>
              <CardDescription>Enter the 6-digit code sent to your email address</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // In a real app, this would call an API endpoint
                  window.location.href = "/auth/reset-password"
                }}
              >
                <div className="flex justify-between gap-2">
                  {[...Array(6)].map((_, i) => (
                    <Input
                      key={i}
                      className="w-12 h-12 text-center text-lg"
                      maxLength={1}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      required
                    />
                  ))}
                </div>
                <div className="text-center text-sm text-slate-500 mt-4">
                  <p>
                    Didn't receive a code?{" "}
                    <button type="button" className="text-emerald-600 hover:underline">
                      Resend
                    </button>
                  </p>
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                  Verify Email
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col"></CardFooter>
          </Card>

          <div className="mt-8 text-center text-sm text-slate-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-slate-400" />
              <span>We sent the code to example@email.com</span>
            </div>
            <p>
              Wrong email?{" "}
              <Link href="/auth/register" className="text-emerald-600 hover:underline">
                Go back
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

