import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Technical Research Intern",
    company: "LangCoach Ltd",
    period: "June 2023 – September 2023",
    location: "London, Remote",
    description:
      "Conducted research on AI-driven language coaching systems. Built prototypes leveraging NLP and LLMs for personalized learning experiences.",
    icon: "🔬",
  },
  {
    title: "Machine Learning Intern",
    company: "Skill Vertex",
    period: "June 2022 – August 2022",
    location: "Remote",
    description:
      "Completed a Machine Learning internship at Skill Vertex, developing a Heart Disease Prediction model using ML techniques.",
    icon: "💡",
  },
];

const Experience = () => (
  <section id="experience" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">02 — Experience</p>
      <h2 className="section-title">
        Professional <span className="gradient-text">Journey</span>
      </h2>
    </motion.div>

    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-2.5 top-6 timeline-dot" />

            <div className="glass-card">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{exp.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-100">{exp.title}</h3>
                  <p className="text-sm font-semibold" style={{ color: "hsl(174, 80%, 50%)" }}>
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500 font-mono">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
