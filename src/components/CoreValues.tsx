import React from 'react';
import { Users, Scale, MessageCircle, HandHeart, Leaf } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: "Customers First",
      description: "We prioritize our customers' needs and satisfaction above all else, ensuring every product meets the highest standards of quality and reliability.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Scale,
      title: "Ethical Practices",
      description: "We conduct business with integrity, transparency, and fairness, maintaining ethical standards in all our operations and relationships.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: MessageCircle,
      title: "Honest Communication",
      description: "We believe in open, transparent communication with all stakeholders, providing accurate information and maintaining trust through honesty.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: HandHeart,
      title: "Respect Employees",
      description: "We value our team members, fostering a supportive work environment that promotes growth, innovation, and mutual respect.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Leaf,
      title: "Environment Care",
      description: "We are committed to sustainable practices and environmental responsibility in our manufacturing processes and business operations.",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-6 shadow-lg">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
            Our Value System
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl font-medium text-gray-700 mb-3">Our Route to Success</p>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our core values are more than principles – they're the DNA of our organization, 
            shaping every decision, interaction, and innovation that drives our success in the medical device industry.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mb-12">
          {/* Top Row - 3 values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {values.slice(0, 3).map((value, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className={`relative bg-white/80 backdrop-blur-sm ${value.bgColor} border-2 ${value.borderColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center overflow-hidden`}>
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-3 right-3 w-24 h-24 border border-current rounded-full"></div>
                    <div className="absolute bottom-3 left-3 w-16 h-16 border border-current rounded-full"></div>
                  </div>
                  
                  {/* Floating Icon Container */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Icon Shadow/Glow */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 mx-auto`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {value.description}
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

          {/* Bottom Row - 2 values centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {values.slice(3, 5).map((value, index) => (
                <div key={index + 3} className="group relative">
                  {/* Card */}
                  <div className={`relative bg-white/80 backdrop-blur-sm ${value.bgColor} border-2 ${value.borderColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center overflow-hidden`}>
                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-3 right-3 w-24 h-24 border border-current rounded-full"></div>
                      <div className="absolute bottom-3 left-3 w-16 h-16 border border-current rounded-full"></div>
                    </div>
                    
                    {/* Floating Icon Container */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Icon Shadow/Glow */}
                      <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 mx-auto`}></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {value.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Card Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20">
                    {index + 4}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 rounded-2xl p-10 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Experience Our Values in Action</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-base leading-relaxed">
                These values aren't just words on a page – they're the living principles that guide our daily operations, 
                shape every interaction with our customers, and drive our commitment to excellence in medical device manufacturing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More About Us
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 backdrop-blur-sm">
                  View Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;