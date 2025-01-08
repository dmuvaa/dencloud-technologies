import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Team() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Meet Our Team</h1>
          <p className="text-xl mb-8">The brilliant minds behind Dencloud Technologies</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-poppins">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dennis Muvaa"
              role="CEO & Founder"
              bio="With over 20 years of experience in the tech industry, John leads our company with vision and passion."
              imageUrl="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="Dominic Sengo"
              role="CTO"
              bio="Jane's innovative approach to technology drives our cutting-edge solutions and keeps us ahead of the curve."
              imageUrl="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="Mike Johnson"
              role="COO"
              bio="Mike's operational expertise ensures that we deliver top-quality solutions efficiently and on time."
              imageUrl="/placeholder.svg?height=400&width=400"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-poppins">Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Alice Williams"
              role="Lead Developer"
              bio="Alice's coding wizardry brings our most complex projects to life."
              imageUrl="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Bob Brown"
              role="UX Designer"
              bio="Bob's designs create intuitive and engaging user experiences."
              imageUrl="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Carol Davis"
              role="Data Scientist"
              bio="Carol's expertise in AI and machine learning drives our innovative solutions."
              imageUrl="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="David Wilson"
              role="Project Manager"
              bio="David ensures our projects are delivered on time and exceed expectations."
              imageUrl="/placeholder.svg?height=300&width=300"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-poppins">Join Our Team</h2>
          <p className="text-xl mb-8">
            We&apos;re always looking for talented individuals to join our growing team. If you&apos;re passionate about technology and innovation, we&apos;d love to hear from you!
          </p>
          <a href="/careers" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">
            View Open Positions →
          </a>
        </div>
      </section>
    </div>
  )
}

const TeamMember = ({ name, role, bio, imageUrl }: { name: string, role: string, bio: string, imageUrl: string }) => (
  <Card>
    <Image src={imageUrl} alt={name} width={600} height={400} className="w-full h-64 object-cover" />
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{role}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{bio}</p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-purple-600">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-600 hover:text-purple-600">
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </CardContent>
  </Card>
)

