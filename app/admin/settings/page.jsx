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
import { Badge } from "@/components/ui/badge"
import { Shield, User, Lock, Bell, Globe, Database, Key } from "lucide-react"
import RoleIndicator from "@/components/role-indicator"

export default function AdminSettingsPage() {
  const [userRole, setUserRole] = useState("admin")
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("tempUser")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUserRole(parsedUser.role)
      setUser(parsedUser)
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
          <p className="text-slate-500">Manage your account and platform settings</p>
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
                <Shield className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>

              {userRole === "admin" && (
                <>
                  <Separator className="my-2" />
                  <p className="text-xs text-slate-500 px-3 py-1">Platform Settings</p>
                  <TabsTrigger
                    value="general"
                    className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    General
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="api"
                    className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
                  >
                    <Key className="h-4 w-4 mr-2" />
                    API Keys
                  </TabsTrigger>
                  <TabsTrigger
                    value="database"
                    className="w-full justify-start px-3 py-2 data-[state=active]:bg-slate-100 rounded-md"
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Database
                  </TabsTrigger>
                </>
              )}
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
                    <Label htmlFor="role">Role</Label>
                    <div className="flex items-center h-10 px-3 rounded-md border border-input bg-slate-100">
                      <Badge className="capitalize">{userRole === "schoolAdmin" ? "School Admin" : userRole}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Experienced cybersecurity professional with a passion for education and technology."
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

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Sessions</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-slate-500">San Francisco, CA • Chrome on Windows</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Log Out All Other Sessions
                    </Button>
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
                        { title: "Platform updates", description: "News about features and improvements" },
                        { title: "Security alerts", description: "Important security notifications" },
                        { title: "User activity", description: "New registrations and user actions" },
                        { title: "Course updates", description: "New courses and content changes" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-slate-500">{item.description}</p>
                          </div>
                          <Switch defaultChecked={index < 2} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Browser Notifications</h3>
                    <div className="space-y-2">
                      {[
                        { title: "Real-time alerts", description: "Immediate notifications for critical events" },
                        { title: "User messages", description: "Notifications for new messages" },
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

            {userRole === "admin" && (
              <>
                <TabsContent value="general" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Platform Settings</CardTitle>
                      <CardDescription>Configure global platform settings and defaults</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Platform Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="platformName">Platform Name</Label>
                            <Input id="platformName" defaultValue="Cyber Learning Platform" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="supportEmail">Support Email</Label>
                            <Input id="supportEmail" defaultValue="support@cyberlearning.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="platformDescription">Platform Description</Label>
                          <Textarea
                            id="platformDescription"
                            rows={3}
                            defaultValue="A comprehensive cybersecurity education platform for students and professionals."
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Default Settings</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Allow Public Registration</p>
                              <p className="text-sm text-slate-500">Enable users to register without an invitation</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Require Email Verification</p>
                              <p className="text-sm text-slate-500">
                                Users must verify their email before accessing the platform
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable Course Reviews</p>
                              <p className="text-sm text-slate-500">Allow students to leave reviews on courses</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Settings</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>Configure platform security settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Authentication</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Require Strong Passwords</p>
                              <p className="text-sm text-slate-500">Enforce minimum password complexity requirements</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable 2FA for All Users</p>
                              <p className="text-sm text-slate-500">
                                Require two-factor authentication for all accounts
                              </p>
                            </div>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enforce 2FA for Admins</p>
                              <p className="text-sm text-slate-500">
                                Require two-factor authentication for admin accounts
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Session Management</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                            <Input id="sessionTimeout" type="number" defaultValue="60" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="maxSessions">Maximum Concurrent Sessions</Label>
                            <Input id="maxSessions" type="number" defaultValue="5" />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Security Settings</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="api" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Keys</CardTitle>
                      <CardDescription>Manage API keys for external integrations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium">Active API Keys</h3>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            Generate New Key
                          </Button>
                        </div>

                        <div className="space-y-2">
                          {[
                            { name: "Production API Key", created: "Jan 15, 2024", lastUsed: "Today" },
                            { name: "Development API Key", created: "Mar 3, 2024", lastUsed: "Yesterday" },
                          ].map((key, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                              <div>
                                <p className="font-medium">{key.name}</p>
                                <p className="text-sm text-slate-500">
                                  Created: {key.created} • Last used: {key.lastUsed}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                  Revoke
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">API Settings</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable API Access</p>
                              <p className="text-sm text-slate-500">Allow external applications to access the API</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Rate Limiting</p>
                              <p className="text-sm text-slate-500">Limit the number of API requests per minute</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="database" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Database Settings</CardTitle>
                      <CardDescription>Configure database connections and backups</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Backup Configuration</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="backupFrequency">Backup Frequency</Label>
                            <Select defaultValue="daily">
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="hourly">Hourly</SelectItem>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="retentionPeriod">Retention Period (days)</Label>
                            <Input id="retentionPeriod" type="number" defaultValue="30" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="backupLocation">Backup Storage Location</Label>
                          <Input id="backupLocation" defaultValue="s3://cyberlearning-backups/" />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Database Maintenance</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Automatic Optimization</p>
                              <p className="text-sm text-slate-500">Regularly optimize database performance</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Maintenance Window</p>
                              <p className="text-sm text-slate-500">Schedule maintenance during off-peak hours</p>
                            </div>
                            <Select defaultValue="midnight">
                              <SelectTrigger className="w-40">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="midnight">12:00 AM - 2:00 AM</SelectItem>
                                <SelectItem value="early">2:00 AM - 4:00 AM</SelectItem>
                                <SelectItem value="weekend">Saturday 12:00 AM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Run Manual Backup</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Settings</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  )
}

