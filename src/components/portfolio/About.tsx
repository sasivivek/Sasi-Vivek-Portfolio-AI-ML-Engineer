import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">01 — About Me</p>
      <h2 className="section-title">
        Crafting the <span className="gradient-text">Future</span> with AI
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
        {/* Left: Bio text */}
        <div className="text-gray-400 leading-relaxed text-base space-y-4">
          <p>
            I'm Sasi Vivek Neelapala — a passionate AI/ML Engineer and Full-Stack Developer with hands-on experience building production-grade intelligent systems. I specialize in Natural Language Processing, Deep Learning, Large Language Models, and crafting end-to-end web applications powered by AI. I thrive on turning complex problems into elegant, scalable solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { number: "5+", label: "PROJECTS BUILT" },
              { number: "10+", label: "TECHNOLOGIES" },
              { number: "3+", label: "CERTIFICATIONS" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card text-center py-5 px-3">
                <p className="text-2xl font-bold gradient-text">{stat.number}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Code snippet card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          {/* Mac-style title bar */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span className="ml-3 text-xs text-gray-500 font-mono">sasi_vivek.py</span>
          </div>

          {/* Code content */}
          <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
            <code>
              <span style={{ color: "hsl(270, 60%, 65%)" }}>class</span>{" "}
              <span style={{ color: "hsl(174, 80%, 55%)" }}>SasiVivekNeelapala</span>:
              {"\n"}{"  "}
              <span style={{ color: "hsl(270, 60%, 65%)" }}>def</span>{" "}
              <span style={{ color: "hsl(45, 90%, 65%)" }}>__init__</span>(self):
              {"\n"}{"    "}self.<span style={{ color: "hsl(210, 50%, 75%)" }}>name</span> ={" "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"Sasi Vivek"</span>
              {"\n"}{"    "}self.<span style={{ color: "hsl(210, 50%, 75%)" }}>role</span> ={" "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"AI/ML Engineer"</span>
              {"\n"}{"    "}self.<span style={{ color: "hsl(210, 50%, 75%)" }}>languages</span> = [
              {"\n"}{"      "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"Python"</span>,{" "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"JavaScript"</span>,
              {"\n"}{"      "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"TypeScript"</span>,{" "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"SQL"</span>
              {"\n"}{"    "}]
              {"\n"}{"    "}self.<span style={{ color: "hsl(210, 50%, 75%)" }}>passion</span> ={" "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"Building AI that matters"</span>
              {"\n\n"}{"  "}
              <span style={{ color: "hsl(270, 60%, 65%)" }}>def</span>{" "}
              <span style={{ color: "hsl(45, 90%, 65%)" }}>get_superpower</span>(self):
              {"\n"}{"    "}
              <span style={{ color: "hsl(270, 60%, 65%)" }}>return</span>{" "}
              <span style={{ color: "hsl(145, 65%, 55%)" }}>"Turning ideas → production AI"</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;
