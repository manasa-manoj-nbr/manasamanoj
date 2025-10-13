import { motion, useTransform, useScroll } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Trophy,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";

interface ExperienceItem {
  id: string;
  category: "work" | "achievements" | "education";
  title: string;
  organization: string;
  location?: string;
  timeline: string;
  description?: string;
  techStack?: string[];
  gpa?: string;
  award?: string;
  image?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "work-1",
    category: "work",
    title: "Front-End Developer",
    organization: "Kerala Police Cyberdome -Grapnel Team",
    location: "Kerala, India",
    timeline: "Oct 2025 - Present",
    description:
      "Developed a responsive front-end for the CSAM Takedown and Trace Dashboard, enabling victims to report content and analysts to monitor cases efficiently. Built “Trace an Object” features and Takedown workflows using public crowdsourcing platforms, helping analysts gather leads for ongoing cases and facilitating rapid content removal.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "Tanstack Query/Forms",
      "Tailwind CSS",
      "Rest APIs",
    ],
  },
  {
    id: "work-2",
    category: "work",
    title: "Student Researcher",
    organization: "Sarvam AI",
    location: "remote",
    timeline: "Aug 2025 - Present",
    description:
      "Working on creating a 1000-hour synthetic audio dataset for Malayalam, contributing to AI research and  model development. Responsible for ensuring high-quality, annotated data in collaboration with the team",
    techStack: ["IndicF5", "Python", "openai"],
  },
  {
    id: "work-3",
    category: "work",
    title: "AI Developer",
    organization: "EdQueries LLP",
    location: "remote",
    timeline: "May 2025 - Present",
    description:
      "Built and integrated an AI chatbot for EdQueries LMS, achieving a 98% success rate across 1,000+ queries. Optimized workflows to reduce response time by 65% and deployed contextual search, improving answer accuracy by 40%. Also worked on marketing automation, streamlining campaigns and enhancing lead engagement.",
    techStack: [
      "React JS",
      "n8n",
      "openai",
      "Upstash Redis",
      "brevo",
      "aisensy",
    ],
  },
  {
    id: "work-4",
    category: "work",
    title: "Research Intern",
    organization: "NIT Calicut",
    location: "Calicut, India",
    timeline: "May 2025 - July 2025",
    description:
      "Conducted research and prototyped a GenAI-based personalized learning platform, exploring adaptive educational delivery and competency frameworks. Investigated AI-driven workflows and evaluated system performance, achieving 94% response accuracy across test cases. Analyzed architectural bottlenecks and proposed optimizations, reducing response latency by 50% and enhancing platform efficiency.",
    techStack: ["React JS", "n8n", "gpt-4", "Moodle", "SCORM"],
  },
  {
    id: "hack-1",
    category: "achievements",
    title: "HacKP'25  Winner",
    organization: "Kerala Police Cyberdome",
    timeline: "Oct 2025",
    location: "Taj Vivanta Kochi, India",
    description:
      "Hac’KP 2025 is Kerala Police Cyberdome's flagship hackathon, organized in collaboration with Childlight - Global Child Safety Institute, focused on developing solutions to combat online harm and enhance child safety.",
    award: "🏆 Most Collaborative Person Award",
    image: "/award.JPG",
  },
  {
    id: "hack-2",
    category: "achievements",
    title: "Research Paper",
    organization: "Empower 2025, IIT Delhi",
    timeline: "Oct 2025",
    location: "Delhi, India",
    description: ` "GenAI-based Personalized Adaptive Learning Platform" , Research on integrating Generative AI into adaptive learning systems. Presented at the 8th Annual Assistive Technology Conference, contributing to discussions on inclusive technology solutions for individuals with disabilities`,
    image: "/certificate.jpg",
  },
  {
    id: "edu-1",
    category: "education",
    title: "BTech in Computer Sciene Engineering with Cyber Security",
    organization: "Indian Intitute of Information Technology (IIIT Kottayam)",
    location: "Kottayam, India",
    timeline: "2023 - 2027",
    gpa: "9.08",
  },
];

const categoryIcons = {
  work: Briefcase,
  achievements: Trophy,
  education: GraduationCap,
};

const categoryColors = {
  work: "bg-primary/10 text-primary border-primary",
  achievements: "bg-secondary/10 text-secondary border-secondary",
  education: "bg-accent/10 text-accent border-accent",
};

export const Experience = () => {
  // Group experiences by category
  const workExperiences = experiences.filter((e) => e.category === "work");
  const achievements = experiences.filter((e) => e.category === "achievements");
  const education = experiences.filter((e) => e.category === "education");

  return (
    <div
      id="experience"
      className="min-h-screen md:h-screen flex flex-col md:justify-center bg-muted/30 px-4 sm:px-6 md:px-16 md:pr-8 py-12 md:py-0"
    >
      {/* Header */}

      <h2 className="text-4xl md:text-6xl font-pixel mb-4 pixel-shadow text-foreground">
        Experience
      </h2>
      <div className="w-24 h-1 bg-accent mb-4 pixel-shadow" />
      <p className="text-lg font-retro text-muted-foreground">
        My journey through work, hackathons, and education 🚀
      </p>
      {/* Desktop horizontal layout */}
      <div className="hidden md:block pb-8">
        <div className="flex gap-8 px-4 mt-8">
          {/* Work Experience Section */}
          {workExperiences.length > 0 && (
            <>
              <div className="flex-shrink-0 flex items-center justify-center w-[200px] md:w-[250px]">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 pixel-shadow" />
                  <h3 className="font-pixel text-lg md:text-2xl text-foreground">
                    Work
                    <br />
                    Experience
                  </h3>
                </motion.div>
              </div>
              {workExperiences.map((exp, index) => {
                const Icon = categoryIcons[exp.category];

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    className="flex-shrink-0 w-[350px] md:w-[450px] group relative"
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:glow-primary">
                      {/* Animated gradient overlay */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="p-6 relative z-10">
                        {/* Category Badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <Badge
                            className={`${
                              categoryColors[exp.category]
                            } border-2 pixel-shadow font-pixel`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {exp.category.toUpperCase()}
                          </Badge>
                        </motion.div>

                        {/* Title and Organization */}
                        <h3 className="text-xl md:text-2xl font-pixel mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base md:text-lg font-retro font-semibold text-muted-foreground mb-2">
                          {exp.organization}
                        </p>

                        {/* Timeline and Location */}
                        <div className="flex flex-wrap gap-3 mb-4 text-sm font-retro text-muted-foreground">
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
                        <p className="text-sm font-retro mb-4 leading-relaxed text-foreground">
                          {exp.description}
                        </p>

                        {/* Tech Stack */}
                        {exp.techStack && exp.techStack.length > 0 && (
                          <div>
                            <h4 className="text-sm font-pixel font-semibold mb-2 text-muted-foreground">
                              Tech Stack:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech, i) => (
                                <motion.span
                                  key={i}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-retro font-medium border border-primary/20 pixel-shadow"
                                  whileHover={{
                                    scale: 1.1,
                                    backgroundColor:
                                      "hsl(var(--primary) / 0.2)",
                                    borderColor: "hsl(var(--primary))",
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
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                      />
                    </Card>
                  </motion.div>
                );
              })}
            </>
          )}

          {/* Achievements Section */}
          {achievements.length > 0 && (
            <>
              <div className="flex-shrink-0 flex items-center justify-center w-[200px] md:w-[250px]">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Trophy className="w-12 h-12 md:w-16 md:h-16 text-secondary mx-auto mb-3 pixel-shadow" />
                  <h3 className="font-pixel text-lg md:text-2xl text-foreground">
                    Achievements
                  </h3>
                </motion.div>
              </div>
              {achievements.map((exp, index) => {
                const Icon = categoryIcons[exp.category];

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    className="flex-shrink-0 w-[350px] md:w-[450px] group relative"
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-2 hover:border-secondary transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-secondary/20 group-hover:glow-secondary">
                      {/* Animated gradient overlay */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="p-6 relative z-10">
                        {/* Category Badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <Badge
                            className={`${
                              categoryColors[exp.category]
                            } border-2 pixel-shadow font-pixel`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {exp.category.toUpperCase()}
                          </Badge>
                        </motion.div>

                        {/* Title and Organization */}
                        <h3 className="text-xl md:text-2xl font-pixel mb-2 group-hover:text-secondary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base md:text-lg font-retro font-semibold text-muted-foreground mb-2">
                          {exp.organization}
                        </p>

                        {/* Timeline */}
                        <div className="flex flex-wrap gap-3 mb-4 text-sm font-retro text-muted-foreground">
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
                        <p className="text-sm font-retro mb-4 leading-relaxed text-foreground">
                          {exp.description}
                        </p>

                        {/* Award */}

                        {exp.award && (
                          <div className="relative mb-4">
                            <motion.div
                              className="p-3 bg-secondary/10 rounded-lg border-2 border-secondary pixel-shadow cursor-pointer inline-block relative group"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <p className="text-secondary font-pixel">
                                {exp.award}
                              </p>

                              {/* Popup Image */}
                              {exp.image && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                  whileHover={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 150,
                                  }}
                                  className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 hidden group-hover:block z-50"
                                >
                                  <div className="relative">
                                    <img
                                      src={exp.image}
                                      alt="Award Preview"
                                      className="w-[350px] rounded-xl shadow-2xl border-2 border-secondary"
                                    />
                                    {/* Optional small arrow under image */}
                                    <div className="absolute left-1/2 bottom-[-8px] -translate-x-1/2 w-3 h-3 bg-secondary rotate-45"></div>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                            <a
                              href="https://www.linkedin.com/feed/update/urn:li:activity:7380857991396487168/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs mt-2 text-secondary/80 hover:text-secondary underline text-center"
                            >
                              Read More ↗
                            </a>
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
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                      />
                    </Card>
                  </motion.div>
                );
              })}
            </>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <>
              <div className="flex-shrink-0 flex items-center justify-center w-[200px] md:w-[250px]">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-3 pixel-shadow" />
                  <h3 className="font-pixel text-lg md:text-2xl text-foreground">
                    Education
                  </h3>
                </motion.div>
              </div>
              {education.map((exp, index) => {
                const Icon = categoryIcons[exp.category];

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    className="flex-shrink-0 w-[350px] md:w-[450px] group relative"
                  >
                    <Card className="h-6/7 bg-card/50 backdrop-blur-sm border-2 hover:border-accent transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:glow-accent">
                      {/* Animated gradient overlay */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="p-6 relative z-10">
                        {/* Category Badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <Badge
                            className={`${
                              categoryColors[exp.category]
                            } border-2 pixel-shadow font-pixel`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {exp.category.toUpperCase()}
                          </Badge>
                        </motion.div>

                        {/* Title and Organization */}
                        <h3 className="text-xl md:text-2xl font-pixel mb-2 group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base md:text-lg font-retro font-semibold text-muted-foreground mb-2">
                          {exp.organization}
                        </p>

                        {/* Timeline and Location */}
                        <div className="flex flex-wrap gap-3 mb-4 text-sm font-retro text-muted-foreground">
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

                        {/* GPA */}
                        {exp.gpa && (
                          <motion.div
                            className="mb-4 p-3 bg-accent/10 rounded-lg border-2 border-accent pixel-shadow"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-accent font-pixel text-lg">
                              📊 GPA: {exp.gpa}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                      />
                    </Card>
                  </motion.div>
                );
              })}
            </>
          )}
        </div>
      </div>

      {/* Mobile vertical layout */}
      <div className="block md:hidden mt-10 space-y-14 overflow-visible">
        {/* Work Section Mobile */}
        {workExperiences.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-primary pixel-shadow" />
              <h3 className="font-pixel text-2xl text-foreground">
                Work Experience
              </h3>
            </div>
            <div className="flex flex-col gap-8">
              {workExperiences.map((exp, index) => {
                const Icon = categoryIcons[exp.category];
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    {/* Reuse exact card styling */}
                    <Card className="w-full h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:glow-primary">
                      <div className="p-6 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <Badge
                            className={`${
                              categoryColors[exp.category]
                            } border-2 pixel-shadow font-pixel`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {exp.category.toUpperCase()}
                          </Badge>
                        </motion.div>
                        <h3 className="text-xl font-pixel mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base font-retro font-semibold text-muted-foreground mb-2">
                          {exp.organization}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4 text-sm font-retro text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.timeline}
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          )}
                        </div>
                        <p className="text-sm font-retro mb-4 leading-relaxed text-foreground">
                          {exp.description}
                        </p>
                        {exp.techStack && exp.techStack.length > 0 && (
                          <div>
                            <h4 className="text-sm font-pixel font-semibold mb-2 text-muted-foreground">
                              Tech Stack:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-retro font-medium border border-primary/20 pixel-shadow"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
        {/* Achievements Section Mobile */}
        {achievements.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-secondary pixel-shadow" />
              <h3 className="font-pixel text-2xl text-foreground">
                Achievements
              </h3>
            </div>
            <div className="flex flex-col gap-8">
              {achievements.map((exp, index) => {
                const Icon = categoryIcons[exp.category];
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <Card className="w-full h-full bg-card/50 backdrop-blur-sm border-2 hover:border-secondary transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-secondary/20 group-hover:glow-secondary">
                      <div className="p-6 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <Badge
                            className={`${
                              categoryColors[exp.category]
                            } border-2 pixel-shadow font-pixel`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {exp.category.toUpperCase()}
                          </Badge>
                        </motion.div>
                        <h3 className="text-xl font-pixel mb-2 group-hover:text-secondary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base font-retro font-semibold text-muted-foreground mb-2">
                          {exp.organization}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4 text-sm font-retro text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.timeline}
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          )}
                        </div>
                        <p className="text-sm font-retro mb-4 leading-relaxed text-foreground">
                          {exp.description}
                        </p>
                        {exp.award && (
                          <div className="relative mb-2">
                            <div className="p-3 bg-secondary/10 rounded-lg border-2 border-secondary pixel-shadow inline-block">
                              <p className="text-secondary font-pixel">
                                {exp.award}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
        {/* Education Section Mobile */}
        {education.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-accent pixel-shadow" />
              <h3 className="font-pixel text-2xl text-foreground">Education</h3>
            </div>
            <div className="flex flex-col gap-8">
              {education.map((exp, index) => {
                const Icon = categoryIcons[exp.category];
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <Card className="w-full h-full bg-card/50 backdrop-blur-sm border-2 hover:border-accent transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:glow-accent">
                      <div className="p-6 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <Badge
                            className={`${
                              categoryColors[exp.category]
                            } border-2 pixel-shadow font-pixel`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {exp.category.toUpperCase()}
                          </Badge>
                        </motion.div>
                        <h3 className="text-xl font-pixel mb-2 group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base font-retro font-semibold text-muted-foreground mb-2">
                          {exp.organization}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4 text-sm font-retro text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.timeline}
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          )}
                        </div>
                        {exp.gpa && (
                          <div className="mb-2 p-3 bg-accent/10 rounded-lg border-2 border-accent pixel-shadow">
                            <p className="text-accent font-pixel text-lg">
                              📊 GPA: {exp.gpa}
                            </p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
