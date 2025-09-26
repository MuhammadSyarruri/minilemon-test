export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 PustakaDunia. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-indigo-700">
            Facebook
          </a>
          <a href="#" className="hover:text-indigo-700">
            Twitter
          </a>
          <a href="#" className="hover:text-indigo-700">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
