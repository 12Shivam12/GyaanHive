import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-2xl font-serif font-bold">
            Pencraft
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Our story
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Membership
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Write
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Sign in
            </Link>
            <Button className="rounded-full bg-black text-white hover:bg-gray-800">Get started</Button>
          </nav>
          <Button variant="ghost" className="md:hidden" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-12 md:px-6 md:py-24">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Ideas that <br />
              shape the world
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              A platform for thoughtful writing and meaningful conversations. Discover stories, thinking, and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6">Start reading</Button>
              <Button variant="outline" className="rounded-full border-black hover:bg-gray-100 px-8 py-6">
                Start writing
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-gray-100 rounded-full -top-12 -right-12"></div>
            <div className="absolute w-48 h-48 bg-gray-200 rounded-full bottom-0 left-12"></div>
            <div className="relative z-10">
              <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#000000"
                  d="M47.7,-51.2C59.5,-35.6,65.2,-17.8,65.2,0C65.2,17.8,59.5,35.6,47.7,51.2C35.9,66.8,18,80.1,-1.4,81.5C-20.8,82.9,-41.6,72.3,-53.4,56.7C-65.2,41.1,-68,20.5,-67.8,0.2C-67.6,-20.2,-64.4,-40.4,-52.6,-56C-40.8,-71.6,-20.4,-82.6,-1.3,-81.3C17.8,-80,35.9,-66.8,47.7,-51.2Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Help
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Status
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Careers
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Text to speech
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

