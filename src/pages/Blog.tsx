
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const BlogPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = {
    id: 1,
    title: "The Future of Smart Advertising: GPS-Enabled Displays",
    excerpt: "Discover how GPS-enabled displays are revolutionizing outdoor advertising and providing unprecedented targeting capabilities for brands.",
    date: "May 15, 2023",
    author: "John Doe",
    category: "Technology",
    imageUrl: "/placeholder.svg"
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 Ways Data Analytics Is Transforming Outdoor Advertising",
      excerpt: "Learn how modern data analytics tools are helping advertisers measure campaign performance and optimize for better results.",
      date: "April 28, 2023",
      author: "Jane Smith",
      category: "Data",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Location-Based Marketing: Right Place, Right Time",
      excerpt: "How targeting specific locations and times of day can dramatically improve advertising effectiveness and ROI.",
      date: "April 15, 2023",
      author: "Michael Brown",
      category: "Marketing",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Environmental Impact of Digital vs. Traditional Advertising",
      excerpt: "A comparative analysis of the environmental footprint of digital displays versus traditional billboards and print media.",
      date: "March 22, 2023",
      author: "Sarah Johnson",
      category: "Sustainability",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Case Study: How Brand X Increased Engagement by 300%",
      excerpt: "A detailed look at how a leading consumer brand utilized taxi-top advertising to dramatically boost customer engagement.",
      date: "March 10, 2023",
      author: "David Wilson",
      category: "Case Study",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "The Psychology of Mobile Advertising: Capturing Attention on the Go",
      excerpt: "Understanding how movement affects attention and how to design mobile advertisements that stand out.",
      date: "February 28, 2023",
      author: "Emily Parker",
      category: "Design",
      imageUrl: "/placeholder.svg"
    }
  ];

  const categories = [
    "All", "Technology", "Marketing", "Data", "Design", "Sustainability", "Case Study"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-novae-purple to-novae-green text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-white/80">
                Insights and updates from the world of smart, location-based advertising
              </p>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-full h-full bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
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

        {/* Blog Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content - Blog Posts */}
              <div className="lg:col-span-2">
                {/* Featured Post */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-novae-purple mb-6">Featured Article</h2>
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src={featuredPost.imageUrl} 
                      alt={featuredPost.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-novae-purple/10 text-novae-purple text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {featuredPost.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${featuredPost.id}`} 
                        className="inline-flex items-center text-novae-blue font-medium hover:text-novae-purple transition-colors"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div>
                  <h2 className="text-2xl font-bold text-novae-purple mb-6">Recent Articles</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <span className="bg-novae-teal/10 text-novae-teal text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {post.category}
                            </span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="inline-flex items-center text-novae-blue text-sm font-medium hover:text-novae-purple transition-colors"
                          >
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Search */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Search articles..."
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-novae-purple/50 focus:border-novae-purple"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Link 
                        key={category}
                        to={`/blog/category/${category.toLowerCase()}`}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          category === 'All' 
                            ? 'bg-novae-purple text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-novae-purple/10 hover:text-novae-purple transition-colors'
                        }`}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-novae-purple to-novae-blue p-6 rounded-lg shadow-md text-white">
                  <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Stay updated with the latest insights and news from the world of smart advertising.
                  </p>
                  <input 
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-novae-purple rounded-lg py-2 font-medium hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
