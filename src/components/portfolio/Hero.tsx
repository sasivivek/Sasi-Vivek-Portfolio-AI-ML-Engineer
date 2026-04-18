import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/sasivivek", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sasi-vivek-neelapala-637686226/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sasivivekneelapala@gmail.com", label: "Email" },
];

const Hero = () => (
  <section className="hero-bg min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
    {/* Animated background particles/glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsla(270, 60%, 50%, 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsla(174, 80%, 50%, 0.2) 0%, transparent 70%)",
        }}
      />
    </div>

    <div className="text-center px-6 max-w-3xl relative z-10">
      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
        style={{
          background: "hsla(230, 20%, 18%, 0.8)",
          border: "1px solid hsla(145, 63%, 49%, 0.3)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm text-gray-300">Available for opportunities</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Hi, I'm{" "}
        <span className="gradient-text">Sasi Vivek Neelapala</span>
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 mb-4 font-medium"
      >
        AI & ML Engineer & Python Developer
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-sm md:text-base text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed"
      >
        Building intelligent systems that bridge the gap between cutting-edge AI and real-world impact.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-10"
      >
        <a href="#projects" className="btn-gradient inline-flex items-center gap-2">
          View My Work <ArrowUpRight size={16} />
        </a>
        <a href="#contact" className="btn-outline inline-flex items-center gap-2">
          Get in Touch
        </a>
        <a
          href="https://drive.google.com/file/d/15lLBZpj0bptjoM3fQJ9zCTc-xsrUFAbr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume inline-flex items-center gap-2"
        >
          <FileText size={16} /> Resume
        </a>
        <a
          href="https://drive.google.com/file/d/1jUOKvMwgUek0IMMMxbbfwOqA0VVPf4I3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume inline-flex items-center gap-2"
        >
          📄 履歴書
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex items-center justify-center gap-4 mb-10"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
            <Icon size={20} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="scroll-indicator" />
        <span className="text-xs uppercase tracking-[0.25em] text-gray-500 font-mono">Scroll to Explore</span>
      </motion.div>
    </div>
  </section>
);

export default Hero;
