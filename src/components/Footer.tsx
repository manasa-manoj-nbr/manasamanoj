import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t-4 border-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--primary)) 10px, hsl(var(--primary)) 11px)',
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          {/* Scroll to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              onClick={scrollToTop}
              size="lg"
              className="pixel-shadow text-lg font-retro bg-secondary hover:bg-secondary/90 glow-secondary hover:scale-110 transition-all group rounded-full w-16 h-16 p-0"
            >
              <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-pixel mb-4 text-foreground">
              Let's Build Something Epic!
            </h3>
            <p className="text-lg font-retro text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a full-stack application, an AI-powered solution, or just want to chat about tech, 
              I'm always excited to collaborate on new projects.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 pixel-shadow" />

        {/* Copyright and Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="font-retro text-lg text-muted-foreground mb-2 flex items-center justify-center gap-2">
            Made with <Heart className="w-5 h-5 text-destructive animate-pulse" /> and lots of ☕
          </p>
          <p className="font-pixel text-sm text-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="font-retro text-sm text-muted-foreground mt-2">
            Powered by React + TypeScript + Vite ⚡
          </p>
        </motion.div>

        {/* Pixel Art Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
          className="mt-8 flex justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 1, 
                delay: i * 0.1, 
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="w-4 h-4 bg-primary pixel-shadow"
              style={{ 
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
