import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Sparkles, UserCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-grid" />
      <div className="container-narrow relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <Badge variant="secondary" className="bg-secondary/60 text-foreground/80">
                <Sparkles className="mr-1 h-3 w-3" />
                Available for freelance
              </Badge>
              <Badge variant="secondary" className="bg-secondary/60 text-foreground/80">React</Badge>
              <Badge variant="secondary" className="bg-secondary/60 text-foreground/80">Next.js</Badge>
              <Badge variant="secondary" className="bg-secondary/60 text-foreground/80">MERN</Badge>
              <Badge variant="secondary" className="bg-secondary/60 text-foreground/80">Flutter</Badge>
            </div>

            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I’m <span className="text-gradient">Rahul Kumar</span>
            </h1>
            <p className="mt-5 text-base text-foreground/75 sm:text-lg md:text-xl leading-relaxed">
              Full Stack Developer crafting fast, accessible web and mobile experiences. I build with React/Next.js and Flutter,
              and I bring a strong eye for design + clean UI engineering.
            </p>
            <p className="mt-3 text-sm sm:text-base text-foreground/65">
              1 year experience as a Frontend Developer • Bangalore, India
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                <Link href="#projects">
                  View Projects <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/70 bg-background/60 backdrop-blur hover:bg-background/80">
                <Link href="#about">
                  About Me <UserCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-secondary/70 hover:bg-secondary/90">
                <a href="/src/resume.pdf" download>
                  Download Resume <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-2xl" />
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-border/60 bg-card shadow-2xl">
                <Image
                  src="/src/img.jpg"
                  alt="Rahul Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
