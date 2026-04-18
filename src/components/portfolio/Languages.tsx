import { motion } from "framer-motion";

const languages = [
  { name: "Japanese", level: "N4", flag: "🇯🇵", proficiency: "Conversational" },
  { name: "English", level: "Business Level", flag: "🇬🇧", proficiency: "Professional Working" },
  { name: "Telugu", level: "Native", flag: "🇮🇳", proficiency: "Mother Tongue" },
  { name: "Hindi", level: "Conversational", flag: "🇮🇳", proficiency: "Daily Communication" },
];

const Languages = () => (
  <section id="languages" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">07 — Languages</p>
      <h2 className="section-title">
        Language <span className="gradient-text">Proficiency</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {languages.map((lang, i) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card text-center"
        >
          <span className="text-4xl mb-3 block">{lang.flag}</span>
          <h3 className="text-base font-bold text-gray-100 mb-1">{lang.name}</h3>
          <p
            className="text-sm font-semibold mb-1"
            style={{ color: "hsl(174, 80%, 50%)" }}
          >
            {lang.level}
          </p>
          <p className="text-xs text-gray-500">{lang.proficiency}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Languages;
