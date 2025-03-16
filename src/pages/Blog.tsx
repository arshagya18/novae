
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Outdoor Advertising: GPS-Enabled Displays',
      excerpt: 'Discover how location-based technology is transforming the outdoor advertising landscape, creating more targeted and effective campaigns.',
      category: 'Industry Insights',
      date: 'May 15, 2023',
      author: 'Sarah Johnson',
      imageBg: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'How Real-Time Analytics Are Changing Advertising Measurement',
      excerpt: 'Learn how advanced analytics and real-time data are providing unprecedented insights into outdoor advertising campaign performance.',
      category: 'Technology',
      date: 'June 3, 2023',
      author: 'Michael Chen',
      imageBg: 'bg-teal-500'
    },
    {
      id: 3,
      title: 'Case Study: How Brand X Increased Engagement by 78%',
      excerpt: 'A detailed look at how Brand X utilized our GPS-enabled taxi-top advertising to dramatically improve customer engagement and conversion rates.',
      category: 'Case Studies',
      date: 'June 21, 2023',
      author: 'Emma Davis',
      imageBg: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Understanding Location-Based Marketing: A Comprehensive Guide',
      excerpt: 'Everything you need to know about location-based marketing strategies and how they can enhance your advertising effectiveness.',
      category: 'Guides',
      date: 'July 8, 2023',
      author: 'James Wilson',
      imageBg: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Integrating Digital and Physical Advertising Channels',
      excerpt: 'Strategies for creating cohesive brand experiences across both digital platforms and physical advertising displays.',
      category: 'Strategy',
      date: 'July 25, 2023',
      author: 'Olivia Martinez',
      imageBg: 'bg-pink-500'
    },
    {
      id: 6,
      title: 'Environmental Impact: Sustainable Practices in Outdoor Advertising',
      excerpt: 'How the industry is evolving to embrace more environmentally friendly approaches to outdoor advertising technology.',
      category: 'Sustainability',
      date: 'August 12, 2023',
      author: 'Daniel Park',
      imageBg: 'bg-green-500'
    }
  ];

  const categories = [
    'All Categories',
    'Industry Insights',
    'Technology',
    'Case Studies',
    'Guides',
    'Strategy',
    'Sustainability'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-novae-blue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">
                Our Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights & Updates from the World of Smart Advertising
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Discover the latest trends, strategies, and success stories in the evolving 
                landscape of location-based outdoor advertising.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-3 px-5 pl-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                    ? 'bg-novae-teal text-white'
                    : 'bg-gray-100 text-novae-gray hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className={`aspect-video ${post.imageBg} flex items-center justify-center text-white`}>
                    <span className="font-medium">Blog Image Placeholder</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium bg-novae-teal/10 text-novae-teal px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-novae-gray text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-novae-blue mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-novae-teal transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-novae-gray mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-novae-gray text-sm">
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-novae-teal font-medium text-sm flex items-center hover:underline"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="p-2 rounded-md bg-gray-100 text-novae-gray hover:bg-gray-200 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md bg-novae-blue text-white font-medium">1</button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-novae-gray hover:bg-gray-200 transition-colors">2</button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-novae-gray hover:bg-gray-200 transition-colors">3</button>
                <button className="p-2 rounded-md bg-gray-100 text-novae-gray hover:bg-gray-200 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-novae-teal/10 text-novae-teal text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                Stay Updated
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-novae-blue mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-novae-gray text-lg mb-8">
                Get the latest insights and updates from the world of outdoor advertising 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-novae-teal/50 focus:border-novae-teal transition-colors w-full"
                />
                <button className="px-6 py-3 bg-novae-teal text-white rounded-lg font-medium hover:bg-novae-teal/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
