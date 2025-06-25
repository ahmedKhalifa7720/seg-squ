import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About SEG SQU Student Chapter</h1>

      {/* Executive Summary */}
      <section className="mb-16">
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            The re-establishment of SEG-SQU Student Chapter aims to create a vibrant and active community of geophysics
            students at Sultan Qaboos University. Our chapter is dedicated to bridge the gap between academic knowledge
            and industry experience by offering impactful activities such as technical workshops, field trips, and guest
            lectures from professionals. We envision becoming a leading student society in Oman recognized for advancing
            geophysical education, fostering collaboration, and empowering students with practical skills and global
            insights. Our key goals include building strong partnerships with faculty and industry, expanding student
            engagement through diverse events, and connecting with other SEG student chapters regionally and
            internationally to enhance learning and professional growth.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h2>
            <p className="text-gray-700">
              To be a leading geophysics student society in Oman, recognized for impactful activities,
              knowledge-sharing, and bridging academic learning with real-world industry experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h2>
            <p className="text-gray-700">
              To advance geophysical understanding and support student growth through workshops, seminars, field
              activities, and outreach programs. We aim to build strong partnerships with academia and industry to equip
              students with practical skills and global insights essential for success in the geosciences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ValueCard
            title="Excellence in Learning and Research"
            description="We commit to academic rigor and continuous learning, encouraging curiosity-driven exploration in geophysics and earth sciences."
          />
          <ValueCard
            title="Collaboration and Community"
            description="We foster a culture of cooperation—within our chapter, across disciplines, and with the global geoscience community—to solve shared challenges."
          />
          <ValueCard
            title="Innovation and Applied Thinking"
            description="We promote creativity and the practical application of geophysical tools and techniques to address real-world geological and environmental problems."
          />
          <ValueCard
            title="Leadership and Responsibility"
            description="We develop future geoscience leaders by encouraging initiative, integrity, and accountability in all aspects of our work."
          />
          <ValueCard
            title="Inclusivity and Representation"
            description="We celebrate diversity and strive to create a respectful, inclusive space where all voices are heard and valued, regardless of background or identity."
          />
          <ValueCard
            title="Industry Engagement and Professional Growth"
            description="We bridge the gap between academic study and the geoscience profession through mentorship, training, and active engagement with industry leaders."
          />
        </div>
      </section>

      {/* Goals */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Short Term Goals */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Short Term Goals</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Re-establish the SEG SQU Student Chapter with official registration and core committee formation
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Conduct kickoff awareness campaign and launch event for new members
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Host introductory technical sessions with geophysics experts
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Plan skill-based workshops with hands-on geophysics tools training
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Organize field activities like ERT or GPR surveys on campus
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Build online presence through social media and website
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Collaborate with other SEG chapters and student societies
              </li>
            </ul>
          </div>

          {/* Long Term Goals */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Long Term Goals</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Establish formal industry partnerships for internships and sponsorships
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Host a National SEG Student Geophysics Symposium
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Develop a peer-reviewed student geophysics newsletter or blog
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Initiate a regional student collaboration network
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Launch a sustainable mentorship program
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Send student delegates to international SEG events
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                Create a public geophysics awareness campaign
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Chapter</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Become a part of our vibrant community and take advantage of the numerous opportunities we offer to enhance
          your knowledge and skills in geophysics.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="https://forms.gle/68rU7LbXKVSVjT2s5">Become a Member</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/events">Explore Our Events</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
