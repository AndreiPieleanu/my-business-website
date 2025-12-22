// app/about/page.tsx
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Andrei Pieleanu',
      role: 'CEO & Founder',
      image: '/team/andrei.jpg', // Replace with your actual image paths
      bio: 'Andrei is an experienced software engineer with knowledge spanning across multiple fields.',
    },
    {
      name: 'Chantel Madlala',
      role: 'Head of Design',
      image: '/team/chantel.jpg', // Replace with your actual image paths
      bio: 'Creative mind dedicated to exceptional user experiences.',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'KISS, KISS',
      description: 'Keep it simple, keep it straight. We provide simple and effective solutions that help your business develop.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Practicality',
      description: 'We build software that you actually need and will help your company become more productive.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Together we achieve more. We believe collaboration with the customer is the key to success.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'Honesty and transparency guide everything we do. We build trust through our actions.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '3', label: 'Customers Satisfied' },
    { number: '4 weeks', label: 'Average Project Duration' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About the Company
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Axon Software is a tech startup dedicated to providing businesses with customized proprietary software. 
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2025 by Andrei Pieleanu, Axon Software started 
                    with a simple mission: to help other businesses by providing them with software applications.
                  </p>
                  <p>
                    We are always ready to deliver high-quality code for our customers. All while adhereing to the company's core values.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">
                    <Image src={"/company-logo.png"} alt='company-logo' width={600} height={400}/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">
                The values that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300">
                The talented people behind our success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    {/* Replace this div with actual Image component when you have real images */}
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <span className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              To empower businesses through innovative technology solutions that drive growth, 
              efficiency, and success. We believe in creating lasting partnerships with our 
              clients and delivering solutions that make a real difference.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Join Our Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}