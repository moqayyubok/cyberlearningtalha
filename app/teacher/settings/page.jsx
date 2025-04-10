"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Lock, Bell, BookOpen, GraduationCap, FileText } from "lucide-react"
import RoleIndicator from "@/components/role-indicator"

export default function TeacherSettingsPage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  if (!user) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-slate-500">Manage your account and teaching preferences</p>
        </div>
        <RoleIndicator />
      </div>

      <Tabs defaultValue="profile">
        <div className="flex">
          <div className="w-64 mr-8">
            <TabsList className="flex flex-col items-start w-full bg-transparent space-y-1 p-0">
              <TabsTrigger
                value="profile"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <Lock className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="teaching"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Teaching
              </TabsTrigger>
              <TabsTrigger
                value="students"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                Students
              </TabsTrigger>
              <TabsTrigger
                value="grading"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <FileText className="h-4 w-4 mr-2" />
                Grading
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="profile" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information and profile settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                      <p className="text-xs text-slate-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue={user.name.split(" ")[0]} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue={user.name.split(" ")[1]} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" defaultValue="Lead Security Instructor" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Cybersecurity instructor with 10+ years of industry experience. Specializing in network security and ethical hacking."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">Areas of Expertise</Label>
                    <Input id="expertise" defaultValue="Network Security, Ethical Hacking, Cloud Security" />
                    <p className="text-xs text-slate-500">Separate with commas</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certifications">Certifications</Label>
                    <Textarea
                      id="certifications"
                      rows={3}
                      defaultValue="Certified Ethical Hacker (CEH), Certified Information Systems Security Professional (CISSP)"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account security and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Enable 2FA</p>
                        <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-2">
                      {[
                        { title: "Student enrollments", description: "When students enroll in your courses" },
                        { title: "Assignment submissions", description: "When students submit assignments" },
                        { title: "Student messages", description: "When students send you messages" },
                        { title: "Course reviews", description: "When students leave reviews on your courses" },
                        { title: "Platform updates", description: "News about features and improvements" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-slate-500">{item.description}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Browser Notifications</h3>
                    <div className="space-y-2">
                      {[
                        {
                          title: "Real-time student activity",
                          description: "Immediate notifications for student actions",
                        },
                        { title: "Assignment deadlines", description: "Reminders about upcoming deadlines" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-slate-500">{item.description}</p>
                          </div>
                          <Switch defaultChecked={index === 0} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teaching" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Preferences</CardTitle>
                  <CardDescription>Configure your teaching style and course defaults</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Course Defaults</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="defaultVisibility">Default Course Visibility</Label>
                        <Select defaultValue="draft">
                          <SelectTrigger>
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft (Private)</SelectItem>
                            <SelectItem value="private">Private (Invitation Only)</SelectItem>
                            <SelectItem value="public">Public</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="commentSettings">Student Comments</Label>
                        <Select defaultValue="moderated">
                          <SelectTrigger>
                            <SelectValue placeholder="Select comment setting" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="disabled">Disabled</SelectItem>
                            <SelectItem value="moderated">Moderated</SelectItem>
                            <SelectItem value="enabled">Enabled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Auto-publish Lessons</p>
                          <p className="text-sm text-slate-500">Automatically publish lessons when created</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Enable Course Forum</p>
                          <p className="text-sm text-slate-500">Allow students to discuss course topics</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Progress to Students</p>
                          <p className="text-sm text-slate-500">Let students see their progress in your courses</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Content Creation</h3>
                    <div className="space-y-2">
                      <Label htmlFor="editorPreference">Preferred Editor</Label>
                      <Select defaultValue="rich">
                        <SelectTrigger>
                          <SelectValue placeholder="Select editor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rich">Rich Text Editor</SelectItem>
                          <SelectItem value="markdown">Markdown</SelectItem>
                          <SelectItem value="html">HTML</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>Configure how you interact with students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Communication</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Direct Messages</p>
                          <p className="text-sm text-slate-500">Let students message you directly</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Office Hours Visibility</p>
                          <p className="text-sm text-slate-500">Show your office hours to students</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="officeHours">Office Hours</Label>
                      <Textarea
                        id="officeHours"
                        rows={3}
                        defaultValue="Monday: 10:00 AM - 12:00 PM
Wednesday: 2:00 PM - 4:00 PM
Friday: 1:00 PM - 3:00 PM"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Student Visibility</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Student Progress</p>
                          <p className="text-sm text-slate-500">View detailed student progress in your courses</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Student Activity Notifications</p>
                          <p className="text-sm text-slate-500">Get notified of important student activities</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grading" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Grading Preferences</CardTitle>
                  <CardDescription>Configure your grading system and feedback options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Grading System</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gradingScale">Default Grading Scale</Label>
                        <Select defaultValue="percentage">
                          <SelectTrigger>
                            <SelectValue placeholder="Select scale" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="percentage">Percentage (0-100%)</SelectItem>
                            <SelectItem value="letter">Letter Grade (A-F)</SelectItem>
                            <SelectItem value="points">Points Based</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passingGrade">Passing Grade</Label>
                        <Input id="passingGrade" type="number" defaultValue="70" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Auto-grade Quizzes</p>
                          <p className="text-sm text-slate-500">Automatically grade multiple-choice quizzes</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Show Correct Answers</p>
                          <p className="text-sm text-slate-500">Show correct answers after quiz submission</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Feedback Options</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Provide Detailed Feedback</p>
                          <p className="text-sm text-slate-500">Include detailed feedback with grades</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow Resubmissions</p>
                          <p className="text-sm text-slate-500">Let students resubmit assignments</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxResubmissions">Maximum Resubmissions</Label>
                        <Input id="maxResubmissions" type="number" defaultValue="2" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

