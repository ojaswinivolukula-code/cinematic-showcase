import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    name: "Analytics Dashboard",
    image: project1,
    tech: ["React", "D3.js", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    name: "E-Commerce App",
    image: project2,
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    name: "AI Chat Platform",
    image: project3,
    tech: ["React", "OpenAI", "WebSocket"],
    live: "#",
    github: "#",
  },
  {
    name: "Social Network",
    image: project4,
    tech: ["Vue.js", "GraphQL", "MongoDB"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Selected Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Things I've <span className="text-primary text-glow-subtle">built</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left - Project List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/5 space-y-2"
          >
            {projects.map((p, i) => (
              <button
                key={p.name}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                  activeIdx === i
                    ? "bg-card border border-glow"
                    : "border border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <span
                  className={`font-display text-2xl font-bold transition-colors ${
                    activeIdx === i ? "text-primary text-glow-subtle" : "text-muted-foreground"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`font-display text-lg font-semibold transition-colors ${
                    activeIdx === i ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {p.name}
                </span>
                {activeIdx === i && (
                  <motion.div
                    layoutId="project-indicator"
                    className="ml-auto w-2 h-2 rounded-full bg-primary box-glow"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Right - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-3/5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border hover:border-glow transition-all duration-300 group">
              <div className="relative overflow-hidden aspect-video">
                {projects.map((p, i) => (
                  <motion.img
                    key={p.name}
                    src={p.image}
                    alt={p.name}
                    initial={false}
                    animate={{
                      opacity: activeIdx === i ? 1 : 0,
                      scale: activeIdx === i ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 glassmorphism p-6"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[activeIdx].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-display px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={projects[activeIdx].live}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={projects[activeIdx].github}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
