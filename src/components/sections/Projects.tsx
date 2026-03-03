import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";


const projects = [
  {
    name: "Travel Inspiration App",
    image: project1,
    tech: ["React", "Node.js", "Express"],
    styling: ["Tailwind CSS", "shadcn/ui"],
    live: "https://travelinspirationapp.netlify.app/",
    github: "https://github.com/ojaswinivolukula-code/Travel-Inspiration-Frontend",
    description: [
      "Personalized destination recommendations based on user travel preferences like adventure, culture & relaxation",
      "Interactive trip planner with multi-destination itinerary builder and route planning",
      "Budget estimator covering flights, accommodations, food & activities for cost comparison",
      "Destination filters by climate, season, cultural events and off-the-beaten-path spots",
      "Digital travel journal with photo uploads, trip notes and social sharing",
    ],
  },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
                {/* Description Points */}
                <ul className="mb-4 space-y-1.5">
                  {projects[activeIdx].description.map((point, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {projects[activeIdx].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-display px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Styling Tools */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[activeIdx].styling.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-display px-3 py-1 rounded-full bg-muted/30 text-muted-foreground border border-muted/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={projects[activeIdx].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={projects[activeIdx].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <GithubIcon /> GitHub
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