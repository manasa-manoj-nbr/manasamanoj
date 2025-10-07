import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
}

export function HorizontalScrollSection({
  children,
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Convert scroll progress to horizontal translation
  // scrollYProgress: 0 → 1 (scrolling down), 1 → 0 (scrolling up)
  // x: 0% → -66.666% (scrolling down), -66.666% → 0% (scrolling up)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={containerRef}
      className="relative"
      // Height = (number of screens of horizontal content) * 100vh
      // We have ~3 screens worth of content (Experience + Projects)
      style={{ height: "300vh" }}
    >
      {/* Sticky container that holds our horizontally-scrolling content */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {children}
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
}
