import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, ExternalLink, BookOpen, FileText, Video, Database, Folder } from "lucide-react"

function CourseCard({ title, link = "#" }) {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center cursor-pointer"
    >
      <div className="bg-blue-50 p-3 rounded-full mb-3">
        <Folder className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="font-medium text-gray-800">{title}</h3>
    </a>
  )
}


export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>

    
      {/* Featured Resources */}
      
      {/* Academic Plan and Descriptions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Academic Plan and Descriptions</h2>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 mb-6">
              Access our comprehensive academic plan and course descriptions to help guide your educational journey in geophysics.
            </p>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <a 
                  href="https://drive.google.com/drive/folders/1x6z36HeYN264r7GO2XLjeORzLL5LcUdT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Academic Plan
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Material */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Courses Material</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CourseCard 
            title="Applied Geophysics 1: Seismic Methods" 
            link="https://drive.google.com/drive/folders/1JdM8j92ADWu1xA0URRLWtTftEHKcUav1?usp=drive_link"
          />
          <CourseCard 
            title="Applied Geophysics 2: Electrical & Electromagnetic" 
            link="https://drive.google.com/drive/folders/1-6AiJtYJ84QTY7jweY4EsecxvnIcZo27?usp=drive_link"
          />
          <CourseCard 
            title="Seismic Data Processing" 
            link="https://drive.google.com/drive/folders/1-CQzmlikMVtjv-HU6xDFFoHPmWriRNDj?usp=drive_link"
          />
          <CourseCard 
            title="Earthquake and Society" 
            link="https://drive.google.com/drive/folders/1WpiI8NJWLMtJPg0fF0TmJ7jRmsof4N6E?usp=drive_link"
          />
          <CourseCard 
            title="Earthquakes Seismology" 
            link="https://drive.google.com/drive/folders/1Y5bLJMOoIaJGKjkoo49hRxVctN4NQ6o-?usp=drive_link"
          />
          <CourseCard 
            title="Field Geophysics" 
            link="https://drive.google.com/drive/folders/1-IHIXGq4NOGiA1OH_Aa90xG-kTe2PKpl?usp=drive_link"
          />
          <CourseCard 
            title="Fundamental of Signal Processing" 
            link="https://drive.google.com/drive/folders/1-562nVYxYGHXo7WLESdHQ-IDexx8oqAB?usp=drive_link"
          />
          <CourseCard 
            title="General Geophysics" 
            link="https://drive.google.com/drive/folders/1-IMF3lzD4sHJKxIZFk6KeXPcCgDZgh8j?usp=drive_link"
          />
          <CourseCard 
            title="Gravity & Magnetic Exploration Methods" 
            link="https://drive.google.com/drive/folders/1-3HgAgLkf7YrGLeP8rYyDINj_C2jFMrB?usp=drive_link"
          />
          <CourseCard 
            title="Principles of Geophysical Well Logging" 
            link="https://drive.google.com/drive/folders/1-Cx27epmszz4HqhU1Td9vAhlIBy1OOoC?usp=drive_link"
          />
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            <p className="text-gray-700 mb-6">
              Access research papers, articles, and publications by opening the following link:
            </p>
            <div className="space-y-4">
              
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <a 
                  href="https://drive.google.com/drive/folders/1qbKouCjIevXcWrelfWPDS0DJemXdDASe?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Publications
                </a>
              </Button>
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
                title="Fundamentals of Geophysics"
                type="E-Book"
                size="6 MB"
                link="https://eclass.uoa.gr/modules/document/file.php/GEOL210/%CE%95%CE%9A%CE%A0%CE%91%CE%99%CE%94%CE%95%CE%A5%CE%A4%CE%99%CE%9A%CE%91%20%CE%92%CE%9F%CE%97%CE%98%CE%97%CE%9C%CE%91%CE%A4%CE%91%20%CE%9A%CE%91%CE%99%20%CE%92%CE%99%CE%92%CE%9B%CE%99%CE%91/%CE%98%CE%B5%CE%BC%CE%AD%CE%BB%CE%B9%CE%B1_%CF%84%CE%B7%CF%82_%CE%93%CE%B5%CF%89%CF%86%CF%85%CF%83%CE%B9%CE%BA%CE%AE%CF%82.pdf"
              />
              <LearningMaterialItem title="Seismic Data Acquisition and Processing" type="E-Book" size="2 MB" link="https://research-portal.uu.nl/files/90925567/RoyChowdhury2020_ReferenceWorkEntry_SeismicDataAcquisitionAndProce.pdf" />
              <LearningMaterialItem title="Basics of Geophysical Well Logs" type="PDF" size="5 MB" link="https://moodle2.units.it/pluginfile.php/438108/mod_resource/content/1/Basics%20of%20Geophysical%20well%20logs_Introduction.pdf" />
              <LearningMaterialItem
                title="An Introduction to Geophysical Exploration"
                type="E-book"
                size="8 MB"
                link="https://drive.google.com/uc?export=download&id=1L5P1hgZ3beW-N8JhE1B2sQCCrbpHaFbl"
              />
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
            <ul className="space-y-3">
              <LearningMaterialItem
                title="Seismic Interpretation Basics"
                type="Video"
                size="30 min"
                link="https://youtu.be/Y29a6YLnUO4?si=w12pknGlDysCdgvVhttps://youtu.be/Y29a6YLnUO4?si=w12pknGlDysCdgvVhttps://youtu.be/Y29a6YLnUO4?si=w12pknGlDysCdgvV"
              />
              <LearningMaterialItem
                title="Petrel Software Tutorial"
                type="Youtube"
                size="Playlist"
                link="https://youtube.com/playlist?list=PLCilepHLSxDAJMAz97Cioa8uipojxspbY&si=CkT6TT4u6mRgsw09"
              />
              <LearningMaterialItem
                title="Python for Geoscientists"
                type="Video Tutorial"
                size="22 min"
                link="https://youtu.be/Cj4niGhMeo0?si=vsou--hrcmlOa-kt"
              />
              <LearningMaterialItem title="Field Methods in Geophysics" type="Video" size="3 min" link="https://youtu.be/KZ3gQsc0wpk?si=bkYbPHmJfFAph6fk" />
            </ul>
          </div>
        </div>
      </section>

      {/* Datasets */}
      

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
              title="Geological Society of Oman"
              description="Local geological and geophysical resources specific to Oman."
              link="https://www.instagram.com/gso_oman/?hl=en"
            />
            <ExternalResourceCard
              title="Open Seismic Repository"
              description="Free seismic datasets for research and education."
              link="https://wiki.seg.org/wiki/Open_data"
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
          View
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
