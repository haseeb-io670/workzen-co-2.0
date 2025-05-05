import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/main/blogdetails.scss';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // Sample blog post data (in a real application, this would come from an API)
  const blogPosts = [
    {
      id: '1',
      title: 'How Digital Marketing Can Transform Your Business in 2023',
      description: 'Discover the latest digital marketing strategies that can help your business grow in the competitive landscape of 2023.',
      content: `
        <p>In today's rapidly evolving digital landscape, businesses of all sizes must adapt their marketing strategies to stay competitive. Digital marketing has become not just an option but a necessity for companies looking to thrive in 2023 and beyond.</p>
        
        <h2>The Evolution of Digital Marketing</h2>
        
        <p>Digital marketing has come a long way from simple banner ads and email campaigns. Today's digital marketing landscape encompasses social media, content marketing, search engine optimization (SEO), pay-per-click advertising (PPC), influencer partnerships, and much more.</p>
        
        <p>What makes digital marketing so powerful is its ability to target specific audiences with precision, measure results in real-time, and adjust strategies on the fly based on performance data.</p>
        
        <h2>Key Digital Marketing Trends for 2023</h2>
        
        <h3>1. AI-Powered Marketing Automation</h3>
        
        <p>Artificial intelligence is revolutionizing how businesses approach digital marketing. AI-powered tools can analyze vast amounts of data to predict customer behavior, personalize content, optimize ad spend, and automate routine marketing tasks.</p>
        
        <p>Implementing AI in your marketing strategy can lead to more efficient campaigns and better ROI by delivering the right message to the right person at the right time.</p>
        
        <h3>2. Video Content Dominance</h3>
        
        <p>Video continues to be the most engaging form of content across digital platforms. From short-form videos on platforms like TikTok and Instagram Reels to longer educational content on YouTube, video engagement rates consistently outperform other content types.</p>
        
        <p>Businesses that incorporate video into their digital marketing strategy see higher engagement, better brand recall, and increased conversion rates.</p>
        
        <blockquote>
          <p>"Video is no longer just one piece of your overall marketing plan. It is central to your outreach and campaign efforts... especially your social strategy."</p>
          <cite>- Gary Vaynerchuk, Entrepreneur and Marketing Expert</cite>
        </blockquote>
        
        <h3>3. First-Party Data Strategy</h3>
        
        <p>With increasing privacy regulations and the phasing out of third-party cookies, businesses must adapt by developing strategies to collect and leverage first-party data. This includes information collected directly from your audience through website interactions, purchases, surveys, and other direct engagements.</p>
        
        <p>Building a robust first-party data strategy allows you to create personalized marketing experiences while respecting user privacy preferences.</p>
        
        <h2>Implementing a Successful Digital Marketing Strategy</h2>
        
        <p>A successful digital marketing strategy requires careful planning, consistent execution, and ongoing optimization. Here are some key steps to transform your business through digital marketing:</p>
        
        <ul>
          <li><strong>Define clear objectives</strong>: Establish specific, measurable, achievable, relevant, and time-bound (SMART) goals for your digital marketing efforts.</li>
          <li><strong>Know your audience</strong>: Develop detailed buyer personas to understand your target audience's needs, preferences, and pain points.</li>
          <li><strong>Choose the right channels</strong>: Focus on digital platforms where your target audience is most active and engaged.</li>
          <li><strong>Create valuable content</strong>: Develop high-quality content that addresses your audience's needs and positions your brand as an authority in your industry.</li>
          <li><strong>Leverage data and analytics</strong>: Use data to measure performance, gather insights, and continuously improve your digital marketing strategy.</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Digital marketing continues to evolve at a rapid pace, presenting both challenges and opportunities for businesses. By staying informed about the latest trends and best practices, you can develop a digital marketing strategy that drives growth, increases brand awareness, and delivers measurable results for your business in 2023 and beyond.</p>
        
        <p>The businesses that will thrive are those that view digital marketing not as a set of tactical activities but as a strategic approach to connecting with customers and delivering value in the digital age.</p>
      `,
      image: '/blog/digital-marketing-trends.jpg',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing',
      author: 'Sarah Johnson',
      authorImage: '/blog/authors/sarah.jpg',
      authorTitle: 'Digital Marketing Strategist',
      authorBio: 'Sarah Johnson is a digital marketing strategist with over 10 years of experience helping businesses grow their online presence. She specializes in data-driven marketing strategies that deliver measurable results.',
      date: 'June 15, 2023',
      readTime: '5 min read',
      tags: ['Digital Marketing', 'Business Growth', 'Marketing Strategy', 'SEO', 'Social Media']
    },
    {
      id: '2',
      title: 'The Ultimate Guide to SEO Optimization',
      description: 'Learn the most effective SEO techniques to improve your website\'s visibility and drive organic traffic.',
      content: `
        <p>Search Engine Optimization (SEO) is essential for businesses looking to improve their online visibility and drive organic traffic to their website. This comprehensive guide will help you understand and implement effective SEO strategies.</p>
        
        <h2>What is SEO and Why is it Important?</h2>
        <p>SEO is the practice of optimizing your website and its content to rank higher in search engine results pages (SERPs). When your website ranks higher for relevant keywords, you'll receive more organic traffic, which can lead to increased brand awareness, more leads, and higher conversions.</p>
      `,
      image: '/blog/seo-guide.jpg',
      category: 'seo',
      categoryLabel: 'SEO',
      author: 'Michael Chen',
      authorImage: '/blog/authors/michael.jpg',
      authorTitle: 'SEO Specialist',
      authorBio: 'Michael Chen is an SEO specialist with expertise in technical SEO, content optimization, and link building strategies. He has helped numerous businesses achieve top rankings in search engine results.',
      date: 'May 28, 2023',
      readTime: '8 min read',
      tags: ['SEO', 'Digital Marketing', 'Website Optimization', 'Content Strategy', 'Keywords']
    },
    {
      id: '3',
      title: 'Social Media Management Best Practices for Small Businesses',
      description: 'Effective social media strategies tailored for small businesses looking to maximize their online presence.',
      content: `
        <p>For small businesses, social media offers an affordable and effective way to reach customers, build brand awareness, and drive sales. This article explores best practices for managing social media effectively with limited resources.</p>
      `,
      image: '/blog/social-media-management.jpg',
      category: 'social-media',
      categoryLabel: 'Social Media',
      author: 'Emma Davis',
      authorImage: '/blog/authors/emma.jpg',
      authorTitle: 'Social Media Manager',
      authorBio: 'Emma Davis is a social media manager specializing in creating engaging content strategies for small and medium-sized businesses. She helps brands find their authentic voice and connect with their target audience.',
      date: 'April 10, 2023',
      readTime: '6 min read',
      tags: ['Social Media', 'Small Business', 'Content Strategy', 'Brand Building', 'Engagement']
    }
  ];

  useEffect(() => {
    // Simulate API fetch with loading state
    setLoading(true);
    setTimeout(() => {
      const post = blogPosts.find(post => post.id === id);
      if (post) {
        setBlogPost(post);
        // Find related posts (same category, excluding current post)
        const related = blogPosts.filter(p => p.category === post.category && p.id !== id).slice(0, 2);
        setRelatedPosts(related);
      }
      setLoading(false);
    }, 500);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit to an API
    console.log({ name, email, comment });
    alert('Comment submitted successfully!');
    setComment('');
    setName('');
    setEmail('');
  };

  // Share functionality
  const handleShare = (platform) => {
    if (!blogPost) return;
    
    const shareUrl = window.location.href;
    const shareText = `Check out this article: ${blogPost.title}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('Link copied to clipboard!');
        });
    }
  };

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="blog-detail-error">
        <h2>Article Not Found</h2>
        <p>Sorry, the article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blogs" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <main className="blog-detail">
      {/* Article Header */}
      <div className="article-header">
        <div className="container">
          <div className="category-badge">{blogPost.categoryLabel}</div>
          <h1 className="article-title">{blogPost.title}</h1>
          <div className="article-meta">
            <div className="author-info">
              <img src={blogPost.authorImage} alt={blogPost.author} className="author-image" />
              <span className="author-name">By {blogPost.author}</span>
            </div>
            <div className="article-details">
              <span className="date">{blogPost.date}</span>
              <span className="divider">•</span>
              <span className="read-time">{blogPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="featured-image-container">
        <div className="container">
          <div className="featured-image">
            <img src={blogPost.image} alt={blogPost.title} />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="article-container">
        <div className="container">
          <div className="article-layout">
            {/* Main Article Content */}
            <article className="article-content">
              <div className="article-body" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
              
              {/* Tags */}
              <div className="article-tags">
                {blogPost.tags.map((tag, index) => (
                  <Link key={index} to={`/blogs?tag=${tag}`} className="tag">
                    {tag}
                  </Link>
                ))}
              </div>
              
              {/* Share Section */}
              <div className="share-section">
                <h3>Share This Article</h3>
                <div className="share-buttons">
                  <button onClick={() => handleShare('facebook')} className="share-button facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                  <button onClick={() => handleShare('twitter')} className="share-button twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button onClick={() => handleShare('linkedin')} className="share-button linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                  <button onClick={() => handleShare('copy')} className="share-button copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="author-bio">
                <div className="author-image">
                  <img src={blogPost.authorImage} alt={blogPost.author} />
                </div>
                <div className="author-details">
                  <h3 className="author-name">{blogPost.author}</h3>
                  <p className="author-title">{blogPost.authorTitle}</p>
                  <p className="author-description">{blogPost.authorBio}</p>
                </div>
              </div>
              
              {/* Related Articles */}
              <div className="related-articles">
                <h3 className="section-title">Related Articles</h3>
                <div className="related-posts-grid">
                  {relatedPosts.map(post => (
                    <article key={post.id} className="related-post-card">
                      <Link to={`/blog/${post.id}`} className="post-image">
                        <img src={post.image} alt={post.title} />
                      </Link>
                      <div className="post-content">
                        <div className="category-badge">{post.categoryLabel}</div>
                        <h3 className="post-title">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <div className="post-meta">
                          <span className="post-date">{post.date}</span>
                          <span className="read-time">{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="comments-section">
                <h3 className="section-title">Leave a Comment</h3>
                <form className="comment-form" onSubmit={handleCommentSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea 
                      id="comment" 
                      rows="5" 
                      value={comment} 
                      onChange={(e) => setComment(e.target.value)} 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Comment</button>
                </form>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="article-sidebar">
              {/* Table of Contents */}
              <div className="sidebar-widget toc-widget">
                <h3 className="widget-title">Table of Contents</h3>
                <ul className="toc-list">
                  <li><a href="#the-evolution-of-digital-marketing">The Evolution of Digital Marketing</a></li>
                  <li>
                    <a href="#key-digital-marketing-trends-for-2023">Key Digital Marketing Trends for 2023</a>
                    <ul>
                      <li><a href="#1-ai-powered-marketing-automation">AI-Powered Marketing Automation</a></li>
                      <li><a href="#2-video-content-dominance">Video Content Dominance</a></li>
                      <li><a href="#3-first-party-data-strategy">First-Party Data Strategy</a></li>
                    </ul>
                  </li>
                  <li><a href="#implementing-a-successful-digital-marketing-strategy">Implementing a Successful Strategy</a></li>
                  <li><a href="#conclusion">Conclusion</a></li>
                </ul>
              </div>
              
              {/* Subscribe Widget */}
              <div className="sidebar-widget subscribe-widget">
                <h3 className="widget-title">Newsletter</h3>
                <p>Get the latest articles and industry updates</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
              
              {/* Popular Tags */}
              <div className="sidebar-widget tags-widget">
                <h3 className="widget-title">Popular Tags</h3>
                <div className="tags-cloud">
                  <a href="#" className="tag">Marketing</a>
                  <a href="#" className="tag">SEO</a>
                  <a href="#" className="tag">Content</a>
                  <a href="#" className="tag">Social Media</a>
                  <a href="#" className="tag">Analytics</a>
                  <a href="#" className="tag">Strategy</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

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

export default BlogDetail;
