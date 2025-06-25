import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Events & Activities</h1>

      {/* Featured Event */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <div className="inline-block bg-blue-700 text-white px-4 py-1 rounded-full mb-4">Featured Event</div>
              <h2 className="text-3xl font-bold mb-4">Annual Geophysics Conference</h2>
              <div className="flex items-center text-gray-700 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Date: To be announced</span>
              </div>
              <div className="flex items-center text-gray-700 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Location: To be announced</span>
              </div>
              <p className="text-gray-700 mb-6">
                Details for our annual flagship event are still being planned. Stay tuned for updates on keynote
                speakers, workshops, and networking opportunities.
              </p>
              {/* Remove the Button and replace with bolded text */}
              <p className="text-lg font-bold text-blue-700">Stay Tuned...</p>
            </div>
            <div className="h-64 md:h-auto">
              <img
                src="\images\Annual Geophysics Conference.jpeg" // Updated image path
                alt="Annual Geophysics Conference"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <p className="text-gray-700">
          Unfortunately, there are no upcoming events at the moment. Please stay tuned for future activities as our
          chapter is being re-established.
        </p>
      </section>

      {/* Activity Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActivityTypeCard
            title="Technical Talks"
            description="Expert-led presentations by SEG members, academic researchers, or industry professionals on applied geophysics topics (e.g., seismic interpretation, ERT/GPR applications, reservoir monitoring)."
            icon="🎤"
          />
          <ActivityTypeCard
            title="Workshops"
            description="Hands-on sessions with geophysical software and processing tools such as Petrel, ReflexW, Spyder (Python) and more others."
            icon="🛠️"
          />
          <ActivityTypeCard
            title="Field Trips"
            description="Educational field visits to geologically significant sites with geophysical equipment demonstrations (ERT/GPR/Seismic) to bridge field geology and geophysics."
            icon="🏔️"
          />
          <ActivityTypeCard
            title="Study Groups"
            description="Peer-led sessions on Geophysics topics and university courses."
            icon="📚"
          />
          <ActivityTypeCard
            title="Competitions"
            description="Participation in the SEG Challenge Bowl and paper competitions."
            icon="🏆"
          />
          <ActivityTypeCard
            title="Outreach Events"
            description="Awareness booths and presentations for first year and non-Earth Science students."
            icon="🌟"
          />
        </div>
      </section>

      {/* Event Calendar */}
      

      {/* Propose an Event */}
      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Have an Event Idea?</h2>
        <p className="text-gray-700 mb-6">
          We welcome suggestions for events, workshops, and activities from our members. If you have an idea for an
          event that would benefit our community, we'd love to hear from you!
        </p>
        <Button asChild>
          <Link href="/contact">Propose an Event</Link>
        </Button>
      </section>
    </div>
  )
}

function EventCard({ title, date, time, location, image, attendees, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-700 mb-1">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-700 mb-1">
          <Clock className="h-4 w-4 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-700 mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-700 mb-4">
          <Users className="h-4 w-4 mr-2" />
          <span>Limited to {attendees} attendees</span>
        </div>
        <Button asChild className="w-full">
          <Link href={link}>Register</Link>
        </Button>
      </div>
    </div>
  )
}

function ActivityTypeCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
