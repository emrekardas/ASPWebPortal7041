import Image from 'next/image';
import Link from 'next/link';

// Training categories with their respective courses
const trainingCategories = [
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Master cloud platforms and services to design, deploy, and maintain scalable applications and infrastructure.',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000',
    courses: [
      {
        id: 'aws-fundamentals',
        title: 'AWS Fundamentals',
        duration: '3 days',
        level: 'Beginner',
        price: 799,
        description: 'Introduction to Amazon Web Services including EC2, S3, RDS, and basic cloud architecture principles.'
      },
      {
        id: 'azure-admin',
        title: 'Microsoft Azure Administration',
        duration: '5 days',
        level: 'Intermediate',
        price: 1299,
        description: 'Comprehensive training on managing and maintaining Microsoft Azure resources and services.'
      },
      {
        id: 'cloud-security',
        title: 'Cloud Security Essentials',
        duration: '4 days',
        level: 'Intermediate',
        price: 1199,
        description: 'Learn to implement security controls, manage identity, and protect data in multi-cloud environments.'
      }
    ]
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Build modern applications with cutting-edge technologies, frameworks, and best practices.',
    image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1000',
    courses: [
      {
        id: 'fullstack-js',
        title: 'Full Stack JavaScript Development',
        duration: '10 days',
        level: 'Intermediate',
        price: 1899,
        description: 'Build complete web applications using Node.js, React, Express, and MongoDB.'
      },
      {
        id: 'python-data',
        title: 'Python for Data Science',
        duration: '5 days',
        level: 'Beginner to Intermediate',
        price: 1299,
        description: 'Learn Python programming with a focus on data analysis, visualization, and basic machine learning.'
      },
      {
        id: 'devops-ci-cd',
        title: 'DevOps and CI/CD Pipelines',
        duration: '4 days',
        level: 'Intermediate',
        price: 1399,
        description: 'Implement continuous integration, deployment, and delivery using modern DevOps tools and practices.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems, networks, and data from digital attacks with comprehensive security training.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000',
    courses: [
      {
        id: 'ethical-hacking',
        title: 'Ethical Hacking and Penetration Testing',
        duration: '5 days',
        level: 'Intermediate to Advanced',
        price: 1599,
        description: 'Learn offensive security techniques to identify and exploit vulnerabilities in systems and applications.'
      },
      {
        id: 'secure-coding',
        title: 'Secure Coding Practices',
        duration: '3 days',
        level: 'Intermediate',
        price: 999,
        description: 'Develop applications with security in mind, preventing common vulnerabilities and implementing secure coding standards.'
      },
      {
        id: 'incident-response',
        title: 'Incident Response and Forensics',
        duration: '4 days',
        level: 'Advanced',
        price: 1499,
        description: 'Prepare for, respond to, and recover from cybersecurity incidents with proper forensic techniques.'
      }
    ]
  }
];

export default function TrainingsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Professional Training Programs</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Advance your career with our industry-leading technical training courses taught by experienced professionals.
        </p>
      </div>
      
      {/* Training Benefits */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
          <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
          <p className="text-gray-600">
            Learn from industry practitioners with years of real-world experience and proven teaching abilities.
          </p>
        </div>
        
        <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
          <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Practical Approach</h3>
          <p className="text-gray-600">
            Hands-on exercises, real-world scenarios, and labs to ensure you can apply what you learn immediately.
          </p>
        </div>
        
        <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
          <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Industry Certifications</h3>
          <p className="text-gray-600">
            Many courses align with industry certifications to help advance your career and validate your skills.
          </p>
        </div>
      </div>
      
      {/* Training Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Training Categories</h2>
        
        {trainingCategories.map((category, index) => (
          <div key={category.id} className={`mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row gap-8 items-center`}>
            <div className="w-full md:w-1/2 relative h-80 rounded-lg overflow-hidden">
              <Image 
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-6">{category.title}</h3>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="space-y-4">
                {category.courses.map(course => (
                  <div key={course.id} className="bg-base-100 p-4 rounded-lg shadow border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg">{course.title}</h4>
                      <span className="badge badge-primary">${course.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {course.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Training Formats */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Training Formats</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-center flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                On-site Training
              </h3>
              <p className="text-center">
                We come to your workplace to provide customized training tailored to your team's specific needs and environment.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Customized to your infrastructure
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Team building opportunity
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Direct interaction with instructor
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-center flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Instructor-Led Virtual
              </h3>
              <p className="text-center">
                Live online sessions with the same high-quality content as our classroom training, accessible from anywhere.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Real-time interaction
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  No travel required
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Session recordings available
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-center flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Self-Paced Learning
              </h3>
              <p className="text-center">
                On-demand courses you can take at your own pace, with video lessons, exercises, and projects.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Learn at your own pace
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Lifetime access to materials
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Discussion forums for support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-gray-600">Cloud Architect</p>
                </div>
              </div>
              <p className="italic">
                "The AWS Fundamentals training was excellent. The instructor knew the material inside and out and made complex concepts easy to understand. I passed my certification exam on the first try!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
                  SS
                </div>
                <div>
                  <h4 className="font-bold">Sarah Smith</h4>
                  <p className="text-sm text-gray-600">Software Developer</p>
                </div>
              </div>
              <p className="italic">
                "The Full Stack JavaScript course was transformative for my career. The hands-on projects gave me the confidence to apply for senior positions, and I've already implemented what I learned in my current role."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
                  MJ
                </div>
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <p className="text-sm text-gray-600">Security Analyst</p>
                </div>
              </div>
              <p className="italic">
                "The Ethical Hacking course was exactly what I needed to advance in my cybersecurity career. The labs were realistic, and the instructor's industry experience added valuable context beyond what's in the textbooks."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i === 4 ? 'text-gray-300' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-base-100 p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're looking to level up your skills or transform your organization's capabilities, we have the right training solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Request Training Info
            </Link>
            <button className="btn btn-outline">
              Download Course Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
