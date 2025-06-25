"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactInfoCard
            icon={<Mail className="h-8 w-8 text-blue-700" />}
            title="Primary Email"
            info="seg.squ@outlook.com"
            description="For general inquiries and information"
          />
          <ContactInfoCard
            icon={<MessageSquare className="h-8 w-8 text-blue-700" />}
            title="Alternative Email"
            info="segsqugeop@gmail.com"
            description="Secondary contact for specific inquiries"
          />
          <ContactInfoCard
            icon={<Phone className="h-8 w-8 text-blue-700" />}
            title="Call Us"
            info="+968 7745 6890"
            description="Available for urgent inquiries"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type
                  </label>
                  <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="membership">Membership</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="resources">Resources</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="media-officer">Media Officer Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject of your message"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FAQCard
            question="How can I become a member?"
            answer="To become a member, simply fill out the contact form above with your inquiry type set to 'Membership' or attend one of our upcoming events when they are announced."
          />
          <FAQCard
            question="Are events open to non-members?"
            answer="Yes, most of our events are open to all students interested in geophysics, regardless of membership status."
          />
          <FAQCard
            question="How can I propose an event or workshop?"
            answer="We welcome event proposals! Contact us using the form above with 'Events' as your inquiry type and describe your idea."
          />
          <FAQCard
            question="Can I join the executive committee?"
            answer="Yes! We hold elections annually in May. Keep an eye on our announcements for nomination periods and requirements."
          />
          <FAQCard
            question="How do I apply for the Media Officer position?"
            answer="Select 'Media Officer Application' in the inquiry type above and tell us about your experience and interest in managing our digital presence."
          />
          <FAQCard
            question="When will events start?"
            answer="As we are re-establishing the chapter, events will be announced once our committee is fully formed and we have official recognition from SQU and SEG."
          />
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
        <p className="text-gray-700 mb-6">
          Stay connected with us on social media for the latest updates and announcements about our chapter's
          re-establishment and future activities.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" asChild>
            <a href="https://www.instagram.com/seg.squ/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          
        </div>
      </section>
    </div>
  )
}

function ContactInfoCard({ icon, title, info, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{info}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  )
}

function FAQCard({ question, answer }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
