'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully. We will get back to you as soon as possible.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult({ success: false, message: '' });
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          You can contact us for your questions or collaboration requests.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          {submitResult.message && (
            <div className={`alert ${submitResult.success ? 'alert-success' : 'alert-error'} mb-6`}>
              <span>{submitResult.message}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full" 
                required 
              />
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full" 
                required 
              />
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input input-bordered w-full" 
                required 
              />
            </div>
            
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-32" 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div>
          <div className="bg-base-100 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-700">
                    Maslak, Büyükdere Ave. No:123<br />
                    Sarıyer, Istanbul 34485
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-700">+90 (212) 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-700">info@aspsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 09:00 - 18:00<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map or Location Section */}
          <div className="bg-base-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for a map - in production replace with actual map component */}
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-center text-gray-600">
                  Map View<br />
                  <span className="text-sm">(An interactive map will be placed here in the actual application)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="collapse collapse-plus bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How can I get information about your services?
            </div>
            <div className="collapse-content">
              <p>For detailed information about our services, you can visit the relevant pages on our website, contact us by phone, or fill out the contact form on this page.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              What is your pricing policy?
            </div>
            <div className="collapse-content">
              <p>Each business has different needs. Therefore, we offer customized solutions. Please contact us for pricing, and we'll prepare a quote tailored to your needs.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How long has your company been operating?
            </div>
            <div className="collapse-content">
              <p>ASP Solutions was founded in 2015 and has been operating in the field of cloud solutions and software services ever since.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-100 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How can I apply for a job?
            </div>
            <div className="collapse-content">
              <p>For career opportunities, please send your CV to careers@aspsolutions.com. Open positions are also published in the careers section of our website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
