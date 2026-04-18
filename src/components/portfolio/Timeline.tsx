import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const entries = [
  {
    type: "work" as const,
    title: "Software Engineer Intern – ML Infrastructure",
    org: "Waymo | Google",
    period: "Jun 2025 – Sep 2025",
    location: "Mountain View, CA",
    description: "Developed model surgery toolkit for Orbax checkpoints. Extended toolkit for model conversion between Waymo and Google DeepMind training infrastructure. Profiled and benchmarked training pipelines.",
  },
  {
    type: "edu" as const,
    title: "Master of Science in Data Science",
    org: "University of California San Diego",
    period: "Sep 2024 – Jun 2026",
    location: "San Diego, CA",
    description: "Master of Science in Data Science at UC San Diego, focusing on machine learning, deep learning, and large-scale data systems.",
  },
  {
    type: "work" as const,
    title: "Machine Learning Engineer Intern",
    org: "Tech Profuse Pvt Ltd",
    period: "Jan 2024 – Jun 2024",
    location: "Hyderabad, India",
    description: "Built unstructured data extraction API with Gemini processing 50k documents. Fine-tuned LLAVA multimodal LLM with distributed training. Engineered RAG-based support system improving throughput by 130%.",
  },
  {
    type: "edu" as const,
    title: "B.Tech in Computer Science Engineering (AI)",
    org: "Amrita Vishwa Vidyapeetham",
    period: "2020 – 2024",
    location: "Coimbatore, India",
    description: "Specialization in Artificial Intelligence. Focus on machine learning, deep learning, and data science research.",
  },
];

const Timeline = () => (
  <section id="timeline" className="section-alt-bg">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Timeline
      </motion.h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[17px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute left-2.5 top-1 timeline-dot" />

              <div className="flex items-center gap-2 mb-1">
                {e.type === "work" ? (
                  <Briefcase size={14} className="text-primary" />
                ) : (
                  <GraduationCap size={14} className="text-primary" />
                )}
                <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
              </div>
              <p className="text-xs font-medium text-primary mb-0.5">{e.org}</p>
              <p className="text-xs text-muted-foreground mb-1">
                {e.period} · {e.location}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
