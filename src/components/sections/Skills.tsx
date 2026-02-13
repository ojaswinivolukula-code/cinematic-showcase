import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Vue.js", icon: "💚" },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express", icon: "⚡" },
      { name: "GraphQL", icon: "◈" },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="skills" className="py-32 relative z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            My Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Technologies I <span className="text-primary text-glow-subtle">work with</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <SkillRow
              key={cat.title}
              category={cat}
              index={catIdx}
              inView={inView}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillRow = ({
  category,
  index,
  inView,
  scrollProgress,
}: {
  category: (typeof categories)[0];
  index: number;
  inView: boolean;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const direction = index % 2 === 0 ? 1 : -1;
  const x = useTransform(scrollProgress, [0, 1], [0, direction * 30]);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="font-display text-2xl font-bold text-muted-foreground w-40 shrink-0"
      >
        {category.title}
      </motion.h3>

      <motion.div style={{ x }} className="flex flex-wrap gap-4">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + i * 0.08 }}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-glow hover:scale-105 transition-all duration-300 cursor-default group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              {skill.icon}
            </span>
            <span className="font-display text-sm font-medium text-foreground">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
