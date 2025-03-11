import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import { montserrat, poppins } from "@/fonts";
import ProductListing from "@/components/products/ProductListing";
import Layout from "@/layout/Layout";
import Button from "@/components/common/Button";
import { items } from "@/components/products/ProductListing"; // Import your existing items
import { ProductDetailProps } from "@/interfaces";

function Products() {
  // State for filtering and sorting
  const [filteredProducts, setFilteredProducts] = useState<ProductDetailProps[]>(items);
  const [category, setCategory] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Show 4 products per page
  
  // Apply filtering and sorting whenever filters change
  useEffect(() => {
    let result = [...items];
    
    // Apply category filter
    if (category) {
      result = result.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Apply sorting
    if (sortOrder) {
      result = result.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        
        if (sortOrder === 'ascending') {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [category, sortOrder]);
  
  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Get unique categories from products for the filter dropdown
  const categories = [...new Set(items.map(item => item.category))];
  
  // Page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="min-h-screen bg-[#FAFAFA] pb-20"> {/* Warm White Background */}
      {/* Headings */}
      <div className="text-center pt-10">
        <h2
          className={`${montserrat.className} text-[#008080] text-3xl md:text-4xl lg:text-5xl font-bold`} /* Vibrant Teal */
        >
          Your One-Stop Campus Marketplace
        </h2>
        <p
          className={`${poppins.className} text-[#1E293B] text-lg md:text-xl my-2`} /* Charcoal Black */
        >
          Click a product to view details
        </p>
      </div>

      {/* Filter and sort select */}
      <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between max-w-[90%] mx-auto mt-10">
        <div className="bg-[#E5E7EB] w-full md:w-max border border-[#1E293B] rounded-lg p-2 flex items-center gap-2"> {/* Cool Grey Background */}
          <label htmlFor="category-select" className="text-base text-[#1E293B]/50"> {/* Charcoal Black with opacity */}
            Filter by:
          </label>
          <select
            name="category-select"
            id="category-select"
            className="text-[#1E293B] cursor-pointer flex-1 md:flex-none outline-none bg-transparent" /* Charcoal Black */
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-[#E5E7EB] w-full md:w-max border border-[#1E293B] rounded-lg p-2 flex items-center gap-2"> {/* Cool Grey Background */}
          <label htmlFor="sort-select" className="text-base text-[#1E293B]/50"> {/* Charcoal Black with opacity */}
            Sort by price:
          </label>
          <select
            name="sort-select"
            id="sort-select"
            className="text-[#1E293B] flex-1 cursor-pointer outline-none bg-transparent" /* Charcoal Black */
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      {/* Display filtered products count */}
      <div className="max-w-[90%] mx-auto mt-4 text-[#1E293B]">
        <p>
          Showing {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
        </p>
      </div>

      {/* Product Listing */}
      <ProductListing filteredItems={currentProducts} />

      {/* Pagination buttons */}
      <div className="flex items-center max-w-[90%] mx-auto justify-between mt-8">
        <Button
          action={handlePrevPage}
          moreStyles={`text-white bg-[#008080] py-2 px-10 rounded-md font-bold ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0073E6] cursor-pointer active:scale-95'}`} /* Vibrant Teal with Electric Blue hover */
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <div className="text-[#1E293B]">
          Page {currentPage} of {Math.max(1, Math.ceil(filteredProducts.length / productsPerPage))}
        </div>
        <Button
          action={handleNextPage}
          moreStyles={`text-white bg-[#008080] py-2 px-10 rounded-md font-bold ${currentPage >= Math.ceil(filteredProducts.length / productsPerPage) || filteredProducts.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0073E6] cursor-pointer active:scale-95'}`} /* Vibrant Teal with Electric Blue hover */
          disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage) || filteredProducts.length === 0}
        >
          Next
        </Button>
      </div>
    </section>
  );
}

Products.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Products;