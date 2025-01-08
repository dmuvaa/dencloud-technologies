import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Let&apos;s Build Something Great Together</h1>
          <p className="text-xl mb-8">Get in touch with us to start your next project</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Contact Us</CardTitle>
                <CardDescription>Fill out the form and we&apos;ll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <Input id="phone" type="tel" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" placeholder="How can we help you?" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                  <p>Kimathi Street, Nairobi City</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-purple-600" />
                  <p>+254746197440</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-purple-600" />
                  <p>support@dencloudtechnologies.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-poppins">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818391097574!2d36.81963661475403!3d-1.2841924359736226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f28f0c1%3A0x2b8e3858d5f8d5c0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1625581238234!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

