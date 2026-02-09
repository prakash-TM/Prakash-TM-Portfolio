import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "prakash.muthusamy456@gmail.com",
    href: "mailto:prakash.muthusamy456@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6374640349",
    href: "tel:+916374640349",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Prakash TM",
    href: "https://www.linkedin.com/in/prakash-tm-063072189/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "prakash-TM",
    href: "https://github.com/prakash-TM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <link.icon size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm sm:text-base text-foreground font-medium truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
