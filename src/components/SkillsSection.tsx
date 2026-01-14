import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Server, Database, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-violet-500 to-purple-500',
    skills: ['Flutter', 'Kotlin', 'Swift', 'GetX'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: ['Firebase Firestore', 'Hive', 'SQLite'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-orange-500 to-amber-500',
    skills: ['Git & GitHub', 'VS Code', 'Android Studio', 'Postman'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/30" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit that enables me to build complete, production-ready mobile applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold mb-4">{category.title}</h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h4 className="font-display text-lg font-semibold mb-4 text-center">Certifications</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['Azure Security Engineer', 'Azure Data Scientist', 'Azure Administrator'].map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
