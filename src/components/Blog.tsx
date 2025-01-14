import React, { useState } from 'react';
import { Search, Calendar, Clock, Tag, ArrowLeft, ChevronRight, Bookmark, Share2 } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      preview: 'Exploring how artificial intelligence is reshaping the landscape of software development and what it means for developers.',
      content: `Artificial intelligence is revolutionizing how we approach software development. From automated testing to intelligent code completion, AI tools are becoming an integral part of the modern developer's toolkit.

In this comprehensive guide, we'll explore:
- Current AI applications in development
- Future trends and predictions
- Impact on developer productivity
- Ethical considerations
- Best practices for AI integration

As we move forward, the synergy between human creativity and AI capabilities will define the next generation of software development...`,
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
      tags: ['AI', 'Software Development', 'Future Tech'],
      author: {
        name: 'Irfan Ansari',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
      }
    },
    {
      id: 2,
      title: 'Building Scalable Systems: A Practical Guide',
      preview: 'Learn the key principles and best practices for designing and implementing scalable software systems.',
      content: `Building scalable systems requires careful consideration of architecture, infrastructure, and development practices. This guide covers essential principles for creating robust, scalable applications.

Key topics include:
- Distributed system architecture
- Database scaling strategies
- Caching mechanisms
- Load balancing techniques
- Monitoring and optimization

We'll explore real-world examples and practical implementations...`,
      date: 'March 10, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      tags: ['System Design', 'Architecture', 'Performance'],
      author: {
        name: 'Irfan Ansari',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
      }
    },
    {
      id: 3,
      title: 'The Impact of Web3 on Modern Applications',
      preview: 'Analyzing how blockchain and decentralized technologies are influencing application architecture.',
      content: `Web3 technologies are transforming how we think about application architecture and user interactions. This deep dive explores the implications of decentralized systems.

We'll cover:
- Blockchain integration
- Smart contract development
- Decentralized storage
- User authentication
- Security considerations

The shift towards Web3 presents new challenges and opportunities...`,
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
      tags: ['Web3', 'Blockchain', 'Decentralization'],
      author: {
        name: 'Irfan Ansari',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
      }
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const PostCard = ({ post }) => (
    <article
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => setSelectedPost(post)}
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-medium text-gray-900">{post.author.name}</h4>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              {post.date}
              <Clock size={14} className="ml-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.preview}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
            >
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  const PostDetail = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <button
        onClick={() => setSelectedPost(null)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Posts
      </button>
      
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-medium text-gray-900">{post.author.name}</h4>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              {post.date}
              <Clock size={14} className="ml-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bookmark size={20} className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Share2 size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
      
      <div className="prose max-w-none mb-8">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-600 mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
          >
            <Tag size={14} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedPost ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights, tutorials, and stories about software development, technology, and innovation.
              </p>
            </div>

            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No articles found matching your search.</p>
              </div>
            )}
          </>
        ) : (
          <PostDetail post={selectedPost} />
        )}
      </div>
    </section>
  );
};

export default Blog;