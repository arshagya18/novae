
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-novae-purple to-novae-teal rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white relative">
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Advertising Strategy?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Contact our team today to discover how our GPS-enabled LED taxi-top displays 
                can help your brand connect with your audience more effectively.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-novae-purple px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Get Started Today <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
