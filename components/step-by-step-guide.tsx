"use client"

import { useState } from "react"
import type { StepByStepGuide } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepByStepGuideProps {
  guide: StepByStepGuide
}

export function StepByStepGuideComponent({ guide }: StepByStepGuideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex])
    }
  }

  const goToNextStep = () => {
    if (currentStep < guide.steps.length - 1) {
      markStepComplete(currentStep)
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep + 1} of {guide.steps.length}
          </span>
          <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-police-600 transition-all"
              style={{ width: `${((currentStep + 1) / guide.steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {completedSteps.length} of {guide.steps.length} completed
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-card">
        <h3 className="text-lg font-medium mb-2">{guide.steps[currentStep].title}</h3>
        <p className="text-muted-foreground mb-4">{guide.steps[currentStep].description}</p>

        {guide.steps[currentStep].details && (
          <div className="bg-muted/50 p-4 rounded-lg mb-4 text-sm">{guide.steps[currentStep].details}</div>
        )}

        {guide.steps[currentStep].tips && (
          <div className="border-l-4 border-police-500 pl-4 py-2 mb-4">
            <p className="text-sm font-medium text-police-700 dark:text-police-400">Tip:</p>
            <p className="text-sm text-muted-foreground">{guide.steps[currentStep].tips}</p>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPreviousStep} disabled={currentStep === 0}>
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous
        </Button>

        {currentStep < guide.steps.length - 1 ? (
          <Button onClick={goToNextStep}>
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={() => markStepComplete(currentStep)}
            className={cn("bg-green-600 hover:bg-green-700", completedSteps.includes(currentStep) && "bg-green-700")}
          >
            {completedSteps.includes(currentStep) ? (
              <>
                Complete <Check className="h-4 w-4 ml-2" />
              </>
            ) : (
              "Mark Complete"
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
