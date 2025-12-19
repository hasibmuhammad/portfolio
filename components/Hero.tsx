"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";

import { HERO_DATA } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080802e_1px,transparent_1px),linear-gradient(to_bottom,#8080802e_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-success/20 opacity-20 blur-[100px]"></div>
        <div className="absolute inset-0 bg-background mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,#000_100%)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Actions */}
          <div className="max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 lg:mb-8"
            >
              <span className="text-xl md:text-3xl font-medium text-accents-5 mb-4 flex items-center justify-center lg:justify-start gap-2">
                {HERO_DATA.greeting}
                <motion.span
                  className="inline-block origin-[70%_70%] text-5xl md:text-7xl"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                  }}
                >
                  👋
                </motion.span>
                I&apos;m
              </span>
              <span className="block text-4xl md:text-6xl font-bold tracking-tight bg-linear-to-br from-foreground to-accents-5 bg-clip-text text-transparent pb-2">
                {HERO_DATA.name}.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-2xl text-accents-5 mb-8 leading-relaxed max-w-lg lg:max-w-none"
            >
              {HERO_DATA.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 w-full"
            >
              {/* Primary Actions */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button href={HERO_DATA.actions.primary.href} size="lg" className="gap-2 shadow-lg shadow-success/20">
                  {HERO_DATA.actions.primary.label} <ArrowRight size={16} />
                </Button>
                <Button onClick={() => window.open(HERO_DATA.actions.secondary.href, '_blank')} variant="outline" size="lg" className="gap-2 cursor-pointer">
                   {HERO_DATA.actions.secondary.label} <ArrowRight size={16} className="-rotate-45" />
                </Button>
              </div>
              
              {/* Social Connect Bar */}
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-4 border-t border-accents-2/50 max-w-md mx-auto lg:mx-0">
                <span className="text-sm font-medium text-accents-5 uppercase tracking-wider">Connect</span>
                <div className="flex items-center gap-4">
                  {HERO_DATA.socials.map((social) => (
                    <a 
                      key={social.platform}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accents-5 hover:text-foreground transition-colors p-1" 
                      aria-label={social.platform}
                    >
                      {social.icon === "Github" ? <Github size={22} /> : 
                       social.icon === "Linkedin" ? <Linkedin size={22} /> : 
                       <Mail size={22} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="relative mx-auto lg:ml-auto order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-[280px] h-[280px] md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative group"
              >
                {/* Decorative Background Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accents-2 to-background border border-accents-2 rounded-[2rem] transform rotate-10 scale-[0.95] opacity-80 transition-all duration-500 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-100"></div>
                
                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-accents-2/50 shadow-2xl transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-accents-1/10 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <img 
                    src="/images/hasib_muhammad.png" 
                    alt="Md Hasib Talukder" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Experience Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 bg-background/80 backdrop-blur-md border border-accents-2 p-4 md:p-6 rounded-2xl shadow-2xl z-20 group-hover:scale-110 transition-transform duration-500"
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">1.5+</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-accents-5 font-semibold leading-tight">
                    Years of<br />Experience
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
