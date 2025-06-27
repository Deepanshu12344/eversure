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

// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { ChevronRight, Filter, Grid, List, Search, Loader2 } from 'lucide-react';

// const ProductCategories = () => {
//   const [groupedProducts, setGroupedProducts] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');
//   const [viewMode, setViewMode] = useState('grid');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch grouped products from API
//   useEffect(() => {
//     const fetchGroupedProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/api/products/grouped'); // Adjust URL as needed
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setGroupedProducts(data);
        
//         // Set initial category and subcategory
//         const firstCategory = Object.keys(data)[0];
//         if (firstCategory) {
//           setSelectedCategory(firstCategory);
//           const firstSubcategory = Object.keys(data[firstCategory])[0];
//           if (firstSubcategory) {
//             setSelectedSubcategory(firstSubcategory);
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGroupedProducts();
//   }, []);

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategory(categoryId);
//     const subcategories = Object.keys(groupedProducts[categoryId] || {});
//     if (subcategories.length > 0) {
//       setSelectedSubcategory(subcategories[0]);
//     }
//   };

//   const currentProducts = groupedProducts[selectedCategory]?.[selectedSubcategory] || [];
  
//   const filteredProducts = currentProducts.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Get category icons (you may need to adjust this based on your icon strategy)
//   const getCategoryIcon = (category) => {
//     // You can create a mapping of category names to icons
//     const iconMap = {
//       'Infusion & Transfusion Therapy': '💉',
//       'Surgery & Wound Drainage': '🏥',
//       'Urology': '🩺',
//       'Central Venous Access Catheters': '🔬',
//       'Anesthesia': '😴',
//       'Gastroenterology': '🫁'
//     };
//     return iconMap[category] || '🔧';
//   };

//   if (loading) {
//     return (
//       <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-center min-h-64">
//             <div className="text-center">
//               <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
//               <p className="text-gray-600">Loading products...</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center py-12">
//             <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-red-600 text-2xl">⚠️</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Products</h3>
//             <p className="text-gray-600 text-sm">{error}</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Enhanced Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mb-6 shadow-2xl">
//             <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
//               <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg"></div>
//             </div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
//             Our Product Portfolio
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Comprehensive range of medical devices engineered for precision, safety, and reliability 
//             across multiple healthcare specialties. Each product meets the highest international standards.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Enhanced Category Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 sticky top-24">
//               <div className="flex items-center space-x-3 mb-6">
//                 <Filter className="h-5 w-5 text-blue-600" />
//                 <h3 className="text-lg font-bold text-gray-900">Product Categories</h3>
//               </div>
              
//               <div className="space-y-2">
//                 {Object.keys(groupedProducts).map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => handleCategoryChange(category)}
//                     className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
//                       selectedCategory === category
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
//                         : 'hover:bg-blue-50 hover:shadow-md text-gray-700 hover:scale-102'
//                     }`}
//                   >
//                     <div className="flex items-center space-x-3 relative z-10">
//                       <div className={`p-2 rounded-lg ${
//                         selectedCategory === category 
//                           ? 'bg-white/20' 
//                           : 'bg-blue-100 group-hover:bg-blue-200'
//                       } transition-colors`}>
//                         <span className="text-sm">{getCategoryIcon(category)}</span>
//                       </div>
//                       <span className="font-medium text-sm">{category}</span>
//                     </div>
//                     <ChevronRight className={`h-3 w-3 transition-all duration-300 ${
//                       selectedCategory === category 
//                         ? 'rotate-90 text-white' 
//                         : 'group-hover:translate-x-1 text-gray-400'
//                     }`} />
                    
//                     {selectedCategory === category && (
//                       <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
//                     )}
//                   </button>
//                 ))}
//               </div>

//               {/* Category Stats */}
//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <div className="text-center">
//                   <div className="text-xl font-bold text-blue-600">
//                     {selectedCategory ? Object.keys(groupedProducts[selectedCategory] || {}).length : 0}
//                   </div>
//                   <div className="text-xs text-gray-600">Subcategories</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Main Content */}
//           <div className="lg:col-span-3">
//             {/* Category Header with Search */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 mb-6">
//               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCategory}</h3>
//                   <p className="text-gray-600 text-base">
//                     Professional medical devices for {selectedCategory.toLowerCase()}
//                   </p>
//                 </div>
                
//                 <div className="flex items-center space-x-3">
//                   {/* Search Bar */}
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Search products..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
//                     />
//                   </div>
                  
//                   {/* View Mode Toggle */}
//                   <div className="flex bg-gray-100 rounded-lg p-1">
//                     <button
//                       onClick={() => setViewMode('grid')}
//                       className={`p-2 rounded-md transition-all ${
//                         viewMode === 'grid' 
//                           ? 'bg-white shadow-sm text-blue-600' 
//                           : 'text-gray-500 hover:text-gray-700'
//                       }`}
//                     >
//                       <Grid className="h-4 w-4" />
//                     </button>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       className={`p-2 rounded-md transition-all ${
//                         viewMode === 'list' 
//                           ? 'bg-white shadow-sm text-blue-600' 
//                           : 'text-gray-500 hover:text-gray-700'
//                       }`}
//                     >
//                       <List className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Subcategory Tabs */}
//             {selectedCategory && (
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 mb-6 overflow-hidden">
//                 <div className="p-2">
//                   <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
//                     {Object.keys(groupedProducts[selectedCategory] || {}).map((subcategory) => (
//                       <button
//                         key={subcategory}
//                         onClick={() => setSelectedSubcategory(subcategory)}
//                         className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 relative overflow-hidden ${
//                           selectedSubcategory === subcategory
//                             ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
//                             : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-102'
//                         }`}
//                       >
//                         <span className="relative z-10">{subcategory}</span>
//                         {selectedSubcategory === subcategory && (
//                           <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Products Grid */}
//             <div>
//               <div className="flex items-center justify-between mb-6">
//                 <h4 className="text-xl font-bold text-gray-900">{selectedSubcategory}</h4>
//                 <div className="text-sm text-gray-600">
//                   {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
//                 </div>
//               </div>
              
//               <div className={`grid gap-6 ${
//                 viewMode === 'grid' 
//                   ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
//                   : 'grid-cols-1'
//               }`}>
//                 {filteredProducts.map((product) => (
//                   <ProductCard key={product._id || product.id} product={product} viewMode={viewMode} />
//                 ))}
//               </div>

//               {filteredProducts.length === 0 && (
//                 <div className="text-center py-12">
//                   <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Search className="h-10 w-10 text-gray-400" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
//                   <p className="text-gray-600 text-sm">Try adjusting your search terms or browse other categories.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductCategories;