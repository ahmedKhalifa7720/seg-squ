import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>

      {/* Executive Committee */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Executive Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard
            name="Alfaisal Mahmood AlWaaili"
            position="President"
            image="/placeholder.svg?height=300&width=300"
            bio="Sets the chapter's vision and leads strategic planning. Represents the chapter to the university and partners while ensuring team accountability."
            email="s135440@student.squ.edu.om"
            personalEmail="alfaisalalwaaili33@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Aziza Khalid AlHarthy"
            position="Vice President"
            image="/placeholder.svg?height=300&width=300"
            bio="Supports and steps in for the President when needed. Monitors progress, follows up on tasks, and facilitates communication between officers."
            email="s136567@student.squ.edu.om"
            personalEmail="azizakhalidalharthy@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Ahmed Jaboob"
            position="Secretary"
            image="/placeholder.svg?height=300&width=300"
            bio="Documents meetings and maintains records. Manages internal communications, correspondence, and assists with membership and official paperwork."
            email="seg.squ@outlook.com"
            personalEmail=""
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Muhanad Alruzaiqi"
            position="Treasurer"
            image="/placeholder.svg?height=300&width=300"
            bio="Manages chapter finances and maintains transparent financial records. Prepares financial reports, develops budget plans, and supports fundraising efforts."
            email="s145099@student.squ.edu.om"
            personalEmail="malruzaiqi248@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Abdullah Albarhi"
            position="Resource Officer"
            image="/placeholder.svg?height=300&width=300"
            bio="Handles and sources technical equipment and inventory. Maintains chapter-owned tools and arranges storage, transport, or rentals as needed."
            email="s129377@student.squ.edu.om"
            personalEmail="aossoa14@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Osama Khamis AlKalbani"
            position="Event Officer"
            image="/placeholder.svg?height=300&width=300"
            bio="Plans and executes technical talks, field trips, seminars, and outreach events. Liaises with speakers and participants to ensure smooth event logistics."
            email="s130809@student.squ.edu.om"
            personalEmail="osamaalkalbani14@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Ahmed Khalifa AlYaaribi"
            position="Digital Systems Officer"
            image="/placeholder.svg?height=300&width=300"
            bio="Builds and maintains the chapter's website and digital platform. Supports online event delivery and assists with data management."
            email="s138827@student.squ.edu.om"
            personalEmail="ahmedy3rubi@gmail.com"
            linkedin="https://linkedin.com"
          />
          <TeamMemberCard
            name="Sultan AlJabri"
            position="Plan & Development Officer"
            image="/placeholder.svg?height=300&width=300"
            bio="Identifies growth opportunities and proposes new initiatives. Develops strategic collaborations and monitors progress on long-term goals."
            email="s132587@student.squ.edu.om"
            personalEmail="sa4423294@gmail.com"
            linkedin="https://linkedin.com"
          />
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
