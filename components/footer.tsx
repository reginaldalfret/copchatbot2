import { Shield } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-police-950 text-white mt-auto">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-police-400" />
              <h2 className="text-xl font-bold">CopBotChatbox</h2>
            </div>
            <p className="text-police-300 text-sm">
              Bridging the gap between citizens and police through accessible information and guidance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-police-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-police-300">Legal Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  FIR Filing Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  Legal Rights
                </Link>
              </li>
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  Cyber Crime
                </Link>
              </li>
              <li>
                <Link href="#" className="text-police-100 hover:text-white text-sm">
                  Women's Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-police-300">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li className="text-police-100 text-sm">
                Police: <span className="text-white">100</span>
              </li>
              <li className="text-police-100 text-sm">
                Women Helpline: <span className="text-white">1091</span>
              </li>
              <li className="text-police-100 text-sm">
                Child Helpline: <span className="text-white">1098</span>
              </li>
              <li className="text-police-100 text-sm">
                National Emergency: <span className="text-white">112</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-police-800 mt-4 pt-4 text-center text-police-400 text-sm">
          <p>© {new Date().getFullYear()} CopBotChatbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
