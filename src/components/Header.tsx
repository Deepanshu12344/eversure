import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 group">
                  <Phone className="h-3 w-3 group-hover:scale-110 transition-transform" />
                  <span className="hover:text-cyan-300 transition-colors cursor-pointer text-xs">+91-020-6766-1200</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Mail className="h-3 w-3 group-hover:scale-110 transition-transform" />
                  <span className="hover:text-cyan-300 transition-colors cursor-pointer text-xs">info@medcorpsolutions.com</span>
                </div>
              </div>
              <div className="hidden md:flex space-x-2">
                <span className="bg-emerald-500/90 hover:bg-emerald-500 px-2 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer">ISO 13485:2016</span>
                <span className="bg-blue-500/90 hover:bg-blue-500 px-2 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer">CE CERTIFIED</span>
                <span className="bg-purple-500/90 hover:bg-purple-500 px-2 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer">GMP COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-2 rounded-xl mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-lg relative">
                  M
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}>MedCorp Solutions</h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-blue-100'
              }`}>Professional Medical Devices</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {['Home', 'About', 'Products', 'Quality', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-cyan-300 hover:bg-white/10'
                }`}
              >
                {item}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:text-cyan-300 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
          <div className="px-4 py-2 space-y-1">
            {['Home', 'About', 'Products', 'Quality', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;