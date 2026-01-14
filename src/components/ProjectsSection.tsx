import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, QrCode, Shirt, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Mark Me',
    subtitle: 'QR Attendance App',
    icon: QrCode,
    tech: ['Flutter', 'Firebase', 'Firestore'],
    description: 'QR-based attendance system with real-time Firebase Firestore integration. Secure, fast, and scalable solution for institutions.',
    highlights: ['Real-time sync', 'QR scanning', 'Admin dashboard'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'LaundryEase',
    subtitle: 'Laundry Management App',
    icon: Shirt,
    tech: ['Flutter', 'Hive', 'Local Storage'],
    description: 'Order creation & garment tracking app that optimizes daily operations for laundry businesses with clean UI and smooth workflow.',
    highlights: ['Order tracking', 'Garment management', 'Customer updates'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'For You',
    subtitle: 'Student Super App',
    icon: Users,
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    description: 'Hackathon project (Top 15 finalist) - Student networking, internships, lost & found, and alumni interaction platform.',
    highlights: ['Top 15 finalist', 'Student networking', 'Multi-feature'],
    color: 'from-emerald-500 to-teal-500',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/30" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

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
              Featured Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Production-ready applications that solve real-world problems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative h-full flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />

                  {/* Icon */}
                  <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} w-fit mb-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                    <Button variant="ghost" size="sm" className="flex-1 text-xs">
                      <Smartphone className="w-3.5 h-3.5 mr-1.5" />
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-muted-foreground mt-12"
          >
            More projects available on{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
