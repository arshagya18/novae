
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Features from '@/components/Features';
import SolutionSection from '@/components/SolutionSection';
import Markets from '@/components/Markets';
import DriverCTA from '@/components/DriverCTA';
import BlogSection from '@/components/BlogSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.parallax');
      
      scrollElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight;
        
        if (elementPosition < scrollPosition) {
          const speed = (element as HTMLElement).dataset.speed || '0.1';
          const yPos = (scrollPosition - elementPosition) * parseFloat(speed);
          (element as HTMLElement).style.setProperty('--parallax-y', `${-yPos}px`);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Welcome />
        <Features />
        <SolutionSection />
        <Markets />
        <DriverCTA />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
