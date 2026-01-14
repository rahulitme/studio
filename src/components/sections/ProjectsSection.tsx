'use client';

import { useState, useMemo } from 'react';
import { projects as allProjectsData, Project } from '@/data/projects';
import { ProjectCard } from '@/components/core/ProjectCard';
import { ProjectFilter } from '@/components/core/ProjectFilter';
import { LayoutGrid } from 'lucide-react';

export function ProjectsSection() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return allProjectsData.filter((project) => {
      const techMatch = selectedTechs.length === 0 || selectedTechs.every((tech) => project.technologies.includes(tech));
      const typeMatch = selectedType === '' || project.type === selectedType;
      return techMatch && typeMatch;
    });
  }, [selectedTechs, selectedType]);

  const handleClearFilters = () => {
    setSelectedTechs([]);
    setSelectedType('');
  };

  return (
    <section id="projects" className="section">
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl md:text-5xl flex items-center justify-center">
            <LayoutGrid className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
            My Projects
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Here's a selection of projects I've worked on.
          </p>
        </div>

        <ProjectFilter
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          onClearFilters={handleClearFilters}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-foreground/60 py-10">
            No projects match your current filters. Try adjusting them!
          </p>
        )}
      </div>
    </section>
  );
}
