import React, { useEffect, useState } from 'react'
import { useGetData } from '../context/DataContext'
import FilterSection from '../components/FilterSection';
import Loader from '../components/common/Loader';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Lottie from 'lottie-react';
import ani from '../assets/ani.json'
import { FaFilter } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';


const Products = () => {
  const { data, fetchAllProducts, categoryOnlyData } = useGetData();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState("Relevance");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);


  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (categoryOnlyData.length > 0) {
      let filterCategories = categoryOnlyData.filter((item) => item !== "All");
      setCategories([...filterCategories, "All"]);
    }
  }, [categoryOnlyData]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (value === "All") {
      setCategories(checked ? [...categoryOnlyData] : []);
      return;
    }
    setCategories(prevCategories => {

      let updatedCategories = checked
        ? [...prevCategories, value] // add category
        : prevCategories.filter(c => c !== value && c !== "All"); // remove category & All

      // If all individual categories are selected, include "All"
      const individualCategories = categoryOnlyData.filter(c => c !== "All");
      if (individualCategories.every(cat => updatedCategories.includes(cat))) {
        updatedCategories = [...categoryOnlyData]; // include All
      }

      return updatedCategories;
    });
  }


  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  }

  const filterData = data?.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = categories.includes("All") ? true : categories.includes(item.category);

    const matchesBrand = brand !== "All" ? item.brand === brand : true;

    const matchesPrice = item.price <= priceRange;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  })



  filterData?.sort((a, b) => {
    if (sortOption === "LowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "HighToLow") {
      return b.price - a.price;
    } else {
      return 0; // Relevance (no sorting, keep original order)
    }
  });

  const handleResetFilterBtn = () => {
    setSearch("");
    setCategories([...categoryOnlyData]);
    setBrand("All");
    setPriceRange(1000);
    setSortOption("Relevance");
  }
  const dynamicPage = Math.ceil(filterData?.length / 12);

  const pageHandler = (currentPage) => {
    if (currentPage >= 1 && currentPage <= dynamicPage) {
      setPage(currentPage);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  };


  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10 '>
        {
          data?.length > 0 ? (
            <>
              <div className='md:hidden '>

                <div onClick={() => setFilterOpen(!filterOpen)} className='mt-4 flex items-center gap-2 rounded-md border-2 border-gray-300 w-max px-6 py-1 text-gray-800 bg-white'>

                  <button className='text-lg font-semibold'>Filter</button> <span> {filterOpen ? (<IoIosCloseCircle />) : (<FaFilter />)}</span>

                </div>

                {
                  filterOpen && (
                    <div>
                      <FilterSection
                        props={{
                          search,
                          setSearch,
                          brand,
                          setBrand,
                          categories,
                          priceRange,
                          setPriceRange,
                          sortOption,
                          setSortOption,
                        }}
                        handleBrandChange={handleBrandChange}
                        handleCategoryChange={handleCategoryChange}
                        handleResetFilterBtn={handleResetFilterBtn}
                      />
                      <button onClick={()=> {
                        setFilterOpen(false),
                        window.scrollTo(0,0)
                      }} className='flex items-center gap-2 mt-4 rounded-md border py-2 px-4 bg-red-200 text-gray-800 font-bold'>Close Filter <span className='text-red-500 '><IoIosCloseCircle /></span></button>

                    </div>

                  )
                }

              </div>

              <div className='flex gap-8'>

                <div className='hidden md:block'>
                  <FilterSection
                    props={{
                      search,
                      setSearch,
                      brand,
                      setBrand,
                      categories,
                      priceRange,
                      setPriceRange,
                      sortOption,
                      setSortOption,
                    }}
                    handleBrandChange={handleBrandChange}
                    handleCategoryChange={handleCategoryChange}
                    handleResetFilterBtn={handleResetFilterBtn}
                  />
                </div>

                {
                  filterData?.length > 0 ? (
                    <div className='flex flex-col '>
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-8 justify-center mt-4  md:mt-10 '>
                        {
                          filterData?.slice(page * 12 - 12, page * 12).map((product, index) => {
                            return <ProductCard key={index} product={product} />
                          })
                        }
                      </div>
                      <Pagination pageHandler={pageHandler} page={page} setPage={setPage} dynamicPage={dynamicPage} />

                    </div>

                  ) : (
                    <div className='flex justify-center items-center md:h-[500px] md:w-[900px] mt-10'>
                      <Lottie animationData={ani} className="w-[400px] h-[400px]" loop={true} />
                    </div>
                  )
                }

              </div>

            </>
          ) : (

            <Loader className="h-[400px]" />

          )
        }
      </div>
    </div>
  )
}

export default Products