import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface Experience {
  role: string;
  period: string;
  company: string;
  projects: {
    name: string;
    description: string;
    techStack: string;
    domain: string;
    roleLabel: string;
  }[];
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    period: "May 2025 – Present",
    company: "CESIT Pvt Ltd, Chennai",
    projects: [
      {
        name: "DDI Gamification",
        description:
          "Responsive gamified web application for tracking performance, KPIs, achievements, and billing status.",
        techStack: "Next.js, Tailwind CSS",
        domain: "Operations",
        roleLabel: "Frontend Developer",
      },
      {
        name: "MediScanner",
        description:
          "AI-driven responsive web application for storing and managing medical records digitally.",
        techStack: "React, Redux, Recharts, TypeScript, FastAPI, Python, MongoDB Atlas, Gemini AI, JWT, ImageKit",
        domain: "Healthcare",
        roleLabel: "Full Stack Developer",
      },
      {
        name: "Arch and monArch",
        description:
          "Web app to monitor factory machines/sensors, manage workflows, and handle issue tickets.",
        techStack: "React + TypeScript, Node.js, Moleculer.js, Cube.js, MongoDB, SQL, Azure Services",
        domain: "Manufacturing",
        roleLabel: "Full Stack Developer",
      },
    ],
  },
  {
    role: "Software Technologist",
    period: "May 2024 – May 2025",
    company: "CESIT Pvt Ltd, Chennai",
    projects: [
      {
        name: "Metrics",
        description:
          "Web app to track organizational structure and workflows for a beverage company.",
        techStack: "React + TypeScript, CSS, React Flow",
        domain: "Manufacturing",
        roleLabel: "UI Developer",
      },
    ],
  },
  {
    role: "Associate Software Technologist",
    period: "Jan 2022 – May 2024",
    company: "CESIT Pvt Ltd, Chennai",
    projects: [
      {
        name: "Brainwave",
        description:
          "A web app for internal job referrals, webinar hosting, job postings, and recruitment workflows.",
        techStack: "Node.js, AWS, JWT, REST APIs",
        domain: "Human Resources",
        roleLabel: "Backend Developer",
      },
      {
        name: "mArch",
        description:
          "Mobile app for one of the leading water and beverage supply companies in the USA.",
        techStack: "Node.js, Moleculer.js, Cube.js, Azure Services",
        domain: "Manufacturing",
        roleLabel: "Backend Developer",
      },
    ],
  },
  {
    role: "Junior Software Technologist",
    period: "Jun 2021 – Jan 2022",
    company: "CESIT Pvt Ltd, Chennai",
    projects: [
      {
        name: "Websites Clone",
        description:
          "Created replicas of popular websites such as Flipkart, Twitter, Netflix, Hotstar, and Apple.",
        techStack: "ReactJS, Node.js, MongoDB, AWS",
        domain: "E-commerce / Media",
        roleLabel: "Full Stack Developer",
      },
      {
        name: "iTrac",
        description:
          "Created, enhanced, and modified over 300+ legacy US-based dental websites.",
        techStack: "HTML, CSS, SCSS, WordPress",
        domain: "Healthcare",
        roleLabel: "UI Developer (Lead)",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-1.5 w-[18px] h-[18px] rounded-full border-[3px] border-primary bg-background hidden md:block" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-5">
                  <Building2 size={16} className="text-primary" />
                  <span className="text-sm font-medium">{exp.company}</span>
                </div>

                <div className="grid gap-4">
                  {exp.projects.map((project) => (
                    <div
                      key={project.name}
                      className="glass-card p-5 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h4 className="font-semibold text-foreground">{project.name}</h4>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium w-fit">
                          {project.domain}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-xs text-muted-foreground font-medium">
                          {project.roleLabel} ·
                        </span>
                        <span className="text-xs font-mono text-muted-foreground/70">
                          {project.techStack}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
