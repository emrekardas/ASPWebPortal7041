import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: 'Learn about ASP Solutions. Meet our mission, vision and team.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      image: '/images/team/placeholder-1.jpg',
      bio: '10+ years of experience in software and cloud technologies'
    },
    {
      name: 'Emily Parker',
      position: 'CTO',
      image: '/images/team/placeholder-2.jpg',
      bio: 'Expert in data science and machine learning'
    },
    {
      name: 'Michael Johnson',
      position: 'Product Manager',
      image: '/images/team/placeholder-3.jpg',
      bio: 'Specialist in user experience and product strategy'
    },
    {
      name: 'Sarah Wilson',
      position: 'Customer Relations Director',
      image: '/images/team/placeholder-4.jpg',
      bio: 'Responsible for customer success and strategic partnerships'
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          At ASP Solutions, we provide custom cloud solutions and software services to businesses, supporting them on their digital transformation journey.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-gray-700">
            To strengthen the technological infrastructure of businesses, increase their efficiency, and provide a competitive advantage. 
            By developing solutions tailored to our customers' needs, we ensure their success in the digital world.
          </p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
          <p className="text-gray-700">
            To be Turkey's leading provider of cloud solutions and software services. 
            With continuous innovation and a customer-centric approach, we aim to be recognized as a reliable partner in the technology world.
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Company History</h2>
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-8">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="h-full w-0.5 bg-primary"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">2015 - Establishment</h3>
                <p className="text-gray-700">ASP Solutions was founded as a small technology consulting company.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="h-full w-0.5 bg-primary"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">2017 - Growth</h3>
                <p className="text-gray-700">We launched our first cloud-based products and started expanding our team.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="h-full w-0.5 bg-primary"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">2020 - Expansion</h3>
                <p className="text-gray-700">We expanded our portfolio and started offering custom solutions to our corporate clients.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Today</h3>
                <p className="text-gray-700">As one of the leading technology providers, we serve over 100 clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-base-100 shadow-md">
              <figure className="relative h-64 w-full">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl text-gray-400">{member.name.charAt(0)}</span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">{member.name}</h3>
                <p className="text-primary font-medium">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center">Innovation</h3>
              <p className="text-gray-600 text-center">Passion for continuous improvement and innovative solutions</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center">Collaboration</h3>
              <p className="text-gray-600 text-center">Working closely with our clients for partnership and shared success</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center">Reliability</h3>
              <p className="text-gray-600 text-center">We keep our promises and protect our customers' data and trust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
