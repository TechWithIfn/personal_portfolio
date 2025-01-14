import React, { useState } from 'react';
import { Mail, Bell, Gift, Shield, CheckCircle, X, AlertCircle } from 'lucide-react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: [] as string[],
    frequency: 'weekly'
  });
  const [status, setStatus] = useState<'success' | 'error' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    { id: 'tech', label: 'Technology Updates' },
    { id: 'tutorials', label: 'Tutorials & Guides' },
    { id: 'industry', label: 'Industry Insights' },
    { id: 'career', label: 'Career Development' }
  ];

  const frequencies = [
    { id: 'daily', label: 'Daily Digest' },
    { id: 'weekly', label: 'Weekly Roundup' },
    { id: 'monthly', label: 'Monthly Newsletter' }
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Content',
      description: 'Get access to premium articles and resources'
    },
    {
      icon: Bell,
      title: 'Early Access',
      description: 'Be the first to know about new projects and updates'
    },
    {
      icon: Shield,
      title: 'No Spam Promise',
      description: 'Your data is secure and never shared with third parties'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    // Simulating API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        interests: [],
        frequency: 'weekly'
      });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-6">
              <Mail size={32} className="text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-gray-300 text-lg">
              Join our community of innovators and creators. Get exclusive content, early access to new projects, and expert insights delivered right to your inbox.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-4">
                  <Icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Interests</label>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleInterestToggle(id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      formData.interests.includes(id)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Frequency</label>
              <div className="grid md:grid-cols-3 gap-4">
                {frequencies.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, frequency: id }))}
                    className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                      formData.frequency === id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {status && (
              <div className={`p-4 rounded-lg flex items-center ${
                status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {status === 'success' ? (
                  <CheckCircle size={20} className="mr-2" />
                ) : (
                  <AlertCircle size={20} className="mr-2" />
                )}
                <span>
                  {status === 'success'
                    ? 'Successfully subscribed! Check your email for confirmation.'
                    : 'Please fill in all required fields.'}
                </span>
                <button
                  type="button"
                  onClick={() => setStatus('')}
                  className="ml-auto"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg text-white font-medium transition-colors ${
                isSubmitting
                  ? 'bg-blue-600 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe to Newsletter'
              )}
            </button>

            <p className="text-center text-sm text-gray-400">
              By subscribing, you agree to receive occasional updates and newsletters.
              <br />You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;