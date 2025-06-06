
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, MapPin, Smile } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl mx-auto">
        <Card className="shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
          <CardHeader className="text-center bg-secondary/30 p-8">
            <Smile className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-3xl font-bold text-primary sm:text-4xl">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
                  <Image
                    src="/rahul-kumar.jpg"
                    alt="Rahul Kumar"
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform duration-300"
                    data-ai-hint="portrait person"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm Rahul Kumar, a dedicated and enthusiastic B.Tech graduate in Computer Science and Engineering from Acharya Institute of Technology, Bangalore. With a strong foundation in web and mobile development, I specialize in creating dynamic and responsive applications using technologies like React, Next.js, Flutter, and Firebase.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I thrive on tackling complex challenges and continuously expanding my skillset to deliver innovative and high-quality software solutions. My passion lies in transforming ideas into tangible products that provide exceptional user experiences.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-3 group cursor-default">
                    <GraduationCap className="h-6 w-6 text-accent group-hover:text-primary transition-all duration-200 group-hover:scale-110" />
                    <span className="text-foreground/90">B.Tech CSE, Acharya Institute of Technology</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-default">
                    <MapPin className="h-6 w-6 text-accent group-hover:text-primary transition-all duration-200 group-hover:scale-110" />
                    <span className="text-foreground/90">Bangalore, India</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-default">
                    <Briefcase className="h-6 w-6 text-accent group-hover:text-primary transition-all duration-200 group-hover:scale-110" />
                    <span className="text-foreground/90">Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
