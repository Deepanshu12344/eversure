import React from 'react';
import { Star, Eye, Download, ShoppingCart, Award, Shield } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  certifications: string[];
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200/50">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/3 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-3 left-3 right-3 flex space-x-2">
                <button className="flex-1 bg-white/90 hover:bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition-colors">
                  <Eye className="h-3 w-3" />
                  <span>View</span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                  <Download className="h-3 w-3" />
                </button>
              </div>
            </div>
            
            {/* Quality Badge */}
            <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              Premium Quality
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200"
                >
                  <Shield className="h-2 w-2 mr-1" />
                  {cert}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                <Award className="h-3 w-3 mr-2 text-blue-600" />
                Key Features:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Star className="h-2 w-2 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <ShoppingCart className="h-3 w-3" />
                <span>Request Quote</span>
              </button>
              <button className="px-4 py-2 border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-blue-50">
                Spec Sheet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-gray-200/50 relative">
      {/* Premium Badge */}
      <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
        Premium
      </div>

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 left-3 right-3 flex space-x-2">
            <button className="flex-1 bg-white/95 hover:bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Eye className="h-3 w-3" />
              <span>View Details</span>
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg">
              <Download className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Floating Quality Indicator */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
          <Star className="h-2 w-2" />
          <span>Premium</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.certifications.map((cert, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200/50 shadow-sm"
            >
              <Shield className="h-2 w-2 mr-1" />
              {cert}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <h4 className="text-sm font-semibold text-gray-900 flex items-center">
            <Award className="h-3 w-3 mr-2 text-blue-600" />
            Key Features:
          </h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Star className="h-2 w-2 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
            <ShoppingCart className="h-3 w-3" />
            <span>Request Quote</span>
          </button>
          <button className="px-3 py-2 border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 hover:scale-105">
            Specs
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default ProductCard;