import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import type { ReactNode } from "react";

interface Experience {
  role: string;
  period: string;
  company: string;
  projects: {
    name: string;
    description: ReactNode;
    techStack: string;
    domain: string;
    roleLabel: string;
  }[];
}

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    period: "May 2026 – Present",
    company: "CESIT Pvt Ltd, Chennai",
    projects: [
      {
        name: "Precheck - Web Relay Check In Check Out",
        description: (
          <>
            Developed a logistics management portal, reducing{" "}
            <span className="font-semibold text-foreground">
              driver wait time by 35%
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              improving gate processing efficiency by 30%
            </span>{" "}
            through automated queue management and Web Relay integration.
          </>
        ),
        techStack: "React, Node.js, Azure",
        domain: "Transport",
        roleLabel: "Full Stack Developer",
      },
    ],
  },
  {
    role: "Software Engineer",
    period: "May 2025 – May  2026",
    company: "CESIT Pvt Ltd, Chennai",
    projects: [
      {
        name: "DDI Gamification",
        description: (
          <>
            Developed a responsive gamified dashboard to track KPIs,
            achievements, and billing.{" "}
            <span className="font-semibold text-foreground">
              Improved user engagement by 25%{" "}
            </span>
            through interactive performance visualization.
          </>
        ),

        techStack: "Next.js, Tailwind CSS",
        domain: "Operations",
        roleLabel: "Frontend Developer",
      },
      {
        name: "MediScanner",
        description: (
          <>
            Developed an AI-driven healthcare platform,{" "}
            <span className="font-semibold text-foreground">
              reducing manual medical data entry by 60%
            </span>{" "}
            using Gemini AI while{" "}
            <span className="font-semibold text-foreground">
              improving patient health insight visualization by 35%.
            </span>
          </>
        ),
        techStack:
          "React, Redux, Recharts, TypeScript, FastAPI, Python, MongoDB Atlas, Gemini AI, Ollama, JWT, ImageKit",
        domain: "Healthcare",
        roleLabel: "Full Stack Developer",
      },
      {
        name: "Arch and monArch",
        description: (
          <>
            Engineered a real-time factory monitoring platform,{" "}
            <span className="font-semibold text-foreground">
              increasing operational efficiency by 40%{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              reducing issue resolution time by 30%{" "}
            </span>{" "}
            through analytics-driven dashboards and automated workflows.
          </>
        ),
        techStack:
          "React + TypeScript, Node.js, Moleculer.js, Cube.js, MongoDB, SQL, Azure Services",
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
        description: (
          <>
            Engineered a dynamic organizational mapping solution,{" "}
            <span className="font-semibold text-foreground">
              increasing user productivity by 40%{" "}
            </span>
            and{" "}
            <span className="font-semibold text-foreground">
              improving workflow visualization efficiency by 50%{" "}
            </span>{" "}
            with React Flow and TypeScript.
          </>
        ),
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
        description: (
          <>
            Built a cloud-based recruitment engine,{" "}
            <span className="font-semibold text-foreground">
              reducing job posting time by 50%{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              improving hiring process efficiency by 35%{" "}
            </span>{" "}
            using AWS services and REST APIs.
          </>
        ),
        techStack: "Node.js, AWS, JWT, REST APIs",
        domain: "Human Resources",
        roleLabel: "Backend Developer",
      },
      {
        name: "mArch",
        description: (
          <>
            Developed a high-performance logistics backend,{" "}
            <span className="font-semibold text-foreground">
              increasing system scalability by 45%{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              reducing service response time by 25%{" "}
            </span>
            using Moleculer.js microservices and SQL.
          </>
        ),
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
        description: (
          <>
            Developed feature-rich platform (Netflix, Twitter, Flipkart) clones,
            <span className="font-semibold text-foreground">
              improving frontend rendering performance by 35%{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              enhancing media streaming efficiency by 30%{" "}
            </span>{" "}
            using React, Redux, and AWS.
          </>
        ),
        techStack: "ReactJS, Node.js, MongoDB, AWS",
        domain: "E-commerce / Media",
        roleLabel: "Full Stack Developer",
      },
      {
        name: "iTrac",
        description: (
          <>
            Led the end-to-end development and optimization of 300+ legacy
            US-based dental platforms. Standardized UI components to{" "}
            <span className="font-semibold text-foreground">
              ensure 100% responsive design{" "}
            </span>{" "}
            and HIPAA-compliant accessibility.
          </>
        ),
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
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            Experience
          </p>
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
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    {exp.period}
                  </span>
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
                        <h4 className="font-semibold text-foreground">
                          {project.name}
                        </h4>
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
