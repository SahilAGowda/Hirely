import { 
  ArrowRightIcon, 
  BrainCircuit, 
  Target, 
  Zap, 
  TrendingUp, 
  Shield, 
  Clock,
  Sparkles,
  BarChart3,
  FileCheck
} from "lucide-react";
import Hero from "@/components/sections/hero/default";
import Features from "@/components/sections/features/default";
import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import FooterSection from "@/components/sections/footer/default";
import Logos from "@/components/sections/logos/default";
import Navbar from "@/components/sections/navbar/default";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/ui/particles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

function Home() {
  const features = [
    {
      icon: <BrainCircuit className="h-5 w-5 text-white/60" />,
      title: "AI-Powered Matching",
      description: "Intelligent algorithms match you with the most relevant job opportunities based on your profile.",
    },
    {
      icon: <Zap className="h-5 w-5 text-white/60" />,
      title: "One-Click Apply",
      description: "Apply to multiple jobs instantly with automated applications. Save hours of repetitive work.",
    },
    {
      icon: <Target className="h-5 w-5 text-white/60" />,
      title: "Smart Tracking",
      description: "Track all applications, interviews, and offers in one centralized dashboard.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-white/60" />,
      title: "Resume Optimization",
      description: "AI-powered optimization tailors your application to each job posting automatically.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-white/60" />,
      title: "Career Insights",
      description: "Get personalized insights based on market trends and your application history.",
    },
    {
      icon: <FileCheck className="h-5 w-5 text-white/60" />,
      title: "Application Analytics",
      description: "Track success rates, response times, and optimize your job search strategy.",
    },
  ];

  const faqItems = [
    {
      question: "How does Hirely's AI matching work?",
      answer: (
        <p className="text-muted-foreground">
          Hirely uses advanced natural language processing to understand job descriptions and your profile. 
          It analyzes skills, experience, qualifications, and even company culture fit to recommend the most relevant opportunities.
        </p>
      ),
    },
    {
      question: "Is my data secure with Hirely?",
      answer: (
        <p className="text-muted-foreground">
          Absolutely. We use enterprise-grade encryption and follow industry best practices to protect your data. 
          Your information is never shared with third parties without your explicit consent.
        </p>
      ),
    },
    {
      question: "Can I customize my application for each job?",
      answer: (
        <p className="text-muted-foreground">
          Yes! While Hirely automates the application process, you maintain full control. 
          You can customize your resume, cover letter, and application details for each position before submitting.
        </p>
      ),
    },
    {
      question: "How many applications can I send?",
      answer: (
        <p className="text-muted-foreground">
          Our free plan allows up to 10 applications per month. Premium plans offer unlimited applications, 
          priority support, and advanced features like interview preparation and salary negotiation tips.
        </p>
      ),
    },
    {
      question: "What job boards does Hirely support?",
      answer: (
        <p className="text-muted-foreground">
          Hirely integrates with major job boards including LinkedIn, Indeed, Glassdoor, and many others. 
          We're constantly adding new platforms to expand your reach.
        </p>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Particles */}
        <Particles 
          className="absolute inset-0" 
          quantity={150} 
          ease={80} 
          color="#ffffff"
          staticity={30}
          refresh 
        />
        
        {/* Gradient Blobs */}
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          <Badge variant="outline" className="animate-appear border-white/10 bg-white/5 backdrop-blur-sm">
            <Sparkles className="mr-2 h-3 w-3 text-white/80" />
            <span className="text-white/70 font-normal">
              Introducing Hirely AI →
            </span>
          </Badge>

          {/* Title */}
          <h1 className="animate-appear relative z-10 inline-block bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl leading-tight font-bold text-balance text-transparent opacity-0 delay-100 sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
            Hirely is the new way to find your dream job.
          </h1>

          {/* Description */}
          <p className="animate-appear relative z-10 max-w-[740px] text-lg font-normal text-balance text-white/50 opacity-0 delay-200 sm:text-xl">
            AI-powered job application agent that automatically applies to relevant positions, tracks your applications, and helps you land your dream job faster.
          </p>

          {/* CTA Button */}
          <div className="animate-appear opacity-0 delay-300">
            <RainbowButton size="lg" asChild>
              <Link href="/auth/signup" className="flex items-center">
                Get Started for free
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </RainbowButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features
        title="Everything you need to succeed"
        description="Powerful features designed to streamline your job search and maximize your success rate."
        features={features}
        className="relative"
      />

      {/* Logos/Tech Stack Section */}
      <Logos
        title="Trusted by job seekers at leading companies"
        badge={
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Shield className="mr-2 h-3 w-3" />
            Enterprise-grade security
          </Badge>
        }
        logos={false}
      />

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions"
        items={faqItems}
        className="relative"
      />

      {/* CTA Section */}
      <CTA
        title="Ready to accelerate your job search?"
        buttons={false}
        className="relative"
      />
      
      {/* Custom CTA Button */}
      <div className="relative -mt-32 pb-16">
        <div className="flex justify-center">
          <RainbowButton size="lg" asChild>
            <Link href="/auth/signup">
              <Sparkles className="mr-2 h-4 w-4" />
              Get Started Free
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </RainbowButton>
        </div>
      </div>

      {/* Footer */}
      <FooterSection
        name="Hirely"
        columns={[
          {
            title: "Product",
            links: [
              { text: "Features", href: "#features" },
              { text: "Pricing", href: "#pricing" },
              { text: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Company",
            links: [
              { text: "About", href: "/about" },
              { text: "Blog", href: "/blog" },
              { text: "Careers", href: "/careers" },
            ],
          },
          {
            title: "Support",
            links: [
              { text: "Help Center", href: "/help" },
              { text: "Contact", href: "/contact" },
              { text: "Status", href: "/status" },
            ],
          },
        ]}
        copyright="© 2025 Hirely. All rights reserved."
        policies={[
          { text: "Privacy Policy", href: "/privacy" },
          { text: "Terms of Service", href: "/terms" },
        ]}
        showModeToggle={false}
      />
    </main>
  );
}

export default Home;