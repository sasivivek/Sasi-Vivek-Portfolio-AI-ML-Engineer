import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer
    className="border-t"
    style={{ borderColor: "hsla(230, 20%, 20%, 0.5)" }}
  >
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-bold text-lg tracking-tight"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "hsl(174, 80%, 50%)",
        }}
      >
        {"<SVN />"}
      </button>

      <p className="text-sm text-gray-500">
        Designed & Built by <span className="font-semibold text-gray-300">Sasi Vivek Neelapala</span>
      </p>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/sasivivek"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/sasi-vivek-neelapala-637686226/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
