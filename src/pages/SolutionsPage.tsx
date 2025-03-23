
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';

const SolutionsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <SolutionsHero />
        <SolutionsOverview />
        <SolutionsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
