import { motion, useTransform, useScroll } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Trophy, GraduationCap, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";

interface ExperienceItem {
  id: string;
  category: "work" | "hackathon" | "education";
  title: string;
  organization: string;
  location?: string;
  timeline: string;
  description: string;
  achievements?: string[];
  techStack?: string[];
  gpa?: string;
  award?: string;
  image?: string;
  certificate?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "work-1",
    category: "work",
    title: "Research Intern",
    organization: "Tech Research Lab",
    location: "Remote",
    timeline: "Jun 2024 - Present",
    description: "Conducting cutting-edge research in machine learning and computer vision, developing novel algorithms for image recognition.",
    achievements: [
      "Published 2 research papers",
      "Improved model accuracy by 23%",
      "Mentored 3 junior interns"
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "TensorFlow"],
    image: "/placeholder.svg"
  },
  {
    id: "work-2",
    category: "work",
    title: "AI Developer",
    organization: "Innovative AI Startup",
    location: "San Francisco, CA",
    timeline: "Jan 2024 - May 2024",
    description: "Built and deployed AI-powered applications serving 10K+ users, focusing on natural language processing and chatbot development.",
    achievements: [
      "Deployed 3 production AI models",
      "Reduced inference time by 40%",
      "Led team of 4 developers"
    ],
    techStack: ["Python", "LangChain", "FastAPI", "Docker", "AWS"],
    image: "/placeholder.svg"
  },
  {
    id: "hack-1",
    category: "hackathon",
    title: "HackPolice Winner",
    organization: "National Hackathon",
    timeline: "Mar 2024",
    description: "Won 1st place among 200+ teams by building an AI-powered crime prediction system using machine learning and geospatial data.",
    award: "🏆 1st Place Winner - $5,000 Prize",
    achievements: [
      "Beat 200+ competing teams",
      "Built full-stack app in 24 hours",
      "Secured funding for further development"
    ],
    techStack: ["React", "Python", "TensorFlow", "Google Maps API"],
    certificate: "/placeholder.svg",
    image: "/placeholder.svg"
  },
  {
    id: "edu-1",
    category: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Tech University",
    location: "Boston, MA",
    timeline: "2021 - 2025",
    description: "Focused on Artificial Intelligence and Software Engineering with hands-on projects and research opportunities.",
    gpa: "3.9/4.0",
    achievements: [
      "Dean's List all semesters",
      "President of CS Club",
      "Research Assistant in AI Lab"
    ],
    certificate: "/placeholder.svg",
    image: "/placeholder.svg"
  },
  {
    id: "edu-2",
    category: "education",
    title: "High School Diploma",
    organization: "Central High School",
    location: "New York, NY",
    timeline: "2017 - 2021",
    description: "Graduated with honors, specializing in STEM subjects and winning multiple science competitions.",
    gpa: "4.0/4.0",
    achievements: [
      "Valedictorian",
      "National Merit Scholar",
      "Science Olympiad Gold Medal"
    ],
    certificate: "/placeholder.svg"
  }
];

const categoryIcons = {
  work: Briefcase,
  hackathon: Trophy,
  education: GraduationCap
};

const categoryColors = {
  work: "bg-primary/10 text-primary border-primary",
  hackathon: "bg-secondary/10 text-secondary border-secondary",
  education: "bg-accent/10 text-accent border-accent"
};

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="experience" className="py-20 overflow-hidden relative" ref={containerRef}>
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 pixel-shadow">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Scroll to explore my journey →
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-6 px-4"
      >
        {experiences.map((exp, index) => {
          const Icon = categoryIcons[exp.category];
          
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1
              }}
              className="flex-shrink-0 w-[400px] md:w-[500px] group relative"
            >
              {/* Comic burst effect */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-6 -right-6 text-6xl z-10 pointer-events-none"
              >
                ⚡
              </motion.div>

              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Image/Certificate section */}
                {(exp.image || exp.certificate) && (
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={exp.image || exp.certificate}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    
                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-60"
                        animate={{
                          y: -100,
                          x: (i - 1) * 30
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut"
                        }}
                        style={{
                          left: `${20 + i * 30}%`,
                          bottom: 0
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="p-6 relative z-10">
                  {/* Category Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block mb-4"
                  >
                    <Badge className={`${categoryColors[exp.category]} border-2 pixel-shadow`}>
                      <Icon className="w-4 h-4 mr-1" />
                      {exp.category.toUpperCase()}
                    </Badge>
                  </motion.div>

                  {/* Title and Organization */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-2">
                    {exp.organization}
                  </p>

                  {/* Timeline and Location */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                    <motion.div 
                      className="flex items-center gap-1"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.timeline}
                    </motion.div>
                    {exp.location && (
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ x: 5 }}
                      >
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </motion.div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* GPA or Award */}
                  {exp.gpa && (
                    <motion.div
                      className="mb-4 p-3 bg-accent/10 rounded-lg border-2 border-accent"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-accent font-bold text-lg">📊 GPA: {exp.gpa}</p>
                    </motion.div>
                  )}
                   {exp.award && (
                    <motion.div
                      className="mb-4 p-3 bg-secondary/10 rounded-lg border-2 border-secondary"
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 hsl(var(--secondary) / 0)",
                          "0 0 20px 5px hsl(var(--secondary) / 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <p className="text-secondary font-bold">{exp.award}</p>
                    </motion.div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-primary">✓</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "hsl(var(--primary) / 0.2)",
                              borderColor: "hsl(var(--primary))"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                  }}
                />
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-8 text-muted-foreground"
      >
        <p className="text-sm">Keep scrolling to see more →</p>
      </motion.div>
    </section>
  );
};
