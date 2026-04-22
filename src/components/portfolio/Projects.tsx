import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Bharat Legal AI",
    subtitle: "Multilingual Indian Law Assistant",
    description:
      "A full-stack, multilingual AI-powered legal assistant that answers queries about Indian law and the Constitution in 10+ languages. Features FastAPI backend with integrated NLP pipeline, Google Gemini AI for response generation, and voice-based interaction with Speech-to-Text and Text-to-Speech support.",
    tech: ["Python", "FastAPI", "Google Gemini", "NLP", "TTS/STT", "HTML/CSS/JS"],
    github: "https://github.com/sasivivek/indian-legal-bot",
    icon: "⚖️",
  },
  {
    title: "LexGraph AI",
    subtitle: "Graph-Powered Legal Intelligence",
    description:
      "An intelligent legal research system using Neo4j knowledge graphs to model the Companies Act 2013, amendments, and rules. Features AI-powered conversational queries with Gemini, graph-based traversal for traceable legal insights, and automatic PDF ingestion of 400+ legal sections.",
    tech: ["Python", "Neo4j", "Google Gemini", "Cypher", "FastAPI", "Graph ML"],
    github: "https://github.com/sasivivek/lexgraph-ai",
    icon: "🔗",
  },
  {
    title: "Wine Quality Prediction",
    subtitle: "Machine Learning Classification",
    description:
      "A machine learning project that predicts wine quality based on physicochemical properties. Implements multiple classification algorithms including Random Forest, SVM, and Gradient Boosting with feature engineering, cross-validation, and hyperparameter tuning for optimal accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/sasivivek/Wine-Quality-Prediction-Using-Machine-Learning",
    icon: "🍷",
  },
  {
    title: "Space Object Tracking",
    subtitle: "Orbital Debris & Satellite Tracker",
    description:
      "A tracking system for monitoring space objects including satellites and orbital debris. Features real-time data processing, trajectory prediction algorithms, and visualization of orbital paths for space situational awareness.",
    tech: ["Python", "Data Analysis", "Visualization", "NumPy", "Matplotlib", "API"],
    github: "https://github.com/sasivivek/Space-Object-Tracking",
    icon: "🛰️",
  },
];

const Projects = () => (
  <section id="projects" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">04 — Projects</p>
      <h2 className="section-title">
        Featured <span className="gradient-text">Work</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative rounded-xl overflow-hidden flex flex-col"
          style={{
            background: "linear-gradient(135deg, hsla(230, 22%, 14%, 0.8), hsla(230, 22%, 10%, 0.6))",
            border: "1px solid hsla(230, 20%, 25%, 0.5)",
          }}
        >
          {/* Purple gradient glow at top */}
          <div
            className="h-1.5 w-full"
            style={{
              background: "linear-gradient(90deg, hsl(270, 60%, 55%), hsl(174, 80%, 50%))",
            }}
          />

          <div className="p-6 flex flex-col flex-1">
            <span className="text-3xl mb-3">{p.icon}</span>
            <h3 className="text-lg font-bold text-gray-100 mb-1">{p.title}</h3>
            <p className="text-sm font-medium mb-3" style={{ color: "hsl(174, 80%, 50%)" }}>
              {p.subtitle}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} /> Source Code
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
