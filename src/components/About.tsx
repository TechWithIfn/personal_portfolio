import React from 'react';

const About = () => {
  const skills = [
    'Frontend Development',
    'UI/UX Design',
    'React & Next.js',
    'Node.js',
    'Cloud Architecture',
    'System Design'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Irfan Ansari"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-10 rounded-lg"></div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in software development and digital innovation, 
              I specialize in creating elegant solutions to complex problems. My passion lies 
              in building scalable applications that make a meaningful impact.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;