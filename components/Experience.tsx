"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import Section from "./ui/Section";
import { EXPERIENCE_DATA } from "@/data";

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}


export default function Experience() {
  return (
    <Section id="experience">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div className="md:sticky md:top-24">
          <h2 className="text-3xl font-bold mb-4">Work Experiences</h2>
          <p className="text-accents-5">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>

        <div className="relative border-l border-accents-2 space-y-8">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 md:pl-8"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-foreground ring-4 ring-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-accents-5 mt-1 sm:mt-0">
                  <Calendar size={14} />
                  <span>{job.period}</span>
                </div>
              </div>
              
              <div className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <Briefcase size={16} />
                {job.company}
              </div>
              
              <p className="text-accents-5 mb-4 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accents-1 text-accents-6 border border-accents-2">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
