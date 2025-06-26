import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Youtube, ArrowRight, Award, Shield, Globe } from 'lucide-react';

const Footer = () => {
  const productCategories = [
    "Infusion Therapy",
    "Anesthesia & Pain Management", 
    "Gastroenterology",
    "Urology",
    "Surgery & Wound Care",
    "Central Venous Access",
    "Respiratory Care"
  ];

  const quickLinks = [
    "About Us",
    "Quality & Certifications",
    "Manufacturing",
    "Research & Development",
    "News & Updates",
    "Careers",
    "Support Center"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" }
  ];

  const certifications = [
    { icon: Shield, text: "ISO 13485:2016" },
    { icon: Award, text: "CE Certified" },
    { icon: Globe, text: "FDA Registered" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-2 rounded-xl mr-3 shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110">
                    <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">M</div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">MedCorp Solutions</h3>
                  <p className="text-blue-300 text-xs">Professional Medical Devices</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Leading manufacturer of high-quality medical devices, committed to advancing healthcare 
                through innovation, excellence, and unwavering dedication to patient safety.
              </p>

              {/* Certifications */}
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-blue-300 mb-3">Our Certifications</h4>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 group cursor-pointer">
                    <div className="bg-blue-800/50 p-1 rounded-md group-hover:bg-blue-700/50 transition-colors">
                      <cert.icon className="h-3 w-3 text-blue-300" />
                    </div>
                    <span className="text-gray-300 text-xs group-hover:text-white transition-colors">{cert.text}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="bg-blue-800/50 p-1 rounded-md group-hover:bg-blue-700/50 transition-colors">
                    <MapPin className="h-3 w-3 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover:text-white transition-colors">
                    1234 Medical District, Healthcare City
                  </span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="bg-blue-800/50 p-1 rounded-md group-hover:bg-blue-700/50 transition-colors">
                    <Phone className="h-3 w-3 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="bg-blue-800/50 p-1 rounded-md group-hover:bg-blue-700/50 transition-colors">
                    <Mail className="h-3 w-3 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover:text-white transition-colors">
                    info@medcorpsolutions.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Product Categories */}
          <div>
            <h4 className="text-base font-bold mb-6 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-2"></div>
              Product Categories
            </h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group-hover:translate-x-2"
                  >
                    <ArrowRight className="h-2 w-2 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-2"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group-hover:translate-x-2"
                  >
                    <ArrowRight className="h-2 w-2 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Newsletter & Social */}
          <div>
            <h4 className="text-base font-bold mb-6 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-2"></div>
              Stay Connected
            </h4>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates, product announcements, and industry insights.
            </p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm backdrop-blur-sm transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-4 py-2 rounded-r-lg transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold mb-3 text-blue-300">Follow Us</h5>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-gray-800/50 ${social.color} p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-transparent group`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 rounded-xl border border-blue-700/30 backdrop-blur-sm">
              <h5 className="text-sm font-semibold mb-2 text-blue-300">Trusted Worldwide</h5>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-white">50+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">25+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p className="mb-1">© 2024 MedCorp Solutions. All rights reserved.</p>
              <p className="text-xs">Committed to advancing healthcare through innovation and excellence.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Final Trust Line */}
          <div className="mt-6 pt-4 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-500">
              ISO 13485:2016 Certified | CE Marked | FDA Registered | GMP Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;