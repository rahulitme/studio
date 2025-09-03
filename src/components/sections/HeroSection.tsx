import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, UserCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Hello! I'm Rahul Kumar
        </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
  A passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary font-semibold">Full Stack Developer</span> crafting seamless digital experiences.
  With expertise in React, Next.js, Flutter, and a keen eye for design, I build innovative web and mobile applications.
  I also have <span className="font-semibold">6 months of experience as a Frontend Developer at Zylentrix</span>, where I honed my skills in building modern, responsive web solutions.
  Explore my work and let's create something amazing together!
</p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#projects">
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#about">
              About Me
              <UserCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="src/resume.pdf" download>
              Download Resume
                 <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
