import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    title: "AI and the Art of Creativity",
    description: "Exploring the intersection of artificial intelligence and creative expression — how AI is reshaping art, design, and the creative process.",
    date: "2024",
    link: "https://www.linkedin.com/pulse/ai-art-creativity-kognitiv-club-y0qec",
    platform: "LinkedIn",
  },
  {
    title: "Strategies for Text Classification",
    description: "A deep dive into effective strategies and techniques for text classification using NLP and machine learning approaches.",
    date: "2024",
    link: "https://www.linkedin.com/pulse/strategies-text-classification-kognitiv-club",
    platform: "LinkedIn",
  },
];

const Blog = () => (
  <section id="blog" className="section-container">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="section-title"
    >
      Blog
    </motion.h2>
    <div className="space-y-4">
      {posts.map((post, i) => (
        <motion.a
          key={i}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="skill-card block group"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{post.description}</p>
              <span className="text-xs text-muted-foreground">{post.platform} · {post.date}</span>
            </div>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Blog;
