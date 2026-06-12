import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";




const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Passionate about building<br />
            <span className="text-primary text-glow-subtle">digital experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
Aspiring Data Analyst and Full Stack Web Developer with foundational knowledge in Python, SQL, React, and Node.js. Familiar with building responsive web applications, working with databases, and problem-solving using basic data structures and algorithms. Eager to apply analytical and technical skills in entry-level IT and data-focused roles while continuously learning and gaining hands-on experience.          </p>
        </motion.div>

      
      </div>
    </section>
  );
};

export default About;
