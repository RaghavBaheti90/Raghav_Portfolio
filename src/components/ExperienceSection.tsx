import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Mobile Application Developer',
    company: 'IMI Glasses',
    type: 'Full-time',
    location: 'On-site',
    period: 'Jan 2025 – Present',
    description: [
      'Working on real-world smart device & mobile app integrations',
      'Handling mobile app development, API integration, UI improvements',
      'Collaborating with cross-functional teams on innovative solutions',
    ],
    current: true,
  },
  {
    title: 'Flutter Development Intern',
    company: 'Aselea Network',
    type: 'Full-time',
    location: 'Jaipur',
    period: 'Jan 2025 – Present',
    description: [
      'Worked on multiple real-world client projects',
      'Developed production-ready Flutter applications',
      'Collaborated closely with backend and UI teams',
    ],
    current: true,
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Prodigal AI Technologies',
    type: 'Internship',
    location: 'Remote',
    period: 'Sep 2024 – Dec 2024',
    description: [
      'Built responsive UIs and integrated REST APIs',
      'Worked in a 5-member agile team environment',
      'Delivered a complete client-ready mobile application',
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world experience building production applications and collaborating with teams
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex md:items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent md:-translate-x-1/2 ring-4 ring-background">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover group">
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                        Current
                      </span>
                    )}

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
