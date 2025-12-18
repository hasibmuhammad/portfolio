"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { HERO_DATA } from "../data";
import Button from "./ui/Button";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8">
            Let&apos;s build something <span className="text-accents-5">extraordinary.</span>
          </h2>
          <p className="text-lg md:text-xl text-accents-5 mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently available for freelance projects and new opportunities. 
            Got a vision? Let&apos;s make it reality.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Button 
              size="lg" 
              className="cursor-pointer h-14 px-8 text-lg rounded-full gap-3 shadow-xl"
              onClick={() => window.open("https://wa.me/01627156515", "_blank", "noopener,noreferrer")}
            >
              Chat on WhatsApp <MessageCircle size={20} />
            </Button>
            
            <div className="flex items-center gap-6 mt-4">
               {HERO_DATA.socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-accents-1 text-accents-5 hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110" 
                  aria-label={social.platform}
                >
                  {social.icon === "Github" ? <Github size={24} /> : 
                   social.icon === "Linkedin" ? <Linkedin size={24} /> : 
                   <Mail size={24} />}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}