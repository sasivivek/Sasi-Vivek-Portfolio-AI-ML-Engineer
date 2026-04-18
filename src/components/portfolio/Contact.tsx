import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "sasivivekneelapala@gmail.com",
    href: "mailto:sasivivekneelapala@gmail.com",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "@sasivivek",
    href: "https://github.com/sasivivek",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "Sasi Vivek Neelapala",
    href: "https://www.linkedin.com/in/sasi-vivek-neelapala-637686226/",
  },
];

const Contact = () => (
  <section id="contact" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">09 — Contact</p>
      <h2 className="section-title">
        Let's <span className="gradient-text">Connect</span>
      </h2>
      <p className="text-center text-gray-400 max-w-lg mx-auto mb-12 text-base">
        I'm always excited to collaborate on innovative projects and explore new opportunities. Feel free to reach out!
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {contacts.map((c, i) => (
        <motion.a
          key={i}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card text-center group"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg"
            style={{
              background: "hsla(270, 60%, 55%, 0.15)",
              border: "1px solid hsla(270, 60%, 55%, 0.3)",
            }}
          >
            <c.icon
              size={24}
              className="transition-colors duration-300"
              style={{ color: "hsl(270, 60%, 55%)" }}
            />
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">{c.label}</p>
          <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {c.value}
          </p>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Contact;
