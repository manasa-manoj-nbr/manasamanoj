import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Zap } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 pixel-shadow" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-8 gradient-card pixel-shadow hover:scale-105 transition-transform duration-300 border-2 border-primary/20">
              <div className="mb-4">
                <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-pixel mb-3 text-primary">Developer Journey</h3>
              </div>
              <p className="text-lg font-retro leading-relaxed text-foreground">
                Started coding at age [X], quickly fell in love with the art of building digital experiences. 
                Specialized in full-stack development with a passion for creating elegant, user-friendly applications 
                that solve real-world problems.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 gradient-card pixel-shadow hover:scale-105 transition-transform duration-300 border-2 border-secondary/20">
              <div className="mb-4">
                <div className="inline-block p-3 bg-secondary/10 rounded-lg mb-4">
                  <Brain className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-pixel mb-3 text-secondary">AI Enthusiast</h3>
              </div>
              <p className="text-lg font-retro leading-relaxed text-foreground">
                Fascinated by artificial intelligence and machine learning. Currently exploring neural networks, 
                natural language processing, and computer vision to build intelligent systems that push the 
                boundaries of what's possible.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Fun Fact Comic Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
          className="relative"
        >
          <Card className="p-8 bg-accent/10 border-4 border-accent pixel-shadow max-w-2xl mx-auto relative">
            {/* Comic bubble tail */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-accent" />
            
            <div className="flex items-start gap-4">
              <Zap className="w-10 h-10 text-accent flex-shrink-0 animate-glow-pulse" />
              <div>
                <h3 className="text-xl font-pixel mb-3 text-accent">Fun Fact!</h3>
                <p className="text-lg font-retro text-foreground">
                  When I'm not coding, you can find me [hobby/interest]. I believe the best code is written 
                  with a clear mind and creative inspiration from diverse experiences! 🎮✨
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-retro text-muted-foreground mb-4">
            Building with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 bg-primary/10 text-primary border-2 border-primary rounded-lg pixel-shadow font-retro text-lg hover:scale-110 transition-transform cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
