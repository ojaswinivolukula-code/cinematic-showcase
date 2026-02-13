import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground text-glow">
              Your Name
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-primary text-glow">Your Name</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-glow animate-glow-pulse">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
