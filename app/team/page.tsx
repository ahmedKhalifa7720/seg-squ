import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>

      {/* Executive Committee */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Executive Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard
            name="Ahmed Jaboob"
            position="President"
            image="/placeholder.svg?height=300&width=300"
            bio="Sets the chapter's vision and leads strategic planning. Represents the chapter to the university and partners while ensuring team accountability."
            email="s136338@student.squ.edu.om "
            personalEmail="s136338@student.squ.edu.om "
            linkedin="https://www.linkedin.com/in/ahmed-jaboob-b0357a369/"
          />
          <TeamMemberCard
            name="Aziza Alharthi"
            position="Vice President"
            image="/placeholder.svg?height=300&width=300"
            bio="Supports and steps in for the President when needed. Monitors progress, follows up on tasks, and facilitates communication between officers."
            email="s136567@student.squ.edu.om"
            personalEmail="azizakhalidalharthy@gmail.com"
            linkedin="https://www.linkedin.com/in/aziza-al-harthi-1978a9255/"
          />
          <TeamMemberCard
            name="Al-Faisal Al-Waaili"
            position="Vice President"
            image="/placeholder.svg?height=300&width=300"
            bio="Supports and steps in for the President when needed. Monitors progress, follows up on tasks, and facilitates communication between officers."
            email="s135440@student.squ.edu.om"
            personalEmail="alfaisalalwaaili33@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Abdulaziz ALBUSAIDI"
            position="Secretary"
            image="/placeholder.svg?height=300&width=300"
            bio="Documents meetings and maintains records. Manages internal communications, correspondence, and assists with membership and official paperwork."
            email=""
            personalEmail=""
            linkedin="https://linkedin.com"
          />
        </div>
      </section>

      {/* Committees */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Committees</h2>
        
        {/* Projects Committee */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Projects Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard
              name="Al-Ghaliah Al-Shukaili"
              position="Head"
              image="/placeholder.svg?height=300&width=300"
              bio="Leads the Projects Committee in planning and executing chapter projects."
              email=""
              personalEmail=""
              linkedin="https://linkedin.com"
            />
            <TeamMemberCard
              name="Ahmed Al-Budaie"
              position="Deputy"
              image="/placeholder.svg?height=300&width=300"
              bio="Assists the Head in managing projects and coordinates team activities."
              email=""
              personalEmail=""
              linkedin="https://linkedin.com"
            />
          </div>
        </div>
        
        {/* Media Committee */} {/*
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Media Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard
              name="..."
              position="Head"
              image="/placeholder.svg?height=300&width=300"
              bio="Leads the Media Committee in managing the chapter's social media presence and content creation."
              email=""
              personalEmail=""
              linkedin=""
            />
          </div>
        </div> */}
        
        {/* Public Relations Committee */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Public Relations Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard
              name="Said Ghawas"
              position="Head"
              image="/placeholder.svg?height=300&width=300"
              bio="Leads the Public Relations Committee in building relationships with external organizations and promoting the chapter."
              email=""
              personalEmail=""
              linkedin="https://linkedin.com"
            />
          </div>
        </div>
        
        {/* Finance Committee */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Finance Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard
              name="Saifaddin Al-Hinai"
              position="Head"
              image="/placeholder.svg?height=300&width=300"
              bio="Leads the Finance Committee in managing the chapter's budget and financial planning."
              email=""
              personalEmail=""
              linkedin="https://linkedin.com"
            />
          </div>
        </div>
        
        {/* Organization Committee */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Organization Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard
              name="Sultan Al-Jabri"
              position="Head"
              image="/placeholder.svg?height=300&width=300"
              bio="Leads the Organization Committee in coordinating events and managing logistics."
              email="s132587@student.squ.edu.om"
              personalEmail="sa4423294@gmail.com"
              linkedin="https://www.linkedin.com/in/sultan-aljabri-89758830a/"
            />
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We're always looking for passionate students to join our team and contribute to the growth of our chapter. If
          you're interested in geophysics and want to develop your leadership skills, consider applying for a position
          in our committee.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Apply Now</Link>
        </Button>
      </section>
    </div>
  )
}

function TeamMemberCard({ name, position, bio, email, personalEmail, linkedin }) {
  const contactEmail = personalEmail || email

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-700 font-medium mb-3">{position}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

// In the Executive Committee section, add Khalid and remove the Open Position section:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <TeamMemberCard
    name="Khalid AL-Ali"
    position="Media Officer"
    bio="Manage the chapter's social media accounts and digital brand. Design promotional materials for events and announcements."
    email=""
    personalEmail=""
    linkedin="https://linkedin.com"
  />
</div>
