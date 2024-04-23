function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">About OLX</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About OLX Group
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  OLX Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  OLX for Businesses
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">OLX</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Legal & Privacy Information
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Download OLX App</h2>
            <div className="flex">
              <a href="#" className="mr-4">
                <img src="app-store.png" alt="App Store" className="h-12" />
              </a>
              <a href="#">
                <img src="google-play.png" alt="Google Play" className="h-12" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm">© 2024 OLX</p>
      </div>
    </footer>
  );
}

export default Footer;
