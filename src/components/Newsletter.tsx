
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            STAY UPDATED
          </h2>
          <p className="text-black/70 mb-8">
            Subscribe to our newsletter for the latest news, industry insights, and exclusive Novae updates.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <p className="text-novae-coral font-medium">Thank you for subscribing!</p>
              <p className="text-black/70 text-sm mt-2">You'll receive our next newsletter in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-coral-gradient text-white font-medium px-6 py-3 rounded-r-lg transition-all hover:shadow-lg sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-black/50 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-coral-gradient opacity-30"></div>
    </section>
  );
};

export default Newsletter;
