"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import PaymentOptions from './PaymentOptions';

export default function CheckoutPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    // Billing Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    zipCode: '',
    
    // Shipping Details
    sameAsBilling: true,
    shippingFirstName: '',
    shippingLastName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingDistrict: '',
    shippingZipCode: '',
    
    // Payment Details
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    
    // Terms
    acceptTerms: false,
  });
  
  // Sample cart items (in a real application, these would come from context/state management)
  const cartItems = [
    {
      id: 1,
      name: 'ASP Cloud Storage',
      price: 499.99,
      quantity: 1,
      image: '/images/products/cloud-storage.jpg'
    },
    {
      id: 2,
      name: 'ASP Security Suite',
      price: 899.99,
      quantity: 1,
      image: '/images/products/security-suite.jpg'
    }
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process the order (this would connect to your payment processing API)
    console.log('Order submitted:', formData);
    
    // Navigate to success page
    router.push('/checkout/success');
  };
  
  const steps = [
    { number: 1, name: 'Teslimat Bilgileri' },
    { number: 2, name: 'Ödeme Bilgileri' },
    { number: 3, name: 'Sipariş Onayı' }
  ];
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Ödeme İşlemi</h1>
      
      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <ul className="steps steps-horizontal w-full max-w-3xl">
          {steps.map((step) => (
            <li 
              key={step.number} 
              className={`step ${step.number <= activeStep ? 'step-primary' : ''}`}
            >
              {step.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit}>
            {activeStep === 1 && (
              <CheckoutForm 
                formData={formData} 
                handleChange={handleChange} 
              />
            )}
            
            {activeStep === 2 && (
              <PaymentOptions 
                formData={formData} 
                handleChange={handleChange} 
              />
            )}
            
            {activeStep === 3 && (
              <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
                <div className="divider"></div>
                
                <h3 className="font-bold mb-2">Teslimat Bilgileri</h3>
                <p>
                  {formData.firstName} {formData.lastName}<br />
                  {formData.address}<br />
                  {formData.district}, {formData.city}, {formData.zipCode}<br />
                  {formData.phone}<br />
                  {formData.email}
                </p>
                
                <div className="divider"></div>
                
                <h3 className="font-bold mb-2">Ödeme Bilgileri</h3>
                <p>
                  {formData.paymentMethod === 'credit-card' 
                    ? `Kredi Kartı: **** **** **** ${formData.cardNumber.slice(-4)}` 
                    : 'Havale/EFT'}
                </p>
                
                <div className="form-control mt-6">
                  <label className="label cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="acceptTerms"
                      className="checkbox checkbox-primary" 
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                    />
                    <span className="label-text ml-2">
                      <a href="/terms" className="link link-hover" target="_blank" rel="noopener noreferrer">
                        Şartlar ve koşulları
                      </a> kabul ediyorum.
                    </span>
                  </label>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-6">
              {activeStep > 1 && (
                <button 
                  type="button" 
                  className="btn btn-outline" 
                  onClick={handleBack}
                >
                  Geri
                </button>
              )}
              
              <div className="ml-auto">
                {activeStep < 3 ? (
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={handleNext}
                  >
                    Devam Et
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={!formData.acceptTerms}
                  >
                    Siparişi Tamamla
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
        
        <div className="lg:w-1/3">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}
