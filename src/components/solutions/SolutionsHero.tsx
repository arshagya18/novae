
import { ReactNode } from "react";

const SolutionsHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-novae-purple to-novae-green">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">
            Our Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Advertising Technology for Maximum Impact
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Our suite of GPS-enabled LED display solutions combines cutting-edge technology with 
            data-driven insights to transform your outdoor advertising strategy.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          className="w-full h-24 text-white fill-current" 
          viewBox="0 0 1440 74" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1440,42.7L1440,74L0,74Z" />
        </svg>
      </div>
    </section>
  );
};

export default SolutionsHero;
