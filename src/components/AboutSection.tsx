import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, GraduationCap, Coffee } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Months Experience', value: '12+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Client Projects', value: '5+' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
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
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Crafting Mobile <span className="gradient-text">Experiences</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                
                {/* Main Card */}
                <div className="relative gradient-border p-8 rounded-2xl bg-card">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Jaipur, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Current Role</p>
                        <p className="font-medium">Mobile App Developer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Education</p>
                        <p className="font-medium">B.Tech CSE (2022-2026)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Coffee className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fun Fact</p>
                        <p className="font-medium">Coffee Enthusiast ☕</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">medium-level Mobile Application Developer</span> with 
                strong hands-on experience in building real-world client applications. Currently working at 
                <span className="text-primary font-medium"> IMI Glasses</span>, handling mobile app development and 
                smart device integrations.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey includes collaborating with backend and design teams, shipping production-ready apps, 
                and continuously improving my craft. I specialize in <span className="text-foreground font-medium">Flutter</span>, 
                with solid knowledge in <span className="text-foreground font-medium">Kotlin</span> and entry-level 
                <span className="text-foreground font-medium"> Swift</span> for iOS.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond mobile development, I have backend experience with <span className="text-foreground font-medium">Java 
                and Spring Boot</span>, enabling me to understand the full picture of application architecture.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
