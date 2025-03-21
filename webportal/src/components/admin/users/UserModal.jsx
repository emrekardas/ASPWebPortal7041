"use client";

import { useState } from 'react';

export default function UserModal({ user, onClose, onUpdatePermissions }) {
  const [permissions, setPermissions] = useState({
    canAccessUsers: user.permissions?.canAccessUsers || false,
    canAccessServices: user.permissions?.canAccessServices || false,
    canAccessBilling: user.permissions?.canAccessBilling || false,
    canAccessLogs: user.permissions?.canAccessLogs || false,
    canAccessSettings: user.permissions?.canAccessSettings || false,
    canCreateUsers: user.permissions?.canCreateUsers || false,
    canEditUsers: user.permissions?.canEditUsers || false,
    canDeleteUsers: user.permissions?.canDeleteUsers || false,
    canCreateServices: user.permissions?.canCreateServices || false,
    canEditServices: user.permissions?.canEditServices || false,
    canDeleteServices: user.permissions?.canDeleteServices || false,
  });
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [isActive, setIsActive] = useState(user.isActive);

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions({
      ...permissions,
      [name]: checked,
    });
  };

  const handleAdminChange = (e) => {
    const isAdminChecked = e.target.checked;
    setIsAdmin(isAdminChecked);
    
    // If user is made admin, grant all permissions
    if (isAdminChecked) {
      setPermissions({
        canAccessUsers: true,
        canAccessServices: true,
        canAccessBilling: true,
        canAccessLogs: true,
        canAccessSettings: true,
        canCreateUsers: true,
        canEditUsers: true,
        canDeleteUsers: true,
        canCreateServices: true,
        canEditServices: true,
        canDeleteServices: true,
      });
    }
  };

  const handleSave = () => {
    onUpdatePermissions(user.id, {
      ...permissions,
      isAdmin,
      isActive,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Edit User</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-2">User Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user.name}
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={user.email}
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user.company || ''}
                  disabled
                />
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    id="isAdmin"
                    name="isAdmin"
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={isAdmin}
                    onChange={handleAdminChange}
                  />
                  <label htmlFor="isAdmin" className="ml-2 block text-sm text-gray-900">
                    Administrator
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="isActive"
                    name="isActive"
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                  <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Permissions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Page Access Permissions */}
              <div className="border rounded-lg p-4">
                <h5 className="font-medium mb-2">Page Access</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="canAccessUsers"
                      name="canAccessUsers"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canAccessUsers}
                      onChange={handlePermissionChange}
                      disabled={isAdmin} // Disabled if user is admin since they get all permissions
                    />
                    <label htmlFor="canAccessUsers" className="ml-2 block text-sm text-gray-900">
                      Users Management
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canAccessServices"
                      name="canAccessServices"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canAccessServices}
                      onChange={handlePermissionChange}
                      disabled={isAdmin}
                    />
                    <label htmlFor="canAccessServices" className="ml-2 block text-sm text-gray-900">
                      Services Management
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canAccessBilling"
                      name="canAccessBilling"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canAccessBilling}
                      onChange={handlePermissionChange}
                      disabled={isAdmin}
                    />
                    <label htmlFor="canAccessBilling" className="ml-2 block text-sm text-gray-900">
                      Billing Management
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canAccessLogs"
                      name="canAccessLogs"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canAccessLogs}
                      onChange={handlePermissionChange}
                      disabled={isAdmin}
                    />
                    <label htmlFor="canAccessLogs" className="ml-2 block text-sm text-gray-900">
                      System Logs
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canAccessSettings"
                      name="canAccessSettings"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canAccessSettings}
                      onChange={handlePermissionChange}
                      disabled={isAdmin}
                    />
                    <label htmlFor="canAccessSettings" className="ml-2 block text-sm text-gray-900">
                      Settings
                    </label>
                  </div>
                </div>
              </div>
              
              {/* User Management Permissions */}
              <div className="border rounded-lg p-4">
                <h5 className="font-medium mb-2">Users</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="canCreateUsers"
                      name="canCreateUsers"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canCreateUsers}
                      onChange={handlePermissionChange}
                      disabled={isAdmin || !permissions.canAccessUsers}
                    />
                    <label htmlFor="canCreateUsers" className="ml-2 block text-sm text-gray-900">
                      Create Users
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canEditUsers"
                      name="canEditUsers"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canEditUsers}
                      onChange={handlePermissionChange}
                      disabled={isAdmin || !permissions.canAccessUsers}
                    />
                    <label htmlFor="canEditUsers" className="ml-2 block text-sm text-gray-900">
                      Edit Users
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canDeleteUsers"
                      name="canDeleteUsers"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canDeleteUsers}
                      onChange={handlePermissionChange}
                      disabled={isAdmin || !permissions.canAccessUsers}
                    />
                    <label htmlFor="canDeleteUsers" className="ml-2 block text-sm text-gray-900">
                      Delete Users
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Service Management Permissions */}
              <div className="border rounded-lg p-4">
                <h5 className="font-medium mb-2">Services</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="canCreateServices"
                      name="canCreateServices"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canCreateServices}
                      onChange={handlePermissionChange}
                      disabled={isAdmin || !permissions.canAccessServices}
                    />
                    <label htmlFor="canCreateServices" className="ml-2 block text-sm text-gray-900">
                      Create Services
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canEditServices"
                      name="canEditServices"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canEditServices}
                      onChange={handlePermissionChange}
                      disabled={isAdmin || !permissions.canAccessServices}
                    />
                    <label htmlFor="canEditServices" className="ml-2 block text-sm text-gray-900">
                      Edit Services
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="canDeleteServices"
                      name="canDeleteServices"
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={permissions.canDeleteServices}
                      onChange={handlePermissionChange}
                      disabled={isAdmin || !permissions.canAccessServices}
                    />
                    <label htmlFor="canDeleteServices" className="ml-2 block text-sm text-gray-900">
                      Delete Services
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
