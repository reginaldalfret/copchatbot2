"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmergencyButtonProps {
  onClick: () => void
}

export function EmergencyButton({ onClick }: EmergencyButtonProps) {
  return (
    <Button variant="destructive" size="sm" className="emergency-button" onClick={onClick}>
      <span className="relative z-10 flex items-center">
        <AlertTriangle className="h-4 w-4 mr-2" />
        Emergency
      </span>
    </Button>
  )
}
