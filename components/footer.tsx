import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/segSquLogo.jpg"
                alt="SEG SQU Student Chapter"
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4">
              The Society of Exploration Geophysicists Student Chapter at Sultan Qaboos University.
            </p>
            
            <div className="flex space-x-4">
              
              <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/seg.squ/" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/resources">Resources</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/resources">Publications</FooterLink>
              <FooterLink href="/resources">Research Papers</FooterLink>
              <FooterLink href="/resources">Learning Materials</FooterLink>
              <FooterLink href="/resources">Geophysics Tools</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Department of Earth Sciences</p>
              <p>Sultan Qaboos University</p>
              <p>Muscat, Oman</p>
              <p className="flex items-center mt-2">
                <Mail size={16} className="mr-2" />
                <a href="mailto:seg.squ@example.com" className="hover:text-blue-400">
                seg.squ@outlook.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SEG SQU Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-blue-400 transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
    >
      {icon}
    </a>
  )
}
