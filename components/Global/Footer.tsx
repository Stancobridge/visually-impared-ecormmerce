import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <Link href="/about">About Us </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/policy">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul>
            <li className="mb-2">Electronics</li>
            <li className="mb-2">Clothing</li>
            <li className="mb-2">Home & Living</li>
            <li className="mb-2">Books</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">Support</h2>
          <ul>
            <li className="mb-2">FAQs</li>
            <li className="mb-2">Shipping & Returns</li>
            <li className="mb-2">Customer Service</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-4">Subscribe to our newsletter for updates</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white px-4 py-2 rounded-l"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
