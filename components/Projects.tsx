import { ExternalLink, Folder, Github } from "lucide-react";
import Section from "./ui/Section";
import { PROJECTS_DATA } from "@/data";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}


export default function Projects() {
  return (
    <Section id="projects" className="bg-background">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-accents-5 max-w-2xl text-lg">
          A collection of projects that showcase my passion for building clean, performant web applications.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-accents-1/50 rounded-lg p-8 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl border border-transparent hover:border-accents-2"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="text-accents-6 group-hover:text-foreground transition-colors">
                <Folder size={40} strokeWidth={1.5} />
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    className="text-accents-5 hover:text-foreground transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-accents-5 hover:text-success transition-colors"
                    aria-label="Visit Website"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-foreground transition-colors">
              {project.title}
            </h3>
            
            <p className="text-accents-5 leading-relaxed mb-6">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
              {project.tags.map((tag) => (
                <li key={tag} className="text-xs font-mono text-accents-4">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
