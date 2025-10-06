import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import pixelAvatar from "@/assets/pixel-avatar.png";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="w-40 h-40 mx-auto pixel-shadow rounded-xl overflow-hidden border-4 border-primary glow-primary">
              <img 
                src={pixelAvatar} 
                alt="Pixel Art Avatar" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-pixel mb-6 text-foreground leading-tight"
          >
            Your Name Here
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer 💻',
                2000,
                'AI Engineer 🤖',
                2000,
                'Tech Enthusiast ⚙️',
                2000,
                'Problem Solver 🧠',
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
            className="flex gap-4 justify-center mb-12"
          >
            <Button
              variant="outline"
              size="icon"
              className="pixel-shadow hover:glow-primary hover:scale-110 transition-all duration-300 border-2 border-primary"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
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
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="pixel-shadow text-lg font-retro hover:scale-105 transition-transform border-2 border-secondary text-secondary hover:glow-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce text-primary text-4xl">↓</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
