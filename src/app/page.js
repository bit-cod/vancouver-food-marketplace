import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vancouver Food Marketplace</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/auth" className="hover:underline">Login / Register</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Connect with Local Fishermen and Farmers</h2>
          <p className="text-xl mb-8">Buy fresh, local produce directly from the source in Vancouver, BC</p>
          <div className="flex justify-center gap-4">
            <Link href="/auth?type=buyer" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              I'm a Buyer
            </Link>
            <Link href="/auth?type=seller" className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              I'm a Seller
            </Link>
            <Link href="/auth?type=transporter" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
              I'm a Transporter
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-2">
                <li>• Browse fresh local products</li>
                <li>• Connect directly with fishermen and farmers</li>
                <li>• Arrange pickup or delivery</li>
                <li>• Support local food producers</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Sellers</h3>
              <ul className="space-y-2">
                <li>• List your products easily</li>
                <li>• Reach more customers</li>
                <li>• Manage your inventory</li>
                <li>• Connect with transportation providers</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Transporters</h3>
              <ul className="space-y-2">
                <li>• Find delivery opportunities</li>
                <li>• Set your own schedule</li>
                <li>• Connect with local businesses</li>
                <li>• Earn money helping your community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Vancouver Food Marketplace</h3>
              <p>Connecting buyers with local fishermen and farmers</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><Link href="/auth" className="hover:underline">Login / Register</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p>&copy; 2025 Vancouver Food Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
