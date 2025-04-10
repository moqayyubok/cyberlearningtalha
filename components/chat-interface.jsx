"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, Image, File, X } from "lucide-react"

export default function ChatInterface({ recipient, initialMessages = [], onSendMessage }) {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [attachments, setAttachments] = useState([])
  const messagesEndRef = useRef(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return

    const newMessage = {
      id: Date.now(),
      sender: "me",
      content: input,
      timestamp: new Date().toISOString(),
      attachments: [...attachments],
    }

    setMessages([...messages, newMessage])
    setInput("")
    setAttachments([])

    if (onSendMessage) {
      onSendMessage(newMessage)
    }

    // Simulate reply after 1 second
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "recipient",
        content: "Thanks for your message! I'll get back to you soon.",
        timestamp: new Date().toISOString(),
        attachments: [],
      }
      setMessages((prev) => [...prev, reply])
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleAddAttachment = (type) => {
    // Simulate file selection
    const newAttachment = {
      id: Date.now(),
      name: type === "image" ? "screenshot.png" : "document.pdf",
      type: type,
      size: "1.2 MB",
    }
    setAttachments([...attachments, newAttachment])
  }

  const handleRemoveAttachment = (id) => {
    setAttachments(attachments.filter((attachment) => attachment.id !== id))
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" })
  }

  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = formatDate(message.timestamp)
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(message)
    return groups
  }, {})

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={recipient.avatar} alt={recipient.name} />
              <AvatarFallback>
                {recipient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{recipient.name}</CardTitle>
              <div className="flex items-center">
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    recipient.status === "online"
                      ? "border-emerald-500 text-emerald-600"
                      : "border-slate-500 text-slate-600"
                  }`}
                >
                  {recipient.status === "online" ? "Online" : "Offline"}
                </Badge>
              </div>
            </div>
          </div>

          <Tabs defaultValue="chat">
            <TabsList className="h-8">
              <TabsTrigger value="chat" className="text-xs px-2">
                Chat
              </TabsTrigger>
              <TabsTrigger value="files" className="text-xs px-2">
                Files
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-0">
        <Tabs defaultValue="chat" className="h-full flex flex-col">
          <TabsContent
            value="chat"
            className="flex-1 overflow-y-auto p-4 space-y-6 m-0 data-[state=active]:flex data-[state=active]:flex-col"
          >
            {Object.entries(groupedMessages).map(([date, dateMessages]) => (
              <div key={date} className="space-y-4">
                <div className="flex justify-center">
                  <Badge variant="outline" className="text-xs bg-slate-50">
                    {date}
                  </Badge>
                </div>

                {dateMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-start gap-2 max-w-[80%]">
                      {message.sender !== "me" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={recipient.avatar} alt={recipient.name} />
                          <AvatarFallback>
                            {recipient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.sender === "me"
                              ? "bg-emerald-600 text-white rounded-tr-none"
                              : "bg-slate-100 rounded-tl-none"
                          }`}
                        >
                          {message.content}

                          {message.attachments && message.attachments.length > 0 && (
                            <div className="mt-2 space-y-2">
                              {message.attachments.map((attachment) => (
                                <div
                                  key={attachment.id}
                                  className={`flex items-center gap-2 p-2 rounded ${
                                    message.sender === "me" ? "bg-emerald-700" : "bg-slate-200"
                                  }`}
                                >
                                  {attachment.type === "image" ? (
                                    <Image className="h-4 w-4" />
                                  ) : (
                                    <File className="h-4 w-4" />
                                  )}
                                  <span className="text-xs">{attachment.name}</span>
                                  <span className="text-xs opacity-70">{attachment.size}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className={`text-xs mt-1 ${message.sender === "me" ? "text-right" : ""} text-slate-500`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>

                      {message.sender === "me" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32&text=You" alt="You" />
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </TabsContent>

          <TabsContent value="files" className="flex-1 overflow-y-auto p-4 m-0">
            <div className="text-center py-8">
              <p className="text-slate-500">All shared files will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <div className="border-t p-4">
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {attachments.map((attachment) => (
              <div key={attachment.id} className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                {attachment.type === "image" ? <Image className="h-3 w-3" /> : <File className="h-3 w-3" />}
                <span className="text-xs">{attachment.name}</span>
                <button
                  onClick={() => handleRemoveAttachment(attachment.id)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => handleAddAttachment("file")}
            >
              <Paperclip className="h-5 w-5 text-slate-500" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => handleAddAttachment("image")}
            >
              <Image className="h-5 w-5 text-slate-500" />
            </Button>
          </div>

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1"
          />

          <Button
            onClick={handleSend}
            size="icon"
            className="h-9 w-9 rounded-full bg-emerald-600 hover:bg-emerald-700"
            disabled={!input.trim() && attachments.length === 0}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

