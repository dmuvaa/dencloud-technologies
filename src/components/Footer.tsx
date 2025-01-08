import Link from 'next/link'
import { Facebook, Twitter, Linkedin, GitlabIcon as GitHub } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Dencloud Technologies</h3>
            <p className="text-gray-400 mb-4">Empowering Your Vision, One Code at a Time</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors"><GitHub /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-purple-300 transition-colors">Portfolio</Link></li>
              <li><Link href="/team" className="hover:text-purple-300 transition-colors">Team</Link></li>
              <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contact Information</h4>
            <p className="text-gray-400 mb-2">Email: info@dencloudtechnologies.com</p>
            <p className="text-gray-400 mb-2">Phone: +254746197440</p>
            <p className="text-gray-400">Address: 123 Tech Street, Innovation City, 12345</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Dencloud Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

