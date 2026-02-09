import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "MediScanner",
    description:
      "AI-driven web application for digitizing and managing medical records with intelligent data extraction and analytics.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "MongoDB Atlas", "Gemini AI", "JWT"],
    features: [
      "AI-powered medical record scanning",
      "Interactive health analytics with Recharts",
      "Secure JWT authentication",
      "Cloud image storage via ImageKit",
    ],
  },
  {
    title: "DDI Gamification",
    description:
      "Gamified performance tracking platform with KPI dashboards, achievement systems, and real-time billing status.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Real-time KPI tracking dashboards",
      "Achievement and reward system",
      "Responsive design for all devices",
      "Billing status management",
    ],
  },
  {
    title: "Arch & monArch",
    description:
      "Industrial monitoring platform for factory machines and sensors with workflow management and issue tracking.",
    tech: ["React", "TypeScript", "Node.js", "Moleculer.js", "Cube.js", "MongoDB", "SQL", "Azure"],
    features: [
      "Real-time sensor data monitoring",
      "Workflow automation tools",
      "Issue ticket management",
      "Azure cloud integration",
    ],
  },
  {
    title: "Brainwave",
    description:
      "Enterprise HR platform for internal job referrals, webinar hosting, job postings, and recruitment workflows.",
    tech: ["Node.js", "AWS", "JWT", "REST APIs"],
    features: [
      "Job referral system",
      "Webinar scheduling and hosting",
      "Recruitment pipeline tracking",
      "AWS Lambda serverless architecture",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Featured Work
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glass-card p-6 sm:p-7 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers size={20} className="text-primary" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5 flex-1">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-muted-foreground/80 flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
