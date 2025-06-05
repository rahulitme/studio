'use client';

import type { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Sparkles, FileText, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
    setIsDialogOpen(false);
    toast({ title: "Success", description: "Project description updated!" });
  };
  
  const getTechIcon = (tech: string) => {
    // Simple mapping, can be expanded
    if (tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next.js')) return <FileText className="inline-block mr-1 h-3 w-3" />;
    if (tech.toLowerCase().includes('flutter') || tech.toLowerCase().includes('dart')) return <Sparkles className="inline-block mr-1 h-3 w-3" />;
    if (tech.toLowerCase().includes('firebase')) return <Lightbulb className="inline-block mr-1 h-3 w-3" />; // Using Lightbulb as a generic "backend/service"
    return null;
  }

  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
        {project.image && (
          <div className="relative w-full h-48">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={`${project.type} ${project.technologies[0] || ''}`}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
          <CardDescription className="text-sm text-foreground/70 h-20 overflow-y-auto">
            {currentDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-foreground/90">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
                   {getTechIcon(tech)} {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t">
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            )}
            {project.deployUrl && (
              <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                <Link href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Deploy
                </Link>
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(true)} className="text-primary hover:bg-primary/10">
            <Sparkles className="mr-2 h-4 w-4" /> AI Describe
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary">Generate Project Description</DialogTitle>
            <DialogDescription>
              Review the current description or generate a new one using AI for '{project.title}'.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <h3 className="font-semibold mb-1">Current Description:</h3>
              <Textarea readOnly value={currentDescription} rows={4} className="bg-muted/50" />
            </div>
            <Button onClick={handleGenerateDescription} disabled={isGenerating} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isGenerating ? (
                <>
                  <Skeleton className="h-4 w-4 mr-2 rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" /> Generate New with AI
                </>
              )}
            </Button>
            {isGenerating && !generatedDescription && (
                <div>
                    <Skeleton className="h-6 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4 mb-1" />
                </div>
            )}
            {generatedDescription && (
              <div>
                <h3 className="font-semibold mb-1">Generated Description:</h3>
                <Textarea readOnly value={generatedDescription} rows={4} className="bg-green-50 border-green-300" />
              </div>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {generatedDescription && (
              <Button onClick={handleUseGeneratedDescription} className="bg-primary hover:bg-primary/90 text-primary-foreground">Use Generated Description</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
