import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-2xl font-serif font-bold">
            Pencraft
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-serif font-bold">Join Pencraft</h1>
            <p className="text-gray-600">Create an account to get started</p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" type="text" placeholder="John Doe" required className="w-full" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required className="w-full" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required className="w-full" />
                <p className="text-xs text-gray-500">Must be at least 8 characters long</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-black hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-black hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                Create account
              </Button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-black hover:underline">
                Sign in
              </Link>
            </p>
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
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

