"use client";

import { EDUCATION_DATA } from "@/data";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";
import Section from "./ui/Section";

export default function Education() {
  return (
    <Section id="education">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div className="md:sticky md:top-24 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
          <p className="text-accents-5 text-lg">
            My academic background and qualifications.
          </p>
        </div>

        <div className="relative border-l border-accents-2 space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
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
                <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-sm text-accents-5 mt-1 sm:mt-0">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <div className="text-lg font-medium text-foreground mb-4 flex items-start gap-2">
                <GraduationCap className="shrink-0 mt-1" size={20} />
                <p>{edu.institution}</p>
              </div>
              
              <div className="text-accents-5 mb-4 leading-relaxed whitespace-pre-line">
                {Array.isArray(edu.description) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {edu.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
