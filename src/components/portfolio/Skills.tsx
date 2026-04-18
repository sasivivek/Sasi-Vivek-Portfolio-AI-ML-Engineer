import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    items: [
      "Deep Learning", "Natural Language Processing", "Large Language Models (LLMs)",
      "Computer Vision", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face",
      "Prompt Engineering", "RAG Pipelines",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "WebSockets", "GraphQL"],
  },
  {
    title: "Frontend & UI",
    items: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design", "Framer Motion"],
  },
  {
    title: "Data & Databases",
    items: ["Neo4j (Graph DB)", "MongoDB", "PostgreSQL", "MySQL", "Pandas", "NumPy", "Data Visualization"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git & GitHub", "Docker", "Vercel", "Linux", "CI/CD Pipelines", "VS Code", "Jupyter Notebooks"],
  },
];

const Skills = () => (
  <section id="skills" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">03 — Skills</p>
      <h2 className="section-title">
        My <span className="gradient-text">Tech Stack</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass-card"
        >
          <h3 className="text-base font-bold text-gray-100 mb-4">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
