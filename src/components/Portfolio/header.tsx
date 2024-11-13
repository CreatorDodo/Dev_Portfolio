function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-blue-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900">CreatorDodo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-blue-600 hover:text-blue-800">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-blue-600 hover:text-blue-800">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="text-blue-600 hover:text-blue-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
