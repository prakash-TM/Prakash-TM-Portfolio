import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "HTML5", "CSS3", "SCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "SignalR", "Microservices"],
  },
  {
    title: "State & Data",
    skills: ["Redux Toolkit", "React Query", "MongoDB", "Cube.js", "SQL", "DynamoDB", "Cosmos DB"],
  },
  {
    title: "AI & ML",
    skills: ["Python","AI Agents", "RAG", "MCP", "ChromaDB"],
  },
  {
    title: "AWS",
    skills: ["Lambda", "API Gateway", "S3", "RDS", "EC2", "IAM", "CloudWatch", "DynamoDB"],
  },
  {
    title: "Azure",
    skills: ["Function Apps", "Logic Apps", "App Services", "Service Bus", "Notification Hub", "MSAL", "Cosmos DB"],
  },
  {
    title: "DevOps & Testing Tools",
    skills: ["CI/CD", "Git", "GitHub", "Bitbucket", "Jest", "Vitest", "Docker"],
  },
  {
    title: "Workflow",
    skills: ["Agile/Scrum", "Jira", "Azure DevOps", "Zoho"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Technologies I Work With
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 hover:border-primary/30 transition-colors group"
            >
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground transition-colors"
                  >
                    {skill}
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

export default SkillsSection;
