import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Users, BookOpen, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 via-seg-blue to-white text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to SEG SQU Student Chapter</h1>
            <p className="text-xl mb-8 text-blue-50">Advancing geophysics through knowledge sharing and professional development.</p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/about">Learn More <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/contact">Contact Us  <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
              <Calendar className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600">Join our technical talks, workshops, and field trips.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Connect with fellow geophysics enthusiasts.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-gray-600">Access educational materials and research papers.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Button asChild variant="outline">
              <Link href="/events">
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Geophysical Data Analysis Workshop"
              date="September, 2025"
              location="SQU"
              image="/images/WS.jpeg"
            />
            <EventCard
              title="Industry Talk: Future of Seismic Exploration"
              date="September, 2025"
              location="Virtual Event"
              image="/images/talk.jpeg"
            />
            <EventCard
              title="Field Trip: Geological Survey"
              date="November, 2025"
              location="Adam"
              image="/images/ERT survey.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-seg-blue to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Become a part of our growing community and explore the fascinating world of geophysics.</p>
          <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIRefCKp3NIaD_N9iNUXK72H2WoZPr3PvR2eqkuRkJy62nxg/viewform" target="_blank">Join Now <ChevronRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function EventCard({ title, date, location, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Date:</span> {date}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Location:</span> {location}
        </p>
        <Button asChild className="mt-4 w-full bg-blue-900 text-white hover:bg-blue-800">
          <Link href="/events">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
