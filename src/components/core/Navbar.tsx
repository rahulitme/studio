import Link from 'next/link';
import { Briefcase, User, LayoutGrid, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block text-foreground tracking-tight">
            Rahul's Showcase
          </span>
        </Link>
        <nav className="flex items-center space-x-1 sm:space-x-2 text-sm font-medium">
          <Link
            href="#about"
            className="text-foreground/70 transition-colors hover:text-foreground flex items-center rounded-md px-3 py-2 hover:bg-secondary/40"
          >
            <User className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" /> About
          </Link>
          <Link
            href="#projects"
            className="text-foreground/70 transition-colors hover:text-foreground flex items-center rounded-md px-3 py-2 hover:bg-secondary/40"
          >
            <LayoutGrid className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" /> Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground/70 transition-colors hover:text-foreground flex items-center rounded-md px-3 py-2 hover:bg-secondary/40"
          >
            <Mail className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
