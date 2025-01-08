import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Target, Zap, Users, Award, Lightbulb, Rocket, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Our African Story</h1>
          <p className="text-xl mb-8 max-w-3xl text-gray-100">From our roots in Kenya to serving clients across Africa and beyond, Dencloud Technologies is committed to empowering businesses through innovative software solutions. We&apos;re not just building software; we&apos;re shaping the future of African technology.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-poppins text-gray-900">Mission and Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2" /> Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  To empower businesses and individuals through innovative software solutions that drive growth and success. We&apos;re committed to delivering cutting-edge technology that solves real-world problems and creates lasting value for our clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" /> Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  To be the global leader in cutting-edge technology services, setting new standards for innovation and excellence. We aspire to shape a world where technology enhances every aspect of life and business, making the impossible possible.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-poppins text-gray-900">African Excellence in Tech</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-800">
            As an African-based software development agency, we bring a unique perspective to every project. Our diverse team combines local insights with global best practices, delivering solutions that resonate with African users while meeting international standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2" /> African-Centric Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  We understand the unique challenges and opportunities in the African market. Our solutions are tailored to address local needs while positioning businesses for global success.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" /> Empowering African Talent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  We&apos;re committed to nurturing and showcasing African tech talent. Our team represents the best of what Africa has to offer in software development and innovation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-poppins text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2" /> Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  We constantly push the boundaries of technology to create cutting-edge solutions. Our team thrives on challenges and is always exploring new ways to solve complex problems.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2" /> Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  We strive for the highest quality in everything we do, from code to customer service. Our commitment to excellence ensures that every project we undertake meets the highest standards.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" /> Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  We believe in the power of teamwork and partnership to achieve great results. By fostering a collaborative environment, we bring diverse perspectives together to create innovative solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-poppins text-gray-900">Our Journey</h2>
          <div className="space-y-8">
            <TimelineItem year="2022" event="Dencloud Technologies founded in Nairobi, Kenya" />
            <TimelineItem year="2023" event="Expanded services to East African market" />
            <TimelineItem year="2024" event="Reached 18 successful projects across Africa" />
            <TimelineItem year="2025" event="Established partnerships with leading African tech companies" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-poppins text-gray-900">Our Approach</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-800">
            At Dencloud Technologies, we believe in a client-centric approach that combines innovation, expertise, and dedication to deliver exceptional results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="mr-2" /> Agile Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  We employ Agile methodologies to ensure flexibility, rapid development, and continuous improvement throughout the project lifecycle. This approach allows us to adapt quickly to changing requirements and deliver value incrementally.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" /> Collaborative Partnership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  We work closely with our clients, considering them as partners in the development process. This collaborative approach ensures that we fully understand their needs and deliver solutions that exceed expectations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-gray-900">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            At Dencloud Technologies, we&apos;re not just building software; we&apos;re creating the future. Join us on this exciting journey as we continue to innovate, grow, and make a lasting impact in the world of technology.
          </p>
          <Card className="bg-white text-gray-800 max-w-2xl mx-auto">
            <CardContent className="text-center py-8">
              <p className="text-lg">
                &quot;The future belongs to those who believe in the beauty of their dreams.&quot; - Eleanor Roosevelt
              </p>
              <p className="mt-4">
                Let&apos;s turn your dreams into reality with Dencloud Technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

const TimelineItem = ({ year, event }: { year: string, event: string }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-8 h-8 border-2 border-purple-600 rounded-full">
        <Clock className="w-4 h-4 text-purple-600" />
      </div>
      <div className="w-px h-full bg-purple-600"></div>
    </div>
    <div className="pb-8">
      <p className="mb-2 text-lg font-bold text-purple-600">{year}</p>
      <p className="text-gray-700">{event}</p>
    </div>
  </div>
)

