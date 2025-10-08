import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
}

// A robust desktop-only vertical-to-horizontal scroll translator
export function HorizontalScrollSection({
  children,
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 768
  );
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const rawX = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.55 });

  // Recalculate metrics
  const recalc = useCallback(() => {
    if (!isDesktop) return;
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const extraWidth = Math.max(trackWidth - viewportWidth, 0);
    setMaxTranslate(extraWidth);
    // Height = viewportWidth + extraWidth (so progress maps linearly)
    const heightPx = viewportWidth + extraWidth;
    setScrollHeight(Math.max(heightPx, window.innerHeight));
  }, [isDesktop]);

  // Detect breakpoint
  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Recompute sizes when desktop or children size changes
  useEffect(() => {
    if (!isDesktop) return;
    recalc();
    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, [isDesktop, recalc]);

  // Scroll listener mapping vertical progress to horizontal translate
  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const totalScrollable = (scrollHeight || viewportH) - viewportH;
      if (totalScrollable <= 0 || maxTranslate === 0) {
        rawX.set(0);
        return;
      }
      // Distance user has scrolled within the section
      const topOffset = rect.top; // when reaches 0, top hits viewport
      const distanceInto = Math.min(
        Math.max(viewportH - topOffset, 0),
        totalScrollable + viewportH
      );
      const progress = Math.min(
        1,
        Math.max(0, (distanceInto - viewportH) / totalScrollable)
      );
      rawX.set(-maxTranslate * progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, scrollHeight, maxTranslate, rawX]);

  // Mobile fallback: just render children normally
  if (!isDesktop) {
    return <div ref={trackRef}>{children}</div>;
  }

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: scrollHeight || "200vh" }}
      aria-roledescription="horizontal-scroll-section"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
