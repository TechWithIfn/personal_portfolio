import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Github, Award, Users, Target } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart City Infrastructure',
      subtitle: 'IoT-based Urban Management System',
      description: 'Led the development of an innovative IoT-based smart city infrastructure monitoring system that revolutionized urban resource management.',
      fullDescription: `Our smart city solution integrates thousands of IoT sensors with real-time analytics to optimize city resources and improve citizen services.

Key Innovations:
• Real-time monitoring of traffic, utilities, and public services
• AI-powered predictive maintenance system
• Citizen engagement platform with mobile app
• Emergency response optimization
• Environmental monitoring and analysis`,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800',
      impact: [
        'Implemented in 5 major cities',
        'Serving 2M+ citizens',
        '30% reduction in resource waste',
        '40% faster emergency response'
      ],
      technologies: [
        'IoT Sensors',
        'Azure IoT Hub',
        'TensorFlow',
        'React Native',
        'Node.js'
      ],
      metrics: {
        users: '2M+ Citizens',
        efficiency: '30% Improvement',
        savings: '$4.5M Annual Savings'
      },
      links: {
        demo: 'https://example.com/smart-city',
        github: 'https://github.com/example/smart-city'
      },
      awards: [
        'Smart City Innovation Award 2024',
        'Environmental Impact Excellence'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Analytics Platform',
      subtitle: 'AI-Powered Medical Insights System',
      description: 'Developed a revolutionary healthcare analytics platform that leverages machine learning for predictive diagnostics and patient care optimization.',
      fullDescription: `Our healthcare analytics platform transforms medical data into actionable insights, enabling predictive diagnostics and personalized patient care.

Key Features:
• Predictive disease progression modeling
• Patient risk stratification
• Treatment outcome analysis
• Resource optimization
• Real-time patient monitoring`,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      impact: [
        '45% improvement in early diagnosis',
        '500+ healthcare providers',
        '1M+ patient records analyzed',
        '30% reduction in readmissions'
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'React',
        'PostgreSQL',
        'Docker'
      ],
      metrics: {
        users: '500+ Providers',
        efficiency: '45% Better Diagnosis',
        savings: '30% Cost Reduction'
      },
      links: {
        demo: 'https://example.com/healthcare',
        github: 'https://github.com/example/healthcare'
      },
      awards: [
        'Healthcare Innovation Award 2024',
        'Best AI Implementation'
      ]
    }
  ];

  const ProjectMetrics = ({ metrics }) => (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center p-4 bg-blue-50 rounded-lg">
        <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-600">Users</p>
        <p className="text-lg font-semibold text-gray-900">{metrics.users}</p>
      </div>
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <Target className="w-6 h-6 text-green-500 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-600">Efficiency</p>
        <p className="text-lg font-semibold text-gray-900">{metrics.efficiency}</p>
      </div>
      <div className="text-center p-4 bg-purple-50 rounded-lg">
        <Award className="w-6 h-6 text-purple-500 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-600">Savings</p>
        <p className="text-lg font-semibold text-gray-900">{metrics.savings}</p>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Significant Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most impactful projects that have transformed industries and improved lives through innovative technology solutions.
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <div className={`grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.awards.map((award) => (
                        <span
                          key={award}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-400 text-gray-900"
                        >
                          <Award size={14} className="mr-1" />
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-lg text-blue-600 mb-4">{project.subtitle}</p>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <ProjectMetrics metrics={project.metrics} />
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mb-6">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Demo
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </div>

                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      {expandedProject === project.id ? (
                        <>
                          Show Less
                          <ChevronUp size={20} className="ml-1" />
                        </>
                      ) : (
                        <>
                          Learn More
                          <ChevronDown size={20} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="prose max-w-none">
                        {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-gray-600 mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Impact</h4>
                        <ul className="space-y-2">
                          {project.impact.map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <ArrowRight size={16} className="mr-2 text-blue-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;