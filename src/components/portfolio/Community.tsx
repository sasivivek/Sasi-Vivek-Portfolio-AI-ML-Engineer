import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const activities = [
  {
    title: "Founder & President — Websico Club",
    period: "Aug 2023 – Sep 2024",
    description:
      "A student-led organization at KL University focused on Web Development and AI, guiding members from fundamentals to advanced concepts with hands-on projects.",
    link: "https://klef.websico.in/",
    icon: "🌐",
  },
  {
    title: "Project Manager — Kognitiv Club",
    period: "Aug 2023 – Sep 2024",
    description:
      "The club emphasizes advancing AI with pervasive predictive capabilities. Prioritized projects, product development, and collaborative idea-sharing.",
    link: "https://kognitivclub.tech/",
    icon: "🧠",
  },
];

const Community = () => (
  <section id="community" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">08 — Community</p>
      <h2 className="section-title">
        Community & <span className="gradient-text">Leadership</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
      {activities.map((act, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="glass-card"
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">{act.icon}</span>
            <div>
              <h3 className="font-bold text-gray-100">{act.title}</h3>
              <p className="text-xs font-mono text-gray-500 mt-1">{act.period}</p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">{act.description}</p>
              <a
                href={act.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs mt-3 font-medium hover:text-white transition-colors"
                style={{ color: "hsl(174, 80%, 50%)" }}
              >
                Visit Website <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Community;
