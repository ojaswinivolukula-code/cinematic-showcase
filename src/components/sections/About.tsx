import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Lightbulb, title: "Creative Thinker", desc: "Turning complex problems into elegant UIs" },
  { icon: Rocket, title: "Fast Learner", desc: "Adapting quickly to new technologies" },
];

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
            I'm a full stack developer with a passion for creating beautiful, functional
            web applications. With expertise spanning frontend and backend technologies,
            I bring ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300 group"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-all" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
