// app/services/page.tsx
'use client';

import { useState } from 'react';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom websites and web applications built with technologies like React, Next.js,, Node.js or ASP.NET Core.',
      features: ['Responsive Design', 'Performance Tuning', 'E-commerce Solutions', 'Dashboard Solutions'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver great user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps', 'MAUI', 'Xamarin'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'DevOps', 'CI/CD Pipelines', 'Infrastructure as Code'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Custom Dashboards'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Consulting & Strategy',
      description: 'We offer guidance to help you navigate digital transformation and achieve your business goals.',
      features: ['Technology Consulting', 'Training & Support'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Scripts',
      description: 'Small, cheap and effective scripts for repetitive tasks.',
      features: ['Executables', "\"Pocket\"-sized tools"],
    },
  ];

  const projects = [
    {
      title: 'Zero-Emissions',
      client: 'Zero Emisión',
      category: 'web',
      description: 'Proprietary website used by the internal staff of Zero Emisión to manage their work.',
      results: ['300% increase in conversions', '50% faster load times', '95% customer satisfaction'],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Supabase'],
      image: '/projects/ecommerce.jpg',
    },
    {
      title: 'Mobile Banking App',
      client: 'FinanceBank',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      results: ['500K+ downloads', '4.8 star rating', 'Zero security incidents'],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
      image: '/projects/banking.jpg',
    },
    {
      title: 'Healthcare Management System',
      client: 'MediCare Plus',
      category: 'web',
      description: 'Comprehensive patient management system for hospitals with appointment scheduling and records.',
      results: ['70% reduction in admin time', 'HIPAA compliant', '10K+ patients managed'],
      technologies: ['React', 'Express', 'MongoDB', 'Docker'],
      image: '/projects/healthcare.jpg',
    },
    {
      title: 'Real Estate Mobile App',
      client: 'PropertyHub',
      category: 'mobile',
      description: 'Property listing and virtual tour app with AI-powered recommendation engine.',
      results: ['200K+ active users', '40% increase in leads', 'Featured on App Store'],
      technologies: ['Flutter', 'Python', 'TensorFlow', 'Google Cloud'],
      image: '/projects/realestate.jpg',
    },
    {
      title: 'Analytics Dashboard',
      client: 'DataCorp',
      category: 'analytics',
      description: 'Real-time analytics dashboard for tracking business metrics and generating insights.',
      results: ['Real-time data processing', '50+ custom reports', '99.9% uptime'],
      technologies: ['Vue.js', 'D3.js', 'Python', 'Apache Kafka'],
      image: '/projects/analytics.jpg',
    },
    {
      title: 'Cloud Migration Project',
      client: 'TechStart Inc',
      category: 'cloud',
      description: 'Complete migration of legacy infrastructure to cloud with zero downtime.',
      results: ['60% cost reduction', 'Zero downtime migration', '10x scalability improvement'],
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
      image: '/projects/cloud.jpg',
    },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'consult', label: 'Consulting' },
    { id: 'script', label: 'Scripts' },
  ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. 
              From web development to cloud infrastructure, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
              <p className="text-xl text-gray-300">
                Expert services designed to drive your business forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300">
                A simple yet effective strategy to deliver results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and challenges.' },
                { step: '02', title: 'Planning', description: 'We Develop a plan and consult you.' },
                { step: '03', title: 'Execution', description: 'We build and implement your solution.' },
                { step: '04', title: 'Support', description: 'We offer support for your app.' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300 mb-8">
                Real results for real clients
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filterCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeFilter === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{project.title}</span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">
                        {project.client}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's discuss how we can help bring your vision to life. 
              Get in touch with our team today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}