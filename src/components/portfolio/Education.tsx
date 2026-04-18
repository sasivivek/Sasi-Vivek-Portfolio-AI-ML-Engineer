import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Google TensorFlow Developer",
    link: "https://drive.google.com/file/d/1mBhNVkY_sjEycAAkqEBWS9apJgMlWvfz/view?usp=sharing",
  },
  {
    name: "Azure Fundamentals (AZ-900)",
    link: "https://drive.google.com/file/d/18e7rU6AtiC_nE4iRtfPrITVm3AsO1FGm/view?usp=sharing",
  },
  {
    name: "Robotic Process Automation (RPA)",
    link: "https://drive.google.com/file/d/15WYZ87VZgXSeqhWxLAtWmA253rZdIZi3/view?usp=sharing",
  },
  {
    name: "Oracle Cloud Infrastructure",
    link: "https://drive.google.com/file/d/1DJk9QNSJlfrrtWcdtZiO7uFVi2UBdqKK/view?usp=sharing",
  },
  {
    name: "IBM Python for Data Science",
    link: "https://drive.google.com/file/d/1D_UfaxcqiJtzJI4kYVp7759NsjoSqFlq/view?usp=sharing",
  },
];

const Education = () => (
  <section id="education" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">06 — Education & Certifications</p>
      <h2 className="section-title">
        Academic <span className="gradient-text">Journey</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card"
      >
        <div className="text-4xl mb-4">🎓</div>
        <h3 className="text-lg font-bold text-gray-100 mb-2">
          B.Tech in Artificial Intelligence & Data Science
        </h3>
        <p className="text-sm text-gray-400 mb-3">KL University</p>
        <span
          className="inline-block text-xs font-mono px-3 py-1.5 rounded-full"
          style={{
            border: "1px solid hsla(174, 80%, 50%, 0.3)",
            color: "hsl(174, 80%, 50%)",
          }}
        >
          2021 – 2025
        </span>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          Focused on AI/ML, Deep Learning, Data Science, Algorithms, and Full-Stack Development.
        </p>
      </motion.div>

      {/* Certifications Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="glass-card"
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-2xl">🏅</span>
          <h3 className="text-lg font-bold text-gray-100">Certifications</h3>
        </div>
        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <CheckCircle size={18} className="cert-check flex-shrink-0" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {cert.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
