import type { KnowledgeBase } from "./types"

export function loadSampleData(): KnowledgeBase {
  return {
    entries: [
      {
        category: "Complaints",
        question: "How do I file a police complaint?",
        answer:
          "To file a police complaint:\n\n1. Visit your nearest police station\n2. Approach the duty officer and explain your situation\n3. The officer will record your statement in the Station House Diary\n4. You'll receive a copy of the complaint with a reference number\n5. For serious offenses, an FIR (First Information Report) will be registered\n\nYou can also file complaints online through the official police website or mobile app in many states.",
        keywords: ["file", "complaint", "report", "police", "station", "how to"],
        translations: {
          hindi: {
            question: "मैं पुलिस शिकायत कैसे दर्ज करूं?",
            answer:
              "पुलिस शिकायत दर्ज करने के लिए:\n\n1. अपने निकटतम पुलिस स्टेशन पर जाएं\n2. ड्यूटी अधिकारी से संपर्क करें और अपनी स्थिति समझाएं\n3. अधिकारी आपका बयान स्टेशन हाउस डायरी में दर्ज करेगा\n4. आपको एक संदर्भ संख्या के साथ शिकायत की एक प्रति मिलेगी\n5. गंभीर अपराधों के लिए, एक एफआईआर (प्रथम सूचना रिपोर्ट) दर्ज की जाएगी\n\nकई राज्यों में आप आधिकारिक पुलिस वेबसाइट या मोबाइल ऐप के माध्यम से ऑनलाइन भी शिकायत दर्ज कर सकते हैं।",
          },
        },
      },
      {
        category: "FIR",
        question: "What is an FIR and how do I file one?",
        answer:
          "An FIR (First Information Report) is an official document recording information about a cognizable offense. To file an FIR:\n\n1. Visit the police station in whose jurisdiction the incident occurred\n2. Provide all details of the incident to the officer\n3. The officer will record your statement and read it back to you\n4. Sign the statement after verifying its accuracy\n5. You'll receive a free copy of the FIR\n\nFiling an FIR is your right, and the police cannot refuse to register it for cognizable offenses. If refused, you can approach the Superintendent of Police or file a complaint with the local Magistrate.",
        keywords: ["fir", "first information report", "register", "file"],
        translations: {
          hindi: {
            question: "एफआईआर क्या है और मैं इसे कैसे दर्ज करूं?",
            answer:
              "एफआईआर (प्रथम सूचना रिपोर्ट) एक आधिकारिक दस्तावेज है जो संज्ञेय अपराध के बारे में जानकारी दर्ज करता है। एफआईआर दर्ज करने के लिए:\n\n1. उस पुलिस स्टेशन पर जाएं जिसके क्षेत्राधिकार में घटना हुई है\n2. अधिकारी को घटना के सभी विवरण प्रदान करें\n3. अधिकारी आपका बयान दर्ज करेगा और आपको वापस पढ़कर सुनाएगा\n4. इसकी सटीकता की जांच करने के बाद बयान पर हस्ताक्षर करें\n5. आपको एफआईआर की एक मुफ्त प्रति मिलेगी\n\nएफआईआर दर्ज करना आपका अधिकार है, और पुलिस संज्ञेय अपराधों के लिए इसे दर्ज करने से इनकार नहीं कर सकती। यदि इनकार किया जाता है, तो आप पुलिस अधीक्षक से संपर्क कर सकते हैं या स्थानीय मजिस्ट्रेट के पास शिकायत दर्ज करा सकते हैं।",
          },
        },
      },
      {
        category: "Investigation",
        question: "What happens after I file a police complaint?",
        answer:
          "After filing a police complaint:\n\n1. For non-cognizable offenses, the police may conduct a preliminary inquiry\n2. For cognizable offenses where an FIR is registered, a formal investigation begins\n3. The investigation may include visiting the crime scene, collecting evidence, recording statements of witnesses, and questioning suspects\n4. The investigating officer will prepare a case diary documenting all actions\n5. Upon completion, a charge sheet (final report) is filed in court if evidence supports the charges\n6. If evidence is insufficient, a closure report may be filed\n\nYou can check the status of your complaint by visiting the police station or through online portals where available.",
        keywords: ["after", "complaint", "investigation", "process", "status"],
        translations: {
          hindi: {
            question: "पुलिस शिकायत दर्ज करने के बाद क्या होता है?",
            answer:
              "पुलिस शिकायत दर्ज करने के बाद:\n\n1. गैर-संज्ञेय अपराधों के लिए, पुलिस प्रारंभिक जांच कर सकती है\n2. संज्ञेय अपराधों के लिए जहां एफआईआर दर्ज की जाती है, एक औपचारिक जांच शुरू होती है\n3. जांच में अपराध स्थल का दौरा, सबूत इकट्ठा करना, गवाहों के बयान दर्ज करना और संदिग्धों से पूछताछ शामिल हो सकती है\n4. जांच अधिकारी सभी कार्यों का दस्तावेजीकरण करते हुए एक केस डायरी तैयार करेगा\n5. पूरा होने पर, यदि सबूत आरोपों का समर्थन करते हैं तो अदालत में एक चार्जशीट (अंतिम रिपोर्ट) दायर की जाती है\n6. यदि सबूत अपर्याप्त हैं, तो एक क्लोजर रिपोर्ट दायर की जा सकती है\n\nआप पुलिस स्टेशन जाकर या जहां उपलब्ध हो ऑनलाइन पोर्टल के माध्यम से अपनी शिकायत की स्थिति की जांच कर सकते हैं।",
          },
        },
      },
      {
        category: "Rights",
        question: "What are my rights if I am arrested?",
        answer:
          "If you are arrested, you have the following rights:\n\n1. Right to know the grounds of arrest\n2. Right to inform a friend, relative, or lawyer about your arrest\n3. Right to be produced before a magistrate within 24 hours of arrest\n4. Right to legal representation, including free legal aid if you cannot afford a lawyer\n5. Right to remain silent and not be compelled to be a witness against yourself\n6. Right to medical examination\n7. Right to be treated with dignity and not be subjected to torture or inhuman treatment\n\nThese rights are guaranteed under Articles 21 and 22 of the Indian Constitution and various provisions of the Criminal Procedure Code.",
        keywords: ["rights", "arrest", "detained", "custody"],
        translations: {
          hindi: {
            question: "यदि मुझे गिरफ्तार किया जाता है तो मेरे क्या अधिकार हैं?",
            answer:
              "यदि आपको गिरफ्तार किया जाता है, तो आपके पास निम्नलिखित अधिकार हैं:\n\n1. गिरफ्तारी के आधारों को जानने का अधिकार\n2. किसी मित्र, रिश्तेदार या वकील को अपनी गिरफ्तारी के बारे में सूचित करने का अधिकार\n3. गिरफ्तारी के 24 घंटे के भीतर मजिस्ट्रेट के समक्ष पेश किए जाने का अधिकार\n4. कानूनी प्रतिनिधित्व का अधिकार, जिसमें मुफ्त कानूनी सहायता शामिल है यदि आप वकील का खर्च वहन नहीं कर सकते\n5. चुप रहने का अधिकार और अपने खिलाफ गवाह बनने के लिए मजबूर न किए जाने का अधिकार\n6. चिकित्सा परीक्षा का अधिकार\n7. गरिमा के साथ व्यवहार किए जाने का अधिकार और यातना या अमानवीय व्यवहार के अधीन न होने का अधिकार\n\nये अधिकार भारतीय संविधान के अनुच्छेद 21 और 22 और आपराधिक प्रक्रिया संहिता के विभिन्न प्रावधानों के तहत गारंटीकृत हैं।",
          },
        },
      },
    ],
    emergencyContacts: {
      "Police Emergency": "100",
      "Women Helpline": "1091",
      "Child Helpline": "1098",
      Ambulance: "108",
      "National Emergency Number": "112",
      "Traffic Police": "1073",
      "Anti-Corruption Helpline": "1064",
      "Cyber Crime Helpline": "1930",
    },
    legalProvisions: {
      "302": {
        description: "Section 302 of the Indian Penal Code deals with punishment for murder.",
        punishment: "Punishment for murder is death or imprisonment for life, and also fine.",
      },
      "376": {
        description: "Section 376 of the Indian Penal Code deals with punishment for rape.",
        punishment:
          "Rigorous imprisonment for a term not less than ten years, but which may extend to imprisonment for life, and shall also be liable to fine.",
      },
      "420": {
        description:
          "Section 420 of the Indian Penal Code deals with cheating and dishonestly inducing delivery of property.",
        punishment:
          "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
      },
      "354": {
        description:
          "Section 354 of the Indian Penal Code deals with assault or criminal force to woman with intent to outrage her modesty.",
        punishment:
          "Imprisonment of either description for a term which shall not be less than one year but which may extend to five years, and shall also be liable to fine.",
      },
      "498A": {
        description:
          "Section 498A of the Indian Penal Code deals with husband or relative of husband of a woman subjecting her to cruelty.",
        punishment: "Imprisonment for a term which may extend to three years and shall also be liable to fine.",
      },
      "304B": {
        description: "Section 304B of the Indian Penal Code deals with dowry death.",
        punishment:
          "Imprisonment for a term which shall not be less than seven years but which may extend to imprisonment for life.",
      },
    },
  }
}
