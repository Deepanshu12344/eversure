// import React, { useState } from 'react';
// import { productData } from '../data/products';
// import ProductCard from './ProductCard';
// import { ChevronRight, Filter, Grid, List, Search } from 'lucide-react';

// const ProductCategories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(productData[0].id);
//   const [selectedSubcategory, setSelectedSubcategory] = useState(productData[0].subcategories[0].id);
//   const [viewMode, setViewMode] = useState('grid');
//   const [searchTerm, setSearchTerm] = useState('');

//   const currentCategory = productData.find(cat => cat.id === selectedCategory);
//   const currentSubcategory = currentCategory?.subcategories.find(sub => sub.id === selectedSubcategory);

//   const handleCategoryChange = (categoryId: string) => {
//     setSelectedCategory(categoryId);
//     const category = productData.find(cat => cat.id === categoryId);
//     if (category) {
//       setSelectedSubcategory(category.subcategories[0].id);
//     }
//   };

//   const filteredProducts = currentSubcategory?.products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase())
//   ) || [];

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
//                 {productData.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => handleCategoryChange(category.id)}
//                     className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
//                       selectedCategory === category.id
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
//                         : 'hover:bg-blue-50 hover:shadow-md text-gray-700 hover:scale-102'
//                     }`}
//                   >
//                     <div className="flex items-center space-x-3 relative z-10">
//                       <div className={`p-2 rounded-lg ${
//                         selectedCategory === category.id 
//                           ? 'bg-white/20' 
//                           : 'bg-blue-100 group-hover:bg-blue-200'
//                       } transition-colors`}>
//                         <category.icon className={`h-4 w-4 ${
//                           selectedCategory === category.id 
//                             ? 'text-white' 
//                             : 'text-blue-600'
//                         }`} />
//                       </div>
//                       <span className="font-medium text-sm">{category.name}</span>
//                     </div>
//                     <ChevronRight className={`h-3 w-3 transition-all duration-300 ${
//                       selectedCategory === category.id 
//                         ? 'rotate-90 text-white' 
//                         : 'group-hover:translate-x-1 text-gray-400'
//                     }`} />
                    
//                     {selectedCategory === category.id && (
//                       <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
//                     )}
//                   </button>
//                 ))}
//               </div>

//               {/* Category Stats */}
//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <div className="text-center">
//                   <div className="text-xl font-bold text-blue-600">{currentCategory?.subcategories.length}</div>
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
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentCategory?.name}</h3>
//                   <p className="text-gray-600 text-base">{currentCategory?.description}</p>
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
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 mb-6 overflow-hidden">
//               <div className="p-2">
//                 <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
//                   {currentCategory?.subcategories.map((subcategory) => (
//                     <button
//                       key={subcategory.id}
//                       onClick={() => setSelectedSubcategory(subcategory.id)}
//                       className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 relative overflow-hidden ${
//                         selectedSubcategory === subcategory.id
//                           ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
//                           : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-102'
//                       }`}
//                     >
//                       <span className="relative z-10">{subcategory.name}</span>
//                       {selectedSubcategory === subcategory.id && (
//                         <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Products Grid */}
//             <div>
//               <div className="flex items-center justify-between mb-6">
//                 <h4 className="text-xl font-bold text-gray-900">{currentSubcategory?.name}</h4>
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
//                   <ProductCard key={product.id} product={product} viewMode={viewMode} />
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
//   const fetchGroupedProducts = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/grouped');

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const text = await response.text(); // read as raw text first

//       try {
//         const data = JSON.parse(text); // attempt parsing manually
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

//       } catch (jsonError) {
//         console.error('❌ Failed to parse JSON:', text);
//         throw new Error('Invalid JSON received from server.');
//       }

//     } catch (err: any) {
//       console.error('❌ Error fetching products:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchGroupedProducts();
// }, []);


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
//                   <ProductCard key={product._id || product.id || product.productCode} product={product} />

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


import React, { useState } from 'react';
import { productData } from '../data/products';
import ProductCard from './ProductCard';
import { ChevronRight, Filter, Grid, List, Search } from 'lucide-react';

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(productData[0].id);
  const [selectedSubcategory, setSelectedSubcategory] = useState(productData[0].subcategories[0].id);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = productData.find(cat => cat.id === selectedCategory);
  const currentSubcategory = currentCategory?.subcategories.find(sub => sub.id === selectedSubcategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = productData.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedSubcategory(category.subcategories[0].id);
    }
  };

  const filteredProducts = currentSubcategory?.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mb-6 shadow-2xl">
            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Our Product Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive range of medical devices engineered for precision, safety, and reliability 
            across multiple healthcare specialties. Each product meets the highest international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <Filter className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Product Categories</h3>
              </div>
              <div className="space-y-2">
                {productData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                        : 'hover:bg-blue-50 hover:shadow-md text-gray-700 hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center space-x-3 relative z-10">
                      <div className={`p-2 rounded-lg ${
                        selectedCategory === category.id 
                          ? 'bg-white/20' 
                          : 'bg-blue-100 group-hover:bg-blue-200'
                      } transition-colors`}>
                        <span className="text-sm">{category.icon}</span>
                      </div>
                      <span className="font-medium text-sm">{category.name}</span>
                    </div>
                    <ChevronRight className={`h-3 w-3 transition-all duration-300 ${
                      selectedCategory === category.id 
                        ? 'rotate-90 text-white' 
                        : 'group-hover:translate-x-1 text-gray-400'
                    }`} />
                    {selectedCategory === category.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">{currentCategory?.subcategories.length}</div>
                  <div className="text-xs text-gray-600">Subcategories</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentCategory?.name}</h3>
                  <p className="text-gray-600 text-base">{currentCategory?.description}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
                    />
                  </div>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-white shadow-sm text-blue-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all ${
                        viewMode === 'list' 
                          ? 'bg-white shadow-sm text-blue-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 mb-6 overflow-hidden">
              <div className="p-2">
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                  {currentCategory?.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => setSelectedSubcategory(subcategory.id)}
                      className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 relative overflow-hidden ${
                        selectedSubcategory === subcategory.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-102'
                      }`}
                    >
                      <span className="relative z-10">{subcategory.name}</span>
                      {selectedSubcategory === subcategory.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-gray-900">{currentSubcategory?.name}</h4>
                <div className="text-sm text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </div>
              </div>
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 text-sm">Try adjusting your search terms or browse other categories.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;