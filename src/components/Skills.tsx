import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Brain,
  Wrench,
  Globe,
  Rocket,
  Braces,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { FaReact,  FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaGlobe, FaGithub, FaFigma} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiThreedotjs,SiPostgresql ,SiMongodb,SiExpress,SiRedis, SiHuggingface,SiN8N, SiQiskit ,SiCanva,SiPostman} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiAiGenerate2 } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
// Tech stack icons mapping
const techIcons = {
  "React.js": FaReact,
  "TypeScript": SiTypescript,
  "JavaScript": DiJavascript1,
  "Tailwind CSS": SiTailwindcss ,
  "HTML": FaHtml5,
  "CSS3": FaCss3,
    "Bootstrap": FaBootstrap,
  "Three.JS": SiThreedotjs,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
    "REST APIs": FaGlobe,
  "Redis": SiRedis,
  "n8n": SiN8N,
  "GenAI": RiAiGenerate2,
  "HuggingFace": SiHuggingface,
  "Quantum Algorithms": Braces,
  "Qiskit": SiQiskit,
  "Cybersecurity Basics": MdOutlineSecurity,
  "Canva": SiCanva,
  "GitHub": FaGithub,
  "Figma": FaFigma,
  "VS Code": Code2,
  "Postman": SiPostman,
};

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
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "Bootstrap" },
      { name: "CSS3" },
      { name: "Three.js" },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "secondary",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "Redis" },
    ],
  },
  {
    title: "AI / Quantum",
    icon: Brain,
    color: "accent",
    skills: [
      { name: "n8n" },
      { name: "GenAI" },
      { name: "HuggingFace" },
      { name: "Quantum Algorithms" },
      { name: "Qiskit" },
      { name: "Cybersecurity Basics" },
    ],
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Canva" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];

export const Skills = () => {
  // Motion variants to coordinate parent hover -> child animations
  const itemVariants = {
    rest: { scale: 1, y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 10px 30px -10px rgba(59,130,246,0.45)",
      transition: { type: "spring", stiffness: 400, damping: 20 },
    },
  } as const;

  const gradientVariants = {
    rest: { x: "-100%" },
    hover: { x: "100%", transition: { duration: 0.6 } },
  } as const;

  const outlineIconVariants = {
    rest: { opacity: 1 },
    hover: { opacity: 0, transition: { duration: 0.35 } },
  } as const;

  const filledIconVariants = {
    rest: { opacity: 0, scale: 0.8, rotate: -180 },
    hover: {
      opacity: 1,
      scale: 1.05,
      rotate: 0,
      transition: { duration: 0.35, type: "spring", stiffness: 200 },
    },
  } as const;

  const textVariants = {
    rest: { x: 0 },
    hover: {
      x: 8,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  } as const;

  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-pixel mb-3 md:mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-16 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 pixel-shadow" />
          <p className="text-base md:text-xl font-retro text-muted-foreground max-w-2xl mx-auto px-4">
            Level up! Click to explore my tech stack 🎮
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" className="space-y-4" collapsible>
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;

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
                    <Card
                      className={`gradient-card pixel-shadow border-2 overflow-hidden transition-all duration-300 border-primary/20 hover:border-primary/50 data-[state=open]:border-primary data-[state=open]:glow-primary`}
                    >
                      <AccordionTrigger className="hover:no-underline px-4 md:px-6 py-4 md:py-5 group">
                        <div className="flex items-center gap-3 md:gap-4 w-full">
                          {/* Icon */}
                          <motion.div
                            className={`p-2 md:p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon
                              className={`w-6 h-6 md:w-8 md:h-8 text-${category.color}`}
                            />
                          </motion.div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-pixel text-foreground group-hover:text-primary transition-colors flex-1 text-left">
                            {category.title}
                          </h3>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent>
                        <motion.div
                          className="px-4 md:px-6 pb-4 md:pb-6 pt-2"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                            {category.skills.map((skill, skillIndex) => {
                              const SkillIcon =
                                techIcons[
                                  skill.name as keyof typeof techIcons
                                ] || Code2;
                              return (
                                <motion.div
                                  key={skill.name}
                                  initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    rotate: -10,
                                  }}
                                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                  transition={{
                                    delay: skillIndex * 0.08,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                  }}
                                  className="group/skill"
                                >
                                  {/* Parent controls hover state for children via variants */}
                                  <motion.div
                                    className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-background/50 border border-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
                                    variants={itemVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                  >
                                    {/* Gradient sweep effect on hover (driven by parent hover) */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                                      variants={gradientVariants}
                                    />

                                    {/* Icon with coordinated fill effect */}
                                    <div className="relative w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
                                      {/* Black and white outline version */}
                                      <motion.div
                                        className="absolute inset-0"
                                        variants={outlineIconVariants}
                                      >
                                        <SkillIcon
                                          className="w-full h-full text-foreground/30"
                                          strokeWidth={1}
                                          fill="none"
                                        />
                                      </motion.div>

                                      {/* Colored filled version */}
                                      <motion.div
                                        className="absolute inset-0"
                                        variants={filledIconVariants}
                                      >
                                        <SkillIcon
                                          className={`w-full h-full text-${category.color} drop-shadow-[0_0_8px_hsl(var(--${category.color}))]`}
                                          strokeWidth={2}
                                          fill="currentColor"
                                        />
                                      </motion.div>

                                    </div>

                                    <motion.span
                                      className="font-retro text-sm md:text-base lg:text-lg text-foreground transition-colors duration-300 relative z-10"
                                      variants={textVariants}
                                    >
                                      {skill.name}
                                    </motion.span>
                                  </motion.div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
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
          className="mt-8 md:mt-12 text-center"
        >
          <h3 className="text-xl md:text-2xl font-pixel mb-4 md:mb-6 text-foreground">
            Achievements Unlocked 🏆
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { icon: Code2, label: "180+ Commits", color: "primary" },
              {
                icon: Rocket,
                label: "HacKP Hackathon Winner",
                color: "secondary",
              },
              { icon: Brain, label: "Quantum Certification", color: "accent" },
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, -5, 0],
                    y: -10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card
                    className={`p-4 md:p-6 gradient-card pixel-shadow border-2 border-${achievement.color} hover:glow-${achievement.color} transition-all cursor-pointer relative overflow-hidden`}
                  >
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
                      <Icon
                        className={`w-10 h-10 md:w-12 md:h-12 text-${achievement.color} mx-auto mb-2 drop-shadow-[0_0_8px_hsl(var(--${achievement.color}))]`}
                      />
                    </motion.div>
                    <p className="font-retro text-sm md:text-base lg:text-lg text-foreground relative z-10">
                      {achievement.label}
                    </p>

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
};
