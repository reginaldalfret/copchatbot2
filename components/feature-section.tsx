import { FileText, Headphones, MapPin, Shield, AlertTriangle, BookOpen, Mic, Languages, Clock } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Complaint Filing Guidance",
      description: "Step-by-step instructions on how to file complaints and FIRs with the police department.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Virtual Assistant",
      description: "Get assistance anytime, day or night, without visiting a police station.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Nearest Police Station",
      description: "Find the closest police station with directions and contact information.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Legal Rights Information",
      description: "Learn about your legal rights and protections under various laws.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Emergency Assistance",
      description: "Quick access to emergency helplines and immediate guidance in crisis situations.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Legal Provisions",
      description: "Information about various sections of law and associated punishments.",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Voice Interaction",
      description: "Speak your queries and receive voice responses for enhanced accessibility.",
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Interact in multiple Indian languages for wider accessibility.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Offline Functionality",
      description: "Access information even without internet connectivity at police stations.",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-background to-police-50/50 dark:from-background dark:to-police-950/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bridging the Gap Between Citizens and Police</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CopBotChatbox provides essential services to help citizens navigate legal and procedural matters
            effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon mb-4 inline-flex">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
