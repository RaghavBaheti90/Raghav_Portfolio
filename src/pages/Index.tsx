import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Raghav Baheti | Mobile Application Developer</title>
        <meta
          name="description"
          content="Raghav Baheti is a medium-level Mobile Application Developer specializing in Flutter, Kotlin, and Swift. View portfolio, projects, and get in touch."
        />
        <meta
          name="keywords"
          content="Raghav Baheti, Mobile Developer, Flutter Developer, Kotlin, Swift, App Developer, Jaipur, India"
        />
        <meta property="og:title" content="Raghav Baheti | Mobile Application Developer" />
        <meta
          property="og:description"
          content="Building beautiful, production-ready mobile applications with Flutter, Kotlin & Swift."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://raghavbaheti.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ImageCarousel />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
