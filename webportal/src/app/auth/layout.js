export const metadata = {
  title: 'ASP Cloud Solutions - Authentication',
  description: 'ASP Cloud Solutions authentication page. Sign in or create an account.',
};

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <img 
            className="mx-auto h-14 w-auto" 
            src="/images/logo.png" 
            alt="ASP Cloud Solutions Logo" 
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            ASP Cloud Solutions
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your trusted partner for cloud solutions
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
