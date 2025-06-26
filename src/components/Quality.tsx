import React from 'react';
import { Shield, Award, CheckCircle, Globe, Target, Zap, Users, TrendingUp } from 'lucide-react';

const Quality = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 13485:2016",
      description: "Medical Device Quality Management System",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Award,
      title: "CE Marking",
      description: "European Conformity Certification",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: CheckCircle,
      title: "GMP Compliant",
      description: "Good Manufacturing Practice Standards",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Globe,
      title: "FDA Registered",
      description: "US Food and Drug Administration",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const qualityFeatures = [
    { icon: Target, text: "Class 10,000 cleanroom manufacturing" },
    { icon: Zap, text: "Automated quality control systems" },
    { icon: CheckCircle, text: "100% product testing and validation" },
    { icon: TrendingUp, text: "Traceability throughout production" },
    { icon: Users, text: "Regular third-party auditing" },
    { icon: Award, text: "Continuous improvement programs" }
  ];

  const stats = [
    { number: "99.9%", label: "Quality Rating", color: "text-blue-600", bgColor: "bg-blue-50" },
    { number: "Zero", label: "Product Recalls", color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { number: "24/7", label: "Quality Monitoring", color: "text-purple-600", bgColor: "bg-purple-50" },
    { number: "50+", label: "Countries Certified", color: "text-orange-600", bgColor: "bg-orange-50" }
  ];

  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl mb-6 shadow-2xl">
            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Quality & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our unwavering commitment to excellence is reflected in our comprehensive quality management system 
            and internationally recognized certifications that ensure every product meets the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Certifications Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-emerald-600 mr-3" />
                International Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="group relative">
                    <div className={`relative bg-white/80 backdrop-blur-sm ${cert.bgColor} border-2 ${cert.borderColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden`}>
                      {/* Decorative Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-3 right-3 w-16 h-16 border border-current rounded-full"></div>
                        <div className="absolute bottom-3 left-3 w-12 h-12 border border-current rounded-full"></div>
                      </div>
                      
                      {/* Icon Container */}
                      <div className="relative mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                          <cert.icon className="h-6 w-6 text-white" />
                        </div>
                        {/* Icon Shadow/Glow */}
                        <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    {/* Card Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Quality Features */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                Quality Assurance Features
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 group">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm group-hover:text-emerald-700 transition-colors">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quality Image and Stats */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality Control Laboratory"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold mb-1">Advanced Quality Control</h4>
                  <p className="text-emerald-100 text-sm">State-of-the-art testing facilities</p>
                </div>

                {/* Quality Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ISO Certified Facility
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className={`${stat.bgColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-center border border-gray-200/50 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-2 right-2 w-12 h-12 border border-current rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 border border-current rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`text-2xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Quality Metrics */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-800 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full translate-x-8 translate-y-8"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold">Quality Performance</h4>
                </div>
                <p className="text-emerald-100 mb-4 leading-relaxed text-sm">
                  Our commitment to quality excellence has resulted in zero product recalls and 
                  maintains a 99.9% customer satisfaction rating across all product lines.
                </p>
                <div className="flex space-x-3">
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 backdrop-blur-sm border border-white/20">
                    View Quality Report
                  </button>
                  <button className="bg-white text-emerald-900 hover:bg-emerald-50 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Download Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;