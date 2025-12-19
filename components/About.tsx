import { Globe, Terminal } from "lucide-react";
import { ABOUT_DATA } from "../data";
import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Bio */}
        <div className="space-y-8 md:sticky md:top-24">
          <h2 className="text-4xl font-bold tracking-tight">{ABOUT_DATA.title}</h2>
          
          <div className="text-lg text-accents-5 leading-relaxed space-y-6">
            {ABOUT_DATA.bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="pt-4">
              <a 
                href={ABOUT_DATA.resumeUrl} 
                target="_blank"
                className="inline-flex items-center gap-2 text-foreground font-medium group"
              >
                Download Resume <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Tech Stack Grid */}
        <div className="grid gap-6">
          {ABOUT_DATA.skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-accents-1/30 backdrop-blur-sm p-6 rounded-xl border border-accents-2 transition-all duration-300 hover:border-success/50 hover:shadow-xl hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-background/50 rounded-lg text-foreground group-hover:scale-110 transition-transform duration-300">
                  {skillGroup.icon === "Globe" ? <Globe size={20} strokeWidth={2} /> : <Terminal size={20} strokeWidth={2} />}
                </div>
                <h3 className="font-bold text-lg">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background/50 border border-accents-2 rounded-md text-sm font-medium text-accents-6 transition-colors hover:bg-accents-2 hover:text-foreground cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
