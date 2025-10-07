import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Wrench, Globe, Rocket, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "primary",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "secondary",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "AI / Quantum",
    icon: Brain,
    color: "accent",
    skills: [
      { name: "n8n", level: 90 },
      { name: "OpenAI / LangChain", level: 80 },
      { name: "Quantum Algorithms", level: 70 },
      { name: "Qiskit", level: 70 },
      { name: "Cybersecurity Basics", level: 60 },
    ],
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Canva", level: 90 },
      { name: "Git/GitHub", level: 70 },
      { name: "Figma", level: 80 },
      { name: "Linux / Command Line", level: 80 },
    ],
  },
];

export function Skills() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 pixel-shadow" />
          <p className="text-xl font-retro text-muted-foreground max-w-2xl mx-auto">
            Level up! Click to explore my tech stack 🎮
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion 
            type="multiple" 
            className="space-y-4"
            value={openItems}
            onValueChange={setOpenItems}
          >
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const isOpen = openItems.includes(`item-${categoryIndex}`);
              
              return (
                <AccordionItem 
                  key={category.title} 
                  value={`item-${categoryIndex}`}
                  className="border-none"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className={`gradient-card pixel-shadow border-2 overflow-hidden transition-all duration-300 ${
                      isOpen 
                        ? 'border-primary glow-primary' 
                        : 'border-primary/20 hover:border-primary/50'
                    }`}>
                      <AccordionTrigger className="hover:no-underline px-6 py-5 group">
                        <div className="flex items-center gap-4 w-full">
                          {/* Icon */}
                          <motion.div 
                            className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className={`w-8 h-8 text-${category.color}`} />
                          </motion.div>
                          
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-pixel text-foreground group-hover:text-primary transition-colors flex-1 text-left">
                            {category.title}
                          </h3>
                          
                          {/* Skill count badge */}
                          <motion.div 
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full font-retro text-sm pixel-shadow hidden md:block"
                            whileHover={{ scale: 1.1 }}
                          >
                            {category.skills.length} skills
                          </motion.div>
                          
                          {/* Arrow indicator (hidden - AccordionTrigger provides its own) */}
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent>
                        <div className="px-6 pb-6 pt-2 space-y-4">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: skillIndex * 0.05 }}
                              whileHover={{ 
                                scale: 1.02,
                                x: 10,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                              }}
                              className="group/skill cursor-pointer"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <motion.span 
                                  className="font-retro text-lg text-foreground group-hover/skill:text-primary transition-colors duration-300"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {skill.name}
                                </motion.span>
                                <motion.span 
                                  className="font-pixel text-sm text-primary"
                                  animate={{ 
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: skillIndex * 0.2
                                  }}
                                >
                                  {skill.level}%
                                </motion.span>
                              </div>
                              
                              {/* Energy Bar Style Progress */}
                              <div className="relative h-6 bg-muted rounded-lg overflow-hidden border-2 border-primary/30 pixel-shadow group-hover/skill:border-primary transition-colors duration-300">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ 
                                    delay: skillIndex * 0.05 + 0.2,
                                    duration: 1,
                                    ease: "easeOut"
                                  }}
                                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary group-hover/skill:animate-pulse"
                                  style={{
                                    boxShadow: `0 0 10px hsl(var(--primary) / 0.5)`,
                                  }}
                                />
                                
                                {/* Shimmer effect on hover */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "200%" }}
                                  transition={{ duration: 0.8, ease: "easeInOut" }}
                                />
                                
                                {/* Pixel-style segments */}
                                <div className="absolute inset-0 flex">
                                  {Array.from({ length: 10 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className="flex-1 border-r border-background/20"
                                    />
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </AccordionContent>
                    </Card>
                  </motion.div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-pixel mb-6 text-foreground">Achievements Unlocked 🏆</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Code2, label: "180+ Commits", color: "primary" },
              { icon: Rocket, label: "HacKP Hackathon Winner", color: "secondary" },
              { icon: Brain, label: "Quantum Certification", color: "accent" },
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", bounce: 0.5 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, -5, 0],
                    y: -10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className={`p-6 gradient-card pixel-shadow border-2 border-${achievement.color} hover:glow-${achievement.color} transition-all cursor-pointer relative overflow-hidden`}>
                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Icon className={`w-12 h-12 text-${achievement.color} mx-auto mb-2 drop-shadow-[0_0_8px_hsl(var(--${achievement.color}))]`} />
                    </motion.div>
                    <p className="font-retro text-lg text-foreground relative z-10">{achievement.label}</p>
                    
                    {/* Comic "POW" effect */}
                    <motion.div
                      className="absolute top-0 right-0 font-pixel text-accent text-xs opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -20 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      ★
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
