import Link from 'next/link';
import { Briefcase, User, LayoutGrid, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block text-primary">
            Rahul's Showcase
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:space-x-6 text-sm font-medium">
          <Link
            href="#about"
            className="text-foreground/60 transition-colors hover:text-foreground/80 flex items-center"
          >
            <User className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" /> About
          </Link>
          <Link
            href="#projects"
            className="text-foreground/60 transition-colors hover:text-foreground/80 flex items-center"
          >
            <LayoutGrid className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" /> Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground/60 transition-colors hover:text-foreground/80 flex items-center"
          >
            <Mail className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
