"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getCurrentUser } from '@/services/auth';

export default function ProfileForm() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    country: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  useEffect(() => {
    async function loadUserProfile() {
      try {
        const userData = await getCurrentUser();
        
        if (userData && userData.attributes) {
          setProfile({
            name: userData.attributes.name || '',
            email: userData.attributes.email || '',
            company: userData.attributes['custom:company'] || '',
            phone: userData.attributes.phone_number || '',
            jobTitle: userData.attributes['custom:jobTitle'] || '',
            country: userData.attributes['custom:country'] || '',
          });
        }
      } catch (error) {
        console.error('Error loading profile information:', error);
        setNotification({
          type: 'error',
          message: 'An error occurred while loading profile information.'
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadUserProfile();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    setNotification({ type: '', message: '' });

    try {
      // Here we would update the AWS Cognito profile
      // For now, we're just simulating
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNotification({
        type: 'success',
        message: 'Your profile information has been successfully updated.'
      });
    } catch (error) {
      console.error('Profile update error:', error);
      setNotification({
        type: 'error',
        message: 'An error occurred while updating your profile.'
      });
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {notification.message && (
        <div className={`alert ${notification.type === 'success' ? 'alert-success' : 'alert-error'} mb-6`}>
          <div>
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email (cannot be changed)</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              value={profile.email}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Company</span>
            </label>
            <input
              type="text"
              name="company"
              className="input input-bordered"
              value={profile.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="input input-bordered"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              className="input input-bordered"
              value={profile.jobTitle}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <select
              name="country"
              className="select select-bordered"
              value={profile.country}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="TR">Turkey</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="ES">Spain</option>
              <option value="NL">Netherlands</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className={`btn btn-primary ${isSaving ? 'loading' : ''}`}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
