import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Blip Journal : Blog Platform",
    description: "Developed a fully server-side rendered blogging platform using EJS, Express.js, and MongoDB, following the MVC pattern. Implemented user authentication, post/comment creation, and role-based access (only authors can edit/delete)",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/manasa-manoj-nbr/blip-journal",
  },
  {
    id: 2,
    title: "Eclypse:E-Commerce Platform",
    description: "Developed a responsive fashion storefront using React, Tailwind CSS, and Context API for cart and theme management. Implemented dynamic product galleries, testimonials, and hover-based transitions with reusable components.",
    tags: ["ReactJS", "Tailwind", "TypeScript", "Context API"],
    demoUrl: "https://ecommerce-mu-ten-32.vercel.app/",
    githubUrl: "https://github.com/manasa-manoj-nbr/ecommerce",
  },
  {
    id: 3,
    title: "AI Chat Assistant - VS Code Extension",
    description: "Built a VS Code extension with a React-based WebView chat assistant that uses GPT-4 for codegeneration and refactoring. Added support for @filename mentions to include live workspace context and attached files intochat prompts",
    tags: ["TypeScript", "ReactJS", "OpenAI API", "VS Code API"],
    githubUrl: "https://github.com/manasa-manoj-nbr/ai-assistant-vscode",
  },
  {
    id: 4,
    title: "3D Solar System Simulation",
    description: "Developed a fully interactive 3D solar system with orbiting planets, real-time speed controls, tooltips, and responsive UI using Three.js and modern JS.",
    tags: ["Three.js", "WebGL", "JavaScript"],
    demoUrl: "https://solar-system-3d-xi.vercel.app/",
    githubUrl: "https://github.com/manasa-manoj-nbr/solar-system-3d",
  },
  {
    id: 5,
    title: "Unitrader: A trading platform for college",
    description: "Unitrader-SSE is a real-time auction platform built using Next.js and Server-Sent Events (SSE), designed specifically for a college community. ",
    tags: ["NextJS", "Tailwind", "CosmicJS"],
    demoUrl: "",
    githubUrl: "https://github.com/manasa-manoj-nbr/Unitrader-SSE/tree/main",
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "ReactJS", "TypeScript", "MongoDB", "Tailwind"];
  
  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    if (filter === "AI/ML") return project.tags.some(tag => ["TensorFlow", "ML", "NLP", "OpenCV"].includes(tag));
    if (filter === "Full Stack") return project.tags.some(tag => ["Node.js", "MongoDB", "Firebase", "PostgreSQL"].includes(tag));
    return project.tags.includes(filter);
  });

  return (
    <div id="projects" className="w-full bg-muted/30">
      <div className="container mx-auto max-w-7xl py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-4 text-foreground">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 pixel-shadow" />
          <p className="text-xl font-retro text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, AI, and problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`pixel-shadow font-retro text-lg transition-all duration-300 ${
                filter === category
                  ? "bg-secondary hover:bg-secondary/90 glow-secondary scale-105"
                  : "hover:scale-105 border-2"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full gradient-card pixel-shadow hover:glow-primary transition-all duration-300 border-2 border-primary/20 overflow-hidden group">
                <div className="p-6 h-full flex flex-col">
            
                  
                  <h3 className="text-xl font-pixel mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-base font-retro text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm font-retro rounded border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 font-retro hover:glow-primary transition-all border-2"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 font-retro hover:glow-primary transition-all border-2"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
