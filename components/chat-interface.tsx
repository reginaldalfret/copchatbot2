"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Loader2, Download, Upload, Mic, MicOff, FileText, ChevronRight } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { processQuery } from "@/lib/chat-processor"
import type { Message, KnowledgeBase, StepByStepGuide } from "@/lib/types"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { loadSampleData } from "@/lib/sample-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmergencyButton } from "@/components/emergency-button"
import { StepByStepGuideComponent } from "@/components/step-by-step-guide"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { loadGuides } from "@/lib/guides"

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        "Welcome to CopBotChatbox! I can help you with information about police procedures, complaint filing, emergency contacts, and legal provisions. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState("english")
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeBase | null>(null)
  const [isOfflineMode, setIsOfflineMode] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false)
  const [showGuideDialog, setShowGuideDialog] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState<StepByStepGuide | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const guides = loadGuides()

  // Load sample data on component mount
  useEffect(() => {
    const data = loadSampleData()
    setKnowledgeBase(data)

    // Check if we're in offline mode
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOfflineMode(true)
      toast({
        title: "Offline Mode",
        description: "You are currently offline. The chatbot will use locally stored data.",
      })
    }

    // Listen for online/offline events
    const handleOffline = () => {
      setIsOfflineMode(true)
      toast({
        title: "Offline Mode",
        description: "You are now offline. The chatbot will use locally stored data.",
      })
    }

    const handleOnline = () => {
      setIsOfflineMode(false)
      toast({
        title: "Online Mode",
        description: "You are now online.",
      })
    }

    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnline)

    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }
  }, [toast])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() && !isLoading) return

    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Process the query using the knowledge base
      if (!knowledgeBase) {
        throw new Error("Knowledge base not loaded")
      }

      const response = await processQuery(input, knowledgeBase, language)

      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: response,
        },
      ])
    } catch (error) {
      console.error("Error processing query:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: "I'm sorry, I encountered an error while processing your request. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string)
        setKnowledgeBase(data)
        toast({
          title: "Knowledge Base Updated",
          description: "The knowledge base has been successfully updated with the new data.",
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to parse the uploaded file. Please ensure it's a valid JSON file.",
          variant: "destructive",
        })
      }
    }
    reader.readAsText(file)
  }

  const handleDownloadKnowledgeBase = () => {
    if (!knowledgeBase) return

    const dataStr = JSON.stringify(knowledgeBase, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const a = document.createElement("a")
    a.href = url
    a.download = "police-knowledge-base.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })

        // In a real implementation, you would send this to a speech-to-text service
        // For now, we'll simulate it with a timeout
        setIsLoading(true)
        setTimeout(() => {
          // Simulated speech-to-text result
          const simulatedText = "How do I file a police complaint?"
          setInput(simulatedText)
          setIsLoading(false)

          toast({
            title: "Voice Recognized",
            description: `Recognized: "${simulatedText}"`,
          })
        }, 1500)

        // Clean up
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)

      toast({
        title: "Recording Started",
        description: "Speak clearly into your microphone.",
      })
    } catch (error) {
      console.error("Error accessing microphone:", error)
      toast({
        title: "Microphone Error",
        description: "Could not access your microphone. Please check permissions.",
        variant: "destructive",
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    // Optional: auto-submit the form
    setTimeout(() => {
      const form = document.querySelector("form")
      if (form) form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
    }, 100)
  }

  const openGuide = (guide: StepByStepGuide) => {
    setSelectedGuide(guide)
    setShowGuideDialog(true)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-30rem)]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
            </SelectContent>
          </Select>
          {isOfflineMode && (
            <span className="text-sm text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-md">
              Offline Mode
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <EmergencyButton onClick={() => setShowEmergencyDialog(true)} />
          <Button variant="outline" size="sm" onClick={handleDownloadKnowledgeBase} title="Download Knowledge Base">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="relative" title="Upload Knowledge Base">
            <Upload className="h-4 w-4 mr-2" />
            Import
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept=".json"
              onChange={handleFileUpload}
            />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="guides">Step-by-Step Guides</TabsTrigger>
          <TabsTrigger value="legal">Legal Rights</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col">
          <Card className="flex-1 overflow-y-auto p-4 mb-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-center py-2">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </Card>

          <div className="bg-muted/50 p-3 rounded-lg mb-4">
            <h3 className="text-sm font-medium mb-2">Quick Questions</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handleQuickQuestion("How do I file an FIR?")}
              >
                How do I file an FIR?
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handleQuickQuestion("What are my rights if arrested?")}
              >
                Rights if arrested?
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handleQuickQuestion("What is Section 302 of IPC?")}
              >
                Section 302 IPC?
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handleQuickQuestion("Emergency helpline numbers")}
              >
                Emergency numbers
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              disabled={isLoading}
              onClick={isRecording ? stopRecording : startRecording}
              className={isRecording ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : ""}
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="guides" className="flex-1 flex flex-col">
          <Card className="flex-1 overflow-y-auto p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => openGuide(guide)}
                >
                  <div className="flex items-start gap-3">
                    <div className="feature-icon">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground">{guide.description}</p>
                      <div className="flex items-center mt-2 text-police-600 dark:text-police-400 text-xs font-medium">
                        View Guide <ChevronRight className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="flex-1 flex flex-col">
          <Card className="flex-1 overflow-y-auto p-4 mb-4">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-medium mb-2">Your Rights When Arrested</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 text-green-700 p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span>Right to know the grounds of arrest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 text-green-700 p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span>Right to inform a friend, relative, or lawyer about your arrest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 text-green-700 p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span>Right to be produced before a magistrate within 24 hours of arrest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 text-green-700 p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span>Right to legal representation, including free legal aid if you cannot afford a lawyer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 text-green-700 p-1 mt-0.5">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span>Right to remain silent and not be compelled to be a witness against yourself</span>
                  </li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-medium mb-2">Common Legal Provisions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Section 302 IPC</h4>
                    <p className="text-xs text-muted-foreground mt-1">Punishment for murder</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Section 376 IPC</h4>
                    <p className="text-xs text-muted-foreground mt-1">Punishment for rape</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Section 498A IPC</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Husband or relative subjecting woman to cruelty
                    </p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Section 420 IPC</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cheating and dishonestly inducing delivery of property
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Women's Rights & Protection</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Several laws are in place to protect women from domestic violence, sexual harassment, and other
                  crimes.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleQuickQuestion("What laws protect women from domestic violence?")}
                >
                  Learn More About Women's Protection Laws
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Emergency Dialog */}
      <Dialog open={showEmergencyDialog} onOpenChange={setShowEmergencyDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-emergency-600">Emergency Assistance</DialogTitle>
            <DialogDescription>Contact these emergency numbers for immediate help.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-emergency-50 dark:bg-emergency-900/20 p-3 rounded-lg border border-emergency-100 dark:border-emergency-800">
                <div className="font-medium text-emergency-700 dark:text-emergency-400">Police</div>
                <div className="text-2xl font-bold text-emergency-600">100</div>
              </div>
              <div className="bg-emergency-50 dark:bg-emergency-900/20 p-3 rounded-lg border border-emergency-100 dark:border-emergency-800">
                <div className="font-medium text-emergency-700 dark:text-emergency-400">National Emergency</div>
                <div className="text-2xl font-bold text-emergency-600">112</div>
              </div>
              <div className="bg-emergency-50 dark:bg-emergency-900/20 p-3 rounded-lg border border-emergency-100 dark:border-emergency-800">
                <div className="font-medium text-emergency-700 dark:text-emergency-400">Women Helpline</div>
                <div className="text-2xl font-bold text-emergency-600">1091</div>
              </div>
              <div className="bg-emergency-50 dark:bg-emergency-900/20 p-3 rounded-lg border border-emergency-100 dark:border-emergency-800">
                <div className="font-medium text-emergency-700 dark:text-emergency-400">Child Helpline</div>
                <div className="text-2xl font-bold text-emergency-600">1098</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              In case of emergency, please dial the appropriate number immediately. These services are available 24/7.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Step-by-Step Guide Dialog */}
      <Dialog open={showGuideDialog} onOpenChange={setShowGuideDialog}>
        <DialogContent className="sm:max-w-lg">
          {selectedGuide && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedGuide.title}</DialogTitle>
                <DialogDescription>{selectedGuide.description}</DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <StepByStepGuideComponent guide={selectedGuide} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
