import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Wrench, Globe, Rocket } from "lucide-react";

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
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "secondary",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "accent",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "NLP", level: 70 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
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
            Level up! Here's my tech stack and proficiency levels 🎮
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="p-6 gradient-card pixel-shadow hover:glow-primary transition-all duration-300 border-2 border-primary/20 h-full relative overflow-hidden group">
                    {/* Comic-style burst effect on hover */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-20 h-20 opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl" />
                        <motion.div 
                          className="absolute inset-0 text-accent font-pixel text-xs flex items-center justify-center"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          ⚡
                        </motion.div>
                      </div>
                    </motion.div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-pixel text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.05,
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        className="group cursor-pointer"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <motion.span 
                            className="font-retro text-lg text-foreground group-hover:text-primary transition-colors duration-300"
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
                              repeatType: "reverse"
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Energy Bar Style Progress */}
                        <div className="relative h-6 bg-muted rounded-lg overflow-hidden border-2 border-primary/30 pixel-shadow group-hover:border-primary transition-colors duration-300">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                              duration: 1,
                              ease: "easeOut"
                            }}
                            className="absolute inset-y-0 left-0 gradient-hero group-hover:animate-pulse"
                            style={{
                              boxShadow: `0 0 10px hsl(var(--${category.color}) / 0.5)`,
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
                          
                          {/* Glowing particles on hover */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle at 50% 50%, hsl(var(--${category.color}) / 0.3) 0%, transparent 70%)`,
                              filter: "blur(8px)",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

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
              { icon: Code2, label: "100+ Projects", color: "primary" },
              { icon: Rocket, label: "5+ Years", color: "secondary" },
              { icon: Brain, label: "AI Certified", color: "accent" },
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
