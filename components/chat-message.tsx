"use client"

import type { Message } from "@/lib/types"
import { cn } from "@/lib/utils"
import { User, Bot, Volume2, Copy, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"
  const [isCopied, setIsCopied] = useState(false)
  const [feedback, setFeedback] = useState<"liked" | "disliked" | null>(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const speakMessage = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(message.content)
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg transition-all",
        isUser ? "bg-police-100 dark:bg-police-900/30 ml-auto max-w-[85%]" : "bg-card border shadow-sm max-w-[85%]",
      )}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
          isUser ? "bg-police-600 text-white" : "bg-blue-600 text-white",
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <span className="text-xs font-medium text-muted-foreground">{isUser ? "You" : "CopBot"}</span>
          <span className="text-xs text-muted-foreground">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
        <p className="text-sm whitespace-pre-line">{message.content}</p>

        {!isUser && (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={speakMessage} title="Listen">
                <Volume2 className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={copyToClipboard}
                title={isCopied ? "Copied!" : "Copy"}
              >
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground mr-1">Helpful?</span>
              <Button
                variant="ghost"
                size="icon"
                className={cn("h-7 w-7", feedback === "liked" && "text-green-500")}
                onClick={() => setFeedback("liked")}
                title="Helpful"
              >
                <ThumbsUp className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn("h-7 w-7", feedback === "disliked" && "text-red-500")}
                onClick={() => setFeedback("disliked")}
                title="Not helpful"
              >
                <ThumbsDown className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
