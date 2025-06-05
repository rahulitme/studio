
'use client';

import type { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Sparkles, FileText, Lightbulb, Code, Smartphone, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateProjectDescription, GenerateProjectDescriptionInput } from '@/ai/flows/generate-project-description';
import { Skeleton } from '@/components/ui/skeleton';


interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentDescription, setCurrentDescription] = useState(project.description);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAIDescribeDialogOpen, setIsAIDescribeDialogOpen] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    setGeneratedDescription('');
    try {
      const input: GenerateProjectDescriptionInput = {
        title: project.title,
        technologies: project.technologies,
        type: project.type,
      };
      const result = await generateProjectDescription(input);
      if (result.description) {
        setGeneratedDescription(result.description);
      } else {
        toast({ title: "Error", description: "Failed to generate description.", variant: "destructive" });
      }
    } catch (error) {
      console.error("Error generating description:", error);
      toast({ title: "Error", description: "An error occurred while generating the description.", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUseGeneratedDescription = () => {
    setCurrentDescription(generatedDescription);
    setIsAIDescribeDialogOpen(false);
    toast({ title: "Success", description: "Project description updated!", className: "bg-primary text-primary-foreground" });
  };
  
  const getTechIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react') || lowerTech.includes('next.js')) return <Code className="inline-block mr-1 h-3 w-3" />;
    if (lowerTech.includes('flutter') || lowerTech.includes('dart')) return <Smartphone className="inline-block mr-1 h-3 w-3" />;
    if (lowerTech.includes('firebase')) return <FileText className="inline-block mr-1 h-3 w-3" />;
    if (lowerTech.includes('tailwind') || lowerTech.includes('css') || lowerTech.includes('shadcn') || lowerTech.includes('material-ui')) return <Sparkles className="inline-block mr-1 h-3 w-3" />;
    return <Lightbulb className="inline-block mr-1 h-3 w-3" />;
  }

  // Effect to prevent hydration mismatch for random values or browser-specific APIs
  useEffect(() => {
    // Any client-side only logic can go here if needed
  }, []);


  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out rounded-lg bg-card border border-border/70 transform hover:-translate-y-1">
        {project.image && (
          <div 
            className="relative w-full h-48 group overflow-hidden cursor-pointer"
            onClick={() => setIsImageDialogOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsImageDialogOpen(true); }}
            aria-label={`View larger image for ${project.title}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              data-ai-hint={project.dataAiHint || 'placeholder image'}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center">
                    <Eye className="h-4 w-4 mr-2" /> View Image
                </div>
            </div>
          </div>
        )}
        <CardHeader className="pt-4 pb-2">
          <CardTitle className="font-headline text-xl md:text-2xl text-primary">{project.title}</CardTitle>
          <CardDescription className="text-sm text-foreground/70 h-24 overflow-y-auto custom-scrollbar">
            {currentDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow py-3">
          <div className="mb-3">
            <h4 className="text-xs font-semibold mb-2 text-foreground/90 uppercase tracking-wider">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors text-xs">
                   {getTechIcon(tech)} {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 p-4 border-t border-border/50">
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="border-primary/70 text-primary hover:bg-primary/10 hover:text-primary-foreground transition-colors">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            )}
            {project.deployUrl && (
              <Button variant="outline" size="sm" asChild className="border-primary/70 text-primary hover:bg-primary/10 hover:text-primary-foreground transition-colors">
                <Link href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Deploy
                </Link>
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsAIDescribeDialogOpen(true)} className="text-primary hover:bg-primary/10 hover:text-primary-foreground transition-colors">
            <Sparkles className="mr-2 h-4 w-4" /> AI Describe
          </Button>
        </CardFooter>
      </Card>

      {/* AI Description Dialog */}
      <Dialog open={isAIDescribeDialogOpen} onOpenChange={setIsAIDescribeDialogOpen}>
        <DialogContent className="sm:max-w-[525px] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary">Generate Project Description</DialogTitle>
            <DialogDescription className="text-foreground/70">
              Review the current description or generate a new one using AI for '{project.title}'.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <h3 className="font-semibold mb-1 text-foreground/90">Current Description:</h3>
              <Textarea readOnly value={currentDescription} rows={4} className="bg-background/70 border-border text-foreground/80" />
            </div>
            <Button onClick={handleGenerateDescription} disabled={isGenerating} className="bg-accent hover:bg-accent/90 text-accent-foreground transition-colors">
              {isGenerating ? (
                <>
                  <Skeleton className="h-4 w-4 mr-2 rounded-full animate-spin bg-accent-foreground/50" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" /> Generate New with AI
                </>
              )}
            </Button>
            {isGenerating && !generatedDescription && (
                <div className="space-y-2">
                    <Skeleton className="h-6 w-1/2 mb-2 bg-muted/70" />
                    <Skeleton className="h-4 w-full bg-muted/70" />
                    <Skeleton className="h-4 w-full bg-muted/70" />
                    <Skeleton className="h-4 w-3/4 bg-muted/70" />
                </div>
            )}
            {generatedDescription && (
              <div>
                <h3 className="font-semibold mb-1 text-foreground/90">Generated Description:</h3>
                <Textarea readOnly value={generatedDescription} rows={4} className="bg-green-900/20 border-green-500/50 text-green-300" />
              </div>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border-border hover:bg-muted/70">Cancel</Button>
            </DialogClose>
            {generatedDescription && (
              <Button onClick={handleUseGeneratedDescription} className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">Use Generated Description</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Image Lightbox Dialog */}
      {project.image && (
        <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
          <DialogContent className="p-0 bg-transparent border-none shadow-none w-auto h-auto max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={project.image}
              alt={`${project.title} - enlarged view`}
              width={1200} 
              height={800}
              className="rounded-lg object-contain max-w-full max-h-full"
            />
          </DialogContent>
        </Dialog>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted) / 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.7);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary));
        }
      `}</style>
    </>
  );
}
