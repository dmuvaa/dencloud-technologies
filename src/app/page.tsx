import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Globe, ShoppingCart, Cpu, Cloud, Gamepad, Brain, Search, CreditCard, Share2, PenTool, Cog } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight">Africa&apos;s Premier Software Development Service</h1>
          <p className="text-xl mb-6 font-medium max-w-3xl mx-auto text-gray-100">
            Empowering businesses across Africa and beyond with innovative, custom-built software solutions. From startups to enterprises, we bring your vision to life with cutting-edge technology and unparalleled expertise.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-purple-800">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-poppins text-gray-900">What We Build: Your Ideas, Our Expertise</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-800">
            Dencloud Technologies offers a diverse range of services, catering to businesses and individuals across various industries. From mobile apps to AI-driven solutions, we are your one-stop shop for all things tech. Here&apos;s a glimpse of what we can create for you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-12 h-12 text-purple-600" />}
              title="Mobile Apps"
              description="We craft seamless, user-centric mobile applications that work across platforms, providing your users with the best experience on the go. Whether it's a native iOS app or a cross-platform solution, we deliver excellence."
            />
            <ServiceCard
              icon={<Globe className="w-12 h-12 text-blue-600" />}
              title="Web Apps"
              description="Empower your business with web applications that are scalable, secure, and tailored to meet the unique demands of your users. Our web apps are built to evolve as your business grows."
            />
            <ServiceCard
              icon={<ShoppingCart className="w-12 h-12 text-green-600" />}
              title="E-commerce Platforms"
              description="We specialize in designing and developing e-commerce platforms that not only look great but also optimize conversions. From custom solutions to integrations with platforms like Shopify or WooCommerce, we've got you covered."
            />
            <ServiceCard
              icon={<Cpu className="w-12 h-12 text-red-600" />}
              title="SaaS and MVPs"
              description="Turn your ideas into reality with our SaaS solutions and MVP development. We help you get to market faster with a focus on functionality, scalability, and user satisfaction."
            />
            <ServiceCard
              icon={<Gamepad className="w-12 h-12 text-yellow-600" />}
              title="Online Games"
              description="Create immersive gaming experiences with our expertise in game development. Whether it's 2D, 3D, multiplayer, or blockchain-powered games, we deliver thrilling solutions that captivate audiences."
            />
            <ServiceCard
              icon={<Brain className="w-12 h-12 text-indigo-600" />}
              title="AI and Machine Learning"
              description="Leverage the power of AI to automate processes, predict trends, and enhance decision-making. From chatbots to advanced analytics tools, we create solutions that are as intelligent as they are impactful."
            />
            <ServiceCard
              icon={<Cloud className="w-12 h-12 text-cyan-600" />}
              title="Cloud and DevOps Solutions"
              description="Achieve seamless scalability and efficiency with our cloud and DevOps services. From infrastructure setup to continuous integration and deployment, we ensure your systems are always running smoothly."
            />
            <ServiceCard
              icon={<Search className="w-12 h-12 text-orange-600" />}
              title="SEO-first Development"
              description="Boost your online visibility with our SEO-first approach to web development. We create websites that not only look great but are also optimized for search engines, helping you reach your target audience effectively."
            />
            <ServiceCard
              icon={<Cog className="w-12 h-12 text-gray-600" />}
              title="Custom Solutions"
              description="Have a unique requirement? We build tailored software solutions that fit your exact needs, no matter how complex. Our team is ready to tackle any challenge and deliver results that exceed your expectations."
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio">Explore Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-poppins text-gray-900">Our Work Speaks for Itself</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-800">
            Over the years, we&apos;ve had the privilege of working on a wide variety of projects. From building robust e-commerce platforms to designing AI-powered analytics tools, our portfolio reflects our commitment to excellence and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              title="E-commerce platform for a global retailer"
              description="Increased sales by 45%"
              imageUrl="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="AI-powered chatbot for a customer service company"
              description="Reduced response times by 60%"
              imageUrl="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="MVP for a fitness startup"
              description="Successfully launched in record time, gaining 10K+ users within the first month"
              imageUrl="/placeholder.svg?height=200&width=300"
            />
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">View All Projects <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900">Driving Innovation in African Tech</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-800">
            At Dencloud Technologies, innovation is at the heart of everything we do. Our team of expert African developers, designers, and strategists work tirelessly to deliver solutions that not only meet your expectations but exceed them. Let us take your business to the next level with custom-built software that drives growth, enhances user experiences, and streamlines operations.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Let&apos;s Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Ready to turn your vision into reality? Contact us today and let&apos;s create something extraordinary.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="h-full">
    <CardHeader>
      <div className="mb-4">{icon}</div>
      <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-800">{description}</CardDescription>
    </CardContent>
  </Card>
)

const ProjectCard = ({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) => (
  <Card className="h-full">
    <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" />
    <CardHeader>
      <CardTitle className="text-lg text-gray-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-800">{description}</CardDescription>
    </CardContent>
  </Card>
)

