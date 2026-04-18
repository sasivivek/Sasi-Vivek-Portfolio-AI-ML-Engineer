import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "AI and the Art of Creativity",
    description:
      "Exploring the intersection of artificial intelligence and creative expression — how AI is reshaping art, design, and the creative process.",
    date: "2024",
    link: "https://www.linkedin.com/pulse/ai-art-creativity-kognitiv-club-y0qec",
    platform: "LinkedIn",
    icon: "🎨",
  },
  {
    title: "Strategies for Text Classification",
    description:
      "A deep dive into effective strategies and techniques for text classification using NLP and machine learning approaches.",
    date: "2024",
    link: "https://www.linkedin.com/pulse/strategies-text-classification-kognitiv-club",
    platform: "LinkedIn",
    icon: "📝",
  },
];

const Articles = () => (
  <section id="articles" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">05 — Articles</p>
      <h2 className="section-title">
        Published <span className="gradient-text">Writing</span>
      </h2>
    </motion.div>

    <div className="max-w-3xl mx-auto space-y-5">
      {articles.map((article, i) => (
        <motion.a
          key={i}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card block group"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-1">{article.icon}</span>
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-100 group-hover:text-white transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">{article.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-500">
                  {article.platform} · {article.date}
                </span>
                <ExternalLink
                  size={14}
                  className="text-gray-500 group-hover:text-white transition-colors"
                  style={{ color: "hsl(174, 80%, 50%)" }}
                />
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Articles;
