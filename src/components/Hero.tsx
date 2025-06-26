import React from 'react';
import { Shield, Award, Globe, ArrowRight, Play, Star, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <Shield className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">ISO 13485:2016 Certified Excellence</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                    Leading Medical
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                    Device Innovation
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Pioneering the future of healthcare with precision-engineered medical devices. 
                  From IV cannulas to surgical instruments, we deliver 
                  <span className="text-cyan-300 font-semibold"> quality that saves lives</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Explore Products</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 hover:scale-105">
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "25+", label: "Years Experience", icon: Star },
                { number: "50+", label: "Countries Served", icon: Globe },
                { number: "100+", label: "Product Lines", icon: Zap }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <stat.icon className="h-6 w-6 text-cyan-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-cyan-300 mb-1">{stat.number}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="lg:pl-8">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl transform rotate-3 scale-105 opacity-50 group-hover:rotate-6 transition-transform duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical Professional"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm text-blue-900 p-4 rounded-xl shadow-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-white/50">
                  <Award className="h-8 w-8 text-emerald-500 mb-2" />
                  <div className="font-bold text-sm">CE Certified</div>
                  <div className="text-xs text-gray-600">European Conformity</div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur opacity-50 -z-10"></div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm text-blue-900 p-4 rounded-xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-white/50">
                  <Globe className="h-8 w-8 text-blue-500 mb-2" />
                  <div className="font-bold text-sm">Global Reach</div>
                  <div className="text-xs text-gray-600">50+ Countries</div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-50 -z-10"></div>
                </div>

                {/* Quality Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  99.9% Quality Rating
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl transform scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <p className="text-blue-200 text-base">Trusted by healthcare professionals worldwide</p>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {['ISO 13485', 'CE Mark', 'FDA Registered', 'GMP Compliant'].map((cert, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-white font-medium text-sm">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;