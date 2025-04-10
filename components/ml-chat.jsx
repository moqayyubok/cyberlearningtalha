"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, X, Send, Minimize, Maximize, Bot } from "lucide-react"

// Sample responses for demonstration
const sampleResponses = {
  hello: "Hello! How can I help with your cybersecurity learning today?",
  help: "I can help you with cybersecurity concepts, recommend courses, explain technical terms, or assist with your learning path. Just ask away!",
  course:
    "We have several courses available. Popular ones include Network Security Fundamentals, Ethical Hacking, and Cloud Security. Would you like more information about any of these?",
  network:
    "Network security involves protecting the integrity, confidentiality and accessibility of computer networks and data. Our Network Security Fundamentals course covers firewalls, VPNs, IDS/IPS, and secure network architecture.",
  hacking:
    "Ethical hacking involves authorized attempts to gain unauthorized access to systems, applications, or data. Our Ethical Hacking course teaches penetration testing methodologies, vulnerability assessment, and security tools.",
  password:
    "Strong passwords should be at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters. Consider using a password manager to generate and store complex passwords securely.",
  encryption:
    "Encryption is the process of encoding information to prevent unauthorized access. It converts plaintext into ciphertext that can only be decoded with the correct key. Common types include symmetric and asymmetric encryption.",
  firewall:
    "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between trusted internal networks and untrusted external networks.",
  malware:
    "Malware (malicious software) includes viruses, worms, trojans, ransomware, and spyware. Our Malware Analysis course teaches you how to detect, analyze, and respond to various types of malware threats.",
  certificate:
    "We offer certificates upon completion of all our courses. These certificates can be added to your resume and LinkedIn profile to demonstrate your cybersecurity skills to potential employers.",
}

export default function MLChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm CyberAssist, your AI learning assistant. How can I help you with cybersecurity today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking
    setTimeout(() => {
      // Generate response based on keywords in the input
      let response =
        "I'm not sure about that. Could you ask something about cybersecurity concepts, courses, or learning paths?"

      const lowercaseInput = input.toLowerCase()

      // Check for keywords in the input
      for (const [keyword, reply] of Object.entries(sampleResponses)) {
        if (lowercaseInput.includes(keyword)) {
          response = reply
          break
        }
      }

      // Add AI response
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button onClick={toggleChat} className="h-14 w-14 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700">
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className={`w-80 md:w-96 shadow-xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[500px]"}`}>
          {/* Chat Header */}
          <div className="bg-emerald-600 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <h3 className="font-medium">CyberAssist</h3>
                {!isMinimized && (
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-xs border-white/30 text-white/90">
                      AI Assistant
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-white hover:bg-emerald-700 rounded-full"
                onClick={toggleMinimize}
              >
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-white hover:bg-emerald-700 rounded-full"
                onClick={toggleChat}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="p-4 h-[380px] overflow-y-auto bg-slate-50">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/placeholder.svg?height=32&width=32&text=AI" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-emerald-600 text-white rounded-tr-none"
                          : "bg-white border rounded-tl-none"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 ml-2">
                        <AvatarImage src="/placeholder.svg?height=32&width=32&text=You" />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32&text=AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-white border p-3 rounded-lg rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                        <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about cybersecurity..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-emerald-600 hover:bg-emerald-700"
                  disabled={!input.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  )
}

