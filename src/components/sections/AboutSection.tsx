'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, MapPin, Smile } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // Short delay to ensure transition is visible
    return () => clearTimeout(timer);
  }, []);

  const getTransitionClasses = (delay: string = 'delay-0') => {
    return cn(
      'transition-all ease-out duration-700',
      delay,
      isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    );
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl mx-auto">
        <Card className={cn(
          "shadow-xl rounded-lg overflow-hidden",
          "hover:border-primary/60",
          "hover:shadow-2xl hover:shadow-primary/20",
          "hover:-translate-y-1.5",
          "transition-all duration-300 ease-out",
          getTransitionClasses()
        )}>
          <CardHeader className={cn(
            "text-center bg-secondary/30 p-8",
          )}>
            <Smile className={cn(
              "mx-auto h-12 w-12 text-primary mb-4",
              getTransitionClasses('delay-[150ms]')
            )} />
            <CardTitle className={cn(
              "font-headline text-3xl font-bold text-primary sm:text-4xl",
              getTransitionClasses('delay-[200ms]')
            )}>
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className={cn("md:col-span-1 flex justify-center", getTransitionClasses('delay-[300ms]'))}>
                <div className={cn(
                  "relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg",
                  "border-4 border-primary",
                  "hover:border-accent hover:scale-105",
                  "transition-all duration-300 ease-in-out"
                )}>
                  <Image
                    src="/src/img.jpg"
                    alt="Rahul Kumar"
                    width={256}
                    height={256}
                    style={{ objectFit: "cover" }}
                    data-ai-hint="portrait person"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className={cn("text-lg text-foreground/80 leading-relaxed", getTransitionClasses('delay-[400ms]'))}>
                  I'm Rahul Kumar, a dedicated and enthusiastic MCA graduate  from 
                  Visvesvaraya Technological University, With a strong foundation in web and mobile development, I specialize in creating dynamic and responsive applications using technologies like React, Next.js, Flutter, and Firebase.
                </p>
                <p className={cn("text-lg text-foreground/80 leading-relaxed", getTransitionClasses('delay-[500ms]'))}>
                  I thrive on tackling complex challenges and continuously expanding my skillset to deliver innovative and high-quality software solutions. My passion lies in transforming ideas into tangible products that provide exceptional user experiences.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: GraduationCap, text: "MCA, Visvesvaraya Technological University" , delay: 'delay-[600ms]' },
                    { icon: MapPin, text: "Bangalore, India", delay: 'delay-[650ms]' },
                    { icon: Briefcase, text: "Full Stack Developer", delay: 'delay-[700ms]' },
                  ].map((item, index) => (
                    <div key={index} className={cn("flex items-center space-x-3 group cursor-default", getTransitionClasses(item.delay))}>
                      <item.icon className="h-6 w-6 text-accent group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                      <span className="text-foreground/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
