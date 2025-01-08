import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Our Work Speaks for Itself</h1>
          <p className="text-xl mb-8">Discover how we&apos;ve helped businesses achieve their goals.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="Increased sales by 45% for a global retailer"
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="AI-powered Chatbot"
              description="Reduced response times by 60% for a customer service company"
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Mobile Banking App"
              description="Improved user engagement by 30% for a fintech startup"
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Inventory Management System"
              description="Optimized stock levels and reduced waste by 25% for a manufacturing company"
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Online Learning Platform"
              description="Facilitated a 50% increase in course completions for an education provider"
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="IoT Fleet Management"
              description="Reduced fuel consumption by 15% for a logistics company"
              imageUrl="/placeholder.svg?height=300&width=400"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-poppins">Case Studies</h2>
          <div className="space-y-12">
            <CaseStudy
              title="Revolutionizing E-commerce"
              challenge="A global retailer struggled with an outdated online platform, resulting in poor user experience and declining sales."
              solution="We developed a state-of-the-art e-commerce platform with advanced search capabilities, personalized recommendations, and a streamlined checkout process."
              result="The new platform led to a 45% increase in online sales and a 30% improvement in customer satisfaction scores."
            />
            <CaseStudy
              title="Enhancing Customer Service with AI"
              challenge="A customer service company faced long response times and inconsistent quality in their support interactions."
              solution="We implemented an AI-powered chatbot that could handle common queries and seamlessly escalate complex issues to human agents."
              result="The solution reduced response times by 60% and increased first-contact resolution rates by 40%."
            />
            <CaseStudy
              title="Optimizing Manufacturing Operations"
              challenge="A manufacturing company struggled with inefficient inventory management, leading to overstock and stockouts."
              solution="We developed a custom inventory management system with real-time tracking, predictive analytics, and automated reordering."
              result="The system optimized stock levels, reducing waste by 25% and improving overall operational efficiency by 20%."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const ProjectCard = ({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) => (
  <Card className="overflow-hidden">
    <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const CaseStudy = ({ title, challenge, solution, result }: { title: string, challenge: string, solution: string, result: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl font-poppins">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Challenge:</h4>
        <p>{challenge}</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Solution:</h4>
        <p>{solution}</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Result:</h4>
        <p>{result}</p>
      </div>
      <Button variant="outline">
        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
)

