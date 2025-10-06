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
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by machine learning that provides contextual responses and learns from user interactions.",
    tags: ["React", "Python", "TensorFlow", "NLP"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
    tags: ["React", "Firebase", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Forecast API",
    description: "RESTful API providing accurate weather forecasts using machine learning to improve prediction accuracy.",
    tags: ["Python", "FastAPI", "PostgreSQL", "ML"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator with customizable themes and easy content management.",
    tags: ["React", "Tailwind", "Vite"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Image Recognition Tool",
    description: "Computer vision application that identifies and classifies objects in images with high accuracy.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "React", "Python", "AI/ML", "Full Stack"];
  
  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    if (filter === "AI/ML") return project.tags.some(tag => ["TensorFlow", "ML", "NLP", "OpenCV"].includes(tag));
    if (filter === "Full Stack") return project.tags.some(tag => ["Node.js", "MongoDB", "Firebase", "PostgreSQL"].includes(tag));
    return project.tags.includes(filter);
  });

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                  {project.featured && (
                    <Badge className="w-fit mb-3 bg-accent text-accent-foreground font-retro pixel-shadow">
                      Featured
                    </Badge>
                  )}
                  
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
    </section>
  );
}
