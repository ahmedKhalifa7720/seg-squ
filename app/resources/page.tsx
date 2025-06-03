import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, ExternalLink, BookOpen, FileText, Video, Database } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>

      {/* Featured Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedResourceCard
            title="Introduction to Seismic Interpretation"
            type="E-Book"
            icon={<BookOpen className="h-8 w-8 text-blue-700" />}
            description="A comprehensive guide to seismic interpretation techniques for beginners."
            link="/resources/seismic-interpretation"
          />
          <FeaturedResourceCard
            title="Geophysical Data Analysis Workshop Materials"
            type="Workshop Materials"
            icon={<FileText className="h-8 w-8 text-blue-700" />}
            description="Slides, exercises, and solutions from our recent data analysis workshop."
            link="/resources/workshop-materials"
          />
          <FeaturedResourceCard
            title="Geophysics Career Paths Webinar"
            type="Video"
            icon={<Video className="h-8 w-8 text-blue-700" />}
            description="Industry experts discuss various career paths in geophysics."
            link="/resources/career-webinar"
          />
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 mb-6">
              Access research papers, articles, and publications by our members and faculty advisors.
            </p>
            <div className="space-y-4">
              <PublicationItem
                title="Crustal Structure of Northern Oman: Insights from Seismic Refraction Studies"
                authors="Al-Hashmi, S., Al-Kindi, M., & Al-Kharusi, L."
                journal="Journal of Geophysical Research"
                year="2024"
                link="#"
              />
              <PublicationItem
                title="Application of Machine Learning in Seismic Facies Classification"
                authors="Al-Balushi, A., Al-Harthy, F., & Al-Jabri, Y."
                journal="Geophysical Prospecting"
                year="2023"
                link="#"
              />
              <PublicationItem
                title="Gravity and Magnetic Studies of the Ophiolite Sequence in Oman Mountains"
                authors="Al-Rawahi, A., Al-Abri, K., & Al-Hashmi, S."
                journal="Tectonophysics"
                year="2023"
                link="#"
              />
              <PublicationItem
                title="Near-Surface Characterization Using Integrated Geophysical Methods"
                authors="Al-Zadjali, N., Al-Maamari, H., & Al-Kharusi, L."
                journal="Journal of Applied Geophysics"
                year="2022"
                link="#"
              />
              <PublicationItem
                title="Reservoir Characterization of Cretaceous Carbonate Formations in Oman"
                authors="Al-Kindi, M., Al-Balushi, Z., & Al-Jabri, Y."
                journal="Marine and Petroleum Geology"
                year="2022"
                link="#"
              />
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">View All Publications</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Materials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Learning Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">E-Books & Guides</h3>
            <ul className="space-y-3">
              <LearningMaterialItem
                title="Fundamentals of Exploration Geophysics"
                type="E-Book"
                size="15 MB"
                link="#"
              />
              <LearningMaterialItem title="Seismic Data Acquisition and Processing" type="Guide" size="8 MB" link="#" />
              <LearningMaterialItem title="Well Log Analysis for Geophysicists" type="E-Book" size="12 MB" link="#" />
              <LearningMaterialItem
                title="Introduction to Potential Field Methods"
                type="Guide"
                size="10 MB"
                link="#"
              />
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
            <ul className="space-y-3">
              <LearningMaterialItem
                title="Seismic Interpretation Basics"
                type="Video Series"
                size="5 videos"
                link="#"
              />
              <LearningMaterialItem
                title="Petrel Software Tutorial"
                type="Workshop Recording"
                size="2 hours"
                link="#"
              />
              <LearningMaterialItem
                title="Python for Geophysical Data Analysis"
                type="Tutorial Series"
                size="8 videos"
                link="#"
              />
              <LearningMaterialItem title="Field Methods in Geophysics" type="Documentary" size="45 minutes" link="#" />
            </ul>
          </div>
        </div>
      </section>

      {/* Datasets */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Datasets</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-start mb-6">
            <Database className="h-10 w-10 text-blue-700 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Geophysical Datasets</h3>
              <p className="text-gray-700">
                Access sample datasets for educational purposes. These datasets can be used for practicing data
                analysis, interpretation, and visualization techniques.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DatasetCard
              title="Seismic Data: Oman Offshore"
              description="2D seismic lines from offshore Oman (anonymized for educational use)"
              size="1.2 GB"
              format="SEG-Y"
            />
            <DatasetCard
              title="Well Logs: Central Oman"
              description="Suite of well logs from central Oman fields (anonymized)"
              size="450 MB"
              format="LAS, CSV"
            />
            <DatasetCard
              title="Gravity & Magnetic Data"
              description="Regional gravity and magnetic survey data from northern Oman"
              size="200 MB"
              format="XYZ, CSV"
            />
            <DatasetCard
              title="Microseismic Monitoring Data"
              description="Sample microseismic monitoring data from a hydraulic fracturing operation"
              size="800 MB"
              format="SEGY, CSV"
            />
          </div>
          <div className="mt-6 text-center">
            <Button>Request Dataset Access</Button>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">External Resources</h2>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
          <p className="text-gray-700 mb-6">
            We've compiled a list of valuable external resources for geophysics students and professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExternalResourceCard
              title="Society of Exploration Geophysicists (SEG)"
              description="Access journals, publications, and educational resources from SEG."
              link="https://seg.org"
            />
            <ExternalResourceCard
              title="European Association of Geoscientists and Engineers (EAGE)"
              description="Resources, publications, and events from EAGE."
              link="https://eage.org"
            />
            <ExternalResourceCard
              title="Oman Geological Society"
              description="Local geological and geophysical resources specific to Oman."
              link="https://ogs.org.om"
            />
            <ExternalResourceCard
              title="Open Seismic Repository"
              description="Free seismic datasets for research and education."
              link="https://example.com/seismic"
            />
          </div>
        </div>
      </section>

      {/* Request Resources */}
      <section className="bg-blue-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Need Specific Resources?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          If you're looking for specific resources that are not listed here, please let us know. We'll do our best to
          provide you with the materials you need for your studies or research.
        </p>
        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-blue-800">
          <Link href="/contact">Request Resources</Link>
        </Button>
      </section>
    </div>
  )
}

function FeaturedResourceCard({ title, type, icon, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
      <div className="mb-4">{icon}</div>
      <div className="text-sm font-medium text-blue-700 mb-2">{type}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild>
        <Link href={link}>Access Resource</Link>
      </Button>
    </div>
  )
}

function PublicationItem({ title, authors, journal, year, link }) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-1">{authors}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          {journal}, {year}
        </p>
        <Button variant="ghost" size="sm" asChild className="text-blue-700">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4 mr-1" /> PDF
          </a>
        </Button>
      </div>
    </div>
  )
}

function LearningMaterialItem({ title, type, size, link }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-500 text-sm">
          {type} • {size}
        </p>
      </div>
      <Button variant="ghost" size="sm" asChild className="text-blue-700">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Download className="h-4 w-4 mr-1" /> Download
        </a>
      </Button>
    </div>
  )
}

function DatasetCard({ title, description, size, format }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Size: {size}</span>
        <span>Format: {format}</span>
      </div>
    </div>
  )
}

function ExternalResourceCard({ title, description, link }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <Button variant="outline" size="sm" asChild className="w-full">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" /> Visit Website
        </a>
      </Button>
    </div>
  )
}
