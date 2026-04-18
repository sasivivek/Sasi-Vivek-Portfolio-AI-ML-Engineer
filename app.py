from flask import Flask, render_template, jsonify
import json

app = Flask(__name__, static_folder='static', template_folder='templates')

# ─── Portfolio Data ───────────────────────────────────────────────────────────
PORTFOLIO = {
    "name": "Sasi Vivek Neelapala",
    "title": "AI / ML Engineer & Python Developer",
    "tagline": "Building intelligent systems that bridge the gap between cutting-edge AI and real-world impact.",
    "email": "sasivivekneelapala@gmail.com",
    "phone": "+91-XXXXXXXXXX",
    "location": "India",
    "linkedin": "https://www.linkedin.com/in/sasi-vivek-neelapala-637686226/",
    "github": "https://github.com/sasivivek",
    "about": (
        "I'm Sasi Vivek Neelapala — a passionate AI/ML Engineer and Python Developer "
        "with hands-on experience building production-grade intelligent systems. "
        "I specialize in Natural Language Processing, Deep Learning, Large Language Models, "
        "and crafting end-to-end web applications powered by AI. "
        "I thrive on turning complex problems into elegant, scalable solutions."
    ),
    "skills": {
        "AI & Machine Learning": [
            "Deep Learning", "Natural Language Processing", "Large Language Models (LLMs)",
            "Computer Vision", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face",
            "Prompt Engineering", "RAG Pipelines"
        ],
        "Backend & APIs": [
            "Python", "FastAPI", "Flask", "Node.js", "REST APIs",
            "WebSockets", "GraphQL"
        ],
        "Frontend & UI": [
            "HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS",
            "Responsive Design", "Framer Motion"
        ],
        "Data & Databases": [
            "Neo4j (Graph DB)", "MongoDB", "PostgreSQL", "MySQL",
            "Pandas", "NumPy", "Data Visualization"
        ],
        "DevOps & Tools": [
            "Git & GitHub", "Docker", "Vercel", "Linux",
            "CI/CD Pipelines", "VS Code", "Jupyter Notebooks"
        ],
    },
    "experience": [
        {
            "title": "AI Engineer",
            "company": "Human Resocia / Global IT Talent",
            "location": "Japan, Remote",
            "period": "July 2025 – March 2026",
            "description": (
                "Developed and deployed AI-powered solutions for global IT talent management. "
                "Worked on NLP pipelines, data analysis automation, and intelligent matching systems."
            ),
            "icon": "🤖",
        },
        {
            "title": "AI Technical Research Intern",
            "company": "LangCoach Ltd",
            "location": "London, Remote",
            "period": "June 2023 – September 2023",
            "description": (
                "Conducted research on AI-driven language coaching systems. "
                "Built prototypes leveraging NLP and LLMs for personalized learning experiences."
            ),
            "icon": "🔬",
        },
        {
            "title": "Machine Learning Intern",
            "company": "Skill Vertex",
            "location": "Remote",
            "period": "June 2022 – August 2022",
            "description": (
                "Completed a Machine Learning internship at Skill Vertex, developing a "
                "Heart Disease Prediction model using ML techniques."
            ),
            "icon": "💡",
        },
    ],
    "projects": [
        {
            "title": "Bharat Legal AI",
            "subtitle": "Multilingual Indian Law Assistant",
            "description": (
                "A full-stack, multilingual AI-powered legal assistant that answers queries about "
                "Indian law and the Constitution in 10+ languages. Features FastAPI backend with "
                "integrated NLP pipeline, Google Gemini AI for response generation, and voice-based "
                "interaction with Speech-to-Text and Text-to-Speech support."
            ),
            "tech": ["Python", "FastAPI", "Google Gemini", "NLP", "TTS/STT", "HTML/CSS/JS"],
            "github": "https://github.com/sasivivek/indian-legal-bot",
            "live": "",
            "icon": "⚖️",
        },
        {
            "title": "LexGraph AI",
            "subtitle": "Graph-Powered Legal Intelligence",
            "description": (
                "An intelligent legal research system using Neo4j knowledge graphs to model the "
                "Companies Act 2013, amendments, and rules. Features AI-powered conversational "
                "queries with Gemini, graph-based traversal for traceable legal insights, and "
                "automatic PDF ingestion of 400+ legal sections."
            ),
            "tech": ["Python", "Neo4j", "Google Gemini", "Cypher", "FastAPI", "Graph ML"],
            "github": "https://github.com/sasivivek/lexgraph-ai",
            "live": "",
            "icon": "🔗",
        },
        {
            "title": "Wine Quality Prediction",
            "subtitle": "Machine Learning Classification",
            "description": (
                "A machine learning project that predicts wine quality based on physicochemical properties. "
                "Implements multiple classification algorithms including Random Forest, SVM, and Gradient Boosting "
                "with feature engineering, cross-validation, and hyperparameter tuning for optimal accuracy."
            ),
            "tech": ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            "github": "https://github.com/sasivivek/wine-quality-prediction",
            "live": "",
            "icon": "🍷",
        },
        {
            "title": "Space Object Tracking",
            "subtitle": "Orbital Debris & Satellite Tracker",
            "description": (
                "A tracking system for monitoring space objects including satellites and orbital debris. "
                "Features real-time data processing, trajectory prediction algorithms, and visualization "
                "of orbital paths for space situational awareness."
            ),
            "tech": ["Python", "Data Analysis", "Visualization", "NumPy", "Matplotlib", "API"],
            "github": "https://github.com/sasivivek/space-object-tracking",
            "live": "",
            "icon": "🛰️",
        },
    ],
    "articles": [
        {
            "title": "AI and the Art of Creativity",
            "link": "https://www.linkedin.com/pulse/ai-art-creativity-kognitiv-club-y0qec",
            "description": (
                "Exploring the intersection of artificial intelligence and creative expression — "
                "how AI is reshaping art, design, and the creative process."
            ),
            "icon": "🎨",
        },
        {
            "title": "Strategies for Text Classification",
            "link": "https://www.linkedin.com/pulse/strategies-text-classification-kognitiv-club",
            "description": (
                "A deep dive into effective strategies and techniques for text classification "
                "using NLP and machine learning approaches."
            ),
            "icon": "📝",
        },
    ],
    "community": [
        {
            "role": "Founder & President",
            "organization": "Websico Club",
            "period": "August 2023 – September 2024",
            "description": (
                "Websico is a student-led organization in KL University focused on Web Development and AI, "
                "guiding members from fundamentals to advanced concepts. It combines theory with hands-on projects, "
                "covering front-end, back-end, APIs, and AI-driven applications. The initiative emphasizes building "
                "scalable, responsive solutions while fostering collaboration, continuous learning, and real-world "
                "problem-solving."
            ),
            "link": "https://klef.websico.in/",
            "icon": "🌐",
        },
        {
            "role": "Project Manager",
            "organization": "Kognitiv Club",
            "period": "August 2023 – September 2024",
            "description": (
                "The club emphasizes advancing artificial intelligence with pervasive predictive capabilities, "
                "adapting through iterative training. We prioritize projects, product development, and collaborative "
                "idea-sharing for a relaxed learning environment."
            ),
            "link": "https://kognitivclub.tech/",
            "icon": "🧠",
        },
    ],
    "education": [
        {
            "degree": "B.Tech in Artificial Intelligence & Data Science",
            "institution": "KL University",
            "year": "2021 – 2025",
            "details": "Focused on AI/ML, Deep Learning, Data Science, Algorithms, and Full-Stack Development.",
        },
    ],
    "certifications": [
        {
            "name": "Google TensorFlow Developer",
            "link": "https://drive.google.com/file/d/1mBhNVkY_sjEycAAkqEBWS9apJgMlWvfz/view?usp=sharing",
        },
        {
            "name": "Azure Fundamentals (AZ-900)",
            "link": "https://drive.google.com/file/d/18e7rU6AtiC_nE4iRtfPrITVm3AsO1FGm/view?usp=sharing",
        },
        {
            "name": "Robotic Process Automation (RPA)",
            "link": "https://drive.google.com/file/d/15WYZ87VZgXSeqhWxLAtWmA253rZdIZi3/view?usp=sharing",
        },
        {
            "name": "Oracle Cloud Infrastructure",
            "link": "https://drive.google.com/file/d/1DJk9QNSJlfrrtWcdtZiO7uFVi2UBdqKK/view?usp=sharing",
        },
        {
            "name": "IBM Python for Data Science",
            "link": "https://drive.google.com/file/d/1D_UfaxcqiJtzJI4kYVp7759NsjoSqFlq/view?usp=sharing",
        },
    ],
    "languages": [
        {"name": "Japanese", "level": "N4"},
        {"name": "English", "level": "Business Level"},
        {"name": "Telugu", "level": "Native"},
        {"name": "Hindi", "level": "Conversational"},
    ],
    "resumes": [
        {
            "label": "Resume",
            "display": "Resume",
            "link": "https://drive.google.com/file/d/15lLBZpj0bptjoM3fQJ9zCTc-xsrUFAbr/view?usp=sharing",
            "icon": "📄",
        },
        {
            "label": "履歴書",
            "display": "履歴書",
            "link": "https://drive.google.com/file/d/1jUOKvMwgUek0IMMMxbbfwOqA0VVPf4I3/view?usp=sharing",
            "icon": "🇯🇵",
        },
    ],
}


# ─── Routes ───────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    return render_template("index.html", data=PORTFOLIO)


@app.route("/api/portfolio")
def api_portfolio():
    return jsonify(PORTFOLIO)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
