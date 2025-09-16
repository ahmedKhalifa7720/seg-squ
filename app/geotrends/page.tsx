'use client'

import { useState } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GeoTrendsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">GeoTrends</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore emerging methods, technologies, and future challenges in geophysics.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-gray-900">Full Waveform Inversion (FWI)</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col md:flex-row gap-6 p-4'>
                  <div className="md:w-1/3">
                    <Image src="/images/FWI.jpg" alt="Full Waveform Inversion" width={500} height={300} className="w-full h-auto object-cover rounded-md" />
                  </div>
                  <div className='md:w-2/3 space-y-4'>
                    <div>
                      <h3 className='font-semibold text-lg'>What is FWI?</h3>
                      <p>Full Waveform Inversion (FWI) is an advanced seismic imaging technique that uses the entire waveform of seismic data—not just travel times—to create highly accurate velocity models of the subsurface. It's like upgrading from a blurry image to a high-definition one.</p>
                    </div>
                    
                    <div>
                      <h3 className='font-semibold text-lg'>Why is it important?</h3>
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>FWI allows geophysicists to see finer details in complex geological settings.</li>
                        <li>It improves reservoir characterization and drilling safety.</li>
                        <li>It can enhance seismic resolution in areas where conventional methods fail.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Where is it used?</h3>
                      <p>FWI is increasingly used in offshore exploration, complex subsalt imaging, and in carbon storage site monitoring.</p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Fun fact:</h3>
                      <p>FWI is computationally intensive—it requires powerful HPC (High Performance Computing) systems and smart algorithms to run efficiently.</p>
                    </div>

                    <p className='text-blue-700 font-semibold'>🧠 FWI is not the future anymore—it's already here.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-gray-900">Seismic-Well Tie Integration</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col md:flex-row gap-6 p-4'>
                  <div className="md:w-1/3">
                    <Image src="/images/WellTie.jpg" alt="Seismic-Well Tie Integration" width={500} height={300} className="w-full h-auto object-cover rounded-md" />
                  </div>
                  <div className='md:w-2/3 space-y-4'>
                    <div>
                      <h3 className='font-semibold text-lg'>What is Well-Seismic Tie?</h3>
                      <p>Well-to-seismic tie is the process of matching borehole data (such as sonic logs and density logs) with seismic reflections to ensure accurate depth-to-time conversion and improve interpretation.</p>
                    </div>
                    
                    <div>
                      <h3 className='font-semibold text-lg'>Why is it important?</h3>
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Ensures your seismic horizons match real geological layers</li>
                        <li>Helps build reliable velocity models</li>
                        <li>Critical for depth conversion, reservoir characterization, and drilling accuracy</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>How is it done?</h3>
                      <p>It involves creating synthetic seismograms using well logs and comparing them to the actual seismic trace at the well location.</p>
                    </div>

                    <p className='text-blue-700 font-semibold'>🧠 If you skip the tie, you might drill in the wrong place.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-gray-900">4D Seismic Monitoring</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col md:flex-row gap-6 p-4'>
                  <div className="md:w-1/3">
                    <Image src="/images/4D.jpg" alt="4D Seismic Monitoring" width={500} height={300} className="w-full h-auto object-cover rounded-md" />
                  </div>
                  <div className='md:w-2/3 space-y-4'>
                    <div>
                      <h3 className='font-semibold text-lg'>What is 4D Seismic?</h3>
                      <p>It’s time-lapse seismic monitoring—repeating 3D seismic surveys over the same area at different times to observe changes in the subsurface, especially in producing reservoirs.</p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Why is it useful?</h3>
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Tracks fluid movement in the reservoir</li>
                        <li>Helps optimize production and recovery</li>
                        <li>Detects bypassed hydrocarbons or gas injection zones</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Used in:</h3>
                      <p>EOR monitoring, CCS, and offshore oil fields.</p>
                    </div>

                    <p className='text-blue-700 font-semibold'>🧠 Think of it as a “video” of the reservoir instead of just a snapshot.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-gray-900">AI and Machine Learning in Geophysics</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col md:flex-row gap-6 p-4'>
                  <div className="md:w-1/3">
                    <Image src="/images/ML.jpg" alt="AI and Machine Learning in Geophysics" width={500} height={300} className="w-full h-auto object-cover rounded-md" />
                  </div>
                  <div className='md:w-2/3 space-y-4'>
                    <div>
                      <h3 className='font-semibold text-lg'>How does Machine Learning (ML) help in geophysics?</h3>
                      <p>ML uses algorithms to detect patterns in large datasets. In geophysics, it helps automate seismic interpretation, classify lithofacies, and predict properties like porosity or velocity.</p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Applications include:</h3>
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Fault and horizon picking</li>
                        <li>Rock property prediction</li>
                        <li>Clustering seismic attributes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Benefits:</h3>
                      <p>Saves time, improves accuracy, and handles big data better than humans.</p>
                    </div>

                    <p className='text-blue-700 font-semibold'>🧠 The future interpreter might not be a person—it might be a model you trained.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-gray-900">EOR Monitoring</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col md:flex-row gap-6 p-4'>
                  <div className="md:w-1/3">
                    <Image src="/images/EOR.png" alt="EOR Monitoring" width={500} height={300} className="w-full h-auto object-cover rounded-md" />
                  </div>
                  <div className='md:w-2/3 space-y-4'>
                    <div>
                      <h3 className='font-semibold text-lg'>What is EOR?</h3>
                      <p>Enhanced Oil Recovery (EOR) methods help extract additional oil after primary and secondary recovery. Geophysics plays a key role in monitoring how injected fluids move underground.</p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>How does it help?</h3>
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Detects sweep efficiency and bypassed zones</li>
                        <li>Monitors CO₂ or water injection</li>
                        <li>Improves field management decisions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg'>Geophysical tools used:</h3>
                      <p>4D seismic, resistivity monitoring, and microseismic methods.</p>
                    </div>

                    <p className='text-blue-700 font-semibold'>🧠 Geophysics is your eyes underground during EOR.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            

            
          </Accordion>
        </div>
      </section>
    </div>
  )
}