import Link from "next/link"
import { Button } from "@/components/ui/button"

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Welcome to Hirely
        </h1>
        <p className="text-xl text-muted-foreground">
          AI-Powered Job Application Agent
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/auth/signup">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
          </Link>
          <Link href="/auth/signin">
            <Button size="lg" variant="outline" className="text-lg">
              Sign In
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-semibold mb-4">Theme Toggle Test</h2>
          <p className="text-muted-foreground">
            Click the theme toggle button in the bottom-right corner to switch between light and dark modes!
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-primary"></div>
            <div className="w-20 h-20 rounded-lg bg-secondary"></div>
            <div className="w-20 h-20 rounded-lg bg-accent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home