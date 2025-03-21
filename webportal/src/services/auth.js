// Temporary authentication service - uses localStorage instead of AWS Cognito

// localStorage keys for user data
const USER_KEY = 'asp_user';
const AUTH_TOKEN_KEY = 'asp_auth_token';

// User sign in
export async function signIn(email, password) {
  // Simple validation for development
  if (email === 'demo@example.com' && password === 'password123') {
    const user = {
      id: 'user-1',
      username: email,
      attributes: {
        name: 'Demo User',
        email: email,
        'custom:company': 'Demo Company',
        phone_number: '+15551234567',
        'custom:jobTitle': 'Developer',
        'custom:country': 'US'
      }
    };
    
    const token = 'demo-token-' + Math.random().toString(36).substring(2);
    
    // Save user and token information
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    
    // Add token to cookie
    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
    
    // Check if user is admin based on email (demo implementation)
    const isAdmin = email === 'demo@example.com';
    
    // Save admin status in cookie
    if (isAdmin) {
      document.cookie = `isAdmin=true; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
    } else {
      document.cookie = `isAdmin=false; path=/; max-age=${60 * 60 * 24 * 7}`;
    }
    
    return user;
  } else {
    throw new Error('Email or password is incorrect.');
  }
}

// User registration
export async function signUp(email, password, name, company = '') {
  // In reality, we would register with AWS Cognito here
  // For now, we're simulating sending a verification code
  
  if (email === 'demo@example.com') {
    throw new Error('This email address is already in use.');
  }
  
  // Success
  return true;
}

// Registration confirmation
export async function confirmSignUp(email, code) {
  // Check verification code (simple check for development)
  if (code === '123456' || code === '123123') {
    return true;
  } else {
    throw new Error('Verification code is invalid.');
  }
}

// Password reset request
export async function forgotPassword(email) {
  // Check email address (accepts any email here)
  // In a real application, AWS Cognito would check if the user exists
  return true;
}

// Password reset confirmation
export async function confirmForgotPassword(email, code, newPassword) {
  // Check verification code (simple check for development)
  if (code === '123456' || code === '123123') {
    return true;
  } else {
    throw new Error('Verification code is invalid.');
  }
}

// User sign out
export async function signOut() {
  // Clear user and token information
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
  
  // Remove cookies
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'isAdmin=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  
  return true;
}

// Get current user
export async function getCurrentUser() {
  // Get user information from localStorage
  const userJson = localStorage.getItem(USER_KEY);
  
  if (!userJson) {
    return null;
  }
  
  try {
    return JSON.parse(userJson);
  } catch (error) {
    console.error('Error parsing user information:', error);
    return null;
  }
}

// Refresh user session
export async function refreshToken() {
  // In a real application, token refresh would happen here
  // We're just simulating it
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  
  if (!token) {
    throw new Error('Session not found.');
  }
  
  // Token refresh simulated
  return true;
}

// Translate auth error messages
function translateAuthError(error) {
  // If error is a string, use it directly
  if (typeof error === 'string') {
    return new Error(error);
  }
  
  // errorCode can be used as string
  const errorCode = error.code || error.name || 'default';
  
  const errorMap = {
    'UserNotFoundException': { message: 'User not found.' },
    'NotAuthorizedException': { message: 'Email or password is incorrect.' },
    'UserNotConfirmedException': { message: 'Your account has not been verified yet.' },
    'UsernameExistsException': { message: 'This email address is already in use.' },
    'InvalidPasswordException': { message: 'Password does not comply with policy. It must contain at least 8 characters, uppercase letters, lowercase letters, and numbers.' },
    'CodeMismatchException': { message: 'Verification code is invalid.' },
    'ExpiredCodeException': { message: 'Verification code has expired. Please request a new code.' },
    'LimitExceededException': { message: 'Too many attempts. Please try again later.' },
    'default': { message: 'An error occurred. Please try again later.' }
  };

  const errorInfo = errorMap[errorCode] || errorMap['default'];
  return new Error(errorInfo.message);
}

// Get admin permissions for a user (update to include admin flag setting)
export async function getAdminPermissions(user) {
  // In a real app, this would check AWS IAM/Cognito groups
  // For now, we're simulating based on email
  const isAdmin = user?.attributes?.email === 'demo@example.com';
  
  // Set admin cookie for middleware to use
  if (isAdmin) {
    document.cookie = `isAdmin=true; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
  } else {
    document.cookie = 'isAdmin=false; path=/; max-age=${60 * 60 * 24 * 7}';
  }
  
  // Basic permissions structure
  const permissions = {
    canAccessUsers: false,
    canAccessServices: false,
    canAccessBilling: false,
    canAccessLogs: false,
    canAccessSettings: false,
  };
  
  // If user is admin, grant all permissions
  if (isAdmin) {
    Object.keys(permissions).forEach(key => {
      permissions[key] = true;
    });
  }
  
  return permissions;
}
