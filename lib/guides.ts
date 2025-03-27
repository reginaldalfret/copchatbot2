import type { StepByStepGuide } from "./types"

export function loadGuides(): StepByStepGuide[] {
  return [
    {
      id: "file-fir",
      title: "How to File an FIR",
      description: "A step-by-step guide to filing a First Information Report (FIR) with the police",
      steps: [
        {
          title: "Visit the Police Station",
          description: "Go to the police station that has jurisdiction over the area where the crime occurred.",
          details:
            "The jurisdiction is determined by the location where the crime took place, not where you live. You can find the nearest police station using the station locator feature.",
          tips: "Bring a government-issued ID proof with you, such as Aadhaar, PAN card, or voter ID.",
        },
        {
          title: "Meet the Station House Officer (SHO)",
          description: "Approach the duty officer or Station House Officer to report the crime.",
          details:
            "Explain your situation clearly and provide all relevant details about the incident. Be prepared to answer questions about what happened, when it happened, who was involved, and any witnesses.",
          tips: "If possible, write down the details of the incident before going to the station to ensure you don't forget important information.",
        },
        {
          title: "Provide Your Statement",
          description: "Give a detailed statement about the incident to the officer.",
          details:
            "The officer will record your statement in the Station House Diary. Make sure all details are accurate and complete. Your statement should include the date, time, and location of the incident, names of people involved (if known), and a description of what happened.",
          tips: "Speak clearly and stick to the facts. Avoid including opinions or assumptions in your statement.",
        },
        {
          title: "Review and Sign the FIR",
          description: "Read the FIR carefully before signing it.",
          details:
            "The officer will prepare the FIR based on your statement. Review it thoroughly to ensure all details are correct. If you notice any errors or omissions, ask for corrections before signing.",
          tips: "Request a copy of the FIR for your records. The police are legally obligated to provide you with a free copy.",
        },
        {
          title: "Collect the FIR Copy",
          description: "Get a copy of the FIR with the FIR number.",
          details:
            "The FIR will be assigned a unique number. This number is important for tracking the progress of your case. Keep the FIR copy in a safe place as you will need it for future reference.",
          tips: "Take a photo of the FIR and store it digitally as a backup.",
        },
        {
          title: "Follow Up on Your Case",
          description: "Regularly check the status of your case with the investigating officer.",
          details:
            "The police will assign an investigating officer to your case. You can contact this officer to inquire about the progress of the investigation. Keep a record of all communications with the police.",
          tips: "If you have additional evidence or information after filing the FIR, provide it to the investigating officer as soon as possible.",
        },
      ],
    },
    {
      id: "domestic-violence",
      title: "Reporting Domestic Violence",
      description: "How to report domestic violence and seek protection under the law",
      steps: [
        {
          title: "Ensure Your Safety First",
          description: "If you are in immediate danger, call the Women Helpline (1091) or Police Emergency (100).",
          details:
            "Your safety is the top priority. If possible, move to a safe location such as a friend's or relative's house, or a shelter for women.",
          tips: "Keep important documents, some money, and a change of clothes ready in case you need to leave quickly.",
        },
        {
          title: "Document the Abuse",
          description: "Keep a record of all incidents of abuse.",
          details:
            "Document dates, times, and descriptions of each incident. Take photos of any injuries or property damage. Save threatening messages, emails, or voicemails. This documentation will be valuable evidence when filing a complaint.",
          tips: "Use a secure, password-protected device to store digital evidence, or keep physical evidence in a safe place that your abuser cannot access.",
        },
        {
          title: "File a Police Complaint",
          description: "Visit the nearest police station to file a complaint.",
          details:
            "You can file a complaint at any police station, regardless of where the incident occurred. The police are legally obligated to register your complaint and provide you with a copy. If the police refuse to file your complaint, you can approach the Superintendent of Police or file a complaint directly with the Magistrate.",
          tips: "Consider taking a trusted friend or family member with you for support when filing the complaint.",
        },
        {
          title: "Apply for Protection Order",
          description:
            "File an application for a protection order under the Protection of Women from Domestic Violence Act.",
          details:
            "A protection order is a court order that prohibits the abuser from committing acts of domestic violence, contacting you, or coming near your residence or workplace. You can apply for a protection order through a Protection Officer, Service Provider, or directly through a lawyer.",
          tips: "The court can issue an interim protection order immediately if there is an urgent need for protection.",
        },
        {
          title: "Seek Legal Aid",
          description: "Contact a legal aid service or women's organization for free legal assistance.",
          details:
            "Legal aid services can help you understand your rights, guide you through the legal process, and represent you in court if necessary. Many women's organizations also provide counseling, shelter, and other support services.",
          tips: "The National Legal Services Authority (NALSA) provides free legal services to women facing domestic violence.",
        },
        {
          title: "Follow Up on Your Case",
          description: "Regularly check the status of your complaint and protection order application.",
          details:
            "Stay in touch with the investigating officer and your legal representative. Attend all court hearings and provide any additional evidence or information as required.",
          tips: "Keep a record of all case-related documents, including copies of complaints, applications, and court orders.",
        },
      ],
    },
    {
      id: "cyber-crime",
      title: "Reporting Cyber Crime",
      description: "Steps to report online fraud, harassment, or other cyber crimes",
      steps: [
        {
          title: "Preserve Evidence",
          description: "Collect and save all evidence related to the cyber crime.",
          details:
            "Take screenshots of offensive messages, emails, or social media posts. Save copies of transaction details for financial fraud. Note down dates, times, and any other relevant information.",
          tips: "Do not delete any messages or emails, even if they are disturbing, as they serve as crucial evidence.",
        },
        {
          title: "Report to the Platform",
          description: "Report the issue to the website or platform where the crime occurred.",
          details:
            "Most social media platforms, financial institutions, and websites have reporting mechanisms for abusive content, fraud, or harassment. Use these tools to report the issue to the platform administrators.",
          tips: "Check if the platform has frozen the fraudulent account or removed the offensive content after your report.",
        },
        {
          title: "File a Complaint on the Cyber Crime Portal",
          description: "Register a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in).",
          details:
            "The portal allows you to report various types of cyber crimes, including online financial fraud, social media abuse, and child pornography. You will receive a complaint number that you can use to track the status of your complaint.",
          tips: "For financial fraud, reporting within 24 hours increases the chances of recovering your money.",
        },
        {
          title: "Visit the Cyber Crime Police Station",
          description: "File a formal complaint at the nearest cyber crime police station or regular police station.",
          details:
            "Provide all the evidence you have collected, along with a detailed written complaint. The police will register an FIR if they determine that a cognizable offense has been committed.",
          tips: "Many cities now have dedicated cyber crime police stations that specialize in handling digital crimes.",
        },
        {
          title: "Follow Up on Your Complaint",
          description: "Regularly check the status of your complaint and provide additional information if requested.",
          details:
            "Cyber crime investigations can be complex and may take time. Stay in touch with the investigating officer and respond promptly to any requests for additional information or evidence.",
          tips: "If you receive any new evidence or experience further incidents after filing your complaint, report them to the investigating officer immediately.",
        },
        {
          title: "Take Preventive Measures",
          description: "Strengthen your online security to prevent future incidents.",
          details:
            "Change passwords for all your accounts, enable two-factor authentication, update your devices and applications regularly, and be cautious about sharing personal information online.",
          tips: "Consider using a password manager to create and store strong, unique passwords for each of your accounts.",
        },
      ],
    },
  ]
}
