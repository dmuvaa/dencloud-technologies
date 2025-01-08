'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-poppins">Dencloud Technologies</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-purple-300 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-purple-300 transition-colors">About</Link>
            <Link href="/portfolio" className="hover:text-purple-300 transition-colors">Portfolio</Link>
            <Link href="/team" className="hover:text-purple-300 transition-colors">Team</Link>
            <Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
          </nav>
          <Button variant="secondary" size="sm" className="hidden md:block">Get Started</Button>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-48 bg-purple-900 rounded-bl-lg shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="hover:text-purple-300 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-purple-300 transition-colors">About</Link>
            <Link href="/portfolio" className="hover:text-purple-300 transition-colors">Portfolio</Link>
            <Link href="/team" className="hover:text-purple-300 transition-colors">Team</Link>
            <Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
            <Button variant="secondary" size="sm" className="w-full mt-2">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

