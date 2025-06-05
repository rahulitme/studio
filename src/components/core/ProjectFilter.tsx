'use client';

import { allTechnologies, allProjectTypes } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FilterIcon, XIcon } from 'lucide-react';
import React from 'react';

interface ProjectFilterProps {
  selectedTechs: string[];
  setSelectedTechs: (techs: string[]) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  onClearFilters: () => void;
}

export function ProjectFilter({
  selectedTechs,
  setSelectedTechs,
  selectedType,
  setSelectedType,
  onClearFilters
}: ProjectFilterProps) {
  const handleTechChange = (tech: string) => {
    setSelectedTechs(
      selectedTechs.includes(tech)
        ? selectedTechs.filter((t) => t !== tech)
        : [...selectedTechs, tech]
    );
  };

  const [showMoreTech, setShowMoreTech] = React.useState(false);
  const displayedTechs = showMoreTech ? allTechnologies : allTechnologies.slice(0, 5);

  return (
    <Card className="mb-8 shadow-md rounded-lg">
      <CardHeader className="border-b">
        <CardTitle className="font-headline text-xl flex items-center text-primary">
          <FilterIcon className="mr-2 h-5 w-5" />
          Filter Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="text-md font-semibold mb-3 text-foreground/90">By Technology:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {displayedTechs.map((tech) => (
              <div key={tech} className="flex items-center space-x-2">
                <Checkbox
                  id={tech}
                  checked={selectedTechs.includes(tech)}
                  onCheckedChange={() => handleTechChange(tech)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor={tech} className="text-sm font-medium text-foreground/80 cursor-pointer">
                  {tech}
                </Label>
              </div>
            ))}
          </div>
          {allTechnologies.length > 5 && (
             <Button variant="link" onClick={() => setShowMoreTech(!showMoreTech)} className="p-0 h-auto mt-2 text-sm text-primary hover:text-primary/80">
             {showMoreTech ? 'Show Less' : `Show More (${allTechnologies.length - 5})`}
           </Button>
          )}
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3 text-foreground/90">By Type:</h3>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full sm:w-[200px] focus:ring-primary focus:border-primary">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              {allProjectTypes.map((type) => (
                <SelectItem key={type} value={type} className="capitalize">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {(selectedTechs.length > 0 || selectedType) && (
            <Button onClick={onClearFilters} variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <XIcon className="mr-2 h-4 w-4" /> Clear Filters
            </Button>
        )}
      </CardContent>
    </Card>
  );
}
