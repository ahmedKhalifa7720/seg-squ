import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Zap, Droplets, Mountain } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Geophysics Career Paths</h1>

      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Explore Your Future in Geophysics</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geophysics offers diverse and exciting career opportunities across multiple industries. From exploring for
            natural resources to understanding climate change, geophysicists play crucial roles in solving some of the
            world's most important challenges. Whether you're interested in fieldwork, data analysis, research, or
            management, there's a geophysics career path that matches your interests and skills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The field combines cutting-edge technology, mathematical modeling, and field investigations to understand
            the Earth's structure and processes. With growing global demands for energy, environmental protection, and
            natural hazard mitigation, geophysicists are more valuable than ever.
          </p>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Industry Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IndustrySectorCard
            icon={<Droplets className="h-10 w-10 text-blue-700" />}
            title="Oil & Gas"
            description="Exploration, production, and reservoir characterization"
            careers={["Seismic Interpreter", "Reservoir Geophysicist", "Exploration Geophysicist"]}
          />
          <IndustrySectorCard
            icon={<Mountain className="h-10 w-10 text-blue-700" />}
            title="Mining"
            description="Mineral exploration and resource evaluation"
            careers={["Mining Geophysicist", "Exploration Manager", "Resource Geologist"]}
          />
          <IndustrySectorCard
            icon={<Globe className="h-10 w-10 text-blue-700" />}
            title="Environmental"
            description="Environmental monitoring and remediation"
            careers={["Environmental Consultant", "Hydrogeophysicist", "Site Characterization Specialist"]}
          />
          <IndustrySectorCard
            icon={<Zap className="h-10 w-10 text-blue-700" />}
            title="Renewable Energy"
            description="Geothermal and wind energy development"
            careers={["Geothermal Specialist", "Wind Resource Analyst", "Renewable Energy Consultant"]}
          />
        </div>
      </section>

      {/* Skills Development */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Essential Skills for Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Technical Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Seismic interpretation and processing</li>
              <li>• Programming (Python, MATLAB, C++)</li>
              <li>• Geophysical software (Petrel, OpendTect, ProMAX)</li>
              <li>• Data analysis and visualization</li>
              <li>• Mathematical modeling</li>
              <li>• Signal processing</li>
              <li>• Rock physics and petrophysics</li>
              <li>• GIS and mapping software</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Soft Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Problem-solving and critical thinking</li>
              <li>• Communication and presentation</li>
              <li>• Project management</li>
              <li>• Teamwork and collaboration</li>
              <li>• Adaptability and continuous learning</li>
              <li>• Attention to detail</li>
              <li>• Leadership and mentoring</li>
              <li>• Business acumen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Preparation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Preparing for Your Career</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PreparationCard
            title="Education"
            items={[
              "Bachelor's in Geophysics/Geology",
              "Master's for advanced roles",
              "PhD for research positions",
              "Professional certifications",
              "Continuous learning",
            ]}
          />
          <PreparationCard
            title="Experience"
            items={[
              "Internships in industry",
              "Field work experience",
              "Research projects",
              "Software proficiency",
              "Professional networking",
            ]}
          />
          <PreparationCard
            title="Professional Development"
            items={[
              "SEG membership",
              "Conference attendance",
              "Technical publications",
              "Professional licenses",
              "Industry certifications",
            ]}
          />
        </div>
      </section>

      {/* Job Market Outlook */}
      <section className="mb-16">
        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-900">Job Market Outlook</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Growing Sectors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Renewable energy (geothermal, offshore wind)</li>
                <li>• Environmental consulting</li>
                <li>• Carbon capture and storage</li>
                <li>• Geohazard monitoring</li>
                <li>• Technology and software development</li>
                <li>• Data science and machine learning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Emerging Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI/ML in geophysics</li>
                <li>• Space exploration</li>
                <li>• Autonomous systems</li>
                <li>• Digital transformation</li>
                <li>• Sustainability consulting</li>
                <li>• Remote sensing applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Geophysics Career Journey</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Ready to explore the exciting world of geophysics careers? Connect with our chapter to learn more about
          opportunities, network with professionals, and get guidance on your career path.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get Career Guidance</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resources">Explore Resources</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function IndustrySectorCard({ icon, title, description, careers }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="space-y-1">
        {careers.map((career, index) => (
          <p key={index} className="text-sm text-blue-700">
            • {career}
          </p>
        ))}
      </div>
    </div>
  )
}

function PreparationCard({ title, items }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 flex items-start">
            <span className="text-blue-700 mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
