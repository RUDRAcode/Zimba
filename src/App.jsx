import Zimba from "./assets/ZIMBA-LOGO.png";
import mixedFruit from "./assets/thumb-mixed-fruit.png";
import bhujia_1 from "./assets/Bhujia_1.png";
import diet_chidwa from "./assets/diet_chidwa.png";
import Menu_cards from "./components/Menu_cards";
import "./App.css";
import VerticalCarousel from "./components/VerticalCompo";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { products } from "./utils/product";
import Namkeen from "./components/Product_types/Namkeen";
import Biscuit from "./components/Product_types/Biscuit";
import Cakes from "./components/Product_types/Cakes";
import Noodles from "./components/Product_types/Noodles";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);
  // const [productType, setProductType] = useState(null);
  const [active, setActive] = useState(1);
  const productTypes = [
    { id: 1, name: "Namkeen" },
    { id: 2, name: "Biscuits" },
    { id: 3, name: "Cakes" },
    { id: 4, name: "Noodles" },
  ];

  return (
    <>
      <main className="sm:bg-bluish xl:pt-4 bg-blue-200">
        <header className="w-full h-20 bg-amber-300 border-2 border-b-[6px] xl:px-3 max-w-[1342px] mx-auto xl:rounded-2xl">
          <div className="h-full">
            <div className="h-full flex justify-between">
              <div className="h-full min-w-36">
                <img src={Zimba} className="h-full" />
              </div>
              <div className="w-[25rem] hidden h-full max-w-[500px] sm:block px-3">
                <div className="w-full h-full flex justify-between items-center">
                  <a href="#home">
                    <span className="text-2xl font-serial hover:bg-white p-2 rounded-2xl cursor-pointer">
                      Home
                    </span>
                  </a>
                  <a href="#menu">
                    <span className="text-2xl font-serial hover:bg-white p-2 rounded-2xl cursor-pointer">
                      Menu
                    </span>
                  </a>
                  <a href="#Search">
                    <span className="text-2xl font-serial hover:bg-white p-2 rounded-2xl cursor-pointer">
                      Products
                    </span>
                  </a>
                </div>
              </div>
              <div className="h-full w-16 flex items-center justify-center relative sm:hidden">
                <span className="text-2xl" onClick={() => setOpen(!open)}>
                  <i class="fa-solid fa-bars"></i>
                </span>
                <AnimatePresence>
                  {open && (
                    <div className="w-[16rem] h-[12rem] right-2 absolute top-20  z-10">
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 50,
                        }}
                        exit={{
                          opacity: 0,
                          y: -100,
                        }}
                        className="w-full h-full bg-white border-2 border-b-4 border-r-4 rounded-2xl"
                      >
                        <ul className="w-full h-full flex flex-col justify-evenly p-2">
                          <a href="#home">
                            <li className="text-2xl px-4 font-Lexend border-b-2 pb-2 border-gray-400">
                              Home
                            </li>
                          </a>
                          <a href="#menu">
                            <li className="text-2xl px-4 font-Lexend border-b-2 pb-2 border-gray-400">
                              Menu
                            </li>
                          </a>
                          <a href="#Search">
                            <li className="text-2xl px-4 font-Lexend pb-2 border-gray-400">
                              Products
                            </li>
                          </a>
                        </ul>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>
        <div
          className="w-full min-h-[35svh] p-3 bg-blue-200 sm:bg-bluish max-w-[1342px] mx-auto"
          id="home"
        >
          <div className="w-full h-full md:flex md:justify-center">
            <div className="mr-1">
              <div className="w-full h-80 bg-pink-400 p-2 border-2 border-b-[6px] rounded-2xl mb-2 max-w-[700px]">
                <div className="w-full h-full flex">
                  <div className="w-2/3 h-full flex flex-col justify-around">
                    <span className="text-2xl text-balance font-Lexend leading-8 sm:text-2xl sm:leading-10 xl:text-3xl xl:leading-12">
                      Crunch spice and delight in every bite
                    </span>
                    <span className="w-36 h-12 flex justify-center text-sm bg-white items-center font-serif font-bold border-2 border-b-4 rounded-md sm:w-44 sm:text-lg">
                      Browse Products
                    </span>
                  </div>
                  {/* <div className="w-1/3 h-full relative overflow-hidden">
                  <img
                    src={Masala}
                    className="w-full h-full object-cover absolute top-[-2rem]"
                  />
                  <img
                    src={ChocoBall}
                    className="w-full h-full object-cover absolute bottom-[-2rem]"
                  />
                </div> */}
                  <VerticalCarousel />
                </div>
              </div>
              <div className="w-full min-h-[12rem] h-[10rem] flex justify-between mb-2">
                <div className="w-[48%] h-full bg-orange-300 border-2 hover:border-r-4 transition-all duration-300 border-b-[6px] rounded-xl">
                  <img
                    src={mixedFruit}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[48%] h-full p-2 bg-blue-300 flex flex-col justify-between border-2 hover:border-r-4 transition-all duration-300 border-b-[6px] rounded-xl">
                  <div className="w-full flex flex-col">
                    <span className="text-2xl font-Lexend">100+</span>
                    <span className="text-md font-Lexend text-balance sm:text-xl">
                      Products & Delights
                    </span>
                  </div>
                  <button className="w-full h-12 max-w-[400px] flex justify-center items-center font-serif bg-white font-bold border-2 border-b-4 rounded-lg sm:text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-96 relative bg-green-400 border-2 border-b-[6px] rounded-2xl md:h-[32.5rem] max-w-[750px]">
              <div className="w-full h-full flex flex-col justify-around items-center p-2">
                <div className="w-full max-w-[380px] h-[16rem] sm:h-[17rem] relative overflow-hidden">
                  <img
                    src={bhujia_1}
                    className="absolute w-full h-full object-cover left-11 top-[-1rem]"
                  />
                  <img
                    src={diet_chidwa}
                    className="absolute w-full h-full object-cover right-8 top-[-1rem]"
                  />
                </div>
                <div className="w-full h-24 max-w-[582px] flex items-center">
                  <span className="font-Lexend text-base  text-center sm:text-xl xl:text-2xl">
                    Zimba Bhujia is crispy, spicy, flavorful, crunchy, and
                    irresistibly tasty!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full min-h-[50svh] p-3 bg-blue-200 sm:bg-bluish max-w-[1342px] mx-auto"
          id="menu"
        >
          <div className="mt-4 mb-6">
            <span className="font-Lexend text-3xl">Our Menu</span>
          </div>
          <div className="mt-16 flex flex-wrap justify-center">
            <Menu_cards products={products[0]} delay={0.8} />
            <Menu_cards products={products[1]} delay={1} />
            <Menu_cards products={products[2]} delay={1.5} />
            <Menu_cards products={products[3]} delay={1.7} />
          </div>
        </div>
        <div className="bg-yellow-400 border-t-4 border-b-4" id="Search">
          <div className="w-full min-h-[70svh] p-3  max-w-[1342px] mx-auto relative">
            <div className="w-full h-full">
              <div className="w-full h-[6rem] flex justify-center">
                {/* Search Bar */}
                {/* <div className="w-[80%] h-16 max-w-[100rem] bg-white rounded-2xl flex items-center justify-center">
                  <label htmlFor="search">
                    <span className="text-xl text-gray-400 p-3">
                      <i class="fa-solid fa-magnifying-glass"></i>{" "}
                    </span>
                  </label>
                  <form className="flex-1 flex items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      id="search"
                      className="focus:outline-none"
                    />
                  </form>
                </div> */}
                {/* <div className="flex-1 p-0.5">
                  <div className="w-full h-2/3  bg-white flex items-center justify-center rounded-2xl md:hidden">
                    <span className="text-2xl" onClick={() => setOpen(!open)}>
                      <i class="fa-solid fa-filter"></i>
                    </span>
                  </div>
                  <div className="w-full h-2/3 bg-white items-center justify-center rounded-2xl hidden md:flex relative">
                    <span className="text-2xl pr-2">
                      <i class="fa-solid fa-arrow-down-short-wide"></i>
                    </span>
                    <span
                      className="text-xl font-Lexend"
                      onClick={() => setOpen(!open)}
                    >
                      Filter
                    </span>
                  </div>
                </div> */}
                {/* <AnimatePresence>
                  {open && (
                    <div className="w-[16rem] h-[15rem] right-2 absolute top-20  ">
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 50,
                        }}
                        exit={{
                          opacity: 0,
                          y: -100,
                        }}
                        className="w-full h-full bg-white border-2 border-b-4 border-r-4 rounded-2xl"
                      >
                        <ul className="w-full h-full space-y-5 p-2">
                          <li
                            className="text-2xl px-4 font-Lexend border-b-2 pb-2 border-gray-400"
                            onClick={() => setProductType("Namkeen")}
                          >
                            Namkeen
                          </li>
                          <li
                            className="text-2xl px-4 font-Lexend border-b-2 pb-2 border-gray-400"
                            onClick={() => setProductType("Biscuits")}
                          >
                            Biscuits
                          </li>
                          <li
                            className="text-2xl px-4 font-Lexend border-b-2 pb-2 border-gray-400"
                            onClick={() => setProductType("Cakes")}
                          >
                            Cakes
                          </li>
                          <li
                            className="text-2xl px-4 font-Lexend "
                            onClick={() => setProductType("Noodles")}
                          >
                            Noodles
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence> */}
                <div className="w-full h-2/3 max-w-[25rem] flex justify-around items-center">
                  {productTypes.map((prod, index) => {
                    return (
                      <>
                        <div
                          className={`rounded-full text-lg p-1 sm:text-lg sm:p-2 relative cursor-pointer`}
                          onClick={() => setActive(index + 1)}
                        >
                          {active == index + 1 && (
                            <motion.div
                              layoutId="moving-bg"
                              className="absolute inset-0 rounded-full bg-white border-2 p-1"
                            />
                          )}
                          <span className="relative z-1 text-base sm:text-lg font-serial font-semibold hover:opacity-50">
                            {prod.name}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="w-full  min-h-[50vh]">
                <div className="w-full h-full flex justify-center flex-wrap max-w-[1500px]">
                  {Array.from({ length: 1 }).map((_, index) => {
                    return (
                      <>
                        <AnimatePresence>
                          {active == 1 && <Namkeen />}
                        </AnimatePresence>
                        <AnimatePresence>
                          {active == 2 && <Biscuit />}
                        </AnimatePresence>
                        <AnimatePresence>
                          {active == 3 && <Cakes />}
                        </AnimatePresence>
                        <AnimatePresence>
                          {active == 4 && <Noodles />}
                        </AnimatePresence>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
