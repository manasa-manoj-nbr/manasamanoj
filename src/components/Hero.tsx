import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import pixelAvatar from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="container relative z-10 px-4 pb-8">
        <div className="max-w-4xl mx-auto text-center md:flex  md:flex-row md:gap-8 md:justify-between">
          <div className="md:flex md:flex-1">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1, bounce: 0.5 }}
              className="mb-8 inline-block"
            >
              <div className="w-48 h-48 md:w-80 md:h-full mx-auto pixel-shadow rounded-xl overflow-hidden border-4 border-primary glow-primary">
                <img
                  src={pixelAvatar}
                  alt="Pixel Art Avatar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>

          <div className="md:flex md:flex-1 md:flex-col md:justify-center">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-pixel mb-2 text-foreground leading-tight"
            >
              Manasa Manoj
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className=" h-20 flex items-center justify-center"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer 💻",
                  2000,
                  "AI Engineer",
                  2000,
                  "Quantum Computing",
                  2000,
                  "Problem Solver",
                  2000,
                  "Automation Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl md:text-2xl lg:text-3xl font-retro text-primary"
                repeat={Infinity}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center mb-6"
            >
              <Button
                variant="outline"
                size="icon"
                className="pixel-shadow hover:glow-primary hover:scale-110 transition-all duration-300 border-2 border-primary"
                asChild
              >
                <a
                  href="https://github.com/manasa-manoj-nbr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="pixel-shadow hover:glow-primary hover:scale-110 transition-all duration-300 border-2 border-primary"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/manasa-manoj-294220310/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="pixel-shadow hover:glow-primary hover:scale-110 transition-all duration-300 border-2 border-primary"
                asChild
              >
                <a
                  href="https://www.instagram.com/maanxsaa.manojj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="pixel-shadow text-lg font-retro hover:scale-105 transition-transform bg-primary hover:bg-primary/90 glow-primary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="pixel-shadow text-lg font-retro hover:scale-105 transition-transform border-2 border-secondary text-secondary hover:glow-secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="pixel-shadow text-lg font-retro hover:scale-105 transition-transform border-2 border-accent text-accent hover:glow-accent"
                asChild
              >
                <a href="/resume.pdf" download="Manasa_Manoj_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2"
            >
              <div className="animate-bounce text-primary text-4xl">↓</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
