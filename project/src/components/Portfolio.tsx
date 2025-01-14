import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Globe, Smartphone, Brain, Cloud, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', label: 'AI & ML', icon: Brain },
    { id: 'cloud', label: 'Cloud Solutions', icon: Cloud }
  ];

  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, AI-powered recommendations, and advanced analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
      metrics: ['50K+ daily users', '99.9% uptime', '3x faster checkouts'],
      links: { 
        demo: 'https://example.com',
        github: 'https://github.com/TechWithIfn'
      },
      featured: true
    },
    {
      title: 'AI-Powered Financial Forecasting',
      description: 'Machine learning platform for predictive financial analytics, market trend analysis, and automated trading strategies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      metrics: ['95% prediction accuracy', '$2M+ portfolio managed', '40% reduced analysis time'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/TechWithIfn'
      },
      featured: true
    },
    {
      title: 'Multi-Cloud Infrastructure Manager',
      description: 'Enterprise platform for managing and optimizing cloud resources across AWS, Azure, and GCP with cost optimization and security compliance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      category: 'cloud',
      tags: ['AWS', 'Azure', 'Terraform', 'Go'],
      metrics: ['30% cost reduction', '5000+ resources managed', '99.99% availability'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com/TechWithIfn'
      },
      featured: true
    },
    {
      title: 'Health & Fitness Mobile App',
      description: 'Cross-platform mobile application for health tracking, workout planning, and social fitness challenges with AI-powered coaching.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'TensorFlow Lite'],
      metrics: ['100K+ downloads', '4.8 App Store rating', '35% user retention'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      },
      featured: true
    },
    {
      title: 'Real-Time Collaboration Platform',
      description: 'Web-based collaboration tool with real-time document editing, video conferencing, and project management capabilities.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      category: 'web',
      tags: ['WebRTC', 'Socket.io', 'React', 'Node.js'],
      metrics: ['10K+ daily active users', '<100ms latency', '99.9% uptime'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    },
    {
      title: 'Computer Vision Quality Control',
      description: 'AI-powered manufacturing quality control system using computer vision and deep learning for defect detection.',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800',
      category: 'ai',
      tags: ['PyTorch', 'OpenCV', 'FastAPI', 'Edge Computing'],
      metrics: ['99.7% detection accuracy', '60% faster inspections', '40% cost reduction'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    },
    {
      title: 'Serverless Data Pipeline',
      description: 'Cloud-native data processing pipeline handling real-time analytics and ETL workflows with automatic scaling.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      category: 'cloud',
      tags: ['AWS Lambda', 'Apache Kafka', 'Elasticsearch'],
      metrics: ['5TB+ daily data processed', '99.99% reliability', '60% cost savings'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    },
    {
      title: 'AR Shopping Experience',
      description: 'Mobile app enabling augmented reality product visualization and virtual try-ons for e-commerce.',
      image: 'https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&q=80&w=800',
      category: 'mobile',
      tags: ['ARKit', 'Unity', 'Swift', 'Firebase'],
      metrics: ['2x conversion rate', '4.9 App Store rating', '500K+ downloads'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    },
    {
      title: 'NLP Content Analyzer',
      description: 'AI platform for content analysis, sentiment detection, and automated content moderation using advanced NLP.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
      category: 'ai',
      tags: ['BERT', 'FastAPI', 'Redis', 'PostgreSQL'],
      metrics: ['98% accuracy', '10M+ documents processed', '5x faster moderation'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    },
    {
      title: 'Kubernetes Management Platform',
      description: 'Cloud-native platform for managing Kubernetes clusters, monitoring, and automated deployments across multiple clouds.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
      category: 'cloud',
      tags: ['Kubernetes', 'Prometheus', 'Go', 'gRPC'],
      metrics: ['1000+ clusters managed', '99.999% availability', '45% cost optimization'],
      links: {
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest projects and creative solutions across various domains and technologies.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  filter === id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} className="mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">{metric}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;