export interface Message {
  role: "user" | "system"
  content: string
}

export interface KnowledgeBaseEntry {
  category: string
  question: string
  answer: string
  keywords: string[]
  translations?: {
    [language: string]: {
      question: string
      answer: string
    }
  }
}

export interface KnowledgeBase {
  entries: KnowledgeBaseEntry[]
  emergencyContacts: {
    [key: string]: string
  }
  legalProvisions: {
    [key: string]: {
      description: string
      punishment: string
    }
  }
}

export interface Step {
  title: string
  description: string
  details?: string
  tips?: string
}

export interface StepByStepGuide {
  id: string
  title: string
  description: string
  steps: Step[]
}
