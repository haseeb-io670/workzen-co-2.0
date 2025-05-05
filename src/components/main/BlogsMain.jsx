import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main/blogsmain.scss';

const BlogsMain = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Sample blog posts data (in a real application, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      title: 'How Digital Marketing Can Transform Your Business in 2023',
      description: 'Discover the latest digital marketing strategies that can help your business grow in the competitive landscape of 2023.',
      image: '/blog/digital-marketing-trends.jpg',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing',
      author: 'Sarah Johnson',
      authorImage: '/blog/authors/sarah.jpg',
      date: 'June 15, 2023',
      featured: true,
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to SEO Optimization',
      description: 'Learn the most effective SEO techniques to improve your website\'s visibility and drive organic traffic.',
      image: '/blog/seo-guide.jpg',
      category: 'seo',
      categoryLabel: 'SEO',
      author: 'Michael Chen',
      authorImage: '/blog/authors/michael.jpg',
      date: 'May 28, 2023',
      featured: true,
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Social Media Management Best Practices for Small Businesses',
      description: 'Effective social media strategies tailored for small businesses looking to maximize their online presence.',
      image: '/blog/social-media-management.jpg',
      category: 'social-media',
      categoryLabel: 'Social Media',
      author: 'Emma Davis',
      authorImage: '/blog/authors/emma.jpg',
      date: 'April 10, 2023',
      featured: false,
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Content Creation Strategies That Drive Engagement',
      description: 'Discover how to create compelling content that resonates with your audience and drives meaningful engagement.',
      image: '/blog/content-creation.jpg',
      category: 'content',
      categoryLabel: 'Content Creation',
      author: 'James Wilson',
      authorImage: '/blog/authors/james.jpg',
      date: 'March 22, 2023',
      featured: false,
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Maximizing ROI with PPC Advertising',
      description: 'Learn how to optimize your PPC campaigns to achieve the highest possible return on investment.',
      image: '/blog/ppc-advertising.jpg',
      category: 'ppc',
      categoryLabel: 'PPC',
      author: 'Olivia Thompson',
      authorImage: '/blog/authors/olivia.jpg',
      date: 'February 15, 2023',
      featured: false,
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Email Marketing Automation: A Complete Guide',
      description: 'Streamline your marketing efforts with effective email automation strategies that convert leads into customers.',
      image: '/blog/email-marketing.jpg',
      category: 'email',
      categoryLabel: 'Email Marketing',
      author: 'Daniel Brown',
      authorImage: '/blog/authors/daniel.jpg',
      date: 'January 30, 2023',
      featured: false,
      readTime: '6 min read'
    },
  ];

  // Blog categories
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'seo', name: 'SEO Optimization' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'content', name: 'Content Creation' },
    { id: 'ppc', name: 'PPC Advertising' },
    { id: 'email', name: 'Email Marketing' },
  ];

  // Filter posts based on selected category and search query
  useEffect(() => {
    let postsToShow = [...blogPosts];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      postsToShow = postsToShow.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      postsToShow = postsToShow.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.description.toLowerCase().includes(query) ||
        post.categoryLabel.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(postsToShow);
  }, [selectedCategory, searchQuery]);

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <main className="blogs-main">
      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <h2 className="section-title">Featured <span className="highlight">Articles</span></h2>
          <div className="featured-grid">
            {featuredPosts.map(post => (
              <article key={post.id} className="featured-post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category-badge">{post.categoryLabel}</div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <div className="post-meta">
                    <div className="author">
                      <img src={post.authorImage} alt={post.author} className="author-image" />
                      <span className="author-name">{post.author}</span>
                    </div>
                    <div className="post-info">
                      <span className="post-date">{post.date}</span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="blog-list-section">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main-content">
              {/* Search and Filter */}
              <div className="search-filter">
                <div className="search-bar">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="blog-grid">
                  {filteredPosts.map(post => (
                    <article key={post.id} className="blog-card">
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                        <div className="category-badge">{post.categoryLabel}</div>
                      </div>
                      <div className="post-content">
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-description">{post.description}</p>
                        <div className="post-meta">
                          <div className="post-info">
                            <span className="post-date">{post.date}</span>
                            <span className="read-time">{post.readTime}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`} className="read-more">
                          Read Article
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or browse all categories</p>
                </div>
              )}

              {/* Pagination */}
              <div className="pagination">
                <button className="pagination-button active">1</button>
                <button className="pagination-button">2</button>
                <button className="pagination-button">3</button>
                <button className="pagination-button next">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Categories */}
              <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  {categories.map(category => (
                    <li 
                      key={category.id} 
                      className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">{
                        category.id === 'all' 
                          ? blogPosts.length 
                          : blogPosts.filter(post => post.category === category.id).length
                      }</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe Widget */}
              <div className="sidebar-widget subscribe-widget">
                <h3 className="widget-title">Newsletter</h3>
                <p>Stay updated with our latest insights</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Recent Posts Widget */}
              <div className="sidebar-widget recent-posts-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <ul className="recent-posts-list">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="recent-post-item">
                      <div className="post-thumbnail">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="post-details">
                        <h4 className="post-title">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="sidebar-widget tags-widget">
                <h3 className="widget-title">Popular Tags</h3>
                <div className="tags-cloud">
                  <a href="#" className="tag">Marketing</a>
                  <a href="#" className="tag">SEO</a>
                  <a href="#" className="tag">Content</a>
                  <a href="#" className="tag">Social Media</a>
                  <a href="#" className="tag">Analytics</a>
                  <a href="#" className="tag">Branding</a>
                  <a href="#" className="tag">Strategy</a>
                  <a href="#" className="tag">E-commerce</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <h2>Ready to Transform Your Digital Presence?</h2>
              <p>Get in touch with our experts and discover how we can help you achieve your business goals.</p>
              <button className="btn btn-primary btn-lg">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </button>
            </div>
            <div className="cta-decoration">
              <div className="geometric-element"></div>
              <div className="blur-circle"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogsMain;
