import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const pubs = [
  {
    title: "An analysis of data leakage and generalizability in MRI based classification of Parkinson's Disease using explainable 2D CNNs",
    venue: "Digital Signal Processing, Volume 147, 2024",
    link: "https://doi.org/10.1016/j.dsp.2024.104407",
  },
  {
    title: "Unleashing the Power of Dynamic Mode Decomposition and Deep Learning for Rainfall Prediction in North-East India",
    venue: "ICCAIML 2024, Communications in Computer and Information Science",
    link: "https://arxiv.org/abs/2309.09336",
  },
  {
    title: "Improving Reinforcement Learning Agent Training using Text based Guidance: A study using Commands in Dravidian Languages",
    venue: "Third Workshop on Speech and Language Technologies for Dravidian Languages, Varna, Bulgaria",
    link: "https://aclanthology.org/2023.dravidianlangtech-1.5",
  },
  {
    title: "A Few-Shot Approach to Dysarthric Speech Intelligibility Level Classification Using Transformers",
    venue: "ICCCNT 2023, Delhi, India",
    link: "https://doi.org/10.1109/ICCCNT56998.2023.10308067",
  },
  {
    title: "Enhancing Knee Osteoarthritis severity level classification using diffusion augmented images",
    venue: "ICACECS 2023",
    link: "https://doi.org/10.2991/978-94-6463-314-6_27",
  },
  {
    title: "Face Mask Detection Using Transfer Learning and TensorRT Optimization",
    venue: "ICICC 2023, Lecture Notes in Networks and Systems, vol 703",
    link: "https://doi.org/10.1007/978-981-99-3315-0_63",
  },
];

const Publications = () => (
  <section id="publications" className="section-container">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="section-title"
    >
      Publications
    </motion.h2>
    <div className="space-y-4">
      {pubs.map((pub, i) => (
        <motion.a
          key={i}
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="skill-card block group"
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {pub.title}
              </h3>
              <p className="text-xs text-muted-foreground">{pub.venue}</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </motion.a>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-6 text-center"
    >
      <a
        href="https://scholar.google.co.uk/citations?user=RuldEOQAAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
      >
        <GScholarIcon /> View all on Google Scholar <ExternalLink size={14} />
      </a>
    </motion.div>
  </section>
);

const GScholarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
  </svg>
);

export default Publications;
