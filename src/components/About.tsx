import React from 'react';
import { Factory, Users, Award, Microscope, Globe, Shield, Zap, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing",
      description: "Advanced manufacturing facility with cleanroom assembly, automated packaging, and stringent quality control systems ensuring precision in every product.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals and medical device specialists dedicated to innovation and excellence in healthcare technology development.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Award,
      title: "Quality Certifications",
      description: "ISO 13485:2016, CE marked, FDA registered, and GMP compliant products ensuring highest international safety standards.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Microscope,
      title: "Research & Development",
      description: "Continuous innovation in medical technology with dedicated R&D facilities to meet evolving healthcare needs worldwide.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving healthcare providers across 50+ countries with reliable distribution networks and local support systems.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to patient safety with rigorous testing protocols and comprehensive quality assurance measures.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: Target },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "100+", label: "Product Lines", icon: Zap },
    { number: "99.9%", label: "Quality Rating", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-6 shadow-lg">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
            Pioneering Medical Device Excellence
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With over two decades of experience, MedCorp Solutions stands at the forefront of medical device manufacturing. 
            We specialize in developing high-quality, innovative medical devices that meet the stringent requirements of 
            healthcare professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Leading Innovation in Healthcare Technology
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Our comprehensive product portfolio spans across multiple medical specialties, from infusion therapy to 
                surgical instruments, all manufactured in our state-of-the-art facility with rigorous quality control measures.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We combine cutting-edge technology with decades of expertise to deliver medical devices that healthcare 
                professionals trust. Our commitment to innovation drives us to continuously improve and expand our offerings 
                to meet the evolving needs of modern healthcare.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Manufacturing Facility"
                className="rounded-xl shadow-2xl w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold mb-1">Advanced Manufacturing</h4>
                <p className="text-blue-100 text-sm">State-of-the-art cleanroom facilities</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Quality Control Laboratory"
                  className="rounded-lg shadow-lg h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-lg"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-semibold">Quality Control</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Research Laboratory"
                  className="rounded-lg shadow-lg h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-lg"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-semibold">R&D Laboratory</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">Our Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`relative bg-white/80 backdrop-blur-sm ${feature.bgColor} border-2 ${feature.borderColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden`}>
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-3 right-3 w-24 h-24 border border-current rounded-full"></div>
                    <div className="absolute bottom-3 left-3 w-16 h-16 border border-current rounded-full"></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Icon Shadow/Glow */}
                    <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Card Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 rounded-2xl p-10 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Partner with Excellence?</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-base leading-relaxed">
                Join thousands of healthcare professionals worldwide who trust our medical devices. 
                Let's discuss how we can support your healthcare facility's needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore Our Products
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 backdrop-blur-sm">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;