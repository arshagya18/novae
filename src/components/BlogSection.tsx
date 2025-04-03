
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Location-Based Advertising',
    excerpt: 'How GPS-enabled displays are transforming outdoor advertising and creating new possibilities for brands.',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/blog/future-location-advertising',
  },
  {
    title: 'Measuring ROI in Outdoor Digital Advertising',
    excerpt: 'New metrics and methodologies for quantifying the impact of digital out-of-home advertising campaigns.',
    date: 'May 22, 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/blog/measuring-roi-outdoor-advertising',
  },
  {
    title: 'Contextual Relevance: The Key to Ad Engagement',
    excerpt: 'Why showing the right message at the right time and place dramatically increases consumer response.',
    date: 'April 8, 2023',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    link: '/blog/contextual-relevance-ad-engagement',
  }
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block bg-novae-coral/10 text-novae-coral text-sm font-medium px-4 py-1 rounded-full mb-4">
              INSIGHTS
            </div>
            <h2 className="text-black">
              OUR BLOG
            </h2>
          </div>
          
          <Link 
            to="/blog" 
            className="mt-4 lg:mt-0 inline-flex items-center text-novae-coral hover:underline"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-novae-purple text-sm mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-black/70 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link 
                  to={post.link} 
                  className="inline-flex items-center text-novae-coral hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 bg-novae-coral/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-novae-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default BlogSection;
