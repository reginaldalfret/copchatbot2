import type { KnowledgeBase } from "./types"

export async function processQuery(query: string, knowledgeBase: KnowledgeBase, language = "english"): Promise<string> {
  // Normalize the query
  const normalizedQuery = query.toLowerCase().trim()

  // Check for emergency keywords
  if (normalizedQuery.includes("emergency") || normalizedQuery.includes("urgent") || normalizedQuery.includes("help")) {
    return formatEmergencyResponse(knowledgeBase.emergencyContacts, language)
  }

  // Check for legal provision queries
  if (
    normalizedQuery.includes("section") ||
    normalizedQuery.includes("law") ||
    normalizedQuery.includes("legal") ||
    normalizedQuery.includes("punishment") ||
    normalizedQuery.includes("penalty")
  ) {
    // Extract section numbers if present
    const sectionMatch = normalizedQuery.match(/section\s+(\d+)/i)
    if (sectionMatch && sectionMatch[1]) {
      const sectionNumber = sectionMatch[1]
      return formatLegalProvisionResponse(sectionNumber, knowledgeBase.legalProvisions, language)
    }
  }

  // Search for matching entries in the knowledge base
  const matchingEntries = knowledgeBase.entries
    .filter((entry) => {
      // Check if query contains keywords
      return entry.keywords.some((keyword) => normalizedQuery.includes(keyword.toLowerCase()))
    })
    .sort((a, b) => {
      // Sort by relevance (number of matching keywords)
      const aMatches = a.keywords.filter((keyword) => normalizedQuery.includes(keyword.toLowerCase())).length

      const bMatches = b.keywords.filter((keyword) => normalizedQuery.includes(keyword.toLowerCase())).length

      return bMatches - aMatches
    })

  if (matchingEntries.length > 0) {
    const entry = matchingEntries[0]

    // Return translated content if available and requested
    if (language !== "english" && entry.translations && entry.translations[language]) {
      return entry.translations[language].answer
    }

    return entry.answer
  }

  // If no specific match is found, provide a general response
  return "I'm sorry, I don't have specific information about that. Please try rephrasing your question or ask about police procedures, complaint filing, emergency contacts, or legal provisions."
}

function formatEmergencyResponse(emergencyContacts: { [key: string]: string }, language: string): string {
  let response = "Here are the emergency contact numbers you can use:\n\n"

  Object.entries(emergencyContacts).forEach(([name, number]) => {
    response += `- ${name}: ${number}\n`
  })

  if (language !== "english") {
    // In a real implementation, this would be translated
    response += "\n(This information is currently only available in English)"
  }

  return response
}

function formatLegalProvisionResponse(
  sectionNumber: string,
  legalProvisions: { [key: string]: { description: string; punishment: string } },
  language: string,
): string {
  const section = legalProvisions[sectionNumber]

  if (!section) {
    return `I'm sorry, I don't have information about Section ${sectionNumber}. Please check if the section number is correct or ask about a different legal provision.`
  }

  let response = `Information about Section ${sectionNumber}:\n\n`
  response += `Description: ${section.description}\n\n`
  response += `Punishment: ${section.punishment}`

  if (language !== "english") {
    // In a real implementation, this would be translated
    response += "\n\n(This information is currently only available in English)"
  }

  return response
}
