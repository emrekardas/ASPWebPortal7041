"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function AdminSettings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'ASP Cloud Solutions',
    siteDescription: 'Your trusted partner for cloud solutions',
    contactEmail: 'support@aspcloudsolutions.com',
    allowRegistration: true,
    requireEmailVerification: true,
    maintenanceMode: false
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    passwordMinLength: 8,
    passwordRequireUppercase: true,
    passwordRequireNumber: true,
    passwordRequireSpecial: true,
    maxLoginAttempts: 5,
    sessionTimeout: 30,
    twoFactorAuth: false
  });

  // IAM Settings
  const [iamSettings, setIamSettings] = useState({
    awsRegion: 'us-east-1',
    userPoolId: 'us-east-1_xxxxxxxxx',
    clientId: 'abcdefghijklmnopqrstu',
    identityPoolId: 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  });

  function handleGeneralChange(e) {
    const { name, value, type, checked } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  function handleSecurityChange(e) {
    const { name, value, type, checked } = e.target;
    setSecuritySettings({
      ...securitySettings,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) : value
    });
  }

  function handleIamChange(e) {
    const { name, value } = e.target;
    setIamSettings({
      ...iamSettings,
      [name]: value
    });
  }

  async function handleSaveSettings() {
    setIsSaving(true);
    setNotification({ show: false, type: '', message: '' });
    
    try {
      // Simulate API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success notification
      setNotification({
        show: true,
        type: 'success',
        message: 'Settings saved successfully!'
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error saving settings:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to save settings. Please try again.'
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'general'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'security'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'iam'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('iam')}
          >
            IAM Configuration
          </button>
        </nav>
      </div>
      
      {/* Notification */}
      {notification.show && (
        <div className={`p-4 ${notification.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <p className="text-sm font-medium">{notification.message}</p>
        </div>
      )}
      
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">General Settings</h3>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Name</label>
                <input
                  type="text"
                  id="siteName"
                  name="siteName"
                  className="mt-1 input input-bordered w-full"
                  value={generalSettings.siteName}
                  onChange={handleGeneralChange}
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="mt-1 input input-bordered w-full"
                  value={generalSettings.contactEmail}
                  onChange={handleGeneralChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">Site Description</label>
              <textarea
                id="siteDescription"
                name="siteDescription"
                rows="3"
                className="mt-1 textarea textarea-bordered w-full"
                value={generalSettings.siteDescription}
                onChange={handleGeneralChange}
              ></textarea>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="allowRegistration"
                  name="allowRegistration"
                  className="checkbox checkbox-primary"
                  checked={generalSettings.allowRegistration}
                  onChange={handleGeneralChange}
                />
                <label htmlFor="allowRegistration" className="ml-2 block text-sm text-gray-900">
                  Allow new user registrations
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="requireEmailVerification"
                  name="requireEmailVerification"
                  className="checkbox checkbox-primary"
                  checked={generalSettings.requireEmailVerification}
                  onChange={handleGeneralChange}
                />
                <label htmlFor="requireEmailVerification" className="ml-2 block text-sm text-gray-900">
                  Require email verification for new accounts
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  name="maintenanceMode"
                  className="checkbox checkbox-primary"
                  checked={generalSettings.maintenanceMode}
                  onChange={handleGeneralChange}
                />
                <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-900">
                  Enable maintenance mode
                </label>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="passwordMinLength" className="block text-sm font-medium text-gray-700">
                  Minimum Password Length
                </label>
                <input
                  type="number"
                  id="passwordMinLength"
                  name="passwordMinLength"
                  min="6"
                  max="32"
                  className="mt-1 input input-bordered w-full"
                  value={securitySettings.passwordMinLength}
                  onChange={handleSecurityChange}
                />
              </div>
              
              <div>
                <label htmlFor="maxLoginAttempts" className="block text-sm font-medium text-gray-700">
                  Maximum Login Attempts
                </label>
                <input
                  type="number"
                  id="maxLoginAttempts"
                  name="maxLoginAttempts"
                  min="1"
                  max="10"
                  className="mt-1 input input-bordered w-full"
                  value={securitySettings.maxLoginAttempts}
                  onChange={handleSecurityChange}
                />
              </div>
              
              <div>
                <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  id="sessionTimeout"
                  name="sessionTimeout"
                  min="5"
                  max="120"
                  className="mt-1 input input-bordered w-full"
                  value={securitySettings.sessionTimeout}
                  onChange={handleSecurityChange}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-900">Password Requirements</h4>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="passwordRequireUppercase"
                  name="passwordRequireUppercase"
                  className="checkbox checkbox-primary"
                  checked={securitySettings.passwordRequireUppercase}
                  onChange={handleSecurityChange}
                />
                <label htmlFor="passwordRequireUppercase" className="ml-2 block text-sm text-gray-900">
                  Require at least one uppercase letter
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="passwordRequireNumber"
                  name="passwordRequireNumber"
                  className="checkbox checkbox-primary"
                  checked={securitySettings.passwordRequireNumber}
                  onChange={handleSecurityChange}
                />
                <label htmlFor="passwordRequireNumber" className="ml-2 block text-sm text-gray-900">
                  Require at least one number
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="passwordRequireSpecial"
                  name="passwordRequireSpecial"
                  className="checkbox checkbox-primary"
                  checked={securitySettings.passwordRequireSpecial}
                  onChange={handleSecurityChange}
                />
                <label htmlFor="passwordRequireSpecial" className="ml-2 block text-sm text-gray-900">
                  Require at least one special character
                </label>
              </div>
              
              <div className="flex items-center mt-6">
                <input
                  type="checkbox"
                  id="twoFactorAuth"
                  name="twoFactorAuth"
                  className="checkbox checkbox-primary"
                  checked={securitySettings.twoFactorAuth}
                  onChange={handleSecurityChange}
                />
                <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-900">
                  Enable Two-Factor Authentication for all users
                </label>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'iam' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">AWS IAM Configuration</h3>
            <p className="text-sm text-gray-500 mb-4">
              Configure AWS IAM settings for user authentication and authorization.
            </p>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="awsRegion" className="block text-sm font-medium text-gray-700">AWS Region</label>
                <select
                  id="awsRegion"
                  name="awsRegion"
                  className="mt-1 select select-bordered w-full"
                  value={iamSettings.awsRegion}
                  onChange={handleIamChange}
                >
                  <option value="us-east-1">US East (N. Virginia)</option>
                  <option value="us-east-2">US East (Ohio)</option>
                  <option value="us-west-1">US West (N. California)</option>
                  <option value="us-west-2">US West (Oregon)</option>
                  <option value="eu-west-1">EU (Ireland)</option>
                  <option value="eu-central-1">EU (Frankfurt)</option>
                  <option value="ap-northeast-1">Asia Pacific (Tokyo)</option>
                  <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="userPoolId" className="block text-sm font-medium text-gray-700">Cognito User Pool ID</label>
                <input
                  type="text"
                  id="userPoolId"
                  name="userPoolId"
                  className="mt-1 input input-bordered w-full"
                  value={iamSettings.userPoolId}
                  onChange={handleIamChange}
                />
              </div>
              
              <div>
                <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">App Client ID</label>
                <input
                  type="text"
                  id="clientId"
                  name="clientId"
                  className="mt-1 input input-bordered w-full"
                  value={iamSettings.clientId}
                  onChange={handleIamChange}
                />
              </div>
              
              <div>
                <label htmlFor="identityPoolId" className="block text-sm font-medium text-gray-700">Identity Pool ID</label>
                <input
                  type="text"
                  id="identityPoolId"
                  name="identityPoolId"
                  className="mt-1 input input-bordered w-full"
                  value={iamSettings.identityPoolId}
                  onChange={handleIamChange}
                />
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Warning</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Changing these settings may affect user authentication. Make sure you have the correct IAM configuration
                      before saving changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 flex justify-end">
        <button
          type="button"
          className={`btn btn-primary ${isSaving ? 'loading' : ''}`}
          onClick={handleSaveSettings}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}
