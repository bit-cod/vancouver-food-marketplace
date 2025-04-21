'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get('type') || 'buyer';
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: userType,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // For demo purposes, we'll just simulate authentication
      if (isLogin) {
        // Simulate login
        console.log('Logging in with:', formData);
        // In a real app, we would call an API endpoint
        
        // Redirect based on user type
        router.push('/dashboard');
      } else {
        // Simulate registration
        console.log('Registering with:', formData);
        // In a real app, we would call an API endpoint
        
        // Redirect to complete profile
        router.push(`/auth/complete-profile?type=${formData.userType}`);
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold">Vancouver Food Marketplace</Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <button 
                  className={`px-4 py-2 ${isLogin ? 'bg-primary text-white' : 'bg-gray-200'} rounded-md`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button 
                  className={`px-4 py-2 ${!isLogin ? 'bg-primary text-white' : 'bg-gray-200'} rounded-md`}
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Login to Your Account' : 'Create an Account'}
            </h2>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    I am a:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="buyer"
                        checked={formData.userType === 'buyer'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Buyer
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="seller"
                        checked={formData.userType === 'seller'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Seller
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="transporter"
                        checked={formData.userType === 'transporter'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Transporter
                    </label>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
