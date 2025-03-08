import type { ReactElement } from "react";
import { montserrat, poppins } from "@/fonts";
import ProductListing from "@/components/products/ProductListing";
import Layout from "@/layout/Layout";
import Button from "@/components/common/Button";

function Products() {
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
          <label htmlFor="filter-select" className="text-base text-[#1E293B]/50"> {/* Charcoal Black with opacity */}
            Filter by:
          </label>
          <select
            name="filter-select"
            id="filter-select"
            className="text-[#1E293B] cursor-pointer flex-1 md:flex-none outline-none" /* Charcoal Black */
          >
            <option defaultValue="" disabled selected>
              -- choose category --
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>

        <div className="bg-[#E5E7EB] w-full md:w-max border border-[#1E293B] rounded-lg p-2 flex items-center gap-2"> {/* Cool Grey Background */}
          <label htmlFor="filter-select" className="text-base text-[#1E293B]/50"> {/* Charcoal Black with opacity */}
            Sort by price:
          </label>
          <select
            name="filter-select"
            id="filter-select"
            className="text-[#1E293B] flex-1 cursor-pointer outline-none" /* Charcoal Black */
          >
            <option value="" disabled selected>
              -- &nbsp; choose &nbsp; --
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      {/* Product Listing */}
      <ProductListing />

      {/* Pagination buttons */}
      <div className="flex items-center max-w-[90%] mx-auto justify-between">
        <Button
          action={() => {}}
          moreStyles="text-white bg-[#008080] py-2 px-10 rounded-md font-bold hover:bg-[#0073E6] cursor-pointer active:scale-95" /* Vibrant Teal with Electric Blue hover */
        >
          Prev
        </Button>
        <Button
          action={() => {}}
          moreStyles="text-white bg-[#008080] py-2 px-10 rounded-md font-bold hover:bg-[#0073E6] cursor-pointer active:scale-95" /* Vibrant Teal with Electric Blue hover */
        >
          Next
        </Button>
      </div>
    </section>
  );
}

Products.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Products;
