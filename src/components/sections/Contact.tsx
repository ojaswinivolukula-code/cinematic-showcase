import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Phone, label: "9989068182", href: "tel:9989068182" },

  { 
    icon: Mail, 
    label: "ojaswini.volukula@gmail.com", 
    href: "mailto:ojaswini.volukula@gmail.com" 
  },

  { 
    icon: Linkedin, 
    label: "linkedin.com/in/ojaswini-volukula-3ab065327", 
    href: "https://www.linkedin.com/in/ojaswini-volukula-3ab065327" 
  },

  { 
    icon: Github, 
    label: "github.com/ojaswinivolukula-code", 
    href: "https://github.com/ojaswinivolukula-code" 
  },
];


const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's <span className="text-primary text-glow-subtle">connect</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300 group"
            >
              <item.icon className="w-5 h-5 text-primary group-hover:text-glow transition-all" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Ojaswini Volukula. Built with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
