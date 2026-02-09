import { getExperienceInYears } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const stats = [
  { label: "Years Experience", value: getExperienceInYears(), icon: Calendar },
  { label: "Projects Delivered", value: "10+", icon: Briefcase },
  { label: "Based In", value: "Tamil Nadu, India", icon: MapPin },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Full Stack Developer with  {getExperienceInYears()} years of experience designing and delivering scalable,
              high-performance web applications and cloud-native solutions on AWS and Azure.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Proven experience in building AI-driven applications using AI agents, RAG, MCP, and
              ChromaDB, with strong expertise in end-to-end product development, performance
              optimization, and deploying production-ready systems in Agile environments.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              B.E. in Electronics and Communication Engineering (2017–2021). Currently working as a
              Software Engineer at CESIT Pvt Ltd, Chennai.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
