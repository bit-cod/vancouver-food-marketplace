'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [userType, setUserType] = useState('buyer');
  const [userName, setUserName] = useState('');
  
  // Simulate loading user data
  useEffect(() => {
    // In a real app, we would fetch this from an API
    setUserName('John Doe');
    setUserType('buyer');
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Vancouver Food Marketplace</Link>
          <div className="flex items-center space-x-4">
            <span>Welcome, {userName}</span>
            <Link href="/" className="hover:underline">Logout</Link>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        {/* Buyer Dashboard */}
        {userType === 'buyer' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Browse Products</h2>
              <p className="mb-4">Find fresh local products from fishermen and farmers in Vancouver.</p>
              <Link href="/search" className="btn-primary inline-block">Search Products</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">My Orders</h2>
              <p className="mb-4">View and manage your orders.</p>
              <Link href="/orders" className="btn-primary inline-block">View Orders</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Messages</h2>
              <p className="mb-4">Communicate with sellers and transporters.</p>
              <Link href="/messages" className="btn-primary inline-block">View Messages</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">My Profile</h2>
              <p className="mb-4">Update your profile information and preferences.</p>
              <Link href="/profile" className="btn-primary inline-block">Edit Profile</Link>
            </div>
          </div>
        )}
        
        {/* Seller Dashboard */}
        {userType === 'seller' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">My Listings</h2>
              <p className="mb-4">Manage your product listings.</p>
              <Link href="/listings" className="btn-primary inline-block">View Listings</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Create Listing</h2>
              <p className="mb-4">Add a new product to your inventory.</p>
              <Link href="/listings/create" className="btn-primary inline-block">Add Product</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Transportation</h2>
              <p className="mb-4">Request transportation for your products.</p>
              <Link href="/transportation/requests/create" className="btn-primary inline-block">Request Transport</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Orders & Sales</h2>
              <p className="mb-4">View and manage incoming orders.</p>
              <Link href="/sales" className="btn-primary inline-block">View Sales</Link>
            </div>
          </div>
        )}
        
        {/* Transporter Dashboard */}
        {userType === 'transporter' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Available Requests</h2>
              <p className="mb-4">Browse transportation requests from sellers.</p>
              <Link href="/transportation/requests/available" className="btn-primary inline-block">View Requests</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">My Assignments</h2>
              <p className="mb-4">Manage your current transportation assignments.</p>
              <Link href="/transportation/assignments" className="btn-primary inline-block">View Assignments</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Messages</h2>
              <p className="mb-4">Communicate with sellers and buyers.</p>
              <Link href="/messages" className="btn-primary inline-block">View Messages</Link>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">My Profile</h2>
              <p className="mb-4">Update your profile and transportation details.</p>
              <Link href="/profile" className="btn-primary inline-block">Edit Profile</Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Vancouver Food Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
